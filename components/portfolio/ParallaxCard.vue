<!-- Adapted from a CodePen by Andy Merskin
https://codepen.io/andymerskin/pen/XNMWvQ -->
<template>
  <div
    class="parallax-card-wrap hide-on-render"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="parallaxCard"
  >
    <div class="parallax-card" :style="cardStyle">
      <img class="parallax-card__bg" :src="imgSource" :style="[cardBgTransform]">
      <div class="parallax-card__info">
        <h1 class="parallax-card__title">{{title}}</h1>
        <p class="parallax-card__description">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { dataImage: String, title: String, description: String },
  data() {
    return {
      card: null,
      imgSource: this.dataImage,
      width: 240,
      height: 320,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
      move: true
    };
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 20;
      const rY = this.mousePY * -20;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -30;
      const tY = this.mousePY * -30;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    }
  },
  mounted() {
    this.width = this.$refs.parallaxCard.offsetWidth;
    this.height = this.$refs.parallaxCard.offsetHeight;
    this.card = this.$refs.parallaxCard;
  },
  methods: {
    handleMouseMove(e) {
      // Handle mouse move only half the time to improve fluidity
      if (this.move) {
        this.mouseX = e.pageX - this.card.offsetLeft - this.width / 2;
        this.mouseY = e.pageY - this.card.offsetTop - this.height / 2;
      }
      this.move = !this.move;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 400);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/mixins.scss";

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

$shortDelay: 0.6s;
$mediumDelay: 1.5s;
$longDelay: 3s;

.parallax-card-wrap {
  margin: 2rem;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    .parallax-card__info {
      transform: translateY(0);
    }
    .parallax-card__info p {
      opacity: 1;
    }
    .parallax-card__info,
    .parallax-card__info p {
      transition: $shortDelay $hoverEasing;
    }
    .parallax-card__info:after {
      transition: $shortDelay $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .parallax-card__bg {
      transition: $shortDelay $hoverEasing, opacity $mediumDelay $hoverEasing;
      opacity: 0.8;
    }
    .parallax-card {
      transition: $shortDelay $hoverEasing, box-shadow $mediumDelay $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.parallax-card {
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12),
    inset #333 0 0 0 5px, inset rgba(white, 0.5) 0 0 0 6px;
  @media only screen and (min-width: 600px) {
    box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
      inset rgba(white, 0.5) 0 0 0 6px;
  }
  transition: $mediumDelay $returnEasing;
}

.parallax-card__bg {
  @media only screen and (max-width: 600px) {
    opacity: 0.8;
  }
  opacity: 0.6;
  position: absolute;
  top: -20px;
  left: -20px;
  transition: $mediumDelay $returnEasing,
    opacity $mediumDelay $mediumDelay $returnEasing;
  pointer-events: none;
}

.parallax-card__info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  @media only screen and (min-width: 600px) {
    transform: translateY(40%);
  }
  transition: $shortDelay $mediumDelay cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    @media only screen and (min-width: 600px) {
      opacity: 0;
    }

    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: $shortDelay $mediumDelay cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 1;
    @media only screen and (min-width: 600px) {
      transform: translateY(100%);
    }
    transition: $longDelay $mediumDelay $returnEasing;
  }
}

.parallax-card__title {
  @include font-title;
  font-size: 36px;
  font-weight: 500;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}

.parallax-card__description {
  min-height: 75px;
}
</style>
