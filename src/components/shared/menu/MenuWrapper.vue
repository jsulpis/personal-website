<template>
  <div>
    <drawer :items="menuItems"/>
    <toolbar :items="menuItems" @side-icon-clicked="$emit('toggle-drawer')"/>
  </div>
</template>

<script>
import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

export default {
  components: { Drawer, Toolbar },
  data() {
    return {
      menuItems: [
        {
          name: "Accueil",
          to: "/"
        },
        {
          name: "Projets",
          to: "/projets"
        },
        {
          name: "A Propos",
          to: "/resume"
        },
        {
          name: "Contact",
          to: "/contact"
        }
      ]
    };
  }
};
</script>
