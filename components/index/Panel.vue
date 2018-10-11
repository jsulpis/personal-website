<template>
<v-flex xs12 md4 class="pa-4">
  <v-layout justify-center column>
    <v-layout align-center justify-center class="icon-container primary darken-1">
      <v-icon x-large>{{icon}}</v-icon>
    </v-layout>
    <div class="panel-text">
      <slot></slot>
    </div>
  </v-layout>
</v-flex>
</template>

<script>
export default {
  props: {
    icon: String
  }
}
</script>
