<template>
  <v-navigation-drawer dark right v-model="open" disable-resize-watcher app>
    <v-list>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="drawer-main-title">Menu</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list-tile-title class="text-xs-center">{{ item.name }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: { items: Array },
  data() {
    return {
      open: false,
      groupActive: false
    };
  },
  mounted() {
    this.$parent.$on("toggle-drawer", () => (this.open = !this.open));
  }
};
</script>

<style lang="scss">
.drawer-main-title {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  overflow: visible;

  &::after {
    content: "";
    margin: 0.25rem auto;
    display: block;
    width: 5rem;
    border-bottom: 3px solid;
  }
}
.drawer-portfolio {
  position: absolute;
}

.v-list__group:before,
.v-list__group:after {
  left: 0;
}
</style>
