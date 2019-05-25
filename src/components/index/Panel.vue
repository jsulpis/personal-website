<template>
  <div
    class="panel"
    :id="panel.buttonLink.slice(1)"
    :style="`background-image: linear-gradient(rgba(0,0,0,0), rgba(0, 0, 0, 0.6)), url(${panel.backgroundImage})`"
  >
    <v-layout class="panel_layout" column justify-center align-center>
      <h2 class="panel_title">{{ panel.title }}</h2>
      <div class="panel_description" v-html="markdownDescription"></div>
      <v-btn large dark round outline :to="panel.buttonLink">{{panel.buttonText}}</v-btn>
    </v-layout>
  </div>
</template>

<script>
const md = require("markdown-it")({ html: true });

export default {
  props: {
    panel: Object
  },
  data() {
    return {
      markdownDescription: md.render(this.panel.description)
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";

.panel {
  color: $material-color-grey-50;
  height: 100vh;
  width: 100%;
  background-size: cover;

  @media screen and (min-width: 600px) {
    max-height: 500px;
  }
}
.panel_layout {
  height: 100%;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.6);
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
