<template>
  <v-card dark class="page-header below-banner" v-if="validHeader">
    <v-card-text>
      <h1>{{ title }}</h1>
      <p v-html="description"></p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  },
  computed: {
    validHeader() {
      return this.title != "" || this.description != "";
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

.page-header {
  width: 100%;
  padding: 0;
  margin: 0;
  border-radius: 0;

  h1 {
    @include font-title;
  }

  p {
    margin: 0.5em auto;
    font-size: 14px;
    opacity: 0.84;
    max-width: 800px;
  }
}
</style>
