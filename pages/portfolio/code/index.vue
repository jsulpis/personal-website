<template>
  <v-container>
    <p>Ce contenu est extrait de mon profil <a :href="socialNetworks.GitHub.url">GitHub</a>, c'est pourquoi il est principalement en anglais !</p>
    <v-layout wrap>
      <v-flex xs12 sm6 md4 lg3 xl2
        v-for="(repo, i) in repos"
        :key="i">
        <repo-item
          :repoProp="repo"/>
      </v-flex>

      <v-progress-circular
      indeterminate
      size="70"
      color="primary"
      id="gallery-progress"
      class="hide-on-render"/>
    </v-layout>
  </v-container>
</template>

<script>
import VProgressCircular from "vuetify/es5/components/VProgressCircular";

import RepoItem from "~/components/portfolio/RepoItem";
import { SOCIAL_NETWORKS } from "~/assets/data/socialNetworks";
import GitHubDataProvider from "~/services/GitHubDataProvider";

export default {
  components: {
    RepoItem,
    VProgressCircular
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
      this.showItemsWithDelay();
    });
  },
  methods: {
    showItemsWithDelay(delay) {
      // Fade in each gallery item one after another
      setTimeout(() => {
        $("#gallery-progress").hide();
        $(".repo-item").each(function(index) {
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
#gallery-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
