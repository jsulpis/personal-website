<template>
  <li class="timeline-item">
    <div class="timeline-info">
      <p class="timeline-info__date" v-html="date"></p>
      <img class="timeline-info__logo" :src="'/img/brands/' + company.split(' ')[0].toLowerCase() + '.jpg'" :alt="'logo_' + company">
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-content__title">{{ jobTitle }}</h3>
      <h4 class="timeline-content__company">{{ company }}</h4>
      <h4 class="timeline-content__location">{{ location }}</h4>
      <slot></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    date: String,
    jobTitle: String,
    company: String,
    location: String
  },
  filters: {
    companyFormatter(company) {
      return company.split()[0];
    }
  }
};
</script>
