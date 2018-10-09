<template>
  <div>
    <!-- Hide the top of the page until the experiences section is rendered -->
    <div id="hide-on-render">
      <drawer
      :items="items" />
      <about>{{ description }}</about>
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

import { ROOT_SITE_NAME, makePageTitle } from "~/assets/js/globals.js";

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
  head() {
    return {
      title: this.title,
      meta: [
        { name: "og:title", content: this.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: ROOT_SITE_NAME + "/resume" },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("CV"),
      description:
        "Développeur généraliste passionné et curieux, insatiable de technologies à explorer.",
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
