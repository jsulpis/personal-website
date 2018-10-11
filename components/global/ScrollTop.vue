<template>
  <v-btn fab color="primary" class="my-4">
    <v-icon dark @click="$vuetify.goTo(0, scrollingOptions)">fas fa-angle-up</v-icon>
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
