import axios from "axios";

const artworksEndpoint = process.env.API_URL + "/artworks/";

export default {
  provideArtwork(artworkName) {
    return new Promise((resolve, reject) => {
      axios
        .get(artworksEndpoint + artworkName)
        .then(response => resolve(response.data))
        .catch(() => reject());
    });
  },

  provideArtworks() {
    return new Promise((resolve, reject) => {
      axios
        .get(artworksEndpoint)
        .then(response => resolve(response.data))
        .catch(() => reject());
    });
  }
};
