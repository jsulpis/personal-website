<template>
  <!-- EXPERIENCES -->
  <section id="experiences">
    <v-container>
      <h2 class="section-title">Expériences</h2>
      <v-card>
        <ul class="timeline timeline-split">

          <li class="timeline-item">
            <div class="timeline-info">
              <p class="date">avr. 2018 - août 2018
                <br>5 mois</p>
              <img src="img/brands/solutec.png" alt="logo_SOLUTEC">
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Stagiaire développeur Android</h3>
              <h4 class="company">SOLUTEC</h4>
              <h4 class="location">Région de Lyon, France</h4>
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
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-info">
              <p class="date">juin 2017 - août 2017
                <br>3 mois</p>
              <img src="img/brands/polytechnique.jpg" alt="logo_polymtl">
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Stage de recherche en robotique mobile</h3>
              <h4 class="company">Polytechnique Montréal</h4>
              <h4 class="location">Région de Montréal, Canada</h4>
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
            </div>
          </li>

          <li class="timeline-item">
            <div class="timeline-info">
              <p class="date">janvier 2016
                <br>1 mois</p>
              <img src="img/brands/auxitrol.gif" alt="logo_auxitrol">
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Stage opérateur en usine</h3>
              <h4 class="company">Auxitrol</h4>
              <h4 class="location">Région de Bourges, France</h4>
              <p>J'ai découvert les conditions de travail des ouvriers sur une ligne de production d'une usine.</p>
            </div>
          </li>

          <li class="timeline-item period">
            <div class="timeline-info"></div>
            <div class="timeline-marker"></div>
          </li>
        </ul>
      </v-card>
    </v-container>
  </section>
</template>

<script>
export default {
  mounted() {
    // Show the two first sections after this one is mounted
    $("#hide-on-load").addClass("show");
  }
}
</script>
