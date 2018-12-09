<template>
  <v-breadcrumbs class="j-breadcrumbs">
    <v-icon slot="divider">chevron_right</v-icon>

    <v-breadcrumbs-item v-for="(item, i) in items" :key="i" :to="item.to" exact>{{ item.name }}</v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
import * as VBreadcrumbs from "vuetify/es5/components/VBreadcrumbs";
import { StringFormatter } from "~/assets/js/utils";

export default {
  components: { ...VBreadcrumbs },
  computed: {
    items() {
      const items = [];
      for (let i = 1; i < this.pathArray.length; i++) {
        items.push({
          to: this.getRouteForLevel(i),
          name: this.getNameOfLevel(i)
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
      return StringFormatter.beautifyWords(this.pathArray[level], "-");
    }
  }
};
</script>

<style>
.j-breadcrumbs {
  padding-left: 0 !important;
}
</style>
