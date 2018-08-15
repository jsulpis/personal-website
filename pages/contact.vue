<template>
  <div id="background" class="hide-on-load background-image">
    <v-container id="contact">
      <p class="title font-weight-regular">Une question ? Une remarque ? Un bug rencontré sur ce site ?<br>
        Envoyez-moi un message, et je vous recontacterai dès que possible !</p>
      <contact/>
    </v-container>
  </div>
</template>

<script>
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Contact
  },
  mounted() {
    $(".hide-on-load").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/contact/main.scss";
</style>
