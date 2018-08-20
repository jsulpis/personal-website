<template>
  <div>
    <div class="full-page background-gradient"></div>
    <div class="content container">

      <!-- Display the error code -->
      <p class="error-caption">ERREUR</p>
      <h1>{{error.statusCode}}</h1>
      <p v-if="error.statusCode === 400">Requête incorrecte.</p>
      <p v-else-if="error.statusCode === 401">Authentification requise.</p>
      <p v-else-if="error.statusCode === 403">Accès refusé</p>
      <p v-else-if="error.statusCode === 404">Page introuvable.</p>
      <p v-else-if="Math.trunc(error.statusCode / 100) === 5">Erreur du serveur.</p>
      <p v-else>Une erreur est survenue.</p>

      <!-- Add a custom message for 404 error -->
      <!-- Not displayed in mobiles in paysage mode (otherwise all content does not fit in the window) -->
      <p v-if="error.statusCode === 404" id="message">La page demandée a décidé de disparaître sans m'en informer.<br>À moins qu'elle n'existe pas...</p>

      <!-- Redirect the user to relevant pages -->
      <div v-if="Math.trunc(error.statusCode / 100) === 4">
        <p class="title mt-3">Vous pouvez plutôt aller sur une de ces pages:</p>
        <v-btn href="/" round outline color="primary">Accueil</v-btn>
        <v-btn to="/portfolio" round outline color="primary">Portfolio</v-btn>
        <v-btn to="/contact" round outline color="primary">Contact</v-btn>
      </div>
      <div v-else>
        <p class="title mt-3">Si l'erreur persiste, merci de m'en informer.</p>
        <v-btn to="/contact" round outline color="primary">Contact</v-btn>
      </div>

    </div>
    <div id="particles-js" class="full-page"/>
  </div>
</template>

<script>
if (process.browser) {
  require("particles.js/particles");
}

export default {
  layout: "dark",
  props: ["error"],
  methods: {
    handleMessageDisplay() {
      setTimeout(() => {
        if (window.innerHeight < 450) {
          $("#message").hide();
        } else {
          $("#message").show();
        }
      }, 500);
    }
  },
  mounted() {
    // Hide the message in small screens in landscape mode and set a listener for screen orientation changes.
    // This should not happen often...
    this.handleMessageDisplay();
    window.addEventListener("orientationchange", this.handleMessageDisplay);

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/error/main.scss";
</style>
