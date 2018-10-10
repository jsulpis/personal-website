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
