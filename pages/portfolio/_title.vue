<template>
  <div id="gallery-item">
    <!-- Back button -->
    <v-btn
    flat
    :ripple=false
    id="gallery-back-btn"
    to="/portfolio"
    :style="'height: ' + (smallViewport ? '56px' : '80px')">
      <v-icon left>keyboard_backspace</v-icon>
      <span v-show="!smallViewport">Retour</span>
    </v-btn>
    <v-container id="gallery-item-container">
      <section>
        <h1 class="display-1 mt-3 mb-2">{{ artwork.title }}</h1>
        <!-- Image metadata -->
        <div class="artwork-data grey--text text--lighten-3">
          <!-- date -->
          <div class="artwork-date">
            <v-icon>date_range</v-icon>
            <span>{{ artwork.date }}</span>
          </div>
          <!-- Likes -->
          <LikeBtn :initialLikes="artwork.likes"/>
          <!-- Comments -->
          <div class="artwork-comments">
            <v-icon>forum</v-icon>
            <span><a :href="'http://localhost:3000/portfolio/' + this.$route.params.title + '#disqus_thread'">0</a></span>
          </div>
        </div>
        <!-- Image -->
        <a :href="imageUrl" target="_blank">
          <img
          class="artwork-img elevation-8"
          :src="imageUrl"
          :alt="artwork.title">
        </a>
      </section>

      <section>
        <h3 class="font-weight-regular">Logiciels utilisés:</h3>
        <div
        class="artwork-software"
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

export default {
  components: {
    LikeBtn
  },
  head() {
    return {
      title: this.artwork.title,
      meta: [
        { name: "og:title", content: this.artwork.title },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://juliensulpis.fr/portfolio/" + this.artwork.urlTitle },
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
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    },
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
        $("#gallery-item-container").fadeIn();

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
