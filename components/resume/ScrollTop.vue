<template>
  <v-btn fab color="primary" class="my-4">
    <v-icon dark @click="$vuetify.goTo(0, options)">fas fa-angle-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      options: {
        duration: 400,
        offset: 0,
        easing: "easeInOutQuint"
      }
    }
  }
}
</script>
