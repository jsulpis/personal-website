<template>
  <div id="banner"></div>
</template>

<style lang="scss">
@import "~/assets/scss/variables.scss";

#banner {
  opacity: 0;
  height: $banner-height;
  background-image: url("/img/background/sky.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 0px 40px 15px rgba(0, 0, 0, 0.3) inset;

  filter: none;
  -webkit-filter: grayscale(20%);
  -moz-filter: grayscale(20%);
  -ms-filter: grayscale(20%);
  -o-filter: grayscale(20%);
}
</style>
