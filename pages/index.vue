<template>
  <div>
    <drawer/>
    <about/>
    <experiences/>
    <studies/>
    <skills/>
    <certificates/>
    <contact/>
    <custom-footer/>
  </div>
</template>

<script>
import About from "~/components/About.vue";
import Drawer from "~/components/Drawer.vue";
import Experiences from "~/components/Experiences.vue";
import Studies from "~/components/Studies.vue";
import Skills from "~/components/Skills.vue";
import Certificates from "~/components/Certificates.vue";
import Contact from "~/components/Contact.vue";
import CustomFooter from "~/components/CustomFooter.vue";

export default {
  components: {
    About,
    Drawer,
    Experiences,
    Studies,
    Skills,
    Certificates,
    Contact,
    CustomFooter
  }
};
</script>