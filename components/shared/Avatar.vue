<template>
  <div>
    <img
      class="avatar__img elevation-8"
      :src="avatarUrl + '?w=175&h=175'"
      height="175"
      width="175"
      alt="profile_picture"
    >
  </div>
</template>

<script>
export default {
  props: { pro: Boolean },
  data() {
    return {
      avatarUrl: this.pro
        ? require("~/static/data/medias/portrait-pro.json")
        : require("~/static/data/medias/portrait.json")
    };
  }
};
</script>

<style >
.avatar__img {
  border-radius: 50%;
  border: 5px solid #f5f5f5;
}
</style>
