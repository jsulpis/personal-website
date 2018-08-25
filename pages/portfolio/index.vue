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

export default {
  components: {
    Preview,
    VProgressCircular
  },
  data() {
    return {
      artworks: []
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");
    axios
      .get(
        "https://ihb8a9aixg.execute-api.eu-west-3.amazonaws.com/dev/portfolio"
      )
      .then(response => {
        const sortedArtworks = response.data.Items;
        // sort the artworks by their date.
        // we concatenate the year and the month and convert it to an int.
        sortedArtworks.sort((e1, e2) => {
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
        this.artworks = sortedArtworks;

        // Give a bit of time to fill the artworks array and then fade them in
        // The call to the function setTimeout itself can be long enough to delay the execution...
        setTimeout(() => {
          $("#gallery-progress").hide();
          $(".preview").each(function(index) {
            $(this)
              .delay(20 * index)
              .fadeIn();
          });
        }, 10);

        // Second chance for slow devices
        setTimeout(
          () =>
            $(".preview").each(function(index) {
              $(this)
                .delay(20 * index)
                .fadeIn();
            }),
          1000
        );
      });
  }
};
</script>
