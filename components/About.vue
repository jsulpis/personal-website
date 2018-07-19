<template>
    <div id="header-wrapper" >
    <div id="particles"></div>

    <div id="profile">
      <div class="avatar">
        <img class="rounded-circle" src="/img/avatar.jpeg" alt="photo_profile" />
      </div>
      <h1 class="mdc-typography--headline5">Julien Sulpis</h1>
      <h2 class="mdc-typography--subtitle1">Stagiaire développeur Android</h2>
      <h3 class="mdc-typography--body2">SOLUTEC &#x2022; École des Mines de Saint-Étienne<br>Région de Lyon, France</h3>
      <p class="social">
        <a href="https://www.linkedin.com/in/julien-sulpis" @mouseover="color1='grey darken-3'" @mouseleave="color1='inherit'">
          <v-icon :color="color1">fab fa-linkedin-in</v-icon>
        </a>
        <a class="ma-3" href="https://github.com/jsulpis" @mouseover="color2='grey darken-3'" @mouseleave="color2='inherit'">
          <v-icon :color="color2">fab fa-github</v-icon>
        </a>
        <a href="https://twitter.com/JulienSulpis" @mouseover="color3='grey darken-3'" @mouseleave="color3='inherit'">
          <v-icon :color="color3">fab fa-twitter</v-icon>
        </a>
      </p>

      <p id="description" class="mdc-typography--body1">
        <v-icon small>fas fa-quote-left</v-icon>
        Développeur généraliste passionné et curieux, toujours à la recherche de technologies à explorer. <br>Gros consommateur de cours en ligne et chasseur de certifications.
        <v-icon small>fas fa-quote-right</v-icon>
      </p> 


      <v-tabs
      v-model="activeTab"
      id="dynamic-toolbar"
      class="hidden-sm-and-down"
      centered
      fixed-tabs
    >
      <v-tab
        v-for="(item, index) in items"
        class="tab-item "
        :key="index"
        ripple
        @click="$vuetify.goTo('#' + item.to, options)"
      >
       {{ item.title }}

      </v-tab>
      </v-tabs>
    </div>

  </div>
</template>

<script>
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default {
  data() {
    return {
      color1: "inherit",
      color2: "inherit",
      color3: "inherit",
      activeTab: 0,
      options: {
        duration: 400,
        offset: 0,
        easing: "easeInOutQuint"
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
  },
  methods: {
    onScroll(e) {
      const offsetTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const sticky =
        document.querySelector("#profile").offsetHeight +
        convertRemToPixels(10) -
        48;

      // update the active tab
      if (offsetTop < sticky) {
        this.activeTab = 0;
      } else if (offsetTop < document.querySelector("#studies").offsetTop - 48) {
        this.activeTab = 1;
      } else if (offsetTop < document.querySelector("#skills").offsetTop - 48) {
        this.activeTab = 2;
      } else if (offsetTop < document.querySelector("#certificates").offsetTop) {
        this.activeTab = 3;
      } else if (offsetTop < document.querySelector("#contact").offsetTop) {
        this.activeTab = 4;
      } else {
        this.activeTab = 5;
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
