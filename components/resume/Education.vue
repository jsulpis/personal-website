<template>
  <!-- STUDIES -->
  <section id="resume-studies">
    <v-container>

    <h2 class="section-title">Formation</h2>
      <div class="schools">
        <!-- ICM -->
        <v-card :light="light" :class="'school school--icm' + (activeCard === 'emse' ? ' in' + (smallViewport ? '' : ' elevation-8') : ' ')">
          <h3>Ingénieur Civil des Mines</h3>
          <h4>Mines Saint-Étienne</h4>
          <div class="school-logo">
            <a href="https://www.mines-stetienne.fr/formation/icm/">
              <img src="/img/schools/emse.png" alt="logo_emse" />
            </a>
            <br>
          </div>
          <v-btn icon v-show="activeCard === 'cps2' && !smallViewport" :light="light" @click="activeCard = 'emse'">
            <v-icon>more_horiz</v-icon>
          </v-btn>
          <div class="school-content">
            <span class="school-courses">Cours:</span>
            <ul>
              <li>
                <span class="school-courses-item__name">Big Data: </span>
                <a href="https://hadoop.apache.org/">Hadoop</a>,
                <a href="https://spark.apache.org/">Spark</a>, SQL, Shell, Fouille de Données...</li>
              <li>
                <span class="school-courses-item__name">Développement Web: </span>Front-end, Back-end, API REST</li>
              <li>
                <span class="school-courses-item__name">Intelligence Artificielle: </span>jeux, planning, résolution de problèmes, représentation des connaissances...</li>
              <li>
                <span class="school-courses-item__name">Microélectronique: </span>Objets communicants, systèmes embarqués, électronique numérique et analogique
              </li>
              <li>
                <span class="school-courses-item__name">Gestion: </span>Bilans, résultats...</li>
              <li>
                <span class="school-courses-item__name">Management: </span>Méthodes agiles, performance...</li>
            </ul>

            <br>
            <div class="school-courses">Projet: Système de gestion de bâtiment intelligent</div>
            <span class="school-project__caption">Majeure Informatique, 3e année.
              <a href="https://github.com/MajeureInfo">Voir sur GitHub.</a>
            </span>
          </div>
        </v-card>

        <!-- CPS2 -->
        <v-card :light="light" :class="'school school--cps2' + (activeCard === 'cps2' ? ' in' + (smallViewport ? '' : ' elevation-8') : ' ')">
          <h3>Master on Cyber-Physical and Social Systems</h3>
          <h4>Mines Saint-Étienne, Université Jean Monnet</h4>
          <div class="school-logo">
            <a href="https://www.mines-stetienne.fr/formation/cyber-physical-social-systems-cps2/">
              <img src="/img/schools/cps2.png" alt="logo_emse_jean_monnet">
            </a>
            <br>
          </div>
          <v-btn icon v-show="activeCard === 'emse' && !smallViewport" :light="light" @click="activeCard = 'cps2'">
            <v-icon>more_horiz</v-icon>
          </v-btn>
          <div class="school-content">
            <span class="school-courses">Cours:</span>
            <ul>
              <li>
                <span class="school-courses-item__name">Web Semantics: </span>
                <a href="https://en.wikipedia.org/wiki/Linked_data">Linked Data</a>,
                <a href="https://fr.wikipedia.org/wiki/RDF_Schema">RDFS</a>,
                <a href="https://fr.wikipedia.org/wiki/SPARQL">SPARQL</a>,
                <a href="https://jena.apache.org/">Jena</a>
              </li>
              <li>
                <span class="school-courses-item__name">Cloud computing: </span>
                <a href="https://aws.amazon.com/fr">AWS</a>
              </li>
              <li>
                <span class="school-courses-item__name">Multi-Agent Systems: </span>
                <a href="https://www.emse.fr/~picard/cours/mas/lecture-DCSP-2017.pdf">Distributed Constraint Processing</a>,
                <a href="https://en.wikipedia.org/wiki/Distributed_constraint_optimization">Distributed Constraint Optimization</a>
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

export default {
  components: {
    JSection
  },
  data() {
    return {
      activeCard: "emse",
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
@import "@material/typography/mdc-typography";

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

    h3 {
      font-weight: 500;
      margin: 1rem 1rem 0 1rem;
      vertical-align: middle;
      @include mdc-typography(headline6);
    }

    h4 {
      margin: 0.25rem 0 1rem 0;
      @include mdc-typography(body2);
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
        @include mdc-typography(body1);
        font-weight: 500;
      }

      .school-project__caption {
        margin-left: 30px;
        @include mdc-typography(body2);
      }

      ul {
        @include mdc-typography(body2);
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
