<template>
  <div id="banner" :style="'background-image: url(' + bannerUrl + ')'"></div>
</template>

<script>
const BANNER_URL = require("~/static/data/medias/banner.json");

export default {
  data() {
    return {
      bannerUrl: BANNER_URL + "?fl=progressive"
    };
  }
};
</script>


<style>
#banner {
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 40px 15px rgba(0, 0, 0, 0.3) inset;

  flex-shrink: 0;

  filter: none;
  -webkit-filter: grayscale(20%);
  -moz-filter: grayscale(20%);
  -ms-filter: grayscale(20%);
  -o-filter: grayscale(20%);
}
</style>
