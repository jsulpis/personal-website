<template>
  <div id="header-wrapper">
    <div id="particles"></div>

    <!-- PROFILE -->
    <v-card :light="isLightTheme" id="profile" :class="'elevation-4 pa-0 ' + (isLightTheme ? 'white' : '')">
      <div class="avatar">
        <img class="rounded-circle elevation-8" src="/img/avatar.jpeg" alt="photo_profile" />
      </div>
      <h1>Julien Sulpis</h1>
      <h2>Stagiaire développeur Android</h2>
      <h3>SOLUTEC &#x2022; École des Mines de Saint-Étienne
        <br>Région de Lyon, France</h3>
      <!-- Social links -->
      <p class="social">
        <a href="https://www.linkedin.com/in/julien-sulpis">
          <v-icon >fab fa-linkedin-in</v-icon>
        </a>
        <a class="ma-3" href="https://github.com/jsulpis">
          <v-icon >fab fa-github</v-icon>
        </a>
        <a href="https://twitter.com/JulienSulpis">
          <v-icon >fab fa-twitter</v-icon>
        </a>
      </p>

      <!-- Description -->
      <p id="description">
        <v-icon small>fas fa-quote-left</v-icon>
        <slot></slot>
        <v-icon small>fas fa-quote-right</v-icon>
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLightTheme: ""
    };
  },
  mounted() {
    this.isLightTheme = $("#app")[0].classList.contains("theme--light");
  }
};
</script>
