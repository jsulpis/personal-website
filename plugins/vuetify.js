import Vue from "vue";

import {
  Vuetify,
  VApp,
  VCard,
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
    VNavigationDrawer,
    VList,
    VIcon,
    VDivider,
    VGrid,
    VToolbar
  },
  theme: {
    primary: "#ff9100",
    secondary: "#0745ff"
  },
  options: {
    minifyTheme: function(css) {
      return css.replace(/[\s|\r\n|\r|\n]/g, "");
    }
  }
});
