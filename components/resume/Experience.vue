<template>
  <li :class="'timeline-item' + (firstJobOfCompany ? ' timeline-item--first' : '')">
    <div class="timeline-info">
      <div v-if="firstJobOfCompany">
        <p class="timeline-info__company-name">{{ job.companyName }}</p>
        <p
          class="timeline-info__company-duration"
        >{{ job.companyStart | dateFrShort }} - {{ job.companyEnd | dateFrShortIfExists }} &bull; {{ companyDuration }}</p>
        <p class="timeline-info__company-location">{{ job.location }}</p>
        <img class="timeline-info__logo" :src="job.companyLogo" :alt="'logo_' + job.companyName">
      </div>
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-content__title">{{ job.title }}</h3>
      <p
        v-if="!job.uniqueJob"
        class="timeline-content__duration"
      >{{ job.dateStart | dateFrShort }} - {{ job.dateEnd | dateFrShortIfExists }} &bull; {{ jobDuration }}</p>
      <div class="timeline-content__description" v-html="jobDescription"/>
    </div>
  </li>
</template>

<script>
const md = require("markdown-it")({ breaks: true });
import { dateFrShort } from "~/filters/date";

export default {
  props: {
    job: Object
  },
  computed: {
    firstJobOfCompany() {
      return !!this.job.companyStart;
    },
    jobDuration() {
      const dateStart = new Date(this.job.dateStart);
      const dateEnd = this.job.dateEnd
        ? new Date(this.job.dateEnd)
        : new Date();
      return this.getMonthsBetweenDates(dateStart, dateEnd);
    },
    companyDuration() {
      return this.getMonthsBetweenDates(
        new Date(this.job.companyStart),
        this.job.companyEnd ? new Date(this.job.companyEnd) : new Date()
      );
    },
    jobDescription() {
      return md.render(this.job.description);
    }
  },
  methods: {
    getMonthsBetweenDates(dateStart, dateEnd) {
      return (
        Math.floor((dateEnd - dateStart) / (1000 * 60 * 60 * 24 * 30)) + " mois"
      );
    }
  },
  filters: {
    dateFrShort,
    dateFrShortIfExists(date) {
      return date ? dateFrShort(date) : "Aujourd'hui";
    }
  }
};
</script>
