<template>
<v-card class="repo-item">
  <img
    class="repo-item__media"
    :src="'https://raw.githubusercontent.com/jsulpis/' + repo.name + '/' + repo.default_branch + '/screenshot.jpg'"/>

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
    <v-icon small>star</v-icon>&nbsp; {{repo.stargazers_count}}
    <v-spacer/>
    <v-icon small>fas fa-code-branch</v-icon>&nbsp; {{repo.forks_count}}
    <v-spacer/>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  props: ["repoProp"],
  data() {
    return {
      repo: { name: "" }
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
  }
};
</script>

<style>
.repo-item {
  margin: 1rem;
  text-align: left;
  display: none;
}
.repo-item__card-title {
  padding-bottom: 0;
}
.repo-item__media {
  max-width: 100%;
}
.repo-item__description {
  font-weight: normal;
  margin-bottom: 0;
}
</style>
