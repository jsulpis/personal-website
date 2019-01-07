<template>
  <v-container class="portfolio-code container--card hide-on-render">
    <j-breadcrumbs/>
    <v-layout wrap>
      <v-flex xs12 sm6 md4 v-for="(repo, i) in repos" :key="i">
        <repo-item class="portfolio-code__item" :repoProp="repo"/>
      </v-flex>

      <v-flex xs12 class="portfolio-code__progress">
        <v-progress-circular indeterminate size="70" color="primary"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VProgressCircular from "vuetify/es5/components/VProgressCircular";

import RepoItem from "~/components/portfolio/RepoItem";
import JBreadcrumbs from "~/components/shared/JBreadcrumbs.vue";

import GitHubDataProvider from "~/services/GitHubDataProvider";

export const CODE_HEADER = {
  title: "Code",
  description:
    "Mes projets informatiques open-source.<br> Ce contenu est extrait de mon profil GitHub, c'est pourquoi il est en anglais !"
};

export default {
  components: {
    RepoItem,
    VProgressCircular,
    JBreadcrumbs
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content: process.env.URL + this.$route.fullPath
        },
        {
          name: "description",
          property: "og:description",
          content: this.description
        }
      ]
    };
  },
  data() {
    return {
      title: "Portfolio - " + CODE_HEADER.title,
      description: "Mes projets informatiques open-source.",
      repos: []
    };
  },
  beforeMount() {
    this.$store.commit("setHeaderContent", CODE_HEADER);
  },
  mounted() {
    GitHubDataProvider.provideRepositories().then(response => {
      this.repos = response;
      this.showItemsWithDelay(10);
    });
  },
  updated() {
    $(".hide-on-render").addClass("show");
  },
  methods: {
    showItemsWithDelay(delay) {
      // Fade in each gallery item one after another
      setTimeout(() => {
        $(".portfolio-code__progress").hide();
        $(".portfolio-code__item").each(function(index) {
          $(this)
            .delay(40 * index)
            .fadeIn();
        });
      }, delay);
    }
  }
};
</script>

<style>
.portfolio-code {
  min-height: 350px;
}

.portfolio-code__item {
  display: none;
}

.portfolio-code__progress {
  margin-top: 2.5rem;
}
</style>
