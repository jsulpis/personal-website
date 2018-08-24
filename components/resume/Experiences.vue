<template>
  <!-- EXPERIENCES -->
  <section id="experiences">
    <v-container>
      <h2 class="section-title">Expériences</h2>
      <v-card>
        <ul class="timeline timeline-split">

          <!-- SOLUTEC -->
          <experience
          date="avr. 2018 - août 2018<br>5 mois"
          jobTitle="Stagiaire développeur Android"
          company="SOLUTEC"
          location="Région de Lyon, France">
            <p>Pour le compte d'un client grand compte de SOLUTEC, je développe une application mobile pour faciliter la maintenance
              d'automates bancaires en utilisant la réalité augmentée.</p>
            <p>Technologies utilisées:</p>
            <ul>
              <li>
                <a href="https://developer.android.com/topic/libraries/architecture/">Android Architecture Components</a>
              </li>
              <li>
                <a href="https://www.easyar.com/">EasyAR</a> - Réalité Augmentée</li>
              <li>
                <a href="https://www.khronos.org/opengles/">OpenGL|ES</a> - Affichage d'objets 2D et 3D</li>
              <li>
                <a href="https://opencv.org/">OpenCV</a> - Traitement d'images</li>
            </ul>
          </experience>

          <!-- Polytechnique Montréal -->
          <experience
          date="juin 2017 - août 2017<br>3 mois"
          jobTitle="Stage de recherche en robotique mobile"
          company="Polytechnique Montréal"
          location="Région de Montréal, Canada">
            <p>Pendant ce stage, j'ai implémenté une version simplifiée de localisation et cartographie simultanée (SLAM)
              pour la robotique mobile. L'objectif était de distribuer les calculs sur un cluster pour gérer des gros volumes
              de données.
            </p>
            <p>Technologies utilisées:</p>
            <ul>
              <li>
                <a href="https://spark.apache.org/">Apache Spark</a> - Données massives</li>
              <li>
                <a href="https://www.ibm.com/cloud-computing/bluemix/fr">IBM Bluemix</a> - Plateforme Cloud</li>
              <li>
                <a href="https://kafka.apache.org/">Apache Kafka</a> - Streaming</li>
              <li>
                <a href="https://aws.amazon.com/fr/kinesis/">Amazon Kinesis</a> - Streaming</li>
            </ul>
          </experience>

          <!-- Auxitrol -->
          <experience
          date="janvier 2016<br>1 mois"
          jobTitle="Stage opérateur en usine"
          company="Auxitrol"
          location="Région de Bourges, France">
            <p>J'ai découvert les conditions de travail des ouvriers sur une ligne de production d'une usine ainsi qu'au service emballage et expédition.</p>
          </experience>

          </ul>
      </v-card>
    </v-container>
  </section>
</template>

<script>
import Experience from "./Experience.vue";
export default {
  components: {
    Experience
  },
  mounted() {
    // Show the two first sections after this one is mounted
    $("#hide-on-load").addClass("show");
  }
};
</script>
