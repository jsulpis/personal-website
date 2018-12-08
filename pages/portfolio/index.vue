<template>
  <div>
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
import ArtworksProvider from "~/services/ArtworksProvider";

export default {
  components: {
    ParallaxCard
  },
  data() {
    return {
      designHeroUrl: "",
      codeHeroUrl: "",
      description: "Je partage ici mes projets réalisés sur mon temps libre."
    };
  },
  beforeMount() {
    this.designHeroUrl = ArtworksProvider.providePictureUrl("design-hero");
    this.codeHeroUrl = ArtworksProvider.providePictureUrl("code-hero");

    this.$emit("update-header", {
      title: "Portfolio",
      description: this.description
    });
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
