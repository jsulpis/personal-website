<template>
  <!-- PROFILE -->
  <v-card dark id="resume-profile" class="below-banner">
    <avatar :pro="true" class="resume-profile__avatar"/>
    <h1 class="resume-profile__name display-1">Julien Sulpis</h1>
    <h2 class="resume-profile__title headline">{{ title }}</h2>
    <h3 class="resume-profile__jobTitle subheading">{{ jobTitle }}</h3>
    <p class="resume-profile__location">{{ location }}</p>
    <!-- Social links -->
    <p class="resume-profile__networks">
      <a :href="socialNetworks['LinkedIn'].url">
        <v-icon>fab fa-linkedin-in</v-icon>
      </a>
      <a class="ma-3" :href="socialNetworks['GitHub'].url">
        <v-icon>fab fa-github</v-icon>
      </a>
      <a :href="socialNetworks['Twitter'].url">
        <v-icon>fab fa-twitter</v-icon>
      </a>
    </p>

    <!-- Description -->
    <p class="resume-profile__description">
      <v-icon small>fas fa-quote-left</v-icon>
      &nbsp;{{ description }}&nbsp;
      <v-icon small>fas fa-quote-right</v-icon>
    </p>
  </v-card>
</template>

<script>
import Avatar from "../shared/Avatar";
import { SOCIAL_NETWORKS } from "~/assets/data/socialNetworks";

export default {
  props: {
    title: String,
    jobTitle: String,
    location: String,
    description: String
  },
  components: {
    Avatar
  },
  data() {
    return {
      socialNetworks: SOCIAL_NETWORKS
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";

// PROFILE
#resume-profile {
  text-align: center;
  position: relative;
  width: 100%;
}

.resume-profile__ {
  &avatar img {
    margin: 1.5rem 0 0.25rem 0;
  }

  &networks {
    margin: 0.5rem 1rem;
    padding: 0.5rem;

    a:hover .v-icon {
      opacity: 0.5;
    }
  }

  &name {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  &title {
    margin: 0;
  }

  &jobTitle {
    line-height: 1.5rem;
    margin: 0;
  }

  &description {
    padding: 1rem 3rem 1.5rem 3rem;
    margin: auto;
    max-width: 800px;
    opacity: 0.75;
  }
}
</style>
