<template>
  <v-app light>
    <v-content>
      <MenuWrapper class="hide-on-render"/>
      <banner class="hide-on-render"/>
      <logo/>
      <nuxt class="page-content"/>
      <j-footer class="hide-on-render"/>
      <cookies/>
    </v-content>
  </v-app>
</template>

<script>
import MenuWrapper from "~/components/shared/MenuWrapper.vue";
import Logo from "~/components/shared/Logo.vue";
import Banner from "~/components/shared/Banner.vue";
import JFooter from "~/components/shared/JFooter.vue";
import Cookies from "~/components/shared/Cookies.vue";

export default {
  components: {
    MenuWrapper,
    Logo,
    Banner,
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
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import url("https://fonts.googleapis.com/css?family=Salsa");

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
  height: $banner-height;
}

#personal-logo {
  position: absolute;
  top: calc(#{$banner-height} / 2 - 30px);
  transform: translateX(-50%);
}

.page-content {
  min-height: calc(100vh - #{$banner-height} - 153px);
  padding-bottom: 3rem !important;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
  background-color: #ccc;
}
</style>
