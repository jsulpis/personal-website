<template>
  <v-btn fab small color="primary" @click="$vuetify.goTo(0, scrollingOptions)">
    <v-icon dark>fas fa-angle-up</v-icon>
  </v-btn>
</template>

<script>
import { SCROLLING_OPTIONS } from "~/assets/js/globals";

export default {
  data() {
    return {
      scrollingOptions: SCROLLING_OPTIONS
    };
  }
};
</script>
