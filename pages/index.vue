<template>
  <div>
    <home v-on:home-screen-loaded="showHiddenSection"/>
    <about class="hide-on-render"/>
  </div>
</template>

<script>
import Home from "~/components/index/Home";
import About from "~/components/index/About";

import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    Home,
    About
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        { name: "type", property: "og:type", content: "website" },
        { name: "url", property: "og:url", content: SITE_ROOT_URL },
        {
          name: "description",
          property: "og:description",
          content: this.description
        }
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
