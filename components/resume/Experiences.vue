<template>
  <!-- EXPERIENCES -->
  <j-section id="resume-experiences" title="Expériences">
    <ul class="timeline timeline-split">
      <experience v-for="(job, i) in jobs" :key="i" :job="job"/>
    </ul>
  </j-section>
</template>

<script>
import Experience from "./Experience.vue";
import JSection from "./JSection.vue";
import concat from "lodash/concat";
import groupBy from "lodash/groupBy";

export default {
  props: {
    jobPositions: Array
  },
  components: {
    Experience,
    JSection
  },
  mounted() {
    // Send an event to the parent to display the page (hidden on load)
    this.$emit("experiences-loaded");
  },
  computed: {
    jobs() {
      let parsedJobs = [];
      const jobsGroupedByCompany = groupBy(this.jobPositions, "companyName");
      for (let i in jobsGroupedByCompany) {
        let jobsInSameCompany = jobsGroupedByCompany[i];
        jobsInSameCompany[0]["companyStart"] = jobsInSameCompany.slice(
          -1
        )[0].dateStart;
        jobsInSameCompany[0]["companyEnd"] = jobsInSameCompany[0].dateEnd;
        if (jobsInSameCompany.length === 1) {
          jobsInSameCompany[0].uniqueJob = true;
        }
        parsedJobs = concat(parsedJobs, jobsInSameCompany);
      }
      return parsedJobs;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";

/*==================================
    TIMELINE
==================================*/

/*-- GENERAL STYLES
    ------------------------------*/
.timeline {
  line-height: 1.4em;
  list-style: none;
  padding-left: 0;
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
  margin-bottom: 1rem;
}
.timeline-info__company-name {
  margin: 0.25rem 0 0 0;
  font-weight: 500;
  font-size: 1.1em;
}
.timeline-info__company-duration {
  margin-bottom: 0;
  font-size: 0.9em;
  font-weight: normal;
}
.timeline-info__company-location {
  margin-bottom: 0.5rem;
  font-size: 0.8em;
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
    background: $material-color-grey-300;
    border-radius: 100%;
    content: "";
    display: block;
    height: 14px;
    position: absolute;
    top: 6px;
    left: 3px;
    width: 14px;
    box-sizing: initial;
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
.timeline-item--first .timeline-marker:before{
  width: 16px;
  height: 16px;
  left: 2px;
  background: $mdc-theme-primary;
}

/*----- TIMELINE CONTENT -----*/
.timeline-content {
  padding-bottom: 40px;

  .timeline-content__title {
    margin: 0;
    font-weight: 500;
  }

  .timeline-content__duration {
    margin: 0.1rem 0;
    font-size: 0.9em;
  }
  .timeline-content__description {
    margin-top: 0.35rem;
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
