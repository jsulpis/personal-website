<template>
  <v-container id="contact" class="page-content hide-on-render">
    <v-card>
      <p class="font-weight-regular py-4 ma-0">Utilisez ce formulaire pour me contacter si vous avez une quelconque question ou suggestion.</p>
      <contact/>
    </v-card>
  </v-container>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Contact
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/contact/main.scss";
</style>
