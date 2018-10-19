<template>
  <div class="avatar">
    <img class="avatar__img elevation-8" src="/img/avatar.jpeg" alt="photo_profile" />
  </div>
</template>

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
