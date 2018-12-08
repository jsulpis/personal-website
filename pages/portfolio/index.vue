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
import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals";

export default {
  components: {
    ParallaxCard
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        { name: "url", property: "og:url", content: SITE_ROOT_URL + "/resume" },
        {
          name: "description",
          property: "og:description",
          content: this.description
        }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("Portfolio"),
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
