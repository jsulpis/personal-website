<template>
  <!-- CONTACT -->
  <j-section id="resume-contact" title="Contact">
    <contact-form :isLightTheme="true"/>
  </j-section>
</template>

<script>
import ContactForm from "../global/ContactForm.vue";
import JSection from "./JSection.vue";

export default {
  components: {
    ContactForm,
    JSection
  }
};
</script>
