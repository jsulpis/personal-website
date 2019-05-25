<template>
  <div class="contact-page">
    <page-header class="hideable" title="Contact" :description="description"></page-header>
    <v-container>
      <v-card class="contact-page__card">
        <contact-form/>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ContactForm from "~/components/contact/ContactForm.vue";
import PageHeader from "~/components/shared/layout/PageHeader.vue";
import { makePageTitle } from "~/utils/page";
import { makePageMetadata } from "~/utils/page";

export default {
  components: {
    ContactForm,
    PageHeader
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
  }
};
</script>

<style>
.contact-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.contact-page__card {
  width: inherit;
  max-width: 850px;
  margin: auto;
}
</style>
