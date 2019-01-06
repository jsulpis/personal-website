<template>
  <div>
    <img class="avatar__img elevation-8" :src="avatarUrl" alt="profile_picture">
  </div>
</template>

<script>
import MediaService from "~/services/MediaService";

export default {
  props: { pro: Boolean },
  data() {
    return {
      avatarUrl: ""
    };
  },
  mounted() {
    const pictureName = "portrait" + (this.pro ? "-pro" : "");
    MediaService.getPictureUrl(pictureName).then(url => (this.avatarUrl = url));
  }
};
</script>

<style >
.avatar__img {
  height: 11rem;
  border-radius: 50%;
  border: 5px solid #f5f5f5;
}
</style>
