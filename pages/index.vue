<template>
  <div>
    <drawer 
    :items="items" 
    :dark=true 
    :fixed=false 
    :flat=true 
    color="transparent" />
    <home :items="items"/>
    <artist/>
    <musician/>
    <developper/>
  </div>
</template>

<script>
  import Drawer from "~/components/Drawer.vue";
  import Home from "~/components/index/Home.vue";
  import Artist from "~/components/index/Artist.vue";
  import Musician from "~/components/index/Musician.vue";
  import Developper from "~/components/index/Developper.vue";
  import Engineer from "~/components/index/Engineer.vue";

  if (process.browser) {
    require("jquery-scrollify");
  }

  export default {
    components: {
      Drawer,
      Home,
      Artist,
      Musician,
      Developper,
      Engineer
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
      $(function () {
        $.scrollify({
          section: ".panel",
          scrollbars: false,
          before: function (i, panels) {
            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination")
              .find('a[href="#' + ref + '"]')
              .addClass("active");
          },
          afterRender: function () {
            var pagination = '<ul class="pagination">';
            var activeClass = "";
            $(".panel").each(function (i) {
              activeClass = "";
              if (i === 0) {
                activeClass = "active";
              }
              pagination +=
                '<li><a class="' +
                activeClass +
                '" href="#' +
                $(this).attr("data-section-name") +
                '"><span class="hover-text">' +
                $(this)
                  .attr("data-section-name")
                  .charAt(0)
                  .toUpperCase() +
                $(this)
                  .attr("data-section-name")
                  .slice(1) +
                "</span></a></li>";
            });

            pagination += "</ul>";

            $(".top").append(pagination);
            /*
  
        Tip: The two click events below are the same:
  
        $(".pagination a").on("click",function() {
          $.scrollify.move($(this).attr("href"));
        });
  
        */
            $(".pagination a").on("click", $.scrollify.move);
          }
        });
      });
    }
  };
</script>

<style lang="scss">
  @import "~assets/scss/home/main.scss";
</style>