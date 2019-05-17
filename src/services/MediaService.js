import axios from "axios";

export default {
  getPictureUrl(pictureName) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${process.env.API_URL}/medias/${pictureName}`)
        .then(response => resolve(response.data))
    });
  }
};
