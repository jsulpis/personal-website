<template>
  <v-flex xs4 sm3 lg2 class="gallery-item">
    <nuxt-link :to="'/portfolio/' + url">
    <img :src="url | parseUrl" :alt="title" class="gallery-item__img">
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
          <v-icon small>forum</v-icon><a :href="'http://localhost:3000/portfolio/' + url + '#disqus_thread'">0</a>
        </div>
    </div>
    </nuxt-link>
  </v-flex>
</template>

<script>
export default {
  props: {
    title: String,
    url: String,
    date: String,
    likes: Number
  },
  filters: {
    parseUrl(url) {
      return typeof url != "undefined"
        ? "https://s3.eu-west-3.amazonaws.com/juliensulpis-portfolio/min/" +
            url +
            ".jpg"
        : "";
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
