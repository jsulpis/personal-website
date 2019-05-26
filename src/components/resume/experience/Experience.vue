<template>
  <li :class="'timeline-item' + (firstJobOfCompany ? ' timeline-item--first' : '')">
    <div class="timeline-info">
      <div v-if="firstJobOfCompany">
        <img class="timeline-info__logo" :src="job.companyLogo" :alt="'logo_' + job.companyName">
        <p class="timeline-info__company-location">{{ job.location }}</p>
        <p
          class="timeline-info__company-duration"
        >{{ job.companyStart | dateFrShort }} - {{ job.companyEnd | dateFrShort }} &bull; {{ companyDuration }}</p>
      </div>
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-content__title">{{ job.title }}</h3>
      <p
        v-if="!job.uniqueJob"
        class="timeline-content__duration"
      >{{ job.dateStart | dateFrShort }} - {{ job.dateEnd | dateFrShort }} &bull; {{ jobDuration }}</p>
      <div class="timeline-content__description" v-html="jobDescription"/>
    </div>
  </li>
</template>

<script>
const md = require("markdown-it")({ breaks: true });

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
      return this.getDurationBetweenDates(dateStart, dateEnd);
    },
    companyDuration() {
      return this.getDurationBetweenDates(
        new Date(this.job.companyStart),
        this.job.companyEnd ? new Date(this.job.companyEnd) : new Date()
      );
    },
    jobDescription() {
      return md.render(this.job.description || "");
    }
  },
  methods: {
    getDurationBetweenDates(dateStart, dateEnd) {
      const durationMonths = Math.max(
        0,
        Math.floor((dateEnd - dateStart) / (1000 * 60 * 60 * 24 * 30))
      );
      const residueMonths = durationMonths % 12;
      const durationYears = (durationMonths - residueMonths) / 12;
      let output = "";
      if (durationYears) {
        const yearString = durationYears > 1 ? " ans " : " an ";
        output += durationYears + yearString;
      }
      if (residueMonths || output == "") {
        output += residueMonths + " mois";
      }
      return output;
    }
  }
};
</script>
