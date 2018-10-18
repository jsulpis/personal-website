import axios from "axios";
import { S3_PORTFOLIO_URL, API_ROOT_URL } from "~/assets/js/globals";

export default {
  providePictureUrl(pictureName) {
    return this.providePicture(pictureName, "/");
  },

  provideMiniatureUrl(pictureName) {
    return this.providePicture(pictureName, "/min/");
  },

  providePicture(pictureName, separator) {
    return S3_PORTFOLIO_URL + separator + pictureName + ".jpg";
  },

  provideArtwork(artworkName) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_ROOT_URL + "/artworks/" + artworkName)
        .then(response => resolve(response.data.Item))
        .catch(() => reject());
    });
  },

  provideArtworks() {
    return new Promise((resolve, reject) => {
      axios
        .get(API_ROOT_URL + "/artworks")
        .then(response => resolve(response.data.Items))
        .catch(() => reject());
    });
  }
};
