<template>
  <v-flex xs4 sm3 lg2 class="preview">
    <nuxt-link :to="'/portfolio/' + url">
    <img :src="url | parseUrl" :alt="title" class="image">
    <div class="overlay">
        <h3 class="img--title headline font-weight-regular">
          {{ title }}
        </h3>
        <div class="img--date">
          <v-icon small>date_range</v-icon>{{ date }}
        </div>
        <div class="img--likes">
          <v-icon small>favorite_border</v-icon>{{ likes }}
        </div>
        <div class="img--comments">
          <v-icon small>forum</v-icon>{{ likes }}
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


