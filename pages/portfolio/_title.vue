<template>
  <div class="hide-on-render">
    <v-btn 
    flat 
    :ripple=false 
    id="gallery-back-btn" 
    to="/portfolio"
    :style="'height: ' + (smallViewport ? '56px' : '80px')">
      <v-icon left>keyboard_backspace</v-icon>
      <span v-if="!smallViewport">Retour</span>
    </v-btn>
    <v-container class="page-header">
      <h1>{{ $route.params.title }}</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>