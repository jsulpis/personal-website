<template>
  <div>
    <home v-on:home-screen-loaded="showHiddenSection"/>
    <about class="hide-on-render"/>
  </div>
</template>

<script>
import Home from "~/components/index/Home";
import About from "~/components/index/About";
import { makePageTitle } from "~/utils/page";
import { makePageMetadata } from "~/utils/page";

export default {
  components: {
    Home,
    About
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: makePageTitle("Accueil"),
      pageUrl: process.env.URL,
      description:
        "Bienvenue sur mon site web. J'y partage régulièrement du contenu à propos d'informatique et de design."
    };
  },
  beforeMount() {
    this.$store.commit("resetHeaderContent");
  },
  methods: {
    showHiddenSection() {
      $(".hide-on-render").addClass("show");
    }
  },
  mounted() {
    setTimeout(() => $(".hide-on-render").addClass("show"), 1000);
  }
};
</script>
