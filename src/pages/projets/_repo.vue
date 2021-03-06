<template>
  <v-container class="container--card">
    <j-breadcrumbs/>
    <v-btn :href="repoUrl" color="primary" round class="repo-btn">See on GitHub</v-btn>
    <div class="repo-iframe-container">
      <iframe
        :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + repoName + '&type=star&count=true&size=large'"
        frameborder="0"
        scrolling="0"
        width="140px"
        height="30px"
      ></iframe>
      <iframe
        :src="'https://ghbtns.com/github-btn.html?user=jsulpis&repo=' + repoName + '&type=fork&count=true&size=large'"
        frameborder="0"
        scrolling="0"
        width="140px"
        height="30px"
      ></iframe>
    </div>
    <div class="repo-readme" v-html="repoReadme"/>

    <disqus-plugin class="disqus" :url="pageUrl" :identifier="repoName" :title="repoName"/>
  </v-container>
</template>

<script>
const md = require("markdown-it")({ html: true });
import JBreadcrumbs from "~/components/projets/JBreadcrumbs.vue";
import DisqusPlugin from "~/components/projets/DisqusPlugin.vue";
import GithubService from "~/services/GithubService";
import { formatWords } from "~/utils/string";
import { makePageMetadata } from "~/utils/page";

export default {
  components: { JBreadcrumbs, DisqusPlugin },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      repoName: this.$route.params.repo,
      title: formatWords(this.$route.params.repo),
      pageUrl: `${process.env.BASE_URL}${this.$route.fullPath}`,
      description: "README d'un de mes projets GitHub."
    };
  },
  asyncData({ params }) {
    return GithubService.getRepositoryData(params.repo).then(data => {
      return {
        repoReadme: md.render(data),
        repoUrl: GithubService.getRepositoryUrl(params.repo)
      };
    });
  }
};
</script>

<style lang="scss">
.repo-btn {
  height: 30px;
  margin: 1rem auto;
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
  padding: 5px 10px;
  background-color: rgba(128, 128, 128, 0.1);
  box-shadow: none;
  color: inherit;

  &::before,
  &::after {
    content: "";
  }
}

.disqus {
  margin-top: 4rem;
}
</style>
