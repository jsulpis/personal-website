<template>
<v-card class="repo-item">
  <div class="repo-item__media">
    <img :src="repoPictureUrl"/>
  </div>

  <v-card-title class="repo-item__card-title">
    <div>
      <h3 class="repo-item__title headline mb-0">{{repo.name | beautify}}</h3>
      <p class="repo-item__description body-2">{{repo.description}}</p>
    </div>
  </v-card-title>

  <v-card-actions>
    <v-btn flat color="primary" :to="'/portfolio/code/' + repo.name">Details</v-btn>
    <v-spacer/>
    <p class="body-1">{{repo.language}}</p>
    <v-spacer/>
    <v-icon small class="repo-item__icon">star</v-icon>{{repo.stargazers_count}}
    <v-spacer/>
    <v-icon small class="repo-item__icon">fas fa-code-branch</v-icon>{{repo.forks_count}}
    <v-spacer/>
  </v-card-actions>
</v-card>
</template>

<script>
import GitHubDataProvider from "~/services/GitHubDataProvider";

export default {
  props: ["repoProp"],
  data() {
    return {
      repo: { name: "" },
      repoPictureUrl: ""
    };
  },
  filters: {
    beautify(text) {
      return text != ""
        ? text
            .split("-")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ")
        : "";
    }
  },
  mounted() {
    this.repo = this.repoProp;
    const repoPictureUrl =
      "https://raw.githubusercontent.com/jsulpis/" +
      this.repo.name +
      "/" +
      this.repo.default_branch +
      "/preview.png";
    GitHubDataProvider.checkRepoPictureUrl(repoPictureUrl).then(
      verifiedPictureUrl => (this.repoPictureUrl = verifiedPictureUrl)
    );
  }
};
</script>

<style lang="scss">
.repo-item {
  margin: 1rem;
  text-align: left;
  display: none;
}
.repo-item__card-title {
  padding: 0 1rem;
}
.repo-item__media {
  max-width: 100%;
  text-align: center;

  img {
    max-height: 140px;
    max-width: 100%;
  }
}
.repo-item__description {
  font-weight: normal;
  margin-bottom: 0;
}
.repo-item__icon {
  margin-right: 3px;
}
</style>
