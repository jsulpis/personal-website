<template>
  <div class="hide-on-render">
    <page-header title="Contact" :description="description"></page-header>
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
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content: SITE_ROOT_URL + this.$route.fullPath
        },
        {
          name: "description",
          property: "og:description",
          content: this.description
        }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("Contact"),
      description:
        "Vous pouvez utiliser ce formulaire pour m'envoyer vos remarques, questions, etc."
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
