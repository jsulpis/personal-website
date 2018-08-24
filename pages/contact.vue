<template>
  <v-container id="contact" class="page-content hide-on-render">
    <v-card>
      <p class="font-weight-regular pt-4 px-2 ma-0">Une question ? Une suggestion ? Une envie de remplir un formulaire ?<br>C'est ici !</p>
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
