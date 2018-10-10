<template>
  <v-app dark>
    <v-content>
      <!-- Navigation drawer -->
      <drawer :items="items" id="index-drawer"/>

      <!-- Banner -->
      <div id="banner"></div>

      <!-- Page content -->
      <nuxt/>

      <!-- Footer -->
      <j-footer class="hide-on-render"/>

      <!-- Snackbar and dialog to allow cookies -->
      <cookies/>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "~/components/global/Drawer.vue";
import JFooter from "~/components/global/JFooter.vue";
import Cookies from "~/components/global/Cookies.vue";

export default {
  components: {
    Drawer,
    JFooter,
    Cookies
  },
  data() {
    return {
      description:
        "Bienvenue sur mon site web. J'y partage régulièrement du contenu à propos d'informatique et de design.",
      items: [
        {
          title: "Accueil",
          to: "/"
        },
        {
          title: "Portfolio",
          to: "/portfolio"
        },
        {
          title: "CV",
          to: "/resume"
        },
        {
          title: "Contact",
          to: "/contact"
        }
      ]
    };
  },
  computed: {
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/default/main.scss";
</style>
