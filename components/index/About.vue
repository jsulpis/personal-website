<template>
  <div id="home-about">
    <div class="home-about__profile below-banner">
      <avatar :pro="false" class="mb-4"/>
      <div class="home-about__welcome">Bienvenue sur mon site !</div>
      <div
        class="home-about__description"
      >J'y ajoute régulièrement du contenu à propos de programmation et d'infographie, qui sont deux de mes passions. Vous pouvez vous rendre sur mon
        <nuxt-link to="/portfolio">portfolio</nuxt-link>pour plus de détails. Bonne visite !
      </div>
    </div>
    <panels/>
  </div>
</template>

<script>
import Avatar from "../shared/Avatar";
import Panels from "./Panels";

export default {
  components: {
    Avatar,
    Panels
  }
};
</script>

<style>
#home-about {
  margin-bottom: -3rem;
}
.home-about__profile {
  padding: 2rem;
  background-color: #303030;
  color: white;
}
.home-about__welcome {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.home-about__description {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}
</style>
