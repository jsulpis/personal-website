<template>
  <div>
    <drawer
    :items="items"
    :dark=false
    :fixed=true
    :flat=false
    :showOnLargeScreens=false
    color=""
    :backLink=true />
    <div id="hide-on-load">
      <about/>
      <experiences/>
    </div>
    <education/>
    <skills/>
    <!-- Certificates hidden for now -->
    <!-- <certificates/> -->
    <contact/>
    <my-footer/>
  </div>
</template>

<script>
import About from "~/components/resume/About.vue";
import Drawer from "~/components/Drawer.vue";
import Experiences from "~/components/resume/Experiences.vue";
import Education from "~/components/resume/Education.vue";
import Skills from "~/components/resume/Skills.vue";
//import Certificates from "~/components/resume/Certificates.vue";
import Contact from "~/components/resume/Contact.vue";
import MyFooter from "~/components/MyFooter.vue";

export default {
  layout: "light",
  components: {
    About,
    Drawer,
    Experiences,
    Education,
    Skills,
    //Certificates,
    Contact,
    MyFooter
  },
  data() {
    return {
      items: [
        {
          title: "A propos",
          to: "#header-wrapper",
          icon: "account_circle"
        },
        {
          title: "Experiences",
          to: "#experiences",
          icon: "work"
        },
        {
          title: "Formation",
          to: "#studies",
          icon: "fas fa-graduation-cap"
        },
        {
          title: "Compétences",
          to: "#skills",
          icon: "fas fa-list-alt"
        },
        // {
        //   title: "Certifications",
        //   to: "#certificates",
        //   icon: "fas fa-certificate"
        // },
        {
          title: "Contact",
          to: "#contact",
          icon: "mdi-amazon"
        }
      ]
    };
  } /*,
  mounted() {
    $(function() {
      $("a").each((i, val) => $(val).prop("target", "_blank"));
    });
  }*/
};
</script>

<style lang="scss">
@import "~assets/scss/resume/main.scss";
</style>
