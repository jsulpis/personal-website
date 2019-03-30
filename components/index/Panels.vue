<template>
  <section>
    <!-- Development -->
    <panel
      imgUrl="https://images.ctfassets.net/xrzphgakl8qg/6dLERohQ2s46OMQsGAGI26/0b0e6105b724d6b7de101ba8ea68bd10/developpeur.jpg?fl=progressive&h=800"
      title="Développement"
      icon="fas fa-code"
      btnText="Projets"
      btnLink="/portfolio/code"
    >
      Je suis un
      <b>développeur passionné</b>, spécialisé dans les technologies du web mais surtout touche-à-tout (Android, Cloud, IoT...). Tous mes projets sont open source, comme ce site !
    </panel>

    <!-- Computer Graphics -->
    <panel
      imgUrl="https://images.ctfassets.net/xrzphgakl8qg/3AUqhyppC8QOEOmi6kkaSU/2dbe9fe2cf53818b92434bb336f2ed02/lisiere-de-foret.jpg?fl=progressive&h=800"
      title="Infographie"
      icon="far fa-images"
      btnText="Portfolio"
      btnLink="/portfolio/infographie"
    >Je fais des images 2D / 3D à mes heures perdues. Vous pouvez voir certaines de mes réalisations sur mon portfolio.</panel>

    <!-- Contact -->
    <panel
      imgUrl="https://images.ctfassets.net/xrzphgakl8qg/4folYKTHdCY4YM0Qcgm8w2/716700c721c05a8c10a84d4d623b5573/contact.jpg?fl=progressive&h=800"
      title="Contact"
      icon="mail"
      btnText="Contact"
      btnLink="/contact"
    >
      N'hésitez pas à m'envoyer vos remarques via le formulaire de contact. Vous pouvez par exemple me suggérer du contenu à ajouter ou signaler une anomalie, afin de me permettre
      <b>d'améliorer</b> ce site.
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
