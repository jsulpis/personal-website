<template>
  <section :id="id">
    <v-container>
      <h2 class="section-title">{{title}}</h2>
      <v-card class="section-card" light>
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
.section-card {
  padding: 1.5rem;
}

.section-title {
  margin: 2rem auto;
  font-weight: 500;

  &::after {
    content: "";
    margin: 0.5rem auto;
    display: block;
    width: 5rem;
    border-bottom: 3px solid;
  }
}
</style>
