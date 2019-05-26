<template>
  <!-- PROFILE -->
  <v-card dark id="resume-profile" class="below-banner">
    <avatar :pro="true" class="resume-profile__avatar"/>
    <h1 class="resume-profile__name display-1">Julien Sulpis</h1>
    <h2 class="resume-profile__title headline">{{ title }}</h2>
    <h3 class="resume-profile__jobTitle">{{ jobTitle }}</h3>
    <p class="resume-profile__location">{{ location }}</p>
    <!-- Social links -->
    <p class="resume-profile__networks">
      <a :href="socialNetworks['LinkedIn'].url">
        <v-icon>{{ socialNetworks['LinkedIn'].icon }}</v-icon>
      </a>
      <a :href="socialNetworks['GitHub'].url">
        <v-icon>{{ socialNetworks['GitHub'].icon }}</v-icon>
      </a>
    </p>

    <!-- Description -->
    <cite>
      <p class="resume-profile__description">
        <v-icon small>fas fa-quote-left</v-icon>
        &nbsp;{{ description }}&nbsp;
        <v-icon small>fas fa-quote-right</v-icon>
      </p>
    </cite>
  </v-card>
</template>

<script>
import Avatar from "~/components/resume/about/Avatar";

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
  data: () => ({ socialNetworks: require("~/static/data/socialNetworks.json") })
};
</script>

<style lang="scss">
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
    a {
      margin: 0 0.5rem;
    }

    a:hover .v-icon {
      opacity: 0.5;
    }
  }

  &name {
    margin: 0;
    margin-bottom: 0.25rem;
  }

  &title {
    margin: 0 auto 0.25rem auto;
  }

  &jobTitle {
    line-height: 1.5rem;
    font-weight: normal;
    font-size: 1.1em;
    margin: 0;
  }

  &description {
    padding: 1rem 3rem 1.5rem 3rem;
    margin: auto;
    max-width: 850px;
    opacity: 0.75;
  }
}
</style>
