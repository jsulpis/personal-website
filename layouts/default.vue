<template>
  <v-app dark>
    <v-content>
      <!-- Navigation drawer -->
      <drawer :items="items" id="index-drawer"/>

      <!-- Banner -->
      <div id="banner"></div>

      <!-- Page content -->
      <nuxt class="page-content"/>

      <!-- Footer -->
      <j-footer class="hide-on-render"/>

      <!-- Snackbar and dialog to allow cookies -->
      <cookies/>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "~/components/global/Drawer.vue";
import JFooter from "~/components/global/JFooter.vue";
import Cookies from "~/components/global/Cookies.vue";

export default {
  components: {
    Drawer,
    JFooter,
    Cookies
  },
  data() {
    return {
      description:
        "Bienvenue sur mon site web. J'y partage régulièrement du contenu à propos d'informatique et de design.",
      items: [
        {
          title: "Accueil",
          to: "/"
        },
        {
          title: "Portfolio",
          to: "/portfolio"
        },
        {
          title: "CV",
          to: "/resume"
        },
        {
          title: "Contact",
          to: "/contact"
        }
      ]
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

html {
  font-size: initial !important;
}

body {
  margin: 0;
  text-align: center;
}

a {
  text-decoration: none;
  font-weight: 500;
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
  background-image: url("/img/background/sky.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.3) inset;
}

.page-content {
  min-height: calc(100vh - #{$banner-height} - 161px);
  padding-bottom: 3rem !important;
}
</style>
