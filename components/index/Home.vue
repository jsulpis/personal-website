<template>
<div>
  <v-container app fluid class="home-message">
    <v-layout align-center justify-center column fill-height>
      <h1 class="home-name">Julien Sulpis</h1>
      <h2 class="home-subtitle">
        Ingénieur<span v-html="separation"></span>
        Développeur full-stack<br>
      </h2>
      <h3 class="home-subsubtitle">Infographiste & musicien amateur</h3>
      <social-networks class="home-social-networks"/>
    </v-layout>
  </v-container>
  <v-btn icon dark large id="fab-scroll-down"  @click="$vuetify.goTo('#home-about', scrollingOptions);">
    <v-icon size=32>fas fa-angle-down</v-icon>
  </v-btn>
</div>
</template>

<script>
import { SCROLLING_OPTIONS, BANNER_HEIGHT } from "~/assets/js/globals";
import SocialNetworks from "~/components/global/SocialNetworks";

export default {
  components: { SocialNetworks },
  data() {
    return {
      scrollingOptions: SCROLLING_OPTIONS
    };
  },
  computed: {
    separation() {
      return this.smallScreen ? "<br>" : "&nbsp; | &nbsp;";
    },
    smallScreen() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    comingFromAnotherPage() {
      return $("#footer")[0].classList.contains("show");
    }
  },
  methods: {
    animateBannerHeight(bannerHeight, callback) {
      $("#banner").animate({ height: bannerHeight }, 300, callback);
    },
    animateLogo(posFromTop) {
      $("#personal-logo").animate({ top: posFromTop }, 300);
    },
    displayHomeMessage() {
      $(".home-message").fadeIn();
      this.$emit("home-screen-loaded");
    }
  },
  mounted() {
    const banner = $("#banner");
    const logoPosFromTop = this.smallScreen ? "25vh" : "27vh";

    if (this.comingFromAnotherPage) {
      this.animateBannerHeight("100vh", this.displayHomeMessage);
      this.animateLogo(logoPosFromTop);
    } else {
      banner.css("height", "100vh");
      $("#personal-logo").css("top", logoPosFromTop);
      this.displayHomeMessage();
    }
    banner.show();
  },
  beforeDestroy() {
    $(".home-message").hide();
    this.animateBannerHeight(BANNER_HEIGHT, () => {});
    const logoHeight = 30;
    const logoPosFromTop = BANNER_HEIGHT / 2 - logoHeight;
    this.animateLogo(logoPosFromTop);
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
    margin: 0.5em;

    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
    }
  }

  &subsubtitle {
    font-size: 0.9rem;
    font-weight: 300;
    opacity: 0.8;

    @media only screen and (min-width: 600px) {
      font-size: 1.3rem;
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
