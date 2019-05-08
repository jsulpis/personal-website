// Inspired by a module by Ian Ebstein (from issue https://github.com/nuxt/nuxt.js/issues/1949)

const axios = require("axios");
const fs = require("fs-extra");

const isProd = process.env.CONTEXT === "production";
const API_URL = isProd ? process.env.PROD_API_URL : process.env.DEV_API_URL;
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] = "Bearer " + process.env.BUILD_TOKEN;

const ENDPOINTS = require("./scrapeEndpoints.json");
const DATA_FOLDER = "static/data/remote/";

module.exports = async function scraper() {
  clearDataFolder();

  let promiseList = scrapeEndpointsAndWriteData();

  let artworks = await axios.get("/artworks").then(res => {
    const artworks = removeDynamicDataFromArtworks(res.data);
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
      await axios.get(endpoint.url).then(res => res.data)
    );
  });
}

function removeDynamicDataFromArtworks(artworks) {
  return artworks.map(removeDynamicDataFromArtwork);
}

function removeDynamicDataFromArtwork(artwork) {
  delete artwork.likes;
  return artwork;
}

function scrapeArtworksAndWriteData(artworks) {
  return artworks.map(async artwork => {
    const artworkName = artwork.urlTitle;
    writeData(
      `artworks/${artworkName}.json`,
      await axios
        .get(`/artworks/${artworkName}`)
        .then(res => removeDynamicDataFromArtwork(res.data))
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
