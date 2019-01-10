<template>
  <div>
    <v-container class="container--card hide-on-render" v-if="artwork">
      <j-breadcrumbs/>
      <section class="artwork__section">
        <h1 class="artwork__title mt-3 mb-2">{{ artwork.title }}</h1>

        <!-- Image metadata -->
        <div class="artwork__data">
          <!-- description -->
          <p class="artwork__description">{{ artwork.description }}</p>
          <!-- date -->
          <div class="artwork__date">
            <v-icon>date_range</v-icon>
            <span>{{ artwork.creationDate | dateFrShort }}</span>
          </div>
          <!-- Likes -->
          <LikeBtn class="artwork__likes" :initialLikes="artwork.likes"/>
        </div>

        <!-- Image -->
        <a :href="artwork.picture" target="_blank">
          <img class="artwork__img elevation-8" :src="artwork.picture" :alt="artwork.title">
        </a>
      </section>

      <!-- Softwares -->
      <section class="artwork__section">
        <h3 class="artwork__softwares">Logiciels:</h3>
        <div class="artwork__softwares__item" v-for="(software, i) in artwork.softwares" :key="i">
          <a :href="software.url">
            <img :src="software.logo" :alt="software">
          </a>
          <p>{{ software.name }}</p>
        </div>
      </section>

      <!-- Disqus plugin -->
      <disqus-plugin :identifier="artwork.id" :url="pageUrl" :title="title"/>
    </v-container>
  </div>
</template>

<script>
import JBreadcrumbs from "~/components/shared/JBreadcrumbs.vue";
import LikeBtn from "~/components/portfolio/LikeBtn.vue";
import DisqusPlugin from "~/components/shared/DisqusPlugin.vue";
import ArtworkService from "~/services/ArtworkService";
import { INFOGRAPHIE_HEADER } from "./index";
import { formatWords } from "~/utils/string";
import { makePageMetadata } from "~/utils/page";

export default {
  components: {
    JBreadcrumbs,
    LikeBtn,
    DisqusPlugin
  },
  head() {
    return makePageMetadata(this.title, this.pageUrl, this.description);
  },
  data() {
    return {
      title: formatWords(this.$route.params.title),
      description: "Un élément de ma gallerie.",
      pageUrl: process.env.URL + this.$route.fullPath
    };
  },
  asyncData({ params }) {
    return ArtworkService.getArtwork(params.title).then(response => {
      return { artwork: response };
    });
  },
  beforeMount() {
    this.$store.commit("setHeaderContent", INFOGRAPHIE_HEADER);
  },
  mounted() {
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";
@import "~/assets/scss/mixins.scss";

.artwork__ {
  &title {
    @include font-title;
    font-weight: 400;
    font-size: 34px;
    border-bottom: 1px solid #ddd;
  }

  &data {
    margin: 0.5em 0 1.5em 0;

    .v-icon {
      height: 36px;
      width: 36px;
    }
  }

  &description {
    margin-bottom: 0;
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
