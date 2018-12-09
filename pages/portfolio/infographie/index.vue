<template>
  <v-container fluid grid-list-xs id="gallery" class="hide-on-render">
    <v-layout row wrap id="gallery-layout">
      <gallery-item
        v-for="(img, i) in artworks"
        :key="i"
        :title="img.title"
        :imgUrl="img.urlTitle"
        :disqusId="img.uuid"
        :disqusUrl="pageUrl + '/' + img.urlTitle"
        :date="img.date"
        :likes="img.likes"
      />
      <v-progress-circular indeterminate size="70" color="primary" id="gallery-progress"/>
    </v-layout>
  </v-container>
</template>

<script>
import VProgressCircular from "vuetify/es5/components/VProgressCircular";
import GalleryItem from "~/components/portfolio/GalleryItem.vue";

import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals.js";
import ArtworksProvider from "~/services/ArtworksProvider";

export const INFOGRAPHIE_HEADER = {
  title: "Infographie",
  description: "Mes réalisations 2D/3D."
};

export default {
  components: {
    VProgressCircular,
    GalleryItem
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content: this.pageUrl
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
      title: "Portfolio - " + INFOGRAPHIE_HEADER.description,
      pageUrl: SITE_ROOT_URL + this.$route.fullPath,
      description: INFOGRAPHIE_HEADER.description,
      artworks: []
    };
  },
  beforeMount() {
    this.$emit("update-header", INFOGRAPHIE_HEADER);
  },
  mounted() {
    ArtworksProvider.provideArtworks().then(response => {
      this.artworks = response;
      this.sortArtworksByDate();

      // Give a bit of time to fill the artworks array and then fade them in
      // The call to the function setTimeout itself can be long enough to delay the execution...
      this.showGalleryWithDelay(10);
    });
  },
  updated() {
    $(".hide-on-render").addClass("show");
  },
  methods: {
    sortArtworksByDate() {
      this.artworks.sort((e1, e2) => {
        return this.dateToNumber(e2.date) - this.dateToNumber(e1.date);
      });
    },
    dateToNumber(date) {
      // Concatenate the year and the month and convert it to an int.
      return parseInt(
        date
          .split("/")
          .reverse()
          .join("")
      );
    },
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
