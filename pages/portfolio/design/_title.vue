<template>
  <v-container class="container--card hide-on-render">
    <j-breadcrumbs/>
    <section class="artwork__section">
      <h1 class="artwork__title mt-3 mb-2">{{ artwork.title }}</h1>

      <!-- Image metadata -->
      <div class="artwork__data">
        <!-- date -->
        <div class="artwork__date">
          <v-icon>date_range</v-icon>
          <span>{{ artwork.date }}</span>
        </div>
        <!-- Likes -->
        <LikeBtn class="artwork__likes" :initialLikes="artwork.likes"/>
        <!-- Comments -->
        <div class="artwork__comments">
          <v-icon>forum</v-icon>
          <span>
            <a :href="disqusRootUrl + '/' + this.$route.params.title + '#disqus_thread'">0</a>
          </span>
        </div>
      </div>

      <!-- Image -->
      <a :href="imageUrl" target="_blank">
        <img class="artwork__img elevation-8" :src="imageUrl" :alt="artwork.title">
      </a>
    </section>

    <!-- Softwares -->
    <section class="artwork__section">
      <h3 class="artwork__softwares">Logiciels utilisés:</h3>
      <div class="artwork__softwares__item" v-for="(software, i) in artwork.softwares" :key="i">
        <a :href="softwares[software].url">
          <img :src="softwares[software].icon" :alt="software">
        </a>
        <p>{{ software }}</p>
      </div>
    </section>

    <!-- Disqus plugin -->
    <disqus-plugin :imgName="artwork.urlTitle"/>
  </v-container>
</template>

<script>
import JBreadcrumbs from "~/components/shared/JBreadcrumbs.vue";
import LikeBtn from "~/components/portfolio/LikeBtn.vue";
import DisqusPlugin from "~/components/portfolio/DisqusPlugin.vue";

import { SITE_ROOT_URL, DISQUS_ROOT_URL } from "~/assets/js/globals";
import { StringFormatter } from "~/assets/js/utils";
import { CG_SOFTWARES } from "~/assets/data/cgSoftwares";
import ArtworksProvider from "~/services/ArtworksProvider";

export default {
  components: {
    JBreadcrumbs,
    LikeBtn,
    DisqusPlugin
  },
  head() {
    return {
      title: this.title,
      meta: [
        { name: "title", property: "og:title", content: this.title },
        {
          name: "url",
          property: "og:url",
          content:
            SITE_ROOT_URL + "/portfolio/design/" + this.$route.params.title
        },
        {
          name: "description",
          property: "og:description",
          content: this.description
        }
      ]
    };
  },
  data() {
    return {
      title: StringFormatter.beautifyWords(this.$route.params.title, "-"),
      description: "Un élément de ma gallerie.",
      disqusRootUrl: DISQUS_ROOT_URL,
      artwork: { title: "-" },
      softwares: CG_SOFTWARES
    };
  },
  computed: {
    imageUrl() {
      return ArtworksProvider.providePictureUrl(this.$route.params.title);
    }
  },
  beforeMount() {
    this.$emit("update-header", {
      title: "Design",
      description: "Mes réalisations en infographie 2D et 3D."
    });
  },
  mounted() {
    DISQUSWIDGETS.getCount({ reset: true });
    ArtworksProvider.provideArtwork(this.$route.params.title).then(response => {
      this.artwork = response;
      $(".artwork").fadeIn();
    });
  },
  updated() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixins.scss";
.artwork__ {
  &title {
    @include font-title;
    font-weight: 400;
    font-size: 34px;
    border-bottom: 1px solid #ddd;
  }

  &data {
    margin: 0.5rem;

    .v-icon {
      height: 36px;
      width: 36px;
    }
  }

  &img {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 5px;
  }

  &comments a {
    color: inherit;
  }

  &date,
  &comments,
  &likes {
    margin: 0.5rem;
    height: 36px;
    display: inline-block;

    span {
      vertical-align: super;
    }
  }

  &softwares {
    font-weight: normal;
    margin: 1rem;
  }

  &softwares__item {
    display: inline-block;

    img {
      width: 5rem;
      margin: 0.5rem 3rem 0 3rem;
    }

    p {
      opacity: 0.84;
    }
  }

  &section {
    position: relative;
    padding-bottom: 2rem;
    margin-bottom: 2rem;

    &:after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: -3px;
      right: -3px;
      height: 2px;
      background-image: -webkit-linear-gradient(
        left,
        transparent,
        $material-color-grey-300,
        transparent
      );
      background-image: -moz-linear-gradient(
        left,
        transparent,
        $material-color-grey-300,
        transparent
      );
      background-image: -o-linear-gradient(
        left,
        transparent,
        $material-color-grey-300,
        transparent
      );
    }
  }
}
</style>
