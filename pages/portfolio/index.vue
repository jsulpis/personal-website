<template>
  <v-container fluid grid-list-xs id="img-section">
    <v-layout row wrap>
      <Preview
      v-for="(img, i) in artworks"
      :key=i
      :title="img.title"
      :url="img.urlTitle"
      :date="img.date"
      :likes="img.likes"/>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

import Preview from "~/components/portfolio/Preview.vue";

export default {
  components: {
    Preview
  },
  data() {
    return {
      dialog: false,
      artworks: []
    };
  },
  mounted() {
    axios
      .get(
        "https://ihb8a9aixg.execute-api.eu-west-3.amazonaws.com/dev/portfolio"
      )
      .then(response => {
        this.artworks = response.data.Items;
        $(".hide-on-render").addClass("show");
      });
  }
};
</script>
