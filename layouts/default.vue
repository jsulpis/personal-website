<template>
  <v-app dark>
    <v-content>
      <drawer 
      :items="items" 
      :dark=true 
      :fixed=false 
      :flat=false 
      color="grey darken-3"
      :height="smallViewport ? '56' : '80'"
      :showOnLargeScreens=true
      id="index-drawer"
      class="hide-on-render"/>
      <div id="push-top" :style="'height: ' + (smallViewport ? '56px' : '80px')"></div>
      <nav id="main-menu" class="hidden-sm-and-down text-sm-right">
        <ul id="main-menu__list">
          <li v-for="(item, i) in items" :key="i" class="main-menu__item">
            <nuxt-link :to="item.to" :exact=false>{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt />
      <div id="push-bottom"></div>
      <my-footer class="hide-on-render"/>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "~/components/Drawer.vue";
import MyFooter from "~/components/MyFooter.vue";
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
    MyFooter
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