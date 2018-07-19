<template>
    <!-- SKILLS -->
  <section id="skills">
    <div class="container">
      <h2 class="mdc-typography--headline5 section-title">Compétences techniques</h2>
      <p class="mdc-typography--body2">Compétences auto-évaluées de 1 à 5 (débutant, autonome, habitué, confirmé, expert).</p>
      <v-card>

        <!-- Développement Web-->
        <h3 class="skill-title skill-title-first">Développement Web</h3>
        <h4 class="skill-subtitle">Front-end</h4>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/html.png" alt="logo_html">
              <span class="tooltiptext">Langage de balisage définissant le contenu des pages web.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/css3.png" alt="logo_css3">
              <span class="tooltiptext">Langage définissant le style des pages web.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/js.png" alt="logo_javascript">
              <span class="tooltiptext">Langage de programmation principalement utilisé dans les pages web interactives.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/sass.svg" alt="logo_sass">
              <span class="tooltiptext">Outil facilitant (beaucoup) le développement CSS.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/webpack.png" alt="logo_webpack">
              <span class="tooltiptext">Outil permettant d'empaqueter et d'optimiser les fichiers d'un site web.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>
        </div>

        <h4 class="skill-subtitle">Back-end</h4>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/spring-boot.png" alt="logo_spring_boot">
              <span class="tooltiptext">Framework de développement d'applications web en java.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/nodejs.png" alt="logo_nodejs">
              <span class="tooltiptext">Framework de développement d'applications web en javascript.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/mongodb.png" alt="logo_mongodb">
              <span class="tooltiptext">Base de données NoSQL orientée document.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/aws.png" alt="logo_mongodb">
              <span class="tooltiptext">Première et principale plateforme de cloud computing.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 60%"></div>
            </div>
          </div>
        </div>

        <!-- Mobile & IoT -->
        <h3 class="skill-title">Mobile & IoT</h3>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/android.png" alt="logo_html">
              <span class="tooltiptext">Système d'exploitation de la majorité des smartphones.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/arduino.png" alt="logo_html">
              <span class="tooltiptext">Plateforme de prototypage de systèmes électroniques simples.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>

        <!-- Big Data -->
        <h3 class="skill-title">Big Data</h3>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/spark.png" alt="logo_html">
              <span class="tooltiptext">Moteur de traitement de gros volumes de données.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/kafka.png" alt="logo_html">
              <span class="tooltiptext">Outil de transfert et de traitement de gros volumes de données en temps réel.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 40%"></div>
            </div>
          </div>
        </div>

        <!-- Langages -->
        <h3 class="skill-title">Langages généralistes</h3>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/java.png" alt="logo_html">
              <span class="tooltiptext">Langage orienté objet, facilement portable d'un système à un autre. Sa devise: "write once, run everywhere".</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
        <div class="skill">
          <div class="progress-container">
            <div class="tooltip">
              <img src="img/techno/python.svg" alt="logo_html">
              <span class="tooltiptext">Langage haut niveau orienté objet, très utilisé par les scientifiques et dans les logiciels open-source.</span>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </section>
</template>
