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
          <!-- <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action> -->

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
    color="transparent">
      <v-toolbar-items id="toolbar-items" class="hidden-sm-and-down">
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
        class="hidden-md-and-up"
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
  },
  computed: {
    // A helper property to know whether the links are anchors or other pages
    nuxtLinks() {
      return this.items[0].to.startsWith("/");
    }
  }
};
</script>
