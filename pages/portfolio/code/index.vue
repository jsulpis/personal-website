<template>
<div>
  <v-container class="portfolio-code container--card hide-on-render">
    <j-breadcrumbs/>
    <p class="portfolio-code__intro">Ce contenu est extrait de mon profil <a :href="socialNetworks.GitHub.url">GitHub</a>, c'est pourquoi il est principalement en anglais !</p>
    <v-layout wrap>
      <v-flex xs12 sm6 md4
        v-for="(repo, i) in repos"
        :key="i">
        <repo-item class="portfolio-code__item" :repoProp="repo"/>
      </v-flex>

      <v-flex xs12 class="portfolio-code__progress">
        <v-progress-circular
        indeterminate
        size="70"
        color="primary"/>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import VProgressCircular from "vuetify/es5/components/VProgressCircular";

import RepoItem from "~/components/portfolio/RepoItem";

import JBreadcrumbs from "~/components/global/JBreadcrumbs.vue";

import { SOCIAL_NETWORKS } from "~/assets/data/socialNetworks";
import GitHubDataProvider from "~/services/GitHubDataProvider";

export default {
  components: {
    RepoItem,
    VProgressCircular,
    JBreadcrumbs
  },
  data() {
    return {
      repos: [],
      socialNetworks: SOCIAL_NETWORKS
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");
    GitHubDataProvider.provideRepositories().then(response => {
      this.repos = response;
      this.showItemsWithDelay(10);
    });
  },
  methods: {
    showItemsWithDelay(delay) {
      // Fade in each gallery item one after another
      setTimeout(() => {
        // For some reason, the class 'show' disappear when updating the repos property so I put it back here
        $(".hide-on-render").addClass("show");
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

.portfolio-code__intro {
  text-align: left;
}
.portfolio-code__item {
  display: none;
}
.portfolio-code__progress {
  margin-top: 2.5rem;
}
</style>
