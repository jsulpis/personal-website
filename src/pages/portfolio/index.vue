<template>
  <v-container class="portfolio-page">
    <v-layout wrap justify-center>
      <nuxt-link :to="$route.fullPath + '/infographie'">
        <parallax-card
          img-url="https://images.ctfassets.net/xrzphgakl8qg/2pFUbSI2awGCOMMSI8CQoa/9bcc288f76480ac34de3c726bded1490/design-hero.jpg"
          title="Infographie"
          description="Voir mes réalisations 2D/3D."
        />
      </nuxt-link>
      <nuxt-link :to="$route.fullPath + '/code'">
        <parallax-card
          img-url="https://images.ctfassets.net/xrzphgakl8qg/4Pbag6S0GA0KQsSiWO0oEa/7201f0d3618f65e87f112f35987c33f4/code-hero.jpg"
          title="Code"
          description="Voir mes projets informatiques open-source."
        />
      </nuxt-link>
    </v-layout>
  </v-container>
</template>

<script>
import ParallaxCard from "~/components/portfolio/ParallaxCard";
import MediaService from "~/services/MediaService";
import ArtworkService from "~/services/ArtworkService";
import { PORTFOLIO_HEADER } from "~/pages/portfolio";

export default {
  components: {
    ParallaxCard
  },
  beforeMount() {
    this.$store.commit("setHeaderContent", PORTFOLIO_HEADER);
  }
};
</script>

<style>
.portfolio-page {
  flex-grow: initial;
}
</style>
