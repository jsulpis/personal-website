<template>
  <v-footer id="footer" height="auto" class="elevation-8">
    <v-card flat tile class="text-xs-center pa-1">
      <!-- Media icons -->
      <v-card-text class="pa-0">
        <social-media/>
      </v-card-text>

      <v-divider></v-divider>

      <!-- Footer note -->
      <v-card-text>
        &copy; 2018 - code & design par Julien Sulpis <br>
        Site hébergé sur <a href="https://github.com/jsulpis/personal-website">GitHub</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import VFooter from "vuetify/es5/components/VFooter";
import SocialMedia from "./SocialMedia";

export default {
  components: {
    VFooter,
    SocialMedia
  }
};
</script>

<style>
footer .v-card {
  width: 100%;
}
</style>
