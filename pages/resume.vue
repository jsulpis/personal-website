<template>
  <v-card light color="grey lighten-4" class="pa-0">
    <!-- Hide the top of the page until the experiences section is rendered -->
    <div class="hide-on-render">
      <about>{{ description }}</about>
      <j-tabs/>
      <experiences/>
    </div>
    <education/>
    <skills/>
    <contact/>
  </v-card>
</template>

<script>
import About from "~/components/resume/About.vue";
import JTabs from "~/components/resume/JTabs.vue";
import Drawer from "~/components/global/Drawer.vue";
import Experiences from "~/components/resume/Experiences.vue";
import Education from "~/components/resume/Education.vue";
import Skills from "~/components/resume/Skills.vue";
import Contact from "~/components/resume/Contact.vue";

import { SITE_ROOT_URL, makePageTitle } from "~/assets/js/globals.js";

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
        { name: "og:title", content: this.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: SITE_ROOT_URL + "/resume" },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      title: makePageTitle("CV"),
      description:
        "Je suis un développeur passionné, orienté vers les technologies web et mobiles et soucieux de la qualité de mes réalisations. Je me forme en continu sur les technologies actuelles et les pratiques du Software Craftsmanship."
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
