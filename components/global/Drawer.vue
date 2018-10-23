<template>
<v-navigation-drawer
  dark
  right
  v-model="open"
  disable-resize-watcher
  app>
  <v-list>
    <v-list-tile>
      <v-list-tile-content>
        <v-list-tile-title class="drawer-main-title">Menu</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile to="/">
      <v-list-tile-title class="text-xs-center">Accueil</v-list-tile-title>
    </v-list-tile>

    <v-list-group v-model="groupActive">
      <v-list-tile slot="activator" to="/portfolio">
        <v-list-tile-title class="text-xs-center">
          <span class="drawer-portfolio">Portfolio</span>
        </v-list-tile-title>
      </v-list-tile>
      <v-list-tile to="/portfolio/design">
      <v-list-tile-title class="text-xs-center">Design</v-list-tile-title>
    </v-list-tile>
    <v-list-tile to="/portfolio/code">
      <v-list-tile-title class="text-xs-center">Code</v-list-tile-title>
    </v-list-tile>
    </v-list-group>

    <v-list-tile to="/resume">
      <v-list-tile-title class="text-xs-center">CV</v-list-tile-title>
    </v-list-tile>

    <v-list-tile to="/contact">
      <v-list-tile-title class="text-xs-center">Contact</v-list-tile-title>
    </v-list-tile>
  </v-list>

</v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      groupActive: false
    };
  },
  mounted() {
    this.$parent.$on("toggle-drawer", () => (this.open = !this.open));
    $(".v-list__tile").on("click", () => (this.groupActive = false));
  }
};
</script>

<style lang="scss">
.drawer-main-title {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  overflow: visible;

  &::after {
    content: "";
    margin: 0.25rem auto;
    display: block;
    width: 5rem;
    border-bottom: 3px solid;
  }
}
.drawer-portfolio {
  position: absolute;
}

.v-list__group:before,
.v-list__group:after {
  left: 0;
}
</style>
