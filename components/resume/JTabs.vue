<template>
  <!-- Tabs -->
  <div>
    <v-tabs
    v-model="activeTab"
    id="tab-bar"
    class="hidden-sm-and-down elevation-4"
    centered
    fixed-tabs
    slider-color="primary">
      <v-tab
      v-for="(item, index) in items"
      class="tab-item"
      :key="index"
      ripple
      @click="$vuetify.goTo('#' + item.to, options); tabClickedTime = new Date().getTime()">
        {{ item.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import * as VTabs from "vuetify/es5/components/VTabs";

import { bannerHeight } from "~/assets/js/globals.js";

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
      options: {
        duration: 400,
        offset: 0,
        easing: "easeInOutQuint"
      },
      sticky: 0,
      stickyTabsActivated: false,
      items: [
        {
          title: "A propos",
          to: "about"
        },
        {
          title: "Experiences",
          to: "experiences"
        },
        {
          title: "Formation",
          to: "studies"
        },
        {
          title: "Compétences",
          to: "skills"
        },
        {
          title: "Contact",
          to: "contact"
        }
      ]
    };
  },
  methods: {
    onScroll(e) {
      const offsetTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Sticky tab bar
      const navbar = $("#tab-bar");
      const firstSection = document.querySelector("#" + this.items[1].to);

      // Set the sticky tab bar
      if (offsetTop >= this.sticky && !this.stickyTabsActivated) {
        navbar.addClass("sticky");
        navbar.addClass("elevation-4");
        firstSection.classList.add("push");
        this.stickyTabsActivated = true;
      } else if (offsetTop < this.sticky && this.stickyTabsActivated) {
        navbar.removeClass("sticky");
        navbar.removeClass("elevation-4");
        firstSection.classList.remove("push");
        this.stickyTabsActivated = false;
      }

      // "Debouncer" to freeze the active tab when clicking on a tab
      if (new Date().getTime() - this.tabClickedTime > 1000) {
        // update the active tab
        if (offsetTop < this.sticky) {
          this.activeTab = 0;
        } else {
          this.activeTab = this.items.length - 1 ;
          for (let i = 0; i < this.items.length; i++) {
            const id = "#" + this.items[i].to;
            if (offsetTop < document.querySelector(id).offsetTop + bannerHeight()) {
              this.activeTab = i - 1;
              break;
            }
          }
        }
      }
    }
  },
  mounted() {
    this.sticky = document.querySelector("#tab-bar").offsetTop + bannerHeight();
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
