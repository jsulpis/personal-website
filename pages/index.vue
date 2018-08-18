<template>
  <div>
    <h1 id="fixed-catchphrase" class="hide-on-render">Je suis</h1>

    <div id="fullpage">

      <panel title="Julien Sulpis">
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

      <my-footer class="section fp-auto-height hide-on-render"/>
    </div>
  </div>
</template>

<script>
import Panel from "~/components/index/Panel.vue";
import MyFooter from "~/components/MyFooter.vue";

function loadImage(id) {
  $("#" + id).css("background-image", "url('/img/background/" + id + ".jpg')");
}

export default {
  components: {
    Panel,
    MyFooter
  },
  beforeMount() {
    // Override some default style
    $(".v-toolbar").attr(
      "style",
      "position: fixed; z-index: 5; background-color: transparent !important; box-shadow: 0 0;"
    );
    $("#push-top").css("display", "none");
  },
  mounted() {
    // Initialize the panel components
    new fullpage("#fullpage", {
      autoScrolling: true,
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
      navigation: true,
      scrollingSpeed: 600,
      onLeave(source, destination, direction) {
        if (destination.item.id != "footer" && source.item.id != "footer") {
          // ... load the next image and display the section
          loadImage(destination.item.id);

          // When leaving a section, animate the catchphrase...
          $("#fixed-catchphrase").css("opacity", "0");
          setTimeout(() => $("#fixed-catchphrase").css("opacity", "1"), 300);
        }
        destination.item.classList.add("show");
      }
    });

    // Show the first panel
    loadImage("Sulpis");
    $("#Sulpis").addClass("show");
    $("#fixed-catchphrase").addClass("show");
    $("#index-drawer").addClass("show");

    // Override click listeners on the navigation dots because they don't work
    // when leaving the page and coming back
    $("#fp-nav a").each((i, link) =>
      link.addEventListener("click", () => {
        fullpage_api.moveTo(i + 1);

        // If we click on the last navigation dot (footer), load the artist section
        if (link === $("#fp-nav li").last()[0].lastChild) {
          loadImage("artiste");
          $("#artiste").addClass("show");
        }
      })
    );
  },
  beforeDestroy() {
    // Destroy all the fullPage.js components
    $(".hide-on-render").removeClass("show");
    setTimeout(function() {
      fullpage_api.destroy("all");
    }, 300);
    $("#footer").removeClass("section");

    // Reset the style to default
    $(".v-toolbar").attr("style", "");
    $("#push-top").css("display", "block");
  }
};
</script>

<style lang="scss">
@import "~assets/scss/index/main.scss";
</style>