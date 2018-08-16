<template>
  <div>
    <div class="hide-on-render">
      <v-card id="portfolio-header" class="page-header">
      </v-card>
      <v-container fluid grid-list-xs id="img-section">
        <v-layout row wrap>
          <Preview v-for="(img, i) in data"
          :key=i
          :title="img.title"
          :url="img.url"
          :date="img.date"
          :likes="img.likes"/>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import * as VBtn from "vuetify/es5/components/VBtn";
import * as VBtnToggle from "vuetify/es5/components/VBtnToggle";
import Preview from "~/components/portfolio/Preview.vue";

export default {
  components: {
    ...VBtn,
    ...VBtnToggle,
    Preview
  },
  data() {
    return {
      data: [
        {
          category: "Infographie 3D",
          tags: "nature",
          url:
            "http://www.reynantemartinez.com/uploads/4/7/3/9/4739042/yin-and-yang-thumb.jpg",
          title: "Yin and Yang",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit dui quis egestas. Vestibulum ac sem nec ligula lacinia molestie sit amet at odio. Donec iaculis nec elit ac fringilla. Aliquam euismod rhoncus nulla et cursus. Fusce dolor libero, rhoncus a turpis non, volutpat fringilla mi.",
          date: "08/2018",
          likes: 0
        },
        {
          category: "Infographie 3D",
          tags: "musique; nature",
          url:
            "http://www.reynantemartinez.com/uploads/4/7/3/9/4739042/yin-and-yang-thumb.jpg",
          title: "Yang and Yin",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit dui quis egestas. Vestibulum ac sem nec ligula lacinia molestie sit amet at odio. Donec iaculis nec elit ac fringilla. Aliquam euismod rhoncus nulla et cursus. Fusce dolor libero, rhoncus a turpis non, volutpat fringilla mi.",
          date: "05/2017",
          likes: 20
        },
        {
          category: "Infographie 3D",
          tags: "musique",
          url:
            "http://www.reynantemartinez.com/uploads/4/7/3/9/4739042/yin-and-yang-thumb.jpg",
          title: "Yan and Ying",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit dui quis egestas. Vestibulum ac sem nec ligula lacinia molestie sit amet at odio. Donec iaculis nec elit ac fringilla. Aliquam euismod rhoncus nulla et cursus. Fusce dolor libero, rhoncus a turpis non, volutpat fringilla mi.",
          date: "09/2015",
          likes: 100
        },
        {
          category: "Infographie 2D",
          tags: "nature;matte-painting",
          url:
            "http://www.reynantemartinez.com/uploads/4/7/3/9/4739042/yin-and-yang-thumb.jpg",
          title: "Yin and Yang",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit dui quis egestas. Vestibulum ac sem nec ligula lacinia molestie sit amet at odio. Donec iaculis nec elit ac fringilla. Aliquam euismod rhoncus nulla et cursus. Fusce dolor libero, rhoncus a turpis non, volutpat fringilla mi.",
          date: "08/2018",
          likes: 12
        }
      ]
    };
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/portfolio/main.scss";
</style>