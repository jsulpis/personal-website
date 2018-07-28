<template>
  <div>
    <drawer/>
    <about/>
    <experiences/>
    <education/>
    <skills/>
    <certificates/>
    <contact/>
    <custom-footer/>
  </div>
</template>

<script>
import About from "~/components/resume/About.vue";
import Drawer from "~/components/Drawer.vue";
import Experiences from "~/components/resume/Experiences.vue";
import Education from "~/components/resume/Education.vue";
import Skills from "~/components/resume/Skills.vue";
import Certificates from "~/components/resume/Certificates.vue";
import Contact from "~/components/Contact.vue";
import CustomFooter from "~/components/CustomFooter.vue";

export default {
  components: {
    About,
    Drawer,
    Experiences,
    Education,
    Skills,
    Certificates,
    Contact,
    CustomFooter
  },
  mounted() {
    $(function() {
      $("a").each((i, val) => $(val).prop("target", "_blank"));
    });
  }
};
</script>

<style lang="scss">
@import "~assets/scss/resume.scss";
</style>
