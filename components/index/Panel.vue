<template>
<v-flex xs12 md4 class="pa-4">
  <v-layout justify-center column>
    <v-layout align-center justify-center class="icon-container primary">
      <v-icon dark x-large>{{icon}}</v-icon>
    </v-layout>
    <p>
      <slot></slot>
    </p>
  </v-layout>
</v-flex>
</template>

<script>
export default {
  props: {
    icon: String
  }
};
</script>

<style>
.icon-container {
  flex: none;
  height: 120px;
  width: 120px !important;
  border-radius: 50%;
  margin: 1rem auto;
}
</style>
