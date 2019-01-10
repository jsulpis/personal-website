<template>
  <div id="banner"></div>
</template>

<script>
import MediaService from "~/services/MediaService";

export default {
  beforeMount() {
    MediaService.getPictureUrl("home-background").then(backgroundImg =>
      $("#banner").css("background-image", " url(" + backgroundImg + ")")
    );
  }
};
</script>


<style>
#banner {
  background-size: cover;
  background-position: center;
  box-shadow: 0px 0px 40px 15px rgba(0, 0, 0, 0.3) inset;

  filter: none;
  -webkit-filter: grayscale(20%);
  -moz-filter: grayscale(20%);
  -ms-filter: grayscale(20%);
  -o-filter: grayscale(20%);
}
</style>
