<template>
  <div id="header-wrapper">
    <div id="particles"></div>

    <!-- Backlink to the main site -->
    <a href="/" id="top-backlink">Site principal</a>

    <!-- PROFILE -->
    <div id="profile">
      <div class="avatar">
        <img class="rounded-circle" src="/img/avatar.jpeg" alt="photo_profile" />
      </div>
      <h1>Julien Sulpis</h1>
      <h2>Stagiaire développeur Android</h2>
      <h3>SOLUTEC &#x2022; École des Mines de Saint-Étienne
        <br>Région de Lyon, France</h3>
      <!-- Social links -->
      <p class="social">
        <a href="https://www.linkedin.com/in/julien-sulpis"
        @mouseover="color1='grey darken-3'" @mouseleave="color1='inherit'">
          <v-icon :color="color1">fab fa-linkedin-in</v-icon>
        </a>
        <a class="ma-3" href="https://github.com/jsulpis"
        @mouseover="color2='grey darken-3'" @mouseleave="color2='inherit'">
          <v-icon :color="color2">fab fa-github</v-icon>
        </a>
        <a href="https://twitter.com/JulienSulpis"
        @mouseover="color3='grey darken-3'" @mouseleave="color3='inherit'">
          <v-icon :color="color3">fab fa-twitter</v-icon>
        </a>
      </p>

      <!-- Description -->
      <p id="description">
        <v-icon small>fas fa-quote-left</v-icon>
        Développeur généraliste passionné et curieux, insatiable de technologies à explorer et de méthodes pour progresser.
        <v-icon small>fas fa-quote-right</v-icon>
      </p>

      <!-- Tabs -->
      <v-tabs
      v-model="activeTab"
      id="tab-bar"
      class="hidden-sm-and-down"
      centered
      fixed-tabs>
        <v-tab
        v-for="(item, index) in items"
        class="tab-item "
        :key="index"
        ripple
        @click="$vuetify.goTo('#' + item.to, options); tabClickedTime = new Date().getTime()">
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import * as VTabs from "vuetify/es5/components/VTabs";

if (process.browser) {
  require("particles.js/particles");
  require("~/assets/js/particles.config.js");
}

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default {
  components: {
    ...VTabs
  },
  data() {
    return {
      color1: "inherit",
      color2: "inherit",
      color3: "inherit",
      activeTab: 0,
      tabClickedTime: 0,
      options: {
        duration: 400,
        offset: 0,
        easing: "easeInOutQuint"
      },
      sticky: 0,
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
  },
  methods: {
    onScroll(e) {
      const offsetTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // STICKY TAB BAR
      const navbar = $("#tab-bar");
      const firstSection = document.querySelector("#experiences");

      // Set the sticky tab bar
      if (offsetTop >= this.sticky) {
        navbar.addClass("sticky");
        navbar.addClass("mdc-elevation--z4");
        firstSection.classList.add("push");
      } else {
        navbar.removeClass("sticky");
        navbar.removeClass("mdc-elevation--z4");
        firstSection.classList.remove("push");
      }

      // "Debouncer" to freeze the active tab when clicking on a tab
      if (new Date().getTime() - this.tabClickedTime > 1000) {
        // update the active tab
        if (offsetTop < this.sticky) {
          this.activeTab = 0;
        } else if (
          offsetTop <
          document.querySelector("#studies").offsetTop - 48
        ) {
          this.activeTab = 1;
        } else if (
          offsetTop <
          document.querySelector("#skills").offsetTop - 48
        ) {
          this.activeTab = 2;
        } else if (
          offsetTop < document.querySelector("#certificates").offsetTop
        ) {
          this.activeTab = 3;
        } else if (offsetTop < document.querySelector("#contact").offsetTop) {
          this.activeTab = 4;
        } else {
          this.activeTab = 5;
        }
      }
    }
  },
  mounted() {
    this.sticky =
      document.querySelector("#profile").offsetHeight +
      convertRemToPixels(10) -
      48;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
