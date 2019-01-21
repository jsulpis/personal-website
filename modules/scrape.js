// Inspired by a module by Ian Ebstein (from issue https://github.com/nuxt/nuxt.js/issues/1949)

const axios = require("axios");
const fs = require("fs-extra");

const API_URL = process.env.API_URL;
const ENDPOINTS = require("./dataEndpoints.json");
const DATA_FOLDER = "static/data/";

module.exports = async function scraper() {
  clearDataFolder();

  let promiseList = scrapeEndpointsAndWriteData();

  let artworks = await axios.get(`${API_URL}/artworks`).then(res => {
    const artworks = res.data;
    writeData("artworks.json", artworks);
    return artworks;
  });

  artworks.forEach(artwork =>
    this.options.generate.routes.push(
      `/portfolio/infographie/${artwork.urlTitle}`
    )
  );

  promiseList = promiseList.concat(scrapeArtworksAndWriteData(artworks));

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
    writeData(
      endpoint.path,
      await axios.get(API_URL + endpoint.url).then(res => res.data)
    );
  });
}

function scrapeArtworksAndWriteData(artworks) {
  return artworks.map(async artwork => {
    const artworkName = artwork.urlTitle;
    writeData(
      `artworks/${artworkName}.json`,
      await axios
        .get(`${API_URL}/artworks/${artworkName}`)
        .then(res => res.data)
    );
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
