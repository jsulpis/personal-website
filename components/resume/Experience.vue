<template>
  <li class="timeline-item">
    <div class="timeline-info">
      <p class="date" v-html="date"></p>
      <img :src="'/img/brands/' + company.split(' ')[0].toLowerCase() + '.jpg'" :alt="'logo_' + company">
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <h3 class="timeline-title">{{ jobTitle }}</h3>
      <h4 class="company">{{ company }}</h4>
      <h4 class="location">{{ location }}</h4>
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
