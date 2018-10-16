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
      description:
        "Ma gallerie personnelle exposant certaines de mes réalisations en infographie.",
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

<style lang="scss">
#gallery {
  padding: 0;
  min-height: calc(75vh - 137px);

  #gallery-progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .preview {
    position: relative;
    padding: 0;
    line-height: 0;
    display: none;
  }
  /* Make the image to responsive */
  .image {
    width: 100%;
  }

  /* The overlay effect - lays on top of the container and over the image */
  .overlay {
    position: absolute;
    bottom: 0;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.5); /* Black see-through */
    width: 100%;
    height: 100%;
    transition: 0.3s ease;
    opacity: 0;
    color: white;
    text-align: center;

    .v-icon {
      margin-right: 0.25rem;
    }

    .img-- {
      &title {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
      }

      &date,
      &likes,
      &comments {
        position: absolute;
        padding: 1rem;
        font-size: 13px;
      }

      &date {
        bottom: 0;
        left: 0;
      }

      &likes {
        bottom: 0;
        left: 40%;
      }

      &comments {
        bottom: 0;
        right: 0;
      }
    }
  }

  /* When you mouse over the container, fade in the overlay title */
  .preview:hover .overlay {
    opacity: 1;
  }
}
</style>
