import axios from "axios";

const artworksEndpoint = process.env.API_URL + "/artworks/";

export default {
  getArtwork(artworkName) {
    return new Promise((resolve, reject) => {
      axios
        .get(artworksEndpoint + artworkName)
        .then(response => resolve(response.data))
    });
  },

  getArtworks() {
    return new Promise((resolve, reject) => {
      axios
        .get(artworksEndpoint)
        .then(response => resolve(response.data))
    });
  }
};
