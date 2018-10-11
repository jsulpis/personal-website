<template>
<div>
  <home v-on:home-screen-loaded="showHiddenSection"/>
  <about class="hide-on-render"/>
</div>
</template>

<script>
import Home from "~/components/index/Home";
import About from "~/components/index/About";

import { ROOT_SITE_NAME, makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    Home,
    About
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "og:title", content: this.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: ROOT_SITE_NAME },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("Accueil"),
      description:
        "Bienvenue sur mon site web. J'y partage régulièrement du contenu à propos d'informatique et de design."
    };
  },
  methods: {
    showHiddenSection() {
      $(".hide-on-render").addClass("show");
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/index/main.scss";
</style>
