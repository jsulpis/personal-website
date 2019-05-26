// Inspired by a module by Ian Ebstein (from issue https://github.com/nuxt/nuxt.js/issues/1949)

const axios = require("axios");
const fs = require("fs-extra");

const isProd = process.env.CONTEXT === "production";
const API_URL = isProd ? process.env.PROD_API_URL : process.env.DEV_API_URL;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + process.env.BUILD_TOKEN;

const ENDPOINTS = require("./scrapeEndpoints.json");
const DATA_FOLDER = "src/static/data/remote/";

module.exports = async function scraper() {
  clearDataFolder();

  let promiseList = scrapeEndpointsAndWriteData();

  // Finish when all of them are done
  return Promise.all(promiseList)
    .then(() => {
      console.log(
        "Data successfully fetched and written in the static/data folder."
      );
    })
    .catch(err => {
      console.error(err);
    });
};

const clearDataFolder = () => fs.emptyDir(DATA_FOLDER);

function scrapeEndpointsAndWriteData() {
  return ENDPOINTS.map(async endpoint => {
    const path = `/${endpoint}.json`;
    writeData(path, await axios.get(endpoint).then(res => res.data));
  });
}

function writeData(relativePath, data) {
  const path = DATA_FOLDER + relativePath;
  new Promise((resolve, reject) => {
    try {
      fs.ensureFileSync(path);
      fs.writeJson(path, data, resolve(`${path} Write Successful`));
    } catch (e) {
      console.error(`${path} Write Failed. ${e}`);
      reject(`${path} Write Failed. ${e}`);
    }
  });
}
