<template>
  <div>
    <page-header class="hide-on-render" :title="title" :description="pageDescription"></page-header>
    <nuxt-child @update-header="updateHeader($event)"/>
  </div>
</template>

<script>
import { DISQUS_SCRIPT_URL } from "~/assets/js/globals";
import PageHeader from "~/components/shared/PageHeader.vue";

export default {
  components: { PageHeader },
  head() {
    return {
      script: [
        {
          src: DISQUS_SCRIPT_URL + "/count.js",
          async: "",
          id: "dsq-count-scr"
        }
      ]
    };
  },
  data() {
    return {
      title: "",
      pageDescription: ""
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  },
  methods: {
    updateHeader(newDescription) {
      this.title = newDescription.title;
      this.pageDescription = newDescription.description;
    }
  }
};
</script>

<style lang="scss">
.container--card {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  border-radius: 0 0 8px 8px;
  padding: 1.5rem;

  @media only screen and (min-width: 600px) {
    padding: 3rem;
    padding-top: 1rem;
  }

  @media only screen and (min-width: 1904px) {
    max-width: 1185px !important;
  }
}
</style>

