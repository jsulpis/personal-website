import axios from "axios";

export default {
  getResumeDocument() {
    return new Promise((resolve, reject) => {
      axios
        .get(process.env.API_URL + "/resume")
        .then(response => resolve(response.data))
    });
  },
};
