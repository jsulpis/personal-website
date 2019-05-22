<template>
  <v-app light class="hideable hideable--hidden">
    <MenuWrapper/>
    <v-content class="push-footer">
      <banner/>
      <logo/>
      <div class="page-content">
        <nuxt/>
      </div>
    </v-content>
    <j-footer/>
    <cookies/>
  </v-app>
</template>

<script>
import MenuWrapper from "~/components/shared/menu/MenuWrapper.vue";
import Banner from "~/components/shared/content/Banner.vue";
import Logo from "~/components/shared/content/Logo.vue";
import JFooter from "~/components/shared/layout/JFooter.vue";
import Cookies from "~/components/shared/content/Cookies.vue";

export default {
  components: {
    MenuWrapper,
    Banner,
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
  watch: {
    $route(to, from) {
      if (to.path === "/") {
        $(".page-header").addClass("hideable--hidden");
      }
    }
  },
  mounted() {
    $("#app").removeClass("hideable--hidden");
    this.$store.commit("setApplicationLoaded");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";
@import url("https://fonts.googleapis.com/css?family=Salsa");

$banner-height: 161px;

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

.hideable {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &--hidden {
    opacity: 0;
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
  top: calc(#{$banner-height} / 2 - 23px);
  transform: translateX(-50%);
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.push-footer {
  min-height: calc(100vh - 146px);
  padding-bottom: 3rem !important;
}

.page-content {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;

  .container {
    flex: 0 0 auto;
  }
}

.below-banner {
  box-shadow: 0px 4px 10px -5px rgba(255, 255, 255, 0.2) inset,
    0px -3px 10px -5px rgba(255, 255, 255, 0.3) !important;
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
