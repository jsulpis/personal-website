<template>
<v-toolbar
  dark
  flat
  absolute
  color="transparent"
  class="toolbar">
    <v-toolbar-items class="toolbar-items hidden-xs-only">
      <v-layout align-start justify-center row fill-height>
        <toolbar-btn to="/" title="Accueil"/>
        <v-menu dark open-on-hover bottom offset-y>
          <v-btn
            slot="activator"
            class="toolbar-items__btn"
            active-class="primary--text"
            to="/portfolio"
            flat>
            Portfolio
          </v-btn>
          <v-list class="pa-0">
            <v-list-tile to="/portfolio/design">
              <v-list-tile-title>Design</v-list-tile-title>
            </v-list-tile>
            <v-list-tile to="/portfolio/code">
              <v-list-tile-title>Code</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <toolbar-btn to="/resume" title="CV"/>
        <toolbar-btn to="/contact" title="Contact"/>
      </v-layout>
    </v-toolbar-items>
    <v-spacer></v-spacer>
      <v-toolbar-side-icon
      class="hidden-sm-and-up"
      @click="$emit('side-icon-clicked')" />
  </v-toolbar>
</template>

<script>
import VMenu from "vuetify/es5/components/VMenu";

import ToolbarBtn from "./ToolbarBtn";

export default {
  components: { VMenu, ToolbarBtn }
};
</script>

<style lang="scss">
.toolbar {
  @media only screen and (min-width: 600px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent);
  }
}

.toolbar-items {
  width: 100%;
  .toolbar-items__btn {
    text-transform: initial; // Remove default capital letters
  }
}

.v-menu__activator--active {
  background-color: #212121;
}
</style>
