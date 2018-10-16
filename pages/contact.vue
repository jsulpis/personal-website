<template>
  <v-container id="contact" class="hide-on-render">
    <v-card>
      <p class="font-weight-regular pt-4 px-2 ma-0">
        Une question ? Une suggestion ? Une envie de remplir un formulaire ?<br>C'est ici !</p>
      <contact-form/>
    </v-card>
  </v-container>
</template>

<script>
import ContactForm from "~/components/global/ContactForm.vue";

import { ROOT_SITE_NAME, makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    ContactForm
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
@import "~/assets/scss/variables.scss";

#contact {
  min-height: calc(100vh - #{$banner-height} - 161px);
  display: flex;
  justify-content: center;
  align-items: center;

  .v-card {
    width: inherit;
    max-width: 850px;
    margin: 0 auto;
  }
}

</style>
