import axios from "axios";

export default {
  provideRepositories() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/users/jsulpis/repos")
        .then(response => resolve(response.data.filter(repo => !repo.archived)))
        .catch(() => reject());
    });
  },

  provideRepositoryUrl(repoName) {
    return "https://github.com/jsulpis/" + repoName;
  },

  provideDefaultBranch(repoName) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/repos/jsulpis/" + repoName)
        .then(response => resolve(response.data.default_branch));
    });
  },

  provideRepositoryData(repoName) {
    return new Promise((resolve, reject) => {
      this.provideDefaultBranch(repoName).then(defaultBranch =>
        axios
          .get(
            "https://raw.githubusercontent.com/jsulpis/" +
              repoName +
              "/" +
              defaultBranch +
              "/README.md"
          )
          .then(response => {
            if (response.data != "") {
              resolve(response.data);
            } else {
              resolve("No README available.");
            }
          })
          .catch(() => resolve("No README available."))
      );
    });
  },

  checkRepoPictureUrl(pictureUrl) {
    const defaultPictureUrl = "/img/github-octocat.png";
    return new Promise((resolve, reject) => {
      axios
        .get(pictureUrl)
        .then(() => resolve(pictureUrl))
        .catch(() => resolve(defaultPictureUrl));
    });
  }
};
