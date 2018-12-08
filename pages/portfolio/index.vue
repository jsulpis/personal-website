<template>
  <div>
    <page-header class="hide-on-render">Je partage ici mes projets réalisés sur mon temps libre.</page-header>
    <v-container class="portfolio-page">
      <v-layout wrap justify-center>
        <nuxt-link to="/portfolio/design">
          <parallax-card
            :data-image="designHeroUrl"
            title="Design"
            description="Voir mes réalisations en infographie."
          />
        </nuxt-link>
        <nuxt-link to="/portfolio/code">
          <parallax-card
            :data-image="codeHeroUrl"
            title="Code"
            description="Voir mes projets informatiques open-source."
          />
        </nuxt-link>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ParallaxCard from "~/components/portfolio/ParallaxCard";
import PageHeader from "~/components/shared/PageHeader.vue";

import ArtworksProvider from "~/services/ArtworksProvider";

export default {
  components: {
    ParallaxCard,
    PageHeader
  },
  data() {
    return { designHeroUrl: "", codeHeroUrl: "" };
  },
  beforeMount() {
    this.designHeroUrl = ArtworksProvider.providePictureUrl("design-hero");
    this.codeHeroUrl = ArtworksProvider.providePictureUrl("code-hero");
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style>
.portfolio-page {
  flex-grow: initial;
}
</style>
