import axios from "axios";

export default {
  getRepositories() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/users/jsulpis/repos")
        .then(response => resolve(response.data.filter(repo => !repo.archived)))
    });
  },

  getRepositoryUrl(repoName) {
    return "https://github.com/jsulpis/" + repoName;
  },

  getDefaultBranch(repoName) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/repos/jsulpis/" + repoName)
        .then(response => resolve(response.data.default_branch));
    });
  },

  getRepositoryData(repoName) {
    return new Promise((resolve, reject) => {
      this.getDefaultBranch(repoName).then(defaultBranch =>
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
};
