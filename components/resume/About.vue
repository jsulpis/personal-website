<template>
<!-- PROFILE -->
<v-card :light="isLightTheme" id="resume-profile" :class="'elevation-4 pa-0 ' + (isLightTheme ? 'white' : '')">
  <avatar class="resume-profile__avatar"/>
  <h1 class="resume-profile__name">Julien Sulpis</h1>
  <h2 class="resume-profile__job">Stagiaire développeur Android</h2>
  <h3 class="resume-profile__school">SOLUTEC &#x2022; École des Mines de Saint-Étienne
    <br>Région de Lyon, France</h3>
  <!-- Social links -->
  <p class="resume-profile__networks">
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
  <p class="resume-profile__description">
    <v-icon small>fas fa-quote-left</v-icon>
    &nbsp;<slot></slot>&nbsp;
    <v-icon small>fas fa-quote-right</v-icon>
  </p>
</v-card>
</template>

<script>
import Avatar from "../global/Avatar";

export default {
  components: {
    Avatar
  },
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

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "@material/typography/mdc-typography";

// PROFILE
#resume-profile {
  text-align: center;
  position: relative;
  width: 100%;
}

.resume-profile__ {
  &avatar {
    width: 100%;
    position: absolute;
    top: -$avatar-height / 2;
  }

  &networks {
    margin: 0.5rem 1rem;
    padding: 0.5rem;

    a:hover .v-icon {
      opacity: 0.5;
    }
  }

  &name {
    @include mdc-typography(headline5);
    margin: 0;
    padding-top: $avatar-height/2 + 2rem;
  }

  &job {
    @include mdc-typography(subtitle1);
    margin: 0;
  }

  &school {
    @include mdc-typography(body2);
    line-height: 1.5rem;
    margin: 0;
  }

  &description {
    @include mdc-typography(body1);
    padding: 1rem 3rem 1.5rem 3rem;
    margin: auto;
    max-width: 800px;
    opacity: 0.75;
  }
}
</style>
