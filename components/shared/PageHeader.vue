<template>
  <v-card dark class="page-header">
    <v-card-text>
      <h1>{{ title }}</h1>
      <p>
        <slot></slot>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import { StringFormatter } from "~/assets/js/utils";

export default {
  data() {
    return {
      title: ""
    };
  },
  beforeMount() {
    this.title = StringFormatter.beautifyWord(
      this.$route.path.split("/").slice(-1)[0]
    );
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
  box-shadow: 0px 4px 10px -5px rgba(255, 255, 255, 0.2) inset,
    0px -3px 10px -5px rgba(255, 255, 255, 0.3);

  h1 {
    @include font-title;
  }

  p {
    margin: 0 0 0.5em 0;
    font-size: 14px;
    opacity: 0.84;
  }
}
</style>
