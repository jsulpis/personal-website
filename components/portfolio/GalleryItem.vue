<template>
  <v-flex xs4 sm3 lg2 class="gallery-item">
    <nuxt-link :to="'/portfolio/' + imgUrl">
    <img :src="imgUrl | miniatureUrl" :alt="title" class="gallery-item__img">
    <div class="gallery-item-overlay">
        <h3 class="gallery-item__title headline font-weight-regular">
          {{ title }}
        </h3>
        <div class="gallery-item__date">
          <v-icon small>date_range</v-icon>{{ date }}
        </div>
        <div class="gallery-item__likes">
          <v-icon small>favorite_border</v-icon>{{ likes }}
        </div>
        <div class="gallery-item__comments">
          <v-icon small>forum</v-icon><a :href="disqusRootUrl + '/' + imgUrl + '#disqus_thread'">0</a>
        </div>
    </div>
    </nuxt-link>
  </v-flex>
</template>

<script>
import { S3_PORTFOLIO_URL, DISQUS_ROOT_URL } from "~/assets/js/globals";
import ArtworksProvider from "~/services/ArtworksProvider";

export default {
  props: {
    title: String,
    imgUrl: String,
    date: String,
    likes: Number
  },
  data() {
    return { disqusRootUrl: DISQUS_ROOT_URL };
  },
  filters: {
    miniatureUrl(url) {
      return ArtworksProvider.provideMiniatureUrl(url);
    }
  }
};
</script>

<style lang="scss">
.gallery-item {
  position: relative;
  padding: 0 !important;
  line-height: 0;
  display: none;

  /* When you mouse over the container, fade in the overlay title */
  &:hover .gallery-item-overlay {
    opacity: 1;
  }
}

/* The overlay effect - lays on top of the container and over the image */
.gallery-item-overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
  opacity: 0;
  color: white;
  text-align: center;

  .v-icon {
    margin-right: 0.25rem;
  }
}

.gallery-item__ {
  /* Make the image to responsive */
  &img {
    width: 100%;
  }

  &title {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }

  &date,
  &likes,
  &comments {
    position: absolute;
    padding: 1rem;
    font-size: 13px;
  }

  &date {
    bottom: 0;
    left: 0;
  }

  &likes {
    bottom: 0;
    left: 40%;
  }

  &comments {
    bottom: 0;
    right: 0;
    a {
      color: inherit;
    }
  }
}
</style>
