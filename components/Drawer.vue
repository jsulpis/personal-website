<template>
  <div>
    <!-- DRAWER -->
    <v-navigation-drawer v-model="drawer" app>
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
        items: [{
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
    },
    beforeMount() {
      console.log(
        "The drawer appears when hiding the developper window on Chrome. It seems to be an issue with Vuetify. Just click on one of the tabs to hide it."
      );
      // STICKY TAB BAR
      const navbar = $("#tab-bar");
      const firstSection = document.querySelector("#experiences");

      function convertRemToPixels(rem) {
        return (
          rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
        );
      }

      // Get the offset position of the navbar
      // 48px is the height of the tabs
      const sticky =
        document.querySelector("#profile").offsetHeight +
        convertRemToPixels(10) -
        48;

      // Add the sticky class to the header when we reach its scroll position. Remove "sticky" when we leave the scroll position.
      window.onscroll = function () {
        const offsetY = window.pageYOffset;
        // Set the sticky tab bar
        if (offsetY >= sticky) {
          navbar.addClass("sticky");
          navbar.addClass("mdc-elevation--z4");
          firstSection.classList.add("push");
        } else {
          navbar.removeClass("sticky");
          navbar.removeClass("mdc-elevation--z4");
          firstSection.classList.remove("push");
        }
      };
    }
  };
</script>