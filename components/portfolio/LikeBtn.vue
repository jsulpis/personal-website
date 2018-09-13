<template>
  <div class="artwork-likes">
    <v-btn icon class="like-btn" :color="userLiked ? 'primary' : 'grey darken-3'" @click="toggleLike">
      <v-icon>favorite_border</v-icon>
    </v-btn>
    <span>{{ likes }}</span>
  </div>
</template>

<script>
import axios from "axios";
import { setCookie, getCookie } from "~/assets/js/cookies.js";

export default {
  props: { initialLikes: Number },
  data() {
    return {
      userLiked: false,
      incr: 0
    };
  },
  computed: {
    likes() {
      return this.initialLikes + this.incr;
    }
  },
  methods: {
    toggleLike() {
      // Construct the url depending on the current like status
      const url =
        "https://api.juliensulpis.fr/artworks/" +
        this.$route.params.title +
        (this.userLiked ? "/remove-like" : "/add-like");
      // Post the request and update the value
      axios.post(url).then(() => {
        this.userLiked = !this.userLiked;
        this.incr += this.userLiked ? 1 : -1;

        const artworkName = this.$route.params.title;
        let cvalue = getCookie("artworkLikes");
        if (this.userLiked) {
          // add the current artwork to the list in liked artworks
          cvalue = cvalue + "." + artworkName;
        } else {
          // Remove the current artwork from the list
          cvalue = cvalue.split(".");
          cvalue.splice(cvalue.indexOf(artworkName), 1);
          cvalue = cvalue.join(".");
        }
        setCookie("artworkLikes", cvalue);
      });
    },
    checkCookie() {
      const userLikes = getCookie("artworkLikes");
      this.userLiked = userLikes.split(".").includes(this.$route.params.title)
        ? true
        : false;
    }
  },
  mounted() {
    this.checkCookie();
  }
};
</script>
