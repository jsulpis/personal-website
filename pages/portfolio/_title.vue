<template>
  <div id="gallery-item">
    <v-btn
    flat
    :ripple=false
    id="gallery-back-btn"
    to="/portfolio"
    :style="'height: ' + (smallViewport ? '56px' : '80px')">
      <v-icon left>keyboard_backspace</v-icon>
      <span v-if="!smallViewport">Retour</span>
    </v-btn>
    <v-container>
      <section>
        <h1 class="display-1 ma-3">{{ artwork.title }}</h1>
        <div class="artwork-data grey--text text--lighten-3">
          <span class="artwork-date">
            <v-icon color="grey lighten-3">date_range</v-icon>{{ artwork.date }}</span>
          <span class="artwork-likes">
            <v-btn icon class="like-btn">
              <v-icon color="grey lighten-3">favorite_border</v-icon>
            </v-btn>{{ artwork.likes }}
          </span>
        </div>
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
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
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
  mounted() {
    axios
      .get(
        "https://ihb8a9aixg.execute-api.eu-west-3.amazonaws.com/dev/portfolio/" +
          this.$route.params.title
      )
      .then(response => {
        this.artwork = response.data.Item;
        $("#gallery-item").addClass("show");
      });
  }
};
</script>
