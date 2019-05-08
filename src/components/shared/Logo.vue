<template>
  <nuxt-link to="/">
    <img id="personal-logo" src="/img/julien-sulpis-logo.png" alt="julien-sulpis-logo">
  </nuxt-link>
</template>

<style lang="scss">
#personal-logo {
  height: 60px;
  -webkit-filter: drop-shadow(0 0 3px #fff);
  filter: drop-shadow(0 0 3px #fff);

  @media only screen and (min-width: 600px) {
    height: 80px;
  }
}
</style>
