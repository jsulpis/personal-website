<template>
  <div>
    <home v-on:home-screen-loaded="showHiddenSection" :pageContent="pageContent"/>
    <div class="hideable hideable--hidden">
      <about :pageContent="pageContent"/>
      <panels :panels="pageContent.panels"/>
    </div>
  </div>
</template>

<script>
import Home from "~/components/index/Home";
import About from "~/components/index/About";
import Panels from "~/components/index/Panels";
import { makePageTitle } from "~/utils/page";
import { makePageMetadata } from "~/utils/page";

export default {
  components: {
    Home,
    About,
    Panels
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: makePageTitle("Accueil"),
      pageUrl: process.env.URL,
      description:
        "Bienvenue sur mon site web. J'y partage régulièrement du contenu à propos d'informatique et de design.",
      pageContent: require("~/static/data/remote/pages/home.json")
    };
  },
  methods: {
    showHiddenSection() {
      $(".hideable--hidden").removeClass("hideable--hidden");
    }
  },
  beforeMount() {
    sr.reveal(".home-panel__layout", {
      distance: "20%",
      scale: 1,
      viewFactor: 0.5
    });
  }
};
</script>
