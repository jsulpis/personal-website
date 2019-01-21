<template>
  <section id="timeline">
    <!-- Development -->
    <panel
      :class="{'mobile-display': this.$vuetify.breakpoint.smAndDown}"
      imgUrl="https://images.ctfassets.net/xrzphgakl8qg/6dLERohQ2s46OMQsGAGI26/0b0e6105b724d6b7de101ba8ea68bd10/developpeur.jpg?fl=progressive&h=800"
      title="Développement"
    >
      Je suis un
      <b>développeur passionné</b>, orienté vers les technologies web et mobiles et fan de code propre. La plupart de mes
      <nuxt-link to="/portfolio/code">projets</nuxt-link> sont open source. Comme ce site que j'ai réalisé !
    </panel>

    <!-- Computer Graphics -->
    <panel
      :class="{'mobile-display': this.$vuetify.breakpoint.smAndDown}"
      imgUrl="https://images.ctfassets.net/xrzphgakl8qg/3AUqhyppC8QOEOmi6kkaSU/2dbe9fe2cf53818b92434bb336f2ed02/lisiere-de-foret.jpg?fl=progressive&h=800"
      title="Infographie"
    >Je fais des images 2D / 3D à mes heures perdues. Vous pouvez voir certaines de mes réalisations sur mon
      <nuxt-link to="/portfolio/infographie">portfolio</nuxt-link>.
    </panel>

    <!-- Contact -->
    <panel
      :class="{'mobile-display': this.$vuetify.breakpoint.smAndDown}"
      imgUrl="https://images.ctfassets.net/xrzphgakl8qg/4folYKTHdCY4YM0Qcgm8w2/716700c721c05a8c10a84d4d623b5573/contact.jpg?fl=progressive&h=800"
      title="Contact"
    >
      N'hésitez pas à m'envoyer vos remarques via le formulaire de
      <nuxt-link to="/contact">contact</nuxt-link>. Vous pouvez par exemple me suggérer du contenu à ajouter ou signaler une anomalie, afin de me permettre d'
      <b>améliorer</b> ce site.
    </panel>
  </section>
</template>

<script>
import Panel from "./Panel";

export default {
  components: {
    Panel
  }
};
</script>


<style lang="scss" scoped>
#timeline {
  @media only screen and (min-width: 960px) {
    display: flex;

    &:hover,
    &:focus,
    &:active {
      .tl-item {
        width: 30%;
      }
    }
  }
  background-color: #031625;
}
</style>
