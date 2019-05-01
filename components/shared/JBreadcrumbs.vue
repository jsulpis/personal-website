<template>
  <v-breadcrumbs class="j-breadcrumbs" :items="items">
    <template slot="item" slot-scope="props">
      <nuxt-link :to="props.item.to">{{ props.item.text }}</nuxt-link>
    </template>
    <v-icon slot="divider">chevron_right</v-icon>
  </v-breadcrumbs>
</template>

<script>
import { formatWords } from "~/utils/string";

export default {
  computed: {
    items() {
      const items = [];
      const numberOfLinks = this.pathArray.length;
      for (let i = 1; i < numberOfLinks; i++) {
        items.push({
          to: this.getRouteForLevel(i),
          text: this.getNameOfLevel(i)
        });
      }
      return items;
    },
    pathArray() {
      return this.$route.fullPath
        .split("/")
        .map(this.removeAnchors)
        .map(this.removeParameters);
    }
  },
  methods: {
    removeAnchors(path) {
      return this.troncateStringBeforeSymbol(path, "#");
    },
    removeParameters(path) {
      return this.troncateStringBeforeSymbol(path, "?");
    },
    troncateStringBeforeSymbol(param, symbol) {
      return param.includes(symbol) ? param.split(symbol)[0] : param;
    },
    getRouteForLevel(level) {
      return this.pathArray.slice(0, level + 1).join("/");
    },
    getNameOfLevel(level) {
      return formatWords(this.pathArray[level]);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";

.j-breadcrumbs {
  padding-left: 0 !important;

  .nuxt-link-exact-active {
    color: $material-color-grey-500;
    pointer-events: none;
  }
}
</style>
