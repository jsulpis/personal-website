<template>
  <div
    wrap
    class="panel"
    :style="`background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.6)), url(${imgUrl})`"
  >
    <v-layout class="panel_layout" column justify-center align-center>
      <h2 class="panel_title">{{ title }}</h2>
      <div class="panel_description">
        <slot></slot>
      </div>
      <v-btn large dark round outline :to="btnLink">{{btnText}}</v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    icon: String,
    btnText: String,
    btnLink: String
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";

.panel {
  color: $material-color-grey-50;
  height: 100vh;
  width: 100%;
  max-height: 500px;
  background-size: cover;
}

.panel_layout {
  height: 100%;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
}

.panel_icon {
  border-radius: 50%;
  border: 4px solid;
  padding: 20px;
  transform: scale(1.2);
  margin: auto;

  .v-icon {
    height: 50px;
    width: 50px;
    font-size: 50px;
    opacity: 0.8;
  }
}

.panel_title {
  font-size: 2rem;
  font-weight: bold;
  padding: 0.25rem 0.75rem;
}

.panel_description {
  max-width: 600px;
  font-size: 1.2em;
  line-height: 1.3em;
  padding: 1em;
}
</style>
