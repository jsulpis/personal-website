<template>
  <!-- FOOTER -->
  <v-footer height="auto" color="primary">
    <v-layout justify-center column py-3>
      <v-flex white--text xs12 class="footer-message">
        &copy; 2018 - Site développé par Julien Sulpis
      </v-flex>
      <v-flex white--text xs12 class="footer-caption">
        Hébergé sur
        <a href="https://github.com/jsulpis/personal-website">GitHub</a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import * as VFooter from "vuetify/es5/components/VFooter";

export default {
  components: {
    ...VFooter
  }
};
</script>
