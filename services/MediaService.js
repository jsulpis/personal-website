import axios from "axios";
import { API_ROOT_URL } from "~/assets/js/globals";

export default {
  getPictureUrl(pictureName) {
    return new Promise((resolve, reject) => {
      axios
        .get(API_ROOT_URL + "/medias/" + pictureName)
        .then(response => resolve(response.data))
        .catch(() => reject());
    });
  },
};
