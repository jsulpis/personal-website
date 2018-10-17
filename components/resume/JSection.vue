<template>
  <section :id="id">
    <v-container>
      <h2 class="section-title">{{title}}</h2>
      <v-card light>
        <slot></slot>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  props: { id: String, title: String }
};
</script>

<style lang="scss">
@import "@material/typography/mdc-typography";

.section-title {
  @include mdc-typography(headline5);
  margin: 1rem auto 2rem auto;

  &::after {
    content: "";
    margin: 0.75rem auto;
    display: block;
    width: 5rem;
    border-bottom: 3px solid;
  }
}
</style>
