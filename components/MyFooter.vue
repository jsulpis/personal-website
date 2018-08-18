<template>
  <v-footer id="footer" absolute height="auto" class="elevation-8" light>
    <v-card flat tile class="text-xs-center pa-1">
      <v-card-text class="pa-0">
        <v-btn 
        v-for="(icon, i) in icons" 
        :key="i" 
        class="mx-3" 
        icon
        :href="icon.link">
          <v-icon size="24px">{{ icon.id }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        &copy; 2018 - Site développé par Julien Sulpis <br>
        Hébergé sur <a href="https://github.com/jsulpis/personal-website">GitHub</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import * as VFooter from "vuetify/es5/components/VFooter";

export default {
  components: {
    ...VFooter
  },
  data() {
    return {
      icons: [
        {
          id: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/julien-sulpis"
        },
        {
          id: "fab fa-github",
          link: "https://github.com/jsulpis"
        },
        {
          id: "fab fa-twitter",
          link: "https://twitter.com/JulienSulpis"
        }
      ],
      color: "primary"
    };
  }
};
</script>

<style>
footer .v-card {
  width: 100%;
}
</style>