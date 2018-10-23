<template>
<div>
  <drawer/>
  <toolbar @side-icon-clicked="$emit('toggle-drawer')"/>
</div>
</template>

<script>
import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

export default {
  components: { Drawer, Toolbar }
};
</script>
