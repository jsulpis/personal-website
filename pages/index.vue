<template>
  <div id="home-message">
    <div>Je suis</div>
    <div>Julien Sulpis</div>
    <div>{{description}}</div>
  </div>
</template>

<script>
import { ROOT_SITE_NAME, makePageTitle } from "~/assets/js/globals.js";

export default {
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
  beforeDestroy() {
    $("#footer").removeClass("show");
    $("#footer").show();
    $("#banner").animate({ height: "25vh" });
  },
  mounted() {
    const banner = $("#banner");
    $("#footer").hide();
    if ($("#footer")[0].classList.contains("show")) {
      // Coming from another page: animate the banner
      banner.animate({ height: "100%" }, () => {
        $("#home-message").fadeIn();
      });
    } else {
      // Show the banner directly
      banner.css("height", "100%");
      $("#home-message").fadeIn();
    }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/index/main.scss";
</style>
