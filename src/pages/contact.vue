<template>
  <v-container id="contact-page">
    <v-card class="contact-page__card">
      <contact-form/>
    </v-card>
  </v-container>
</template>

<script>
import ContactForm from "~/components/contact/ContactForm.vue";
import { makePageTitle } from "~/utils/page";
import { makePageMetadata } from "~/utils/page";

export default {
  components: {
    ContactForm
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: makePageTitle("Contact"),
      pageUrl: process.env.URL + this.$route.fullPath,
      description:
        "Vous pouvez utiliser ce formulaire pour m'envoyer vos remarques, questions, etc."
    };
  },
  beforeMount() {
    this.$store.commit("setHeaderContent", {
      title: "Contact",
      description: this.description
    });
  }
};
</script>

<style>
.contact-page__card {
  width: inherit;
  max-width: 850px;
  margin: auto;
}
</style>
