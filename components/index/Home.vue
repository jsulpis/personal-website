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

<style lang="scss">
#home-message {
  position: absolute;
  width: 100%;
  top: 50vh;
  transform: translateY(-50%);
  display: none;
  line-height: normal;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12);

  #home- {
    &name {
      color: white;
      font-weight: 500;
      font-size: 3rem;

      @media only screen and (min-width: 600px) {
        font-size: 5rem;
      }
    }

    &description {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.1rem;
      font-weight: 300;
      margin: 0.5em;

      @media only screen and (min-width: 600px) {
        font-size: 1.5rem;
      }

      span {
        font-size: 0.9rem;
        opacity: 0.8;

        @media only screen and (min-width: 600px) {
          font-size: 1.3rem;
        }
      }
    }
  }
}

#fab-scroll-down {
  position: absolute;
  top: 90vh;
  left: 50%;
  transform: translateX(-50%);
  animation: MoveUpDown 1.2s ease-in-out infinite;
}

@keyframes MoveUpDown {
  0%,
  100% {
    top: 90vh;
  }
  50% {
    top: 91vh;
  }
}
</style>
