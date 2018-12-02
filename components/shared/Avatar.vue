<template>
  <div>
    <img class="avatar__img elevation-8" :src="avatarUrl" alt="profile_picture">
  </div>
</template>

<script>
import { S3_WEBSITE_URL } from "~/assets/js/globals";

export default {
  props: { pro: Boolean },
  data() {
    return {
      avatarUrl:
        S3_WEBSITE_URL + (this.pro ? "/portrait_pro.jpg" : "/portrait.jpg")
    };
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
