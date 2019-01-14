<template>
  <v-container class="portfolio-page">
    <v-layout wrap justify-center>
      <nuxt-link :to="$route.fullPath + '/infographie'">
        <parallax-card
          :img-url="designHeroUrl"
          title="Infographie"
          description="Voir mes réalisations 2D/3D."
        />
      </nuxt-link>
      <nuxt-link :to="$route.fullPath + '/code'">
        <parallax-card
          :img-url="codeHeroUrl"
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

export default {
  components: {
    ParallaxCard
  },
  asyncData() {
    return MediaService.getPictureUrl("design-hero,code-hero").then(urls => {
      return {
        designHeroUrl: urls[0],
        codeHeroUrl: urls[1]
      };
    });
  }
};
</script>

<style>
.portfolio-page {
  flex-grow: initial;
}
</style>
