<template>
  <v-layout>
    <!-- Information about the cookies -->
    <v-dialog v-model="dialog" persistent>
      <v-card dark class="text-xs-left">
        <v-card-title class="headline">Informations sur les cookies</v-card-title>
        <v-card-text>
          <h3>Qu'est-ce que c'est ?</h3>Un cookie est un petit fichier texte que les sites web sauvegardent sur votre appareil lorsque vous les consultez. Il permet à ces sites de mémoriser des informations pendant un temps donné, et sont obligatoirement supprimés au bout de 13 mois maximum.
          <h3 class="mt-3">Quels sont les cookies utilisés par ce site ?</h3>Les services suivants utilisent des cookies:
          <ul>
            <li>le service Google Analytics pour analyser le traffic sur ce site. Cela me permet par exemple de voir quelles pages sont les plus consultées et quel appareil vous utilisez, afin d'adapter le contenu de mon site.</li>
            <li>la plateforme Disqus pour que vous puissiez laisser des commentaires sur mes projets.</li>
          </ul>

          <h3 class="mt-3">Comment contrôler l'utilisation des cookies ?</h3>Vous pouvez autoriser ou interdire l'utilisation des cookies dans les préférences de votre navigateur internet. Voici des instructions pour les principaux navigateurs:
          <ul>
            <li>
              <a href="https://support.google.com/accounts/answer/61416?hl=fr">Chrome</a>
            </li>
            <li>
              <a href="https://support.apple.com/kb/PH19214?locale=fr_FR&viewlocale=fr_FR">Safari</a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences?redirectlocale=fr&redirectslug=activer-desactiver-cookies"
              >Firefox</a>
            </li>
          </ul>Notez que si vous refusez l'utilisation des cookies, vous pourrez toujours naviguer sur ce site.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click.native="dialog = false; setCookiesAccepted()">Accepter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SNACKBAR -->
    <v-snackbar
      class="cookie-snackbar"
      v-model="snackbar"
      color="grey darken-3"
      auto-height
      :timeout="0"
    >
      <p>En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies pour analyser le traffic et vous proposer du contenu de meilleure qualité.</p>
      <v-btn flat @click="dialog = true; snackbar = false">en savoir plus</v-btn>
      <v-btn flat @click="snackbar = false; setCookiesAccepted()">OK</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import CookiesService from "~/services/CookiesService";

export default {
  data() {
    return {
      snackbar: false,
      dialog: false
    };
  },
  methods: {
    setCookiesAccepted() {
      CookiesService.write("acceptCookies", "true");
    }
  },
  mounted() {
    if (CookiesService.read("acceptCookies") == "") {
      this.snackbar = true;
    }
  }
};
</script>

<style lang="scss">
.cookie-snackbar {
  .v-snack__wrapper {
    // override the snackbar property
    max-width: 100%;
  }

  @media only screen and (max-width: 599px) {
    .v-snack__content {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
