<template>
  <v-footer dark id="footer" height="auto" class="elevation-8">
    <v-card flat tile class="footer-card text-xs-center">
      <!-- Scroll Top -->
      <scroll-top id="footer-scrolltop"/>

      <!-- Networks icons -->
      <v-card-text class="pa-1">
        <social-networks/>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Footer note -->
      <v-card-text class="pa-3">
        <p>&copy; {{ new Date().getFullYear() }} - code &amp; design par Julien Sulpis</p>
        <p>
          Site hébergé sur
          <a :href="gitHubUrl + '/personal-website'">GitHub</a>
        </p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import VFooter from "vuetify/es5/components/VFooter";
import SocialNetworks from "./SocialNetworks";
import ScrollTop from "./ScrollTop";

import { SOCIAL_NETWORKS } from "~/assets/data/socialNetworks";

export default {
  components: {
    VFooter,
    SocialNetworks,
    ScrollTop
  },
  data() {
    return { gitHubUrl: SOCIAL_NETWORKS.GitHub.url };
  }
};
</script>

<style lang="scss">
$footer-padding-top: 0.75rem;

.footer-card {
  width: 100%;
  padding-top: $footer-padding-top;

  .v-card__text p {
    margin: 0;

    &:nth-child(2) {
      font-size: 0.9em;
    }
  }
}

#footer-scrolltop {
  position: absolute;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(calc(-50% - #{$footer-padding-top}));
}
</style>
