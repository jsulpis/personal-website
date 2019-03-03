<template>
  <div class="likes">
    <v-btn
      icon
      class="likes__btn"
      :color="userLiked ? 'primary' : 'grey lighten-2'"
      @click="handleClick"
    >
      <v-icon>favorite_border</v-icon>
    </v-btn>
    <span v-show="likes != 0">{{ likes }}</span>
  </div>
</template>

<script>
import ArtworkService from "~/services/ArtworkService";
import throttle from "lodash/throttle";

export default {
  props: { initialLikes: Number },
  data() {
    return {
      artworkService: new ArtworkService(this.$store),
      incr: 0
    };
  },
  computed: {
    userLiked() {
      return this.$store.state.currentArtwork.userLiked;
    },
    likes() {
      return (this.initialLikes || 0) + this.incr;
    },
    throttledClickHandler() {
      return throttle(this.toggleLike, 1500);
    }
  },
  methods: {
    handleClick() {
      this.throttledClickHandler();
    },
    toggleLike() {
      this.artworkService.toggleLike(this.$route.params.title);
      this.incr += this.userLiked ? 1 : -1;
    }
  }
};
</script>

<style>
.likes__btn {
  margin: 0 0.25rem 0 0;
  vertical-align: baseline;
}
</style>
