<template>
  <div>
    <v-container class="container--card">
      <j-breadcrumbs/>
      <v-btn :href="repoUrl" color="primary" round class="repo-btn">See on GitHub</v-btn>
      <div class="repo-iframe-container">
        <iframe
          :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + this.$route.params.repo + '&type=star&count=true&size=large'"
          frameborder="0"
          scrolling="0"
          width="140px"
          height="30px"
        ></iframe>
        <iframe
          :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + this.$route.params.repo + '&type=fork&count=true&size=large'"
          frameborder="0"
          scrolling="0"
          width="140px"
          height="30px"
        ></iframe>
      </div>
      <div class="repo-readme" v-html="content"/>
    </v-container>
  </div>
</template>

<script>
import marked from "marked";

import JBreadcrumbs from "~/components/shared/JBreadcrumbs.vue";

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
.repo-btn {
  height: 30px;
  margin: 1rem;
}
.repo-readme {
  text-align: left;
  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  strong {
    font-weight: 500;
  }

  h1 {
    margin-top: 1rem;
    border-bottom: 1px solid #ddd;
    + h3 {
      margin-top: 0;
    }
  }

  h2 {
    margin-top: 1.75rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.75rem;

    + h3 {
      margin-top: 0;
    }
  }
  h3 {
    margin-top: 1rem;
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

code {
  height: 24px;
  line-height: 24px;
  padding: 0 5px;
  background-color: rgba(128, 128, 128, 0.1);
  box-shadow: none;
  color: inherit;
}
</style>
