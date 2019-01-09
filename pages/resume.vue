<template>
  <div class="grey lighten-3 hide-on-render pa-0">
    <about
      :title="resume.title"
      :jobTitle="resume.jobTitle"
      :location="resume.location"
      :description="resume.description"
    ></about>
    <j-tabs/>
    <experiences :jobPositions="resume.jobPositions" @experiences-loaded="showHiddenSection"/>
    <education/>
    <skills/>
    <contact/>
  </div>
</template>

<script>
import About from "~/components/resume/About.vue";
import JTabs from "~/components/resume/JTabs.vue";
import Drawer from "~/components/shared/Drawer.vue";
import Experiences from "~/components/resume/Experiences.vue";
import Education from "~/components/resume/Education.vue";
import Skills from "~/components/resume/Skills.vue";
import Contact from "~/components/resume/Contact.vue";

import ResumeService from "~/services/ResumeService";
import { makePageTitle } from "~/assets/js/globals.js";

export default {
  components: {
    About,
    JTabs,
    Drawer,
    Experiences,
    Education,
    Skills,
    Contact
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content: process.env.URL + this.$route.fullPath
        },
        {
          name: "description",
          property: "og:description",
          content: this.description
        }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("CV"),
      description:
        "Je suis un développeur passionné, orienté vers les technologies web et mobiles et soucieux de la qualité de mes réalisations. Je me forme en continu sur les technologies actuelles et les pratiques du Software Craftsmanship."
    };
  },
  asyncData() {
    return ResumeService.getResumeDocument().then(res => {
      return { resume: res };
    });
  },
  beforeMount() {
    this.$store.commit("resetHeaderContent");
  },
  methods: {
    showHiddenSection() {
      $(".hide-on-render").addClass("show");
    }
  }
};
</script>

<style>
/* Override Vuetify container width */
@media only screen and (min-width: 1904px) {
  section .container {
    max-width: 1185px !important;
  }
}
</style>
