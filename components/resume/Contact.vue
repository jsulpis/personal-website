<template>
  <!-- CONTACT -->
  <j-section id="resume-contact" title="Contact">
    <contact-form/>
  </j-section>
</template>

<script>
import ContactForm from "../shared/ContactForm.vue";
import JSection from "./JSection.vue";

export default {
  components: {
    ContactForm,
    JSection
  }
};
</script>
