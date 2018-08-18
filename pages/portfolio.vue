<template>
    <div class="page-content">
      <nuxt-child/>
    </div>
</template>

<script>
export default {
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/portfolio/main.scss";
</style>