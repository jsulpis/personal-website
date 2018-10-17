<template>
  <v-btn
    flat
    :ripple=false
    id="back-btn"
    to="/portfolio"
    :style="'height: ' + (smallViewport ? '56px' : '80px')">
      <v-icon left>keyboard_backspace</v-icon>
      <span v-show="!smallViewport">Retour</span>
  </v-btn>
</template>

<script>
export default {
  computed: {
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
};
</script>

<style lang="scss">
#back-btn {
  position: absolute;
  z-index: 12;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0 3vw;

  text-transform: initial;

  &:before,
  &:before,
  &:focus:before {
    background-color: transparent;
  }
}
</style>
