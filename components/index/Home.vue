<template>
  <div>
    <v-container app fluid class="home-message">
      <v-layout align-center justify-center column fill-height>
        <h1 class="home-name">Julien Sulpis</h1>
        <h2 class="home-subtitle">{{ pageContent.nameSubtitle }}</h2>
        <h3 class="home-subsubtitle">{{ pageContent.nameSubsubtitle }}</h3>
        <social-networks class="home-social-networks"/>
      </v-layout>
    </v-container>
    <v-btn icon dark large id="fab-scroll-down" @click="scrollDown()">
      <v-icon size="32">fas fa-angle-down</v-icon>
    </v-btn>
  </div>
</template>

<script>
import * as SCROLLING_OPTIONS from "~/assets/data/scrollingOptions";
import SocialNetworks from "~/components/shared/SocialNetworks";

if (process.browser) {
  require("~/assets/scripts/jquery-parallax.js");
}

const BANNER_HEIGHT = 161;
const LOGO_HEIGHT = 30;

export default {
  props: { pageContent: Object },
  components: { SocialNetworks },
  computed: {
    separation() {
      return this.smallScreen ? "<br>" : "&nbsp; | &nbsp;";
    },
    smallScreen() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    comingFromAnotherPage() {
      return this.$store.state.appLoaded;
    }
  },
  methods: {
    scrollDown() {
      this.$vuetify.goTo(".home-about", SCROLLING_OPTIONS);
    },
    animateBannerHeight(BANNER_HEIGHT, callback) {
      $("#banner").animate({ height: BANNER_HEIGHT }, 300, callback);
    },
    animateLogo(posFromTop, callback) {
      $("#personal-logo").animate({ top: posFromTop }, 300, callback);
    },
    displayHomeMessage() {
      $(".home-message").fadeIn();
      this.$emit("home-screen-loaded");
    },
    activateParallax() {
      $("#banner_img").parallax("center", -0.3, false);
    }
  },
  mounted() {
    const banner = $("#banner");
    const logoPosFromTop = this.smallScreen ? "25vh" : "27vh";

    if (this.comingFromAnotherPage) {
      this.animateBannerHeight("100vh", this.displayHomeMessage);
      this.animateLogo(logoPosFromTop, this.activateParallax);
    } else {
      banner.css("height", "100vh");
      $("#personal-logo").css("top", logoPosFromTop);
      this.displayHomeMessage();
      this.activateParallax();
    }
    banner.show();
  },
  beforeDestroy() {
    $(".home-message").hide();
    this.animateBannerHeight(BANNER_HEIGHT, () => {});
    const logoPosFromTop = BANNER_HEIGHT / 2 - LOGO_HEIGHT;
    this.animateLogo(logoPosFromTop);
    $("#banner_img").cancelParallax();
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

.home- {
  &message {
    position: absolute;
    width: 100%;
    top: 30vh;
    transform: translateY(10%);
    display: none;
    line-height: normal;
    text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
    color: white;
  }
  &name {
    font-weight: 500;
    @include font-title;
    font-size: 3rem;

    @media only screen and (min-width: 600px) {
      font-size: 5rem;
    }
  }

  &subtitle {
    font-size: 1.1rem;
    font-weight: 300;
    margin-top: 0.5rem;

    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }

  &subsubtitle {
    margin-top: 0.2rem;
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.8;

    @media only screen and (min-width: 600px) {
      font-size: 1.2rem;
    }
  }

  &social-networks a {
    color: rgba(255, 255, 255, 0.9) !important;
  }
}

#fab-scroll-down {
  position: absolute;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
}
</style>
