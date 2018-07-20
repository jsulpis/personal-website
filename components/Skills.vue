<template>
  <!-- SKILLS -->
  <section id="skills">
    <v-container>
      <h2 class="section-title">Compétences techniques</h2>
      <p class="subtitle">Compétences auto-évaluées de 1 à 5 (débutant, autonome, habitué, confirmé, expert).</p>
      <v-card>
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
                  <span class="tooltiptext">{{ skill.description }}</span>
                </div>
                <div class="progress">
                  <div class="progress-bar" :style="'width: ' + skill.level + '%'"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-container>
  </section>
</template>

<script>
  const rawJsonContent = [
    {
      name: "Développement Web",
      subdomains: [
        {
          name: "Front-end",
          skills: [
            {
              imageUrl: "img/techno/html.png",
              description:
                "Langage de balisage définissant le contenu des pages web.",
              level: 80
            },
            {
              imageUrl: "img/techno/css3.png",
              description: "Langage définissant le style des pages web.",
              level: 60
            },
            {
              imageUrl: "img/techno/javascript.png",
              description:
                "Langage de programmation principalement utilisé dans les pages web interactives.",
              level: 80
            },
            {
              imageUrl: "img/techno/sass.svg",
              description: "Outil facilitant le développement CSS.",
              level: 80
            },
            {
              imageUrl: "img/techno/webpack.png",
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
              imageUrl: "img/techno/spring-boot.png",
              description:
                "Framework de développement d'applications web en java.",
              level: 60
            },
            {
              imageUrl: "img/techno/nodejs.png",
              description:
                "Framework de développement d'applications web en javascript.",
              level: 60
            },
            {
              imageUrl: "img/techno/mongodb.png",
              description: "Base de données NoSQL orientée document.",
              level: 60
            },
            {
              imageUrl: "img/techno/aws.png",
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
              imageUrl: "img/techno/android.png",
              description:
                "Système d'exploitation de la majorité des smartphones.",
              level: 80
            },
            {
              imageUrl: "img/techno/arduino.png",
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
              imageUrl: "img/techno/spark.png",
              description: "Moteur de traitement de gros volumes de données.",
              level: 80
            },
            {
              imageUrl: "img/techno/kafka.png",
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
              imageUrl: "img/techno/java.png",
              description:
                'Langage orienté objet, facilement portable d\'un système à un autre. Sa devise: "write once, run everywhere".',
              level: 80
            },
            {
              imageUrl: "img/techno/python.svg",
              description:
                "Langage haut niveau orienté objet, très utilisé par les scientifiques et dans les logiciels open-source.",
              level: 80
            }
          ]
        }
      ]
    }
  ];

  export default {
    data() {
      return {
        skillSet: rawJsonContent
      };
    }
  };
</script>