<template>
<div>
  <v-container app fluid id="home-message">
    <v-layout align-center justify-center column fill-height>
      <h1 id="home-name">Julien Sulpis</h1>
      <h2 id="home-description">
        Ingénieur généraliste <span v-html="separation"></span>
        Développeur full-stack<br>
        <span>Infographiste et musicien amateur</span>
      </h2>
      <social-media/>
    </v-layout>
  </v-container>
  <v-btn icon large id="fab-scroll-down"  @click="$vuetify.goTo('#home-about', scrollingOptions);">
    <v-icon large>fas fa-angle-down</v-icon>
  </v-btn>
</div>
</template>

<script>
import { SCROLLING_OPTIONS, BANNER_HEIGHT } from "~/assets/js/globals";
import SocialMedia from "~/components/global/SocialMedia";

export default {
  components: {
    SocialMedia
  },
  data() {
    return {
      scrollingOptions: SCROLLING_OPTIONS
    };
  },
  computed: {
    separation() {
      return this.$vuetify.breakpoint.xsOnly ? "<br>" : "&nbsp; | &nbsp;";
    }
  },
  mounted() {
    const banner = $("#banner");
    banner.hide();
    if ($("#footer")[0].classList.contains("show")) {
      // Coming from another page: animate the banner
      banner.animate({ height: "100vh" }, 300, () => {
        $("#home-message").fadeIn();
        this.$emit("home-screen-loaded");
      });
    } else {
      // Show the banner directly
      banner.css("height", "100vh");
      $("#home-message").fadeIn();
      this.$emit("home-screen-loaded");
    }
    banner.show();
  },
  beforeDestroy() {
    $("#home-message").hide();
    $("#banner").animate({ height: BANNER_HEIGHT }, 300);
  }
};
</script>
