<template>
  <v-btn fab small color="primary" @click="scrollToTop()">
    <v-icon dark>fas fa-angle-up</v-icon>
  </v-btn>
</template>

<script>
import * as SCROLLING_OPTIONS from "~/static/data/scrollingOptions";

export default {
  methods: {
    scrollToTop() {
      this.$vuetify.goTo(0, SCROLLING_OPTIONS);
    }
  }
};
</script>
