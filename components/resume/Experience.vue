<template>
  <li class="timeline-item">
    <div class="timeline-info">
      <p class="timeline-info__date body-2">{{date}}<br>{{duration}}</p>
      <img class="timeline-info__logo" :src="'/img/brands/' + company.split(' ')[0].toLowerCase() + '.jpg'" :alt="'logo_' + company">
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-content__title title">{{ jobTitle }}</h3>
      <h4 class="timeline-content__company subheading">{{ company }}</h4>
      <h4 class="timeline-content__location">{{ location }}</h4>
      <p class="body-2 font-weight-regular"><slot></slot></p>
      <p class="body-2 font-weight-regular font-italic"
      v-if="technos != '' || methodos != ''">
      <span v-if="technos != ''">Technologies: {{technos}}</span><br>
      <span v-if="methodos != ''">Méthodologies: {{methodos}}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    date: String,
    duration: String,
    jobTitle: String,
    company: String,
    location: String,
    technos: { type: String, default: "" },
    methodos: { type: String, default: "" }
  },
  filters: {
    companyFormatter(company) {
      return company.split()[0];
    }
  }
};
</script>
