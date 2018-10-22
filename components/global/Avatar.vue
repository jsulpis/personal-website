<template>
  <div class="avatar">
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


<style lang="scss">
@import "~/assets/scss/variables.scss";

.avatar {
  width: 100%;
  height: $avatar-height;
}

.avatar__img {
  height: $avatar-height;
  border-radius: 50%;
  border: 5px solid #f5f5f5;
}
</style>
