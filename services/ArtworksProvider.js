import axios from "axios";
import { API_ROOT_URL } from "~/assets/js/globals";

export default {
  provideArtwork(artworkName) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_ROOT_URL + "/artworks/" + artworkName)
        .then(response => resolve(response.data))
        .catch(() => reject());
    });
  },

  provideArtworks() {
    return new Promise((resolve, reject) => {
      axios
        .get(API_ROOT_URL + "/artworks")
        .then(response => resolve(response.data))
        .catch(() => reject());
    });
  }
};
