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
        this.setCookie();
      });
    },
    setCookie() {
      const d = new Date();
      d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      var cvalue = this.getCookie();
      const artworkName = this.$route.params.title;
      if (this.userLiked) {
        // add the current artwork to the list in liked artworks
        cvalue = cvalue + "." + artworkName;
      } else {
        // Remove the current artwork from the list
        cvalue = cvalue.split(".");
        cvalue.splice(cvalue.indexOf(artworkName), 1);
        cvalue = cvalue.join('.');
      }
      document.cookie = "artworkLikes=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie() {
      const name = "artworkLikes=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    checkCookie() {
      const userLikes = this.getCookie();
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
