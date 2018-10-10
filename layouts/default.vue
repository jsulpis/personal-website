<template>
  <v-app dark>
    <v-content>
      <!-- Navigation drawer -->
      <drawer
      :items="items"
      id="index-drawer"/>

      <!-- Banner -->
      <banner :description="description"/>

      <!-- Element to push the content below the toolbar -->
      <!-- <div id="push-top" :style="'height: ' + (smallViewport ? '56px' : '80px')"></div> -->

      <!-- Page content -->
      <nuxt/>

      <!-- Element to push the content above the footer -->
      <!-- <div id="push-bottom"></div> -->

      <!-- Footer -->
      <j-footer class="hide-on-render"/>

      <!-- Snackbar and dialog to allow cookies -->
      <cookies/>
    </v-content>
  </v-app>
</template>

<script>
import Banner from "~/components/global/Banner.vue";
import Drawer from "~/components/global/Drawer.vue";
import JFooter from "~/components/global/JFooter.vue";
import Cookies from "~/components/global/Cookies.vue";

export default {
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.js"
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.css"
        }
      ]
    };
  },
  components: {
    Banner,
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
          to: "/",
          icon: "account_circle"
        },
        {
          title: "Portfolio",
          to: "/portfolio",
          icon: "work"
        },
        {
          title: "CV",
          to: "/resume",
          icon: "work"
        },
        {
          title: "Contact",
          to: "/contact",
          icon: "mdi-amazon"
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
