<template>
  <div>
    <!-- DRAWER -->
    <v-navigation-drawer
    right
    v-model="drawer"
    disable-resize-watcher
    app>
      <!-- LIST -->
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title class="drawer-main-title">Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        @click="drawer = !drawer;"
        nuxt>
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <!-- TOOLBAR -->
    <v-toolbar
    flat
    absolute
    color="transparent">
      <v-toolbar-items class="toolbar-items hidden-xs-only">
        <v-layout align-start justify-center row fill-height>
          <v-btn
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            :ripple="false"
            class="toolbar-items__btn"
            active-class="primary--text"
            flat>{{item.title}}</v-btn>
        </v-layout>
      </v-toolbar-items>
      <v-spacer></v-spacer>
        <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click="drawer = !drawer" />
    </v-toolbar>

  </div>
</template>

<script>
export default {
  props: {
    items: Array
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style lang="scss">
.toolbar-items {
  width: 100%;
  .toolbar-items__btn {
    text-transform: initial; // Remove default capital letters
  }
}

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
</style>
