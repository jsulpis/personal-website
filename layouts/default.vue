<template>
  <v-app light>
    <v-content>
      <MenuWrapper class="hide-on-render"/>
      <div id="banner"></div>
      <logo/>
      <nuxt class="page-content"/>
      <j-footer class="hide-on-render"/>
      <cookies/>
    </v-content>
  </v-app>
</template>

<script>
import MenuWrapper from "~/components/global/MenuWrapper.vue";
import Logo from "~/components/global/Logo.vue";
import JFooter from "~/components/global/JFooter.vue";
import Cookies from "~/components/global/Cookies.vue";

export default {
  components: {
    MenuWrapper,
    Logo,
    JFooter,
    Cookies
  },
  data() {
    return {
      description:
        "Bienvenue sur mon site web. J'y partage régulièrement du contenu à propos d'informatique et de design."
    };
  },
  computed: {
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  mounted() {
    $("#banner").css("opacity", 1);
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";

html {
  font-size: initial !important;
}

body {
  margin: 0;
  text-align: center;
}

a {
  text-decoration: none;
  font-weight: 600;
}

.hide-on-render {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.show {
    opacity: 1;
  }
}

.theme--dark .v-card,
.application .theme--dark.v-card {
  background-color: #303030;
}
.theme--dark .v-tabs__bar,
.application .theme--dark.v-tabs__bar {
  background-color: #303030 !important; // It should not be overwritten
}

.application.theme--dark {
  background: #212121;
  color: rgba(255, 255, 255, 0.84) !important;
}

#banner {
  opacity: 0;
  height: $banner-height;
  background-image: url("/img/background/sky.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 0px 40px 15px rgba(0, 0, 0, 0.3) inset;
}

.page-content {
  min-height: calc(100vh - #{$banner-height} - 161px);
  padding-bottom: 3rem !important;
}
</style>
