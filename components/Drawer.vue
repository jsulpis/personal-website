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
        :to="nuxtLinks ? item.to : ''"
        @click="!nuxtLinks ? $vuetify.goTo(item.to, options) : '';drawer = !drawer;" 
        exact
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
    
      <a v-if="backLink" href="/" id="drawer-backlink">Site principal</a>
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
    color: String,
    backLink: Boolean
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
  },
  computed: {
    // A helper property to know whether the links are anchors or other pages
    nuxtLinks() {
      return this.items[0].to.startsWith("/");
    }
  }
};
</script>