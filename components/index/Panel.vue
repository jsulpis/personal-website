<template>
  <section 
    :class="'panel ' + title | toDataSectionFormat" 
    :data-section-name="title | toDataSectionFormat">
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
    filters: {
      toDataSectionFormat(value) {
        return value.replace("é", "e");
      }
    }
  };
</script>