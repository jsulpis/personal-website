<template>
  <nuxt-child/>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: "//localhost-ecfgq3nt0m.disqus.com/count.js",
        async: "",
        id: "dsq-count-scr"
      }
    ]
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/portfolio/main.scss";
</style>
