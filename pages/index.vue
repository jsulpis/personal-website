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
import About from "~/components/About.vue";
import Drawer from "~/components/Drawer.vue";
import Experiences from "~/components/Experiences.vue";
import Education from "~/components/Education.vue";
import Skills from "~/components/Skills.vue";
import Certificates from "~/components/Certificates.vue";
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
