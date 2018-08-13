<template>
  <v-app dark>
    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  head() {
      return {
        script: [
          { src: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.js" }
        ],
        link: [
          { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.0.2/fullpage.min.css" }
        ]
      }
    }
}
</script>

<style>
html {
  font-size: initial !important;
}

body {
  margin: 0;
  text-align: center;
}
</style>
