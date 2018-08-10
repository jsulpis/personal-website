<template>
  <div>
    <drawer :items="items" :dark=true :fixed=false :flat=true color="transparent" />

    <h1 id="fixed-catchphrase">Je suis</h1>

    <div id="fullpage">

      <home :items="items" title="Julien Sulpis">
        Bienvenue ! Vous trouverez sur ce site divers contenus artistiques et techniques que je souhaite partager.
      </home>

      <panel title="développeur" subtitle="passionné">
        J'ai conçu et développé ce site dont vous pouvez trouver le code source, ainsi que celui de mes autres projets, sur
        <a href='https://github.com/jsulpis'>GitHub</a>.
      </panel>

      <panel title="ingénieur" subtitle="généraliste">
        Je m'intéresse à la Science en général, à la technologie et l'informatique en particulier. Retrouvez mon CV sur
        <nuxt-link to='/resume'>cette page</nuxt-link> pour en savoir plus.
      </panel>

      <panel title="artiste" subtitle="amateur">
        Je développe mes compétences de musicien, artiste 3D et infographiste sur mon temps libre. Retrouvez mes créations sur mon
        <nuxt-link to="/portfolio">portfolio</nuxt-link>.
      </panel>
    </div>
  </div>
</template>

<script>
  import Drawer from "~/components/Drawer.vue";
  import Home from "~/components/index/Home.vue";
  import Panel from "~/components/index/Panel.vue";

  export default {
    head() {
      return {
        script: [
          { src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.js" },
          { src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.extensions.min.js"}
        ],
        link: [
          { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.css" }
        ]
      }
    },
    components: {
      Drawer,
      Home,
      Panel
    },
    data() {
      return {
        items: [
          {
            title: "Accueil",
            to: "/",
            icon: "account_circle"
          },
          {
            title: "Portfolio",
            to: "/portfolio",
            icon: "work"
          },
          {
            title: "Ressources",
            to: "/ressources",
            icon: "fas fa-graduation-cap"
          },
          {
            title: "Contact",
            to: "/contact",
            icon: "mdi-amazon"
          }
        ]
      };
    },
    mounted() {
      new fullpage('#fullpage', {
        autoScrolling: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        verticalCentered: true,
        navigation: true,
        scrollingSpeed: 600,
        dragAndMove: true,
        onLeave() {
          $("#fixed-catchphrase").fadeOut("fast");
          $("#fixed-catchphrase").fadeIn();
        }
      });
    }
  };
</script>

<style lang="scss">
  @import "~assets/scss/home/main.scss";
</style>