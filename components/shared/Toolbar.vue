<template>
  <v-toolbar dark flat absolute color="transparent" class="toolbar">
    <v-toolbar-items class="toolbar-items hidden-xs-only">
      <v-layout align-start justify-center row fill-height>
        <toolbar-btn v-for="(item, i) in items" :key="i" :to="item.to" :title="item.name"/>
      </v-layout>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-sm-and-up" @click="$emit('side-icon-clicked')"/>
  </v-toolbar>
</template>

<script>
import VMenu from "vuetify/es5/components/VMenu";

import ToolbarBtn from "./ToolbarBtn";

export default {
  props: { items: Array },
  components: { VMenu, ToolbarBtn }
};
</script>

<style lang="scss">
.toolbar {
  text-shadow: 0 0 1px black;
  @media only screen and (min-width: 600px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), transparent);
  }
}

.toolbar-items {
  width: 100%;
  .toolbar-items__btn {
    font-size: 1rem;
    text-transform: initial; // Remove default capital letters
  }
}

.v-menu__activator--active {
  background-color: #212121;
}
</style>
