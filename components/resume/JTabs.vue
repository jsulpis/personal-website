<template>
  <!-- Tabs -->
  <div>
    <v-tabs
    dark
    v-model="activeTab"
    id="tabs"
    class="hidden-sm-and-down"
    centered
    fixed-tabs
    slider-color="primary">
      <v-tab
      v-for="(item, index) in items"
      class="tabs__item"
      :key="index"
      ripple
      @click="$vuetify.goTo('#' + item.to, scrollingOptions); tabClickedTime = new Date().getTime()">
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import * as VTabs from "vuetify/es5/components/VTabs";

import { BANNER_HEIGHT, SCROLLING_OPTIONS } from "~/assets/js/globals.js";

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export default {
  components: {
    ...VTabs
  },
  data() {
    return {
      activeTab: 0,
      tabClickedTime: 0,
      scrollingOptions: SCROLLING_OPTIONS,
      sticky: 0,
      stickyTabsActivated: false,
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

      // Sticky tab bar
      const navbar = $("#tabs");
      const firstSection = document.querySelector("#" + this.items[1].to);

      // Set the sticky tab bar
      if (offsetTop >= this.sticky && !this.stickyTabsActivated) {
        navbar.addClass("tabs__sticky");
        navbar.addClass("elevation-4");
        firstSection.classList.add("tabs__push");
        this.stickyTabsActivated = true;
      } else if (offsetTop < this.sticky && this.stickyTabsActivated) {
        navbar.removeClass("tabs__sticky");
        navbar.removeClass("elevation-4");
        firstSection.classList.remove("tabs__push");
        this.stickyTabsActivated = false;
      }

      // "Debouncer" to freeze the active tab when clicking on a tab
      if (new Date().getTime() - this.tabClickedTime > 1000) {
        // update the active tab
        if (offsetTop < this.sticky) {
          this.activeTab = 0;
        } else {
          this.activeTab = this.items.length - 1;
          for (let i = 0; i < this.items.length; i++) {
            const id = "#" + this.items[i].to;
            if (
              offsetTop <
              document.querySelector(id).offsetTop + BANNER_HEIGHT
            ) {
              this.activeTab = i - 1;
              break;
            }
          }
        }
      }
    }
  },
  mounted() {
    this.sticky = document.querySelector("#tabs").offsetTop + BANNER_HEIGHT;
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
  z-index: 2;

  .v-tabs__item {
    font-weight: 400;
  }

  .v-tabs__slider {
    height: 3px;
  }
}

// Position the tabs
@media only screen and (min-width: 960px) {
  .tabs__push {
    padding-top: 48px !important;
  }

  .tabs__sticky {
    position: fixed !important;
    top: 0 !important;
  }
}
</style>
