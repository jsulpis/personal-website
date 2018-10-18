<template>
  <!-- EXPERIENCES -->
  <j-section id="resume-experiences" title="Expériences">
    <ul class="timeline timeline-split">
      <!-- Enedis -->
      <experience
      date="oct. 2018 - Aujourd'hui"
      :duration="Math.floor((new Date(Date.now()) - new Date(2018, 9))/(1000*60*60*24*30)+1) + ' mois'"
      jobTitle="Ingénieur études et développement"
      company="SOLUTEC"
      location="Région de Lyon, France">
      Consultant pour des missions orientées développement.
      </experience>

      <!-- SOLUTEC -->
      <experience
      date="avr. 2018 - août 2018"
      duration="5 mois"
      jobTitle="Stagiaire développeur Android"
      company="SOLUTEC"
      location="Région de Lyon, France"
      technos="Java, Android Architecture Components, Pattern MVVM, EasyAR, OpenGL|ES, OpenCV"
      methodos="SCRUM">
      Pour un client de SOLUTEC, j'ai développé une application mobile pour automatiser et faciliter la maintenance de distributeurs automatiques bancaires en utilisant la réalité augmentée.
      </experience>

      <!-- Polytechnique Montréal -->
      <experience
      date="juin 2017 - août 2017"
      duration="3 mois"
      jobTitle="Stagiaire de recherche en robotique mobile"
      company="Polytechnique Montréal"
      location="Région de Montréal, Canada"
      technos="Python, Apache Spark, IBM Bluemix, Apache Kafka, Amazon Kinesis">
      Pendant ce stage, j'ai implémenté un algorithme de localisation et cartographie simultanée (SLAM)
        pour la robotique mobile. L'objectif était de distribuer les calculs sur un cluster pour gérer des gros volumes
        de données.
      </experience>

      </ul>
  </j-section>
</template>

<script>
import Experience from "./Experience.vue";
import JSection from "./JSection.vue";

export default {
  components: {
    Experience,
    JSection
  },
  mounted() {
    // Show the hidden sections in the top of the page after this one is mounted
    $(".hide-on-render").addClass("show");
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";

/*==================================
    TIMELINE
==================================*/

/*-- GENERAL STYLES
    ------------------------------*/
.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
}

/*----- TIMELINE ITEM -----*/

.timeline-item {
  padding-left: 40px;
  text-align: left;
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
}

/*----- TIMELINE INFO -----*/

.timeline-info {
  text-align: center;
  white-space: nowrap;
}
.timeline-info__date {
  margin: 0.25rem 0 0 0;
  font-weight: normal;
}
.timeline-info__logo {
  width: 100px;
}

/*----- TIMELINE MARKER -----*/

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 14px;
  &:before {
    background: $mdc-theme-primary;
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    box-sizing: initial;
    transition: background 0.2s ease-in-out, border 0.2s ease-in-out;
  }
  &:after {
    content: "";
    width: 2px;
    background: $material-color-grey-300;
    display: block;
    position: absolute;
    top: 29px;
    bottom: 0;
    left: 9px;
  }
  .timeline-item:last-child &:after {
    content: none;
  }
}
.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid $mdc-theme-primary;
}

/*----- TIMELINE CONTENT -----*/
.timeline-content {
  padding-bottom: 80px;

  .timeline-content__title {
    margin: 0;
    line-height: 1.9rem;
  }

  .timeline-content__company {
    margin: 0.25rem 0;
  }
  .timeline-content__location {
    font-size: 13px;
    font-weight: 400;
    margin: 0.25rem 0 0.75rem 0;
    line-height: 0.75rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
}

/*----------------------------------------------
        MOD: TIMELINE SPLIT
    ----------------------------------------------*/

.timeline-split {
  @media (min-width: 600px) {
    .timeline {
      display: table;
    }
    .timeline-item {
      display: table-row;
      padding: 0;
    }
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: table-cell;
      vertical-align: top;
    }
    .timeline-marker {
      position: relative;
    }
    .timeline-content {
      padding-left: 30px;
    }
    .timeline-info {
      padding-right: 30px;
    }
  }
}
</style>
