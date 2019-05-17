<template>
  <div>
    <v-layout column justify-center align-center class="home-about below-banner">
      <div class="home-about__welcome">{{ pageContent.welcomeTitle }}</div>
      <div class="home-about__description font-weight-light">{{ pageContent.welcomeParagraph }}</div>
      <v-layout row wrap align-center justify-space-between class="home-about__icons">
        <v-flex v-for="panel in pageContent.panels" :key="panel.title" xs12 sm4>
          <v-icon dark class="home-about__icon" @click="scrollTo(panel)">{{ panel.icon }}</v-icon>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import * as SCROLLING_OPTIONS from "~/static/data/scrollingOptions";

export default {
  props: { pageContent: Object },
  methods: {
    scrollTo(panel) {
      this.$vuetify.goTo("#" + panel.title, SCROLLING_OPTIONS);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";

.home-about {
  padding: 2rem;
  background-color: #303030;
  color: white;
  height: 100vh;
  @media screen and (min-width: 600px) {
    max-height: 300px;
  }
}
.home-about__welcome {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.home-about__description {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: -3px;
    right: -3px;
    height: 2px;
    background-image: linear-gradient(
      to left,
      transparent,
      $material-color-grey-300,
      transparent
    );
  }
}

.home-about__icons {
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
}

.home-about__icon {
  border-radius: 50%;
  border: 4px solid;
  padding: 20px;
  transform: scale(1.2);
  margin: auto;

  .v-icon {
    height: 50px;
    width: 50px;
    font-size: 50px;
    opacity: 0.8;
  }
}
</style>
