<template>
  <v-app dark>
    <v-content>
      <!-- Navigation drawer -->
      <drawer
      :items="items"
      id="index-drawer"
      class="hide-on-render"/>

      <!-- Element to push the content below the toolbar -->
      <div id="push-top" :style="'height: ' + (smallViewport ? '56px' : '80px')"></div>

      <!-- Page content -->
      <nuxt/>

      <!-- Element to push the content above the footer -->
      <div id="push-bottom"></div>

      <!-- Footer -->
      <my-footer class="hide-on-render"/>

      <!-- Snackbar and dialog to allow cookies -->
      <cookies/>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "~/components/Drawer.vue";
import MyFooter from "~/components/MyFooter.vue";
import Cookies from "~/components/Cookies.vue";

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
    Drawer,
    MyFooter,
    Cookies
  },
  data() {
    return {
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
