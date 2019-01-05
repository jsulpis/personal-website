<template>
  <nuxt-child/>
</template>

<script>
export default {
  mounted() {
    $(".hide-on-render").addClass("show");
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

