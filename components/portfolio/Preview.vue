<template>
  <v-flex xs6 sm4 md3 xl2 class="preview">
    <nuxt-link :to="'/portfolio/' + title">
    <img :src="url" :alt="title" class="image">
    <div class="overlay">
        <h3 class="img--title font-weight-regular">
          {{ title }}
        </h3>
        <div class="img--date">{{ date }}</div>
        <div class="img--likes">
          {{ likes }} <v-icon small>far fa-heart</v-icon>
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
  }
};
</script>


