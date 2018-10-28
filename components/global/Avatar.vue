<template>
<div>
  <img class="avatar__img elevation-8" :src="avatarUrl" alt="profile_picture" />
</div>
</template>

<script>
import WebsitePictureProvider from "~/services/WebsitePictureProvider";

export default {
  props: { pro: Boolean },
  data() {
    return { avatarUrl: "" };
  },
  mounted() {
    this.avatarUrl = this.pro
      ? WebsitePictureProvider.provideAvatarProUrl()
      : WebsitePictureProvider.provideAvatarUrl();
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
