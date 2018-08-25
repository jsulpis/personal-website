<template>
  <section
    class="section hide-on-render background-image" :id="id">
    <div class="inner">
      <div class="vertical-center">
        <h2 class="panel-title">{{ title }}</h2>
        <h3 class="panel-subtitle">{{ subtitle }}</h3>
        <p class="panel-description"><slot></slot></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  },
  computed: {
    id() {
      return this.title
        .split(" ")[1]
        .toLowerCase()
        .replace("é", "e");
    }
  }
};
</script>
