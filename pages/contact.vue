<template>
  <div class="hide-on-render">
    <page-header>Une question ? Suggestion ? Envie de remplir un formulaire ? C'est ici !</page-header>
    <v-container id="contact-page">
      <v-card class="contact-page__card">
        <contact-form/>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ContactForm from "~/components/shared/ContactForm.vue";
import PageHeader from "~/components/shared/PageHeader.vue";

import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    ContactForm,
    PageHeader
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
  flex-grow: initial;
}
.contact-page__card {
  width: inherit;
  max-width: 850px;
  margin: 0 auto;
}
</style>
