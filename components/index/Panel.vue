<!-- Adapted from a CodePen by Jeff Glenn:
https://codepen.io/jeffglenn/pen/KNYoKa -->
<template>
  <div class="tl-item">
    <div class="tl-bg" :style="`background-image: url(${imgUrl})`"></div>

    <div class="tl-year">
      <p>{{ title }}</p>
    </div>

    <div class="tl-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    subtitle: String,
    content: String
  }
};
</script>

<style lang="scss">
$transition-short: 0.25s;
$transition-medium: 0.4s;
$transition-long: 0.6s;

.tl-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 100%;
  height: 100vh;
  color: #fff;
  overflow: hidden;
  transition: width $transition-medium ease;

  @media only screen and (min-width: 600px) {
    max-height: 500px;
  }
  @media only screen and (min-width: 960px) {
    width: 33.333%;
  }

  &:before,
  &:after {
    transform: translate3d(0, 0, 0);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:after {
    background-color: rgb(21, 25, 29);
    opacity: 0.8;
    transition: opacity $transition-medium ease;
  }

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 75%
    );
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity $transition-medium ease,
      transform $transition-medium ease;
  }

  &:hover,
  &.mobile-display {
    @media only screen and (min-width: 960px) {
      width: 40% !important;
    }

    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 1;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity $transition-long ease,
        transform $transition-long ease $transition-short;
    }

    .tl-content {
      opacity: 1;
      transform: translateY(0);
      transition: all $transition-long ease 0.25s;
    }

    .tl-bg {
      filter: grayscale(0);
    }
  }
}

.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;

  h1 {
    text-transform: uppercase;
    color: #1779cf;
    font-size: 1.44rem;
    font-weight: normal;
  }
}

.tl-year {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  p {
    font-size: 1.728rem;
    margin-bottom: 0;
  }
}

.tl-bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter $transition-medium ease;
  filter: grayscale(100%);
}
</style>
