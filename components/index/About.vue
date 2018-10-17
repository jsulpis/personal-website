<template>
  <v-container fluid id="home-about">
    <v-layout align-center justify-space-around row wrap>
      <v-flex xs12>
        <avatar class="mb-4"/>
        <div class="home-about__welcome">Bienvenue sur mon site !</div>
        <div class="home-about__description">
          J'y ajoute régulièrement du contenu à propos de programmation et d'infographie, qui sont deux de mes passions. Vous pouvez vous rendre sur mon <nuxt-link to="/portfolio">portfolio</nuxt-link> pour plus de détails. Bonne visite !
        </div>
      </v-flex>
      <panel icon="fas fa-code">
        Je suis un <b>développeur passionné</b>, orienté vers les technologies web et mobiles et amateur de code de qualité. Mes projets open source, dont ce site fait partie, sont hébergés sur <a href="https://github.com/jsulpis">GitHub</a>.
      </panel>
      <panel icon="fas fa-images">
        Je suis <b>infographiste 2D / 3D</b> amateur à mes heures perdues. Certaines de mes réalisations sont disponibles sur mon <nuxt-link to="/portfolio">portfolio</nuxt-link>. Je suis aussi <b>musicien</b> amateur. Des vidéos arriveront un jour, patience !
      </panel>
      <panel icon="email">
        N'hésitez pas à utiliser le formulaire de <nuxt-link to="/contact">contact</nuxt-link> pour toute remarque, question, demande... Vous pouvez par exemple me suggérer du contenu à ajouter ou signaler une anomalie, afin de me permettre d'<b>améliorer</b> ce site.
      </panel>
    </v-layout>
  </v-container>
</template>

<script>
import Avatar from "../global/Avatar";
import Panel from "./Panel";

export default {
  components: {
    Avatar,
    Panel
  }
};
</script>

<style lang="scss">
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
