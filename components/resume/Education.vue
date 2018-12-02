<template>
  <!-- STUDIES -->
  <section id="resume-studies">
    <v-container>
      <h2 class="section-title">Formation</h2>
      <div class="schools">
        <!-- ICM -->
        <v-card
          :light="light"
          :class="'school school--icm' + (activeCard === 'emse' ? ' in' + (smallViewport ? '' : ' elevation-8') : ' ')"
        >
          <h3 class="school-degree">Ingénieur Civil des Mines</h3>
          <h4 class="school-name">Mines Saint-Étienne</h4>
          <div class="school-logo">
            <a href="https://www.mines-stetienne.fr/formation/icm/">
              <img src="/img/schools/emse.png" alt="logo_emse">
            </a>
            <br>
          </div>
          <v-btn
            icon
            v-show="activeCard === 'cps2' && !smallViewport"
            :light="light"
            @click="activeCard = 'emse'"
          >
            <v-icon>more_horiz</v-icon>
          </v-btn>
          <div class="school-content">
            <span class="school-courses">Cours:</span>
            <ul>
              <li v-for="(courseName, i) in Object.keys(emseCourses)" :key="i">
                <education-course :name="courseName" :description="emseCourses[courseName]"/>
              </li>
            </ul>

            <br>
            <div class="school-courses">Projet: Système de gestion de bâtiment intelligent</div>
            <span class="school-project__caption">
              Majeure Informatique, 3e année.
              <a
                href="https://github.com/MajeureInfo"
              >Voir sur GitHub.</a>
            </span>
          </div>
        </v-card>

        <!-- CPS2 -->
        <v-card
          :light="light"
          :class="'school school--cps2' + (activeCard === 'cps2' ? ' in' + (smallViewport ? '' : ' elevation-8') : ' ')"
        >
          <h3 class="school-degree">Master on Cyber-Physical and Social Systems</h3>
          <h4 class="school-name">Mines Saint-Étienne, Université Jean Monnet</h4>
          <div class="school-logo">
            <a href="https://www.mines-stetienne.fr/formation/cyber-physical-social-systems-cps2/">
              <img src="/img/schools/cps2.png" alt="logo_emse_jean_monnet">
            </a>
            <br>
          </div>
          <v-btn
            icon
            v-show="activeCard === 'emse' && !smallViewport"
            :light="light"
            @click="activeCard = 'cps2'"
          >
            <v-icon>more_horiz</v-icon>
          </v-btn>
          <div class="school-content">
            <span class="school-courses">Cours:</span>
            <ul>
              <li v-for="(courseName, i) in Object.keys(cps2Courses)" :key="i">
                <education-course :name="courseName" :description="cps2Courses[courseName]"/>
              </li>
            </ul>

            <br>
            <div class="school-courses">Projet: Système d'objets communicants</div>
            <span class="school-project__caption">
              <a href="https://github.com/CPS2project">Voir sur GitHub.</a>
            </span>
          </div>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script>
import JSection from "./JSection.vue";
import EducationCourse from "./EducationCourse";

const EMSE_COURSES = {
  "Big Data": "Hadoop, Spark, SQL, Shell, Fouille de Données...",
  "Développement Web": "Front-end, Back-end, API REST",
  "Intelligence Artificielle":
    "jeux, planning, résolution de problèmes, représentation des connaissances...",
  Microélectronique:
    "Objets communicants, systèmes embarqués, électronique numérique et analogique",
  Gestion: "Bilans, résultats...",
  Management: "Méthodes agiles, performance..."
};

const CPS2_COURSES = {
  "Web Semantics": "Linked Data, RDFS, SPARQL, Jena",
  "Cloud computing": "AWS",
  "Multi-Agent Systems":
    "Distributed Constraint Processing, Distributed Constraint Optimization"
};

export default {
  components: {
    JSection,
    EducationCourse
  },
  data() {
    return {
      activeCard: "emse",
      emseCourses: EMSE_COURSES,
      cps2Courses: CPS2_COURSES,
      light: true
    };
  },
  computed: {
    smallViewport() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  }
};
</script>

<style lang="scss">
@mixin school-focus {
  height: fit-content !important;
  .school-content {
    opacity: 1;
  }
}

#resume-studies {
  min-height: 660px;

  .school {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); // $mdc-animation-standard-curve-timing-function;
    display: inline-block;
    margin: 0 auto;
    padding: 1rem;
    width: 40%;

    @media only screen and(max-width: 959px) {
      @include school-focus;
      width: auto;
      display: block !important;
    }

    &.school--icm:not(.in) {
      height: 240px;
    }
    &.school--cps2 {
      &:not(.in) {
        height: 270px;
      }
      @media only screen and(max-width: 959px) {
        margin: 20px auto 0 auto;
      }
    }

    .school-degree {
      font-weight: 500;
      margin: 1rem 1rem 0 1rem;
      vertical-align: middle;
    }

    .school-name {
      margin: 0.25rem 0 1rem 0;
      font-size: 14px;
      font-weight: 400;
    }

    .school-logo {
      min-height: 80px;
      img {
        height: 60px;
        margin: 0 1rem;
      }
    }

    .school-content {
      @media only screen and (min-width: 960px) {
        opacity: 0;
      }
      text-align: left;

      .school-courses {
        font-weight: 500;
      }

      .school-courses-item__name {
        font-size: 15px;
        font-weight: 500;
      }

      .school-project__caption {
        font-size: 14px;
        margin-left: 30px;
      }

      ul {
        font-size: 14px;
      }
      li {
        margin: 0.25rem;
      }
    }
  }

  .school.in {
    @include school-focus;
    @media only screen and (min-width: 960px) {
      width: 40vw;
    }
    @media only screen and (min-width: 1600px) {
      width: 33vw;
    }
  }

  .schools {
    display: block;

    @media only screen and (min-width: 960px) {
      display: inline-flex;
    }
  }
}
</style>
