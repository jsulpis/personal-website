<template>
  <v-container fluid grid-list-xs id="gallery" class="hide-on-render">
    <v-layout row wrap id="gallery-layout">
      <gallery-item v-for="(artwork, i) in artworks" :key="i" :artwork="artwork"/>
      <v-progress-circular indeterminate size="70" color="primary" id="gallery-progress"/>
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

      // Give a bit of time to fill the artworks array and then fade them in
      // The call to the function setTimeout itself can be long enough to delay the execution...
      this.showGalleryWithDelay(10);
    });
  },
  updated() {
    $(".hide-on-render").addClass("show");
  },
  methods: {
    showGalleryWithDelay(delay) {
      // Fade in each gallery item one after another
      setTimeout(() => {
        $("#gallery-progress").hide();
        $(".gallery-item").each(function(index) {
          $(this)
            .delay(20 * index)
            .fadeIn();
        });
      }, delay);
    }
  }
};
</script>

<style>
#gallery {
  padding: 0 !important;
  margin-bottom: -3rem;
  background-color: #212121;
}

#gallery-layout {
  flex-grow: initial;
}

#gallery-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
