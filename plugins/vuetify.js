import Vue from "vue";

import {
  Vuetify,
  VApp,
  VCard,
  VBtn,
  VNavigationDrawer,
  VList,
  VIcon,
  VDivider,
  VGrid,
  VToolbar
} from "vuetify";

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VBtn,
    VNavigationDrawer,
    VList,
    VIcon,
    VDivider,
    VGrid,
    VToolbar
  },
  theme: {
    primary: "#c95901",
    secondary: "#f57f17"
  },
  options: {
    minifyTheme: function(css) {
      return css.replace(/[\s|\r\n|\r|\n]/g, "");
    }
  }
});
