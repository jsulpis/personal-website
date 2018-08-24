<template>
  <div>
    <h1 id="fixed-catchphrase" class="hide-on-render">Je suis</h1>

    <div id="fullpage">

      <panel title="Julien Sulpis">
        Bienvenue sur mon site !
        <br>Il est encore en développement, vous y croiserez peut-être quelques bizarreries...
      </panel>

      <panel title="un développeur" subtitle="passionné">
        Vous pouvez retrouver le code de mes divers projets - ce site par exemple - sur
        <a
          href='https://github.com/jsulpis'>GitHub</a>.
      </panel>

      <panel title="un ingénieur" subtitle="généraliste">
        Ou encore touche-à-tout polyvalent, spécialité informatique. Retrouvez mon CV sur
        <a
          href='/resume'>cette page</a> pour en savoir plus.
      </panel>

      <panel title="un artiste" subtitle="amateur">
        Musicien et infographiste à mes heures perdues, je crée des choses plus ou moin jolies que vous pouvez retrouver sur mon <nuxt-link to="/portfolio">portfolio</nuxt-link>.
      </panel>

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
        // ... load the next image and display the section
        loadImage(destination.item.id);

        // When leaving a section, animate the catchphrase...
        $("#fixed-catchphrase").css("opacity", "0");
        setTimeout(() => $("#fixed-catchphrase").css("opacity", "1"), 300);

        destination.item.classList.add("show");
      }
    });

    // Show the first panel
    loadImage("sulpis");
    $("#sulpis").addClass("show");
    $("#fixed-catchphrase").addClass("show");
    $("#index-drawer").addClass("show");

    // Override click listeners on the navigation dots because they don't work
    // when leaving the page and coming back
    $("#fp-nav a").each((i, link) =>
      link.addEventListener("click", () => {
        fullpage_api.moveTo(i + 1);
      })
    );
  },
  beforeDestroy() {
    // Destroy all the fullPage.js components
    $(".hide-on-render").removeClass("show");
    setTimeout(function() {
      fullpage_api.destroy("all");
    }, 300);

    // Reset the style to default
    $(".v-toolbar").attr("style", "");
    $("#push-top").css("display", "block");
  }
};
</script>

<style lang="scss">
@import "~assets/scss/index/main.scss";
</style>
