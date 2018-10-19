<template>
  <div>
  <v-container>
    <v-layout wrap justify-center>
      <nuxt-link to="/portfolio/design">
        <parallax-card
          :data-image="designHeroUrl"
          title="Design"
          description="Voir une sélection de mes réalisations en infographie."/>
      </nuxt-link>
      <nuxt-link to="/portfolio/code">
        <parallax-card
          :data-image="codeHeroUrl"
          title="Code"
          description="Voir mes projets de développement open-source."/>
      </nuxt-link>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import ParallaxCard from "~/components/portfolio/ParallaxCard";
import ArtworksProvider from "~/services/ArtworksProvider";

export default {
  components: {
    ParallaxCard
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
