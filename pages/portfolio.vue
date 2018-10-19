<template>
  <nuxt-child/>
</template>

<script>
import { DISQUS_SCRIPT_URL } from "~/assets/js/globals";

export default {
  head: {
    script: [
      {
        src: DISQUS_SCRIPT_URL + "/count.js",
        async: "",
        id: "dsq-count-scr"
      }
    ]
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>
