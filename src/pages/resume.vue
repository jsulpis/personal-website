<template>
  <div class="pa-0">
    <about
      :title="resume.title"
      :jobTitle="resume.jobTitle"
      :location="resume.location"
      :description="resume.description"
    ></about>
    <j-tabs/>
    <experiences :jobPositions="resume.jobPositions"/>
    <education/>
    <skills :skills="resume.skills"/>
  </div>
</template>

<script>
import About from "~/components/resume/about/About.vue";
import JTabs from "~/components/resume/shared/JTabs.vue";
import Experiences from "~/components/resume/experience/Experiences.vue";
import Education from "~/components/resume/education/Education.vue";
import Skills from "~/components/resume/skills/Skills.vue";
import { makePageTitle } from "~/utils/page";
import { makePageMetadata } from "~/utils/page";

export default {
  components: {
    About,
    JTabs,
    Experiences,
    Education,
    Skills
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: makePageTitle("CV"),
      pageUrl: `${process.env.BASE_URL}${this.$route.fullPath}`,
      description: "Mon CV en ligne",
      resume: require("~/static/data/remote/pages/resume.json")
    };
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
