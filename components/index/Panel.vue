<template>
  <section 
    class="section" :id="id">
    <div class="inner">
      <div class="vertical-center">
        <h2 class="panel-title">un {{ title }}</h2>
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
        return this.title.replace("é", "e");
      }
    }
    // mounted() {
    //   $("#" + this.id).css("background-image", "url('/img/background/" + this.id + ".jpg')");
    // }
  };
</script>