<template>
  <!-- Tabs -->
  <v-tabs
    dark
    v-model="activeTab"
    id="tabs"
    class="hidden-sm-and-down"
    centered
    fixed-tabs
    slider-color="primary"
  >
    <v-tab
      v-for="(item, index) in items"
      class="tabs__item"
      :key="index"
      ripple
      @click="onTabClicked(item)"
    >{{ item.title }}</v-tab>
  </v-tabs>
</template>

<script>
import SCROLLING_OPTIONS from "~/assets/data/scrollingOptions";

const TABS_HEIGHT = 48;

export default {
  data() {
    return {
      activeTab: 0,
      tabClickedTime: 0,
      isScrolling: false,
      items: [
        {
          title: "A propos",
          to: "resume-profile"
        },
        {
          title: "Experiences",
          to: "resume-experiences"
        },
        {
          title: "Formation",
          to: "resume-studies"
        },
        {
          title: "Compétences",
          to: "resume-skills"
        },
        {
          title: "Contact",
          to: "resume-contact"
        }
      ]
    };
  },
  methods: {
    onScroll(e) {
      const offsetTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (!this.isScrolling) {
        // update the active tab
        if (offsetTop < this.sticky) {
          this.activeTab = 0;
        } else {
          this.activeTab = this.items.length - 1;
          for (let i = 0; i < this.items.length; i++) {
            const id = "#" + this.items[i].to;
            if (
              offsetTop <
              document.querySelector(id).offsetTop - TABS_HEIGHT
            ) {
              this.activeTab = i - 1;
              break;
            }
          }
        }
      }
    },
    onTabClicked(item) {
      this.$vuetify.goTo("#" + item.to, SCROLLING_OPTIONS);
      this.isScrolling = true;
      setTimeout(() => (this.isScrolling = false), SCROLLING_OPTIONS.duration);
    }
  },
  mounted() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  beforeDestroy() {
    if (this.$vuetify.breakpoint.mdAndUp) {
      window.removeEventListener("scroll", this.onScroll);
    }
  }
};
</script>

<style lang="scss">
#tabs {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;

  .v-tabs__item {
    font-weight: 400;
  }

  .v-tabs__slider {
    height: 3px;
  }
}
</style>
