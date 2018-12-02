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
  data() {
    return { items: [] };
  },
  mounted() {
    const fullPath = this.$route.fullPath.split("/");

    for (let i = 1; i < fullPath.length; i++) {
      this.items.push({
        to: fullPath.slice(0, i + 1).join("/"),
        name: StringFormatter.beautifyWords(fullPath[i], "-")
      });
    }
  }
};
</script>

<style>
.j-breadcrumbs {
  padding-left: 0 !important;
}
</style>
