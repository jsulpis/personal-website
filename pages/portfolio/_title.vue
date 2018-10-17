<template>
  <div>
    <back-btn/>
    <v-container class="artwork">
      <section>
        <h1 class="display-1 mt-3 mb-2">{{ artwork.title }}</h1>

        <!-- Image metadata -->
        <div class="artwork__data grey--text text--lighten-3">
          <!-- date -->
          <div class="artwork__date">
            <v-icon>date_range</v-icon>
            <span>{{ artwork.date }}</span>
          </div>
          <!-- Likes -->
          <LikeBtn class="artwork__likes" :initialLikes="artwork.likes"/>
          <!-- Comments -->
          <div class="artwork__comments">
            <v-icon>forum</v-icon>
            <span><a :href="'http://localhost:3000/portfolio/' + this.$route.params.title + '#disqus_thread'">0</a></span>
          </div>
        </div>

        <!-- Image -->
        <a :href="imageUrl" target="_blank">
          <img
          class="artwork__img elevation-8"
          :src="imageUrl"
          :alt="artwork.title">
        </a>
      </section>

      <section class="artwork__section">
        <h3 class="font-weight-regular">Logiciels utilisés:</h3>
        <div
        class="artwork__softwares"
        v-for="(software, i) in artwork.softwares"
        :key="i">
          <a :href="links[software]">
            <img
            :src="'/img/softwares/' + software + '.png'"
            :alt="software">
          </a>
          <p>{{ software }}</p>
        </div>
      </section>

      <!-- Disqus plugin -->
      <div id="disqus_thread"></div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import LikeBtn from "~/components/portfolio/LikeBtn.vue";
import BackBtn from "~/components/portfolio/BackBtn.vue";

export default {
  components: {
    LikeBtn,
    BackBtn
  },
  head() {
    return {
      title: this.artwork.title,
      meta: [
        { name: "og:title", content: this.artwork.title },
        { name: "og:type", content: "website" },
        {
          name: "og:url",
          content: "https://juliensulpis.fr/portfolio/" + this.artwork.urlTitle
        },
        { name: "og:description", content: this.description },
        { name: "description", content: this.description }
      ]
    };
  },
  data() {
    return {
      description: "Un élément de ma gallerie personnelle.",
      artwork: {},
      links: {
        Blender: "https://www.blender.org",
        Photoshop: "https://www.adobe.com/fr/products/photoshop.html",
        "Substance Painter":
          "https://www.allegorithmic.com/products/substance-painter"
      }
    };
  },
  computed: {
    imageUrl() {
      return typeof this.artwork.urlTitle != "undefined"
        ? "https://s3.eu-west-3.amazonaws.com/juliensulpis-portfolio/" +
            this.artwork.urlTitle +
            ".jpg"
        : "";
    }
  },
  methods: {
    initDisqus() {
      // Disqus plugin
      const disqus_config = function() {
        this.page.url =
          "http://localhost:3000/portfolio/" + this.$route.params.title; // Page's canonical URL variable
        this.page.identifier = response.data.Item.uuid; // Page's unique identifier variable
      };
      (function() {
        var d = document,
          s = d.createElement("script");
        s.src = "https://localhost-ecfgq3nt0m.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        d.body.appendChild(s);
      })();
    },
    resetDisqus() {
      DISQUS.reset({
        reload: true,
        config: function() {
          this.page.identifier = response.data.Item.uuid; // Page's unique identifier variable
          this.page.url =
            "http://localhost:3000/portfolio/" + this.$route.params.title; // Page's canonical URL variable
        }
      });
    }
  },
  mounted() {
    $(".hide-on-render").addClass("show");

    axios
      .get("https://api.juliensulpis.fr/artworks/" + this.$route.params.title)
      .then(response => {
        this.artwork = response.data.Item;
        $(".artwork").fadeIn();

        DISQUSWIDGETS.getCount({ reset: true });
        // Load the Disqus comment plugin if it's not already done (when coming from another artwork for example)
        if ("undefined" == typeof DISQUS) {
          this.initDisqus();
        } else {
          // Or reset the plugin if it's already loaded
          this.resetDisqus();
        }
      });
  }
};
</script>

<style lang="scss">
@import "@material/theme/color-palette";

.artwork {
  display: none;
}

.artwork__ {
  &data {
    margin: 0.5rem;

    .v-icon {
      height: 36px;
      width: 36px;
    }
  }

  &img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 5px;
  }

  &date,
  &comments,
  &likes {
    margin: 0.5rem;
    height: 36px;
    display: inline-block;

    span {
      vertical-align: super;
    }
  }

  &softwares {
    display: inline-block;

    img {
      width: 100px;
      margin: 1rem 3rem;
    }

    p {
      opacity: 0.84;
    }
  }

  &section {
    position: relative;
    padding-bottom: 2rem;
    margin-bottom: 2rem;

    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: -3px;
      right: -3px;
      height: 1px;
      background-image: -webkit-linear-gradient(
        left,
        transparent,
        $material-color-grey-300,
        transparent
      );
      background-image: -moz-linear-gradient(
        left,
        transparent,
        $material-color-grey-300,
        transparent
      );
      background-image: -o-linear-gradient(
        left,
        transparent,
        $material-color-grey-300,
        transparent
      );
    }
  }
}
</style>
