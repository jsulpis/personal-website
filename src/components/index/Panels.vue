<template>
  <section id="home-panels">
    <panel v-for="panel in panels" :key="panel.title" :panel="panel"></panel>
  </section>
</template>

<script>
import Panel from "./Panel";

export default {
  props: { panels: Array },
  components: {
    Panel
  }
};
</script>

<style>
#home-panels {
  margin-bottom: -3rem;
}
</style>
