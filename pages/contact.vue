<template>
  <v-container id="contact" class="page-content hide-on-render">
    <v-card>
      <p class="font-weight-regular pt-4 px-2 ma-0">
        Une question ? Une suggestion ? Une envie de remplir un formulaire ?<br>C'est ici !</p>
      <contact/>
    </v-card>
  </v-container>
</template>

<script>
import Contact from "~/components/global/Contact.vue";

import { ROOT_SITE_NAME, makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    Contact
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "og:title", content: this.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: ROOT_SITE_NAME + "/contact" },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("Contact"),
      description:
        "Utilisez ce formulaire pour m'envoyer toute requête, question, etc."
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/contact/main.scss";
</style>
