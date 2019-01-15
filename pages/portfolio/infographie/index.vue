<template>
  <v-container fluid grid-list-xs id="gallery" class="hideable hideable--hidden">
    <v-layout row wrap id="gallery-layout">
      <gallery-item v-for="(artwork, i) in artworks" :key="i" :artwork="artwork"/>
    </v-layout>
  </v-container>
</template>

<script>
import GalleryItem from "~/components/portfolio/GalleryItem.vue";
import ArtworkService from "~/services/ArtworkService";
import { makePageTitle } from "~/utils/page";
import { makePageMetadata } from "~/utils/page";

export const INFOGRAPHIE_HEADER = {
  title: "Infographie",
  description: "Mes réalisations 2D/3D."
};

export default {
  components: {
    GalleryItem
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: "Portfolio - " + INFOGRAPHIE_HEADER.title,
      pageUrl: process.env.URL + this.$route.fullPath,
      description: INFOGRAPHIE_HEADER.description,
      artworks: []
    };
  },
  beforeMount() {
    this.$store.commit("setHeaderContent", INFOGRAPHIE_HEADER);
  },
  mounted() {
    ArtworkService.getArtworks().then(response => {
      this.artworks = response;
    });
  },
  updated() {
    $("#gallery").removeClass("hideable--hidden");
  }
};
</script>

<style>
#gallery {
  padding: 0;
  margin-bottom: -3rem;
  background-color: #212121;
}

#gallery-layout {
  flex-grow: initial;
}
</style>
