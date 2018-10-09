<template>
  <!-- CONTACT -->
  <j-section id="contact" title="Contact">
    <contact :isLightTheme="true"/>
  </j-section>
</template>

<script>
import Contact from "../Contact.vue";
import JSection from "./JSection.vue";

export default {
  components: {
    Contact,
    JSection
  }
};
</script>
