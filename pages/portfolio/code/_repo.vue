<template>
<div>
  <v-container class="repo-container">
    <j-breadcrumbs/>
      <v-btn :href="repoUrl" color="primary" round class="repo-btn">See on GitHub</v-btn>
      <div class="repo-iframe-container">
        <iframe :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + this.$route.params.repo + '&type=star&count=true&size=large'"
          frameborder="0" scrolling="0" width="140px" height="30px"></iframe>
        <iframe :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + this.$route.params.repo + '&type=fork&count=true&size=large'"
          frameborder="0" scrolling="0" width="140px" height="30px"></iframe>
      </div>
    <div class="repo-readme" v-html="content"/>
  </v-container>
</div>
</template>

<script>
import marked from "marked";

import JBreadcrumbs from "~/components/global/JBreadcrumbs.vue";

import GitHubDataProvider from "~/services/GitHubDataProvider";

export default {
  components: { JBreadcrumbs },
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

  h2 {
    margin-top: 1.5rem;
  }
  h3 {
    margin-top: 1rem;
  }
  h2 + h3 {
    margin-top: 0;
  }
  p {
    margin-bottom: 0;
    margin-top: 0.75rem;
  }
  h3 + p,
  h2 + p {
    margin-top: 0;
  }
}

.repo-btn {
  height: 30px;
  margin: 1rem;
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
