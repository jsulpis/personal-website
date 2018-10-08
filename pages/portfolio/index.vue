<template>
  <v-container fluid grid-list-xs id="gallery">
    <v-layout row wrap>
      <Preview
      v-for="(img, i) in artworks"
      :key=i
      :title="img.title"
      :url="img.urlTitle"
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
import Preview from "~/components/portfolio/Preview.vue";

import { ROOT_SITE_NAME, makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    Preview,
    VProgressCircular
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "og:title", content: this.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: ROOT_SITE_NAME + "/portfolio" },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("Portfolio"),
      description: "Ma gallerie personnelle exposant certaines de mes réalisations en infographie.",
      artworks: []
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");

    axios.get("https://api.juliensulpis.fr/artworks").then(response => {
      this.artworks = response.data.Items;
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
      // we concatenate the year and the month and convert it to an int.
      this.artworks.sort((e1, e2) => {
        const date1 = parseInt(
          e1.date
            .split("/")
            .reverse()
            .join("")
        );
        const date2 = parseInt(
          e2.date
            .split("/")
            .reverse()
            .join("")
        );
        return date2 - date1;
      });
    },
    showGalleryWithDelay(delay) {
      // Fade in each gallery item one after another
      setTimeout(() => {
        $("#gallery-progress").hide();
        $(".preview").each(function(index) {
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
