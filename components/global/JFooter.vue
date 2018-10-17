<template>
  <v-footer id="footer" height="auto" class="elevation-8">
    <v-card flat tile class="footer-card text-xs-center pt-4">
      <!-- Scroll Top -->
      <scroll-top id="footer-scrolltop"/>

      <!-- Media icons -->
      <v-card-text class="pa-1">
        <social-media/>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Footer note -->
      <v-card-text class="pa-3">
        &copy; 2018 - code & design par Julien Sulpis <br>
        Site hébergé sur <a href="https://github.com/jsulpis/personal-website">GitHub</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import VFooter from "vuetify/es5/components/VFooter";
import SocialMedia from "./SocialMedia";
import ScrollTop from "./ScrollTop";

export default {
  components: {
    VFooter,
    SocialMedia,
    ScrollTop
  }
};
</script>

<style lang="scss">
.footer-card {
  width: 100%;
  padding: 1rem 0 0 0;
}

#footer-scrolltop {
  position: absolute;
  margin: 0;
  left: 50%;
  top: -28px;
  transform: translateX(-50%);
}
</style>
