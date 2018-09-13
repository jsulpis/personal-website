<template>
  <v-app dark>
    <v-content>
      <!-- Navigation drawer -->
      <drawer
      :items="items"
      :fixed=false
      :flat=false
      color="grey darken-3"
      :height="smallViewport ? '56' : '80'"
      :showOnLargeScreens=true
      id="index-drawer"
      class="hide-on-render"/>

      <!-- Element to push the content below the toolbar -->
      <div id="push-top" :style="'height: ' + (smallViewport ? '56px' : '80px')"></div>

      <!-- Main menu visible on medium screens and above -->
      <nav id="main-menu" class="hidden-sm-and-down text-sm-right">
        <ul id="main-menu__list">
          <li v-for="(item, i) in items" :key="i" class="main-menu__item">
            <nuxt-link :to="item.to" :exact=false>{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>

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
