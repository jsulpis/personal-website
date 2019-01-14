<template>
  <v-flex xs4 sm3 lg2 class="gallery-item">
    <nuxt-link :to="$route.fullPath + '/' + artwork.urlTitle">
      <img :src="responsivePictureUrl" :alt="artwork.title" class="gallery-item__img">
      <div class="gallery-item-overlay" v-show="!smallViewport">
        <h3 class="gallery-item__title">{{ artwork.title }}</h3>
        <div class="gallery-item__date">
          <v-icon small>date_range</v-icon>
          {{ this.artwork.creationDate | dateFrShort }}
        </div>
        <div class="gallery-item__likes">
          <v-icon small>favorite_border</v-icon>
          {{ artwork.likes }}
        </div>
      </div>
    </nuxt-link>
  </v-flex>
</template>

<script>
export default {
  props: {
    artwork: Object
  },
  computed: {
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    responsivePictureUrl() {
      return `${this.artwork.picture}?w=${this.responsivePictureSize}&h=${
        this.responsivePictureSize
      }&fit=thumb`;
    },
    responsivePictureSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return parseInt(window.innerWidth / 3);
          break;
        case "sm" || "md":
          return parseInt(window.innerWidth / 4);
          break;
        case "lg" || "xl":
          return parseInt(window.innerWidth / 6);
          break;
        default:
          return 250;
      }
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

.gallery-item {
  position: relative;
  padding: 0 !important;
  line-height: 0;
  text-shadow: 0 0 1px black;

  /* When you mouse over the container, fade in the overlay */
  &:hover .gallery-item-overlay {
    opacity: 1;
  }
}

/* The overlay effect - lays on top of the container and over the image */
.gallery-item-overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* semi-transparent black */
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
  opacity: 0;
  color: white;
  text-align: center;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.8) inset;

  .v-icon {
    margin-right: 0.25rem;
    color: white;
  }
}

.gallery-item__ {
  &img {
    width: 100%;
  }

  &title {
    @include font-title;
    font-weight: normal;
    font-size: 1.75rem;
    line-height: normal;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  &date,
  &likes {
    position: absolute;
    bottom: 0;
    padding: 1rem;
    font-size: 13px;
  }

  &date {
    left: 0;
  }

  &likes {
    right: 0;
  }
}
</style>
