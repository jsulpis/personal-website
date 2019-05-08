<template>
  <div id="banner">
    <div id="banner_img" :style="`background-image: url('${bannerUrl}')`"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bannerUrl:
      require("~/static/data/remote/medias/banner.json") + "?fl=progressive"
  })
};
</script>

<style>
#banner {
  overflow: hidden;
}

#banner_img {
  height: 100%;
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
