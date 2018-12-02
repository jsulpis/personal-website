<template>
  <v-container id="contact-page" class="hide-on-render">
    <v-card class="contact-page__card">
      <p
        class="font-weight-regular pt-4 px-2 ma-0"
      >Une question ? Suggestion ? Envie de remplir un formulaire ?
        <br>C'est ici !
      </p>
      <contact-form/>
    </v-card>
  </v-container>
</template>

<script>
import ContactForm from "~/components/shared/ContactForm.vue";

import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals.js";

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
        { name: "og:url", content: SITE_ROOT_URL + "/contact" },
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

<style>
#contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-page__card {
  width: inherit;
  max-width: 850px;
  margin: 0 auto;
}
</style>
