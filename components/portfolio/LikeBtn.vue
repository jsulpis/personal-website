<template>
  <div class="likes">
    <v-btn
      icon
      class="likes__btn"
      :color="userLiked ? 'primary' : 'grey lighten-2'"
      @click="toggleLike"
    >
      <v-icon>favorite_border</v-icon>
    </v-btn>
    <span>{{ likes }}</span>
  </div>
</template>

<script>
import ArtworkLikesService from "~/services/ArtworkLikesService";

export default {
  props: { initialLikes: Number },
  data() {
    return {
      ArtworkLikesService: new ArtworkLikesService(this.$route.params.title),
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
      this.ArtworkLikesService.toggleLike();
      this.userLiked = !this.userLiked;
      this.incr += this.userLiked ? 1 : -1;
    }
  },
  mounted() {
    this.userLiked = this.ArtworkLikesService.checkCookie();
  }
};
</script>

<style>
.likes__btn {
  margin: 0 0.25rem 0 0;
  vertical-align: baseline;
}
</style>
