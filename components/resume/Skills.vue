<template>
  <!-- SKILLS -->
  <j-section id="skills" title="Compétences techniques">
      <p class="subtitle">Compétences auto-évaluées de 1 à 5 (débutant, autonome, habitué, confirmé, expert).</p>
        <!-- Loop on domains -->
        <div v-for="(domain, index) in skillSet" :key="index">
          <h3 :class="'skill-title' + (index == 0 ? ' skill-title-first' : '')">{{ domain.name }}</h3>
          <!-- Loop on subdomains -->
          <div v-for="(subdomain, index) in domain.subdomains" :key="index">
            <h4 v-if="subdomain.name != ''" class="skill-subtitle">{{ subdomain.name }}</h4>
            <!-- Loop on skills -->
            <div v-for="(skill, index) in subdomain.skills" :key="index" class="skill">
              <div class="progress-container">
                <div class="tooltip">
                  <img :src="skill.imageUrl" :alt="'logo_' + skill.imageUrl.split('.')[0]">
                  <span class="tooltiptext elevation-8">{{ skill.description }}</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" :style="'width: ' + skill.level + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </j-section>
</template>

<script>
import JSection from "./JSection.vue";

const rawJsonContent = [
  {
    name: "Développement Web",
    subdomains: [
      {
        name: "Front-end",
        skills: [
          {
            imageUrl: "/img/techno/html.png",
            description:
              "Langage de balisage définissant le contenu des pages web.",
            level: 80
          },
          {
            imageUrl: "/img/techno/css3.png",
            description: "Langage définissant le style des pages web.",
            level: 60
          },
          {
            imageUrl: "/img/techno/javascript.png",
            description:
              "Langage de programmation principalement utilisé dans les pages web interactives.",
            level: 80
          },
          {
            imageUrl: "/img/techno/sass.svg",
            description: "Outil facilitant le développement CSS.",
            level: 80
          },
          {
            imageUrl: "/img/techno/webpack.png",
            description:
              "Outil permettant d'empaqueter et d'optimiser les fichiers d'un site web.",
            level: 60
          }
        ]
      },
      {
        name: "Back-end",
        skills: [
          {
            imageUrl: "/img/techno/spring-boot.png",
            description:
              "Framework de développement d'applications web en java.",
            level: 60
          },
          {
            imageUrl: "/img/techno/nodejs.png",
            description:
              "Framework de développement d'applications web en javascript.",
            level: 60
          },
          {
            imageUrl: "/img/techno/mongodb.png",
            description: "Base de données NoSQL orientée document.",
            level: 60
          },
          {
            imageUrl: "/img/techno/aws.jpg",
            description:
              "Première et principale plateforme de cloud computing.",
            level: 60
          }
        ]
      }
    ]
  },
  {
    name: "Mobile & IoT",
    subdomains: [
      {
        name: "",
        skills: [
          {
            imageUrl: "/img/techno/android.png",
            description:
              "Système d'exploitation de la majorité des smartphones.",
            level: 80
          },
          {
            imageUrl: "/img/techno/arduino.png",
            description:
              "Plateforme de prototypage de systèmes électroniques simples.",
            level: 80
          }
        ]
      }
    ]
  },
  {
    name: "Big Data",
    subdomains: [
      {
        name: "",
        skills: [
          {
            imageUrl: "/img/techno/spark.png",
            description: "Moteur de traitement de gros volumes de données.",
            level: 80
          },
          {
            imageUrl: "/img/techno/kafka.png",
            description:
              "Outil de transfert et de traitement de gros volumes de données en temps réel.",
            level: 40
          }
        ]
      }
    ]
  },
  {
    name: "Langages généralistes",
    subdomains: [
      {
        name: "",
        skills: [
          {
            imageUrl: "/img/techno/java.png",
            description:
              'Langage orienté objet, facilement portable d\'un système à un autre. Sa devise: "write once, run everywhere".',
            level: 80
          },
          {
            imageUrl: "/img/techno/python.svg",
            description:
              "Langage haut niveau orienté objet, très utilisé par les scientifiques et dans les logiciels open-source.",
            level: 80
          }
        ]
      }
    ]
  }
];

if (process.browser) {
  const ScrollReveal = require("scrollreveal/dist/scrollreveal.min");
  window.sr = ScrollReveal();
  sr.reveal(".progress-bar", {
    origin: "left",
    distance: "100%",
    easing: "ease-in-out",
    reset: false
  });
  sr.reveal(".skill", { reset: true }, 50);
}

export default {
  components: {
    JSection
  },
  data() {
    return {
      skillSet: rawJsonContent
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
@import "@material/typography/mdc-typography";
@import "@material/theme/color-palette";

$skill-item-size: 5rem;

#skills {
  .subtitle {
    @include mdc-typography(body2);
  }

  .skill-title {
    @include mdc-typography(headline6);
    margin-bottom: 0.5rem;
    position: relative;

    &:not(.skill-title-first) {
      margin-top: 3rem;
      &::before {
        content: "";
        position: absolute;
        top: -8px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: $material-color-grey-300;
      }
    }
  }
  .skill-subtitle {
    position: relative;
    margin: 1.5rem auto 0 auto;
    @include mdc-typography(body1);
    font-weight: 500;
  }
  .skill-subtitle::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: -3px;
    right: -3px;
    height: 1px;
    background-image: -webkit-linear-gradient(
      left,
      transparent,
      $material-color-grey-300,
      transparent
    );
    background-image: -moz-linear-gradient(
      left,
      transparent,
      $material-color-grey-300,
      transparent
    );
    background-image: -o-linear-gradient(
      left,
      transparent,
      $material-color-grey-300,
      transparent
    );
  }
  .skill {
    display: inline-block;
    width: $skill-item-size;
    margin: 1rem 1.5rem;
    .progress-container {
      display: flex;
      flex-direction: column;
      .tooltip {
        position: relative;
        img {
          max-height: $skill-item-size * 0.8;
          max-width: $skill-item-size;
          margin-bottom: 0.5rem;
        }
        /* Tooltip text */
        .tooltiptext {
          visibility: hidden;
          width: 150px;
          text-align: center;
          padding: 0.5rem;
          border-radius: 2px;
          background-color: white;
          @include mdc-typography(body2); /* Position the tooltip text */
          position: absolute; // z-index: 9999;
          bottom: 115%;
          left: -50%;
        }
      }
      /* Show the tooltip text when you mouse over the tooltip container */
      .tooltip:hover .tooltiptext {
        visibility: visible;
      }
      .progress {
        flex-basis: 100%;
        border-radius: $skill-item-size * 0.1;
        overflow: hidden;
        height: $skill-item-size * 0.1;
        background-color: $material-color-grey-300;
        .progress-bar {
          height: $skill-item-size * 0.1;
          background-color: $mdc-theme-primary;
        }
      }
    }
  }
}
</style>

