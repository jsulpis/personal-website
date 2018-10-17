<template>
  <div>
    <!-- DRAWER -->
    <v-navigation-drawer
    right
    v-model="drawer"
    disable-resize-watcher
    app>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="/img/avatar.jpeg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Julien Sulpis</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <!-- LIST -->
      <v-list>
        <v-divider />
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

  .v-btn {
    text-transform: initial; // Remove default capital letters
  }
}
</style>
