<template>
  <div>
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
  </div>
</template>

<script>
import MediaService from "~/services/MediaService";
import ParallaxCard from "~/components/portfolio/ParallaxCard";
import ArtworkService from "~/services/ArtworkService";
import { makePageTitle } from "~/assets/js/globals";

export default {
  components: {
    ParallaxCard
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content: process.env.URL + this.$route.fullPath
        },
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
      description: "Quelques projets réalisés sur mon temps libre."
    };
  },
  asyncData() {
    return MediaService.getPictureUrl("design-hero,code-hero").then(urls => {
      return {
        designHeroUrl: urls[0],
        codeHeroUrl: urls[1]
      };
    });
  },
  beforeMount() {
    this.$store.commit("setHeaderContent", {
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
