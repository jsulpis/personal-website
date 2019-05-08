<template>
  <v-btn
    class="toolbar-items__btn"
    :ripple="false"
    :to="to"
    active-class="primary--text"
    flat
  >{{title}}</v-btn>
</template>

<script>
export default {
  props: { to: String, title: String }
};
</script>
