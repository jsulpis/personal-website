<template>
  <v-container fluid grid-list-xs id="gallery">
    <v-layout row wrap>
      <gallery-item
      v-for="(img, i) in artworks"
      :key=i
      :title="img.title"
      :imgUrl="img.urlTitle"
      :date="img.date"
      :likes="img.likes"/>

      <v-progress-circular
      indeterminate
      size="70"
      color="primary"
      id="gallery-progress"
      class="hide-on-render"/>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
import VProgressCircular from "vuetify/es5/components/VProgressCircular";
import GalleryItem from "~/components/portfolio/GalleryItem.vue";

import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals.js";
import ArtworksProvider from "~/services/ArtworksProvider";

export default {
  components: {
    VProgressCircular,
    GalleryItem
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "og:title", content: this.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: SITE_ROOT_URL + "/portfolio" },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("Portfolio"),
      description:
        "Ma gallerie personnelle exposant certaines de mes réalisations en infographie.",
      artworks: []
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");

    ArtworksProvider.provideArtworks().then(response => {
      this.artworks = response;
      this.sortArtworksByDate();

      // Give a bit of time to fill the artworks array and then fade them in
      // The call to the function setTimeout itself can be long enough to delay the execution...
      this.showGalleryWithDelay(10);
      // Second chance for slow devices
      this.showGalleryWithDelay(1000);
    });
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
        // Update comments count
        DISQUSWIDGETS.getCount({ reset: true });
      }, delay);
    }
  }
};
</script>

<style>
#gallery {
  padding: 0;
}

#gallery-progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
