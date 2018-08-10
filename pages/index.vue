<template>
  <div>
    <drawer :items="items" :dark=true :fixed=false :flat=true color="transparent" />

    <h1 class="fixed-catchphrase">Je suis</h1>

    <home :items="items" :panelContent="panels[0]" />

    <panel title="développeur" subtitle="passionné">
      J'ai conçu et développé ce site dont vous pouvez trouver le code source, ainsi que celui de mes autres projets, sur <a href='https://github.com/jsulpis'>GitHub</a>.
    </panel>

    <panel title="ingénieur" subtitle="généraliste">
      Je m'intéresse à la Science en général, à la technologie et l'informatique en particulier. Retrouvez mon CV sur
      <nuxt-link
        to='/resume'>cette page</nuxt-link> pour en savoir plus.
    </panel>

    <panel title="artiste" subtitle="amateur">
      Je développe mes compétences de musicien, artiste 3D et infographiste sur mon temps libre. Retrouvez mes créations sur mon
      <nuxt-link to="/portfolio">portfolio</nuxt-link>.
    </panel>
  </div>
</template>

<script>
  import Drawer from "~/components/Drawer.vue";
  import Home from "~/components/index/Home.vue";
  import Panel from "~/components/index/Panel.vue";

  if (process.browser) {
    require("jquery-scrollify");
  }

  export default {
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
        ],
        panels: [
          {
            title: "Julien Sulpis",
            subtitle: "passionné",
            description:
              "Bienvenue ! Vous trouverez sur ce site divers contenus artistiques et techniques que je souhaite partager."
          },
          {
            title: "développeur",
            subtitle: "passionné",
            description:
              "J'ai conçu et développé ce site dont vous pouvez trouver le code source, ainsi que celui de mes autres projets, sur <a href='https://github.com/jsulpis'>GitHub</a>."
          },
          {
            title: "ingénieur",
            subtitle: "généraliste",
            description:
              "Je m'intéresse à la Science en général, à la technologie et l'informatique en particulier. Retrouvez mon CV sur <nuxt-link to=\"/resume\">cette page</nuxt-link> pour en savoir plus."
          },
          {
            title: "artiste",
            subtitle: "amateur",
            description:
              "Je développe mes compétences de musicien, artiste 3D et infographiste sur mon temps libre. Retrouvez mes créations sur mon portfolio."
          }
        ]
      };
    },
    mounted() {
      // Store the value because "this" will refer to another object below
      const panels = this.panels;
      $(function () {
        $.scrollify({
          section: ".panel",
          scrollbars: false,
          before: function (i, panels) {
            // Handle the fade in/out of the catchphrase
            // and the active element of the pagination
            $(".fixed-catchphrase").fadeOut("fast");

            const ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination")
              .find('a[href="#' + ref + '"]')
              .addClass("active");

            $(".fixed-catchphrase").fadeIn(600);
          },
          afterRender: function () {
            // Create the pagination list
            let pagination = '<ul class="pagination">';
            let activeClass = "";
            let reference = "";
            let hoverText = "";
            panels.forEach(function (val, key) {
              activeClass = "";
              if (key === 0) {
                activeClass = "active";
                reference = "presentation";
                hoverText = "Présentation";
              } else {
                reference = val.title.replace("é", "e");
                hoverText =
                  val.title.charAt(0).toUpperCase() +
                  val.title.slice(1).split(" ")[0];
              }
              pagination +=
                '<li><a class="' +
                activeClass +
                '" href="#' +
                reference +
                '"><span class="hover-text">' +
                hoverText +
                "</span></a></li>";
            });
            pagination += "</ul>";

            $(".presentation").append(pagination);

            // Click listener on the pagination elements
            $(".pagination a").on("click", function () {
              $.scrollify.move($(this).attr("href"));
            });

            // Click listener on the arrow
            $(".down-arrow").on("click", function () {
              $.scrollify.move($(this).attr("href"));
            });
          }
        });
      });
    }
  };
</script>

<style lang="scss">
  @import "~assets/scss/home/main.scss";
</style>