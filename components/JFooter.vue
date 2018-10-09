<template>
  <v-footer id="footer" absolute height="auto" class="elevation-8">
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
        &copy; 2018 - code & design par Julien Sulpis <br>
        Site hébergé sur <a href="https://github.com/jsulpis/personal-website">GitHub</a>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import VFooter from "vuetify/es5/components/VFooter";

export default {
  components: {
    VFooter
  },
  data() {
    return {
      icons: [
        {
          id: "fab fa-facebook-f",
          link: "https://www.facebook.com/julien.sulpis"
        },
        {
          id: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/julien-sulpis"
        },
        {
          id: "fab fa-twitter",
          link: "https://twitter.com/JulienSulpis"
        },
        {
          id: "fab fa-github",
          link: "https://github.com/jsulpis"
        },
        {
          id: "email",
          link: "/contact"
        }
      ]
    };
  }
};
</script>

<style>
footer .v-card {
  width: 100%;
}
</style>
