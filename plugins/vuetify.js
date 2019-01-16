import Vue from "vue";

import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
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
