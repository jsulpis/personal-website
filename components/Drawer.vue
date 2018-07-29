<template>
  <div>
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" disable-resize-watcher app>
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
        @click="$vuetify.goTo('#' + item.to, options); drawer = !drawer" 
        exact>
          <!-- <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action> -->

          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- TOOLBAR -->
    <v-toolbar 
    class="hidden-md-and-up" 
    :dark="dark" 
    :fixed="fixed" 
    :flat="flat" 
    :color="color">
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>

  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    dark: Boolean,
    fixed: Boolean,
    flat: Boolean,
    color: String
  },
  data() {
    return {
      drawer: false,
      options: {
        duration: 400,
        offset: 0,
        easing: "easeInOutCubic"
      }
    };
  }
};
</script>