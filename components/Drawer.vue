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
    <v-toolbar class="hidden-md-and-up" fixed>
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      options: {
        duration: 400,
        offset: 0,
        easing: "easeInOutCubic"
      },
      items: [
        {
          title: "A propos",
          to: "header-wrapper",
          icon: "account_circle"
        },
        {
          title: "Experiences",
          to: "experiences",
          icon: "work"
        },
        {
          title: "Formation",
          to: "studies",
          icon: "fas fa-graduation-cap"
        },
        {
          title: "Compétences",
          to: "skills",
          icon: "fas fa-list-alt"
        },
        {
          title: "Certifications",
          to: "certificates",
          icon: "fas fa-certificate"
        },
        {
          title: "Contact",
          to: "contact",
          icon: "mdi-amazon"
        }
      ]
    };
  }
};
</script>