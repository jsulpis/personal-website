<template>
  <v-container class="projects container--card">
    <v-layout wrap>
      <v-flex xs12 sm6 md4 v-for="(repo, i) in repos" :key="i">
        <repo-item class="projects__item" :repo="repo"/>
      </v-flex>

      <v-flex xs12 class="projects__progress">
        <v-progress-circular indeterminate size="70" color="primary"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RepoItem from "~/components/projets/RepoItem";
import GithubService from "~/services/GithubService";
import { makePageMetadata, makePageTitle } from "~/utils/page";

export default {
  components: {
    RepoItem
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: makePageTitle("Projets"),
      pageUrl: process.env.URL + this.$route.fullPath,
      description: "Mes projets informatiques open-source.",
      repos: []
    };
  },
  mounted() {
    GithubService.getRepositories().then(response => {
      this.repos = response;
      this.showItemsWithDelay(10);
    });
  },
  methods: {
    showItemsWithDelay(delay) {
      // Fade in each gallery item one after another
      setTimeout(() => {
        $(".projects__progress").hide();
        $(".projects__item").each(function(index) {
          $(this)
            .delay(40 * index)
            .fadeIn();
        });
      }, delay);
    }
  }
};
</script>

<style lang="scss">
.container--card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  border-radius: 0 0 8px 8px;
  padding: 1.5rem;

  @media only screen and (min-width: 600px) {
    padding: 3rem;
    padding-top: 1rem;
  }

  @media only screen and (min-width: 1904px) {
    max-width: 1185px !important;
  }
}

.projects {
  min-height: 350px;
}

.projects__item {
  display: none;
}

.projects__progress {
  margin-top: 2.5rem;
}
</style>
