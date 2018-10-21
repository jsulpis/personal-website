<template>
<div>
  <back-btn to="/portfolio/code"/>
  <v-container class="repo-container">
    <div class="repo-top-bar">
      <v-btn :href="repoUrl" color="primary" round class="repo-btn ma-0">See on GitHub</v-btn>
      <div class="repo-iframe-container">
        <iframe :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + this.repoName + '&type=star&count=true&size=large'"
          frameborder="0" scrolling="0" width="140px" height="30px"></iframe>
        <iframe :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + this.repoName + '&type=fork&count=true&size=large'"
          frameborder="0" scrolling="0" width="140px" height="30px"></iframe>
      </div>
    </div>
    <div class="repo-readme" v-html="content"/>
  </v-container>
</div>
</template>

<script>
import marked from "marked";
import BackBtn from "~/components/portfolio/BackBtn.vue";
import GitHubDataProvider from "~/services/GitHubDataProvider";

export default {
  components: { BackBtn },
  data() {
    return {
      content: "",
      repoName: "",
      repoUrl: ""
    };
  },
  mounted() {
    this.repoName = this.$route.params.repo;
    this.repoUrl = GitHubDataProvider.provideRepositoryUrl(this.repoName);
    GitHubDataProvider.provideRepositoryData(this.repoName).then(
      data => (this.content = marked(data))
    );
  }
};
</script>

<style lang="scss">
/* Override Vuetify container width */
@media only screen and (min-width: 1904px) {
  .repo-container {
    max-width: 1185px !important;
  }
}

.repo-readme {
  text-align: left;
  img {
    max-width: 100%;
  }
}

.repo-top-bar {
  text-align: left;
  margin-bottom: 1.5rem;
}

.repo-btn {
  height: 30px;
}

.repo-iframe-container {
  display: inline-block;
  position: absolute;
  margin-left: 1.5rem;
}

code {
  height: 32px;
  line-height: 32px;
  padding: 0 5px;
  background-color: rgba(128, 128, 128, 0.2);
  box-shadow: none;
  color: inherit;
}
</style>
