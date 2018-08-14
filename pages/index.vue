<template>
  <div>
    <h1 id="fixed-catchphrase">Je suis</h1>

    <div id="fullpage">

      <panel class="hide-on-load" title="Julien Sulpis">
        Bienvenue sur ce site !
        <br>Vous y trouverez divers contenus artistiques et techniques que je souhaite partager.
      </panel>

      <panel title="un développeur" subtitle="passionné">
        J'ai conçu et développé ce site dont vous pouvez trouver le code source, ainsi que celui de mes autres projets, sur
        <a
          href='https://github.com/jsulpis'>GitHub</a>.
      </panel>

      <panel title="un ingénieur" subtitle="généraliste">
        Je m'intéresse à la Science en général, à la technologie et l'informatique en particulier. Retrouvez mon CV sur
        <a
          href='/resume'>cette page</a> pour en savoir plus.
      </panel>

      <panel title="un artiste" subtitle="amateur">
        Je développe mes compétences de musicien, artiste 3D et infographiste sur mon temps libre. Retrouvez mes créations sur mon
        <nuxt-link to="/portfolio">portfolio</nuxt-link>.
      </panel>
    </div>
  </div>
</template>

<script>
  import Panel from "~/components/index/Panel.vue";

  function loadImage(id) {
    $("#" + id).css("background-image", "url('/img/background/" + id + ".jpg')");
  }

  export default {
    components: {
      Panel
    },
    data() {
      return {
        fullPage: null
      }
    },
    mounted() {
      // Initialize the panel components
      this.fullPage = new fullpage("#fullpage", {
        autoScrolling: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        navigation: true,
        scrollingSpeed: 600,
        onLeave(leavingSection, destination, direction) {
          // When leaving a section, animate the catchphrase...
          $("#fixed-catchphrase").css("opacity", "0");
          setTimeout(() => $("#fixed-catchphrase").css("opacity", "1"), 300);
          // ... load the next image and display the section
          loadImage(destination.item.id);
          destination.item.classList.add("show");
        }
      });
      // Show the first panel
      loadImage("Sulpis");
      $("#Sulpis").addClass("show");
      $("#fixed-catchphrase").addClass("show");
    },
    beforeDestroy() {
      const fp = this.fullPage;
      setTimeout(function() {fp.destroy('all')}, 300);
    }
  };
</script>

<style lang="scss">
  @import "~assets/scss/index/main.scss";
</style>