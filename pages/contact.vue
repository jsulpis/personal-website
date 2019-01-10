<template>
  <div class="hide-on-render">
    <v-container id="contact-page">
      <v-card class="contact-page__card">
        <contact-form/>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ContactForm from "~/components/shared/ContactForm.vue";

import { makePageTitle } from "~/utils/page";

export default {
  components: {
    ContactForm
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content: process.env.URL + this.$route.fullPath
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
  beforeMount() {
    this.$store.commit("setHeaderContent", {
      title: "Contact",
      description: this.description
    });
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
