<template>
  <v-footer dark id="footer" height="auto">
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
import SocialNetworks from "./SocialNetworks";
import ScrollTop from "./ScrollTop";
import SOCIAL_NETWORKS from "~/static/data/socialNetworks.json";


export default {
  components: {
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

#footer {
  box-shadow: 0px -3px 1px -2px rgba(0, 0, 0, 0.2),
    0px -2px 2px 0px rgba(0, 0, 0, 0.14), 0px -1px 5px 0px rgba(0, 0, 0, 0.12) !important;
}

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
