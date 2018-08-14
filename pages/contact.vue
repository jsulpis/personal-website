<template>
  <div id="background" class="background-image">
    <v-container id="contact" >
      <p class="headline">Une question ? Une proposition ? Un bug rencontré sur ce site ?<br>
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
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/contact/main.scss";
</style>
