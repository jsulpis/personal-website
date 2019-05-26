<template>
  <v-container class="projects container--card">
    <v-layout wrap>
      <v-flex class="projects__item" xs12 sm6 md4 v-for="(repo, i) in projects" :key="i">
        <repo-item :repo="repo"/>
      </v-flex>

      <v-flex v-show="noProjectInStore" xs12 class="projects__progress">
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
      projects: []
    };
  },
  computed: {
    noProjectInStore() {
      return this.$store.state.projects.length === 0;
    }
  },
  mounted() {
    if (this.noProjectInStore) {
      GithubService.getRepositories().then(response => {
        this.$store.commit("setProjects", response);
        this.setAndDisplayProjects();
      });
    } else {
      this.setAndDisplayProjects();
    }
  },
  methods: {
    setAndDisplayProjects() {
      this.projects = this.$store.state.projects;
      setTimeout(() => sr.reveal(".projects__item", { scale: 1 }, 50), 10);
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
  visibility: hidden;
}

.projects__progress {
  margin-top: 2.5rem;
}
</style>
