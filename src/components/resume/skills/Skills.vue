<template>
  <!-- SKILLS -->
  <section id="resume-skills">
    <v-container class="skills-container">
      <h2 class="section-title">Compétences</h2>
      <v-expansion-panel expand>
        <!-- Loop on domains -->
        <v-expansion-panel-content v-for="(domain, index) in skills" :key="index">
          <div slot="header" class="domain__name">{{ domain.name }}</div>
          <div class="skill-list">
            <!-- Loop on skills -->
            <div v-for="(skill, index) in domain.items" :key="index" class="skill">
              <img
                class="skill__icon"
                :src="skill"
                :alt="`Logo ${getFormattedName(skill)}`"
                :title="getFormattedName(skill)"
              >
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </section>
</template>

<script>
import { formatWords } from "~/utils/string";

export default {
  props: { skills: Array },
  methods: {
    extractName(url) {
      const urlArray = url.split("/");
      const fileName = urlArray[urlArray.length - 1];
      return fileName.split(".")[0];
    },
    getFormattedName(url) {
      return formatWords(this.extractName(url));
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/theme.scss";

$skill-item-size: 64px;

#resume-skills {
  .resume-skills__subtitle {
    font-weight: normal;
  }
  .domain__name {
    font-weight: 500;
  }
  .skill-list {
    border-top: 1px solid $material-color-grey-300;
    padding: 1rem;
    text-align: center;
    background-color: $material-color-grey-50;
  }
  .skill {
    display: inline-block;
    height: $skill-item-size;
    margin: 0.75rem;
    vertical-align: top;
  }
  .skill__icon {
    max-height: $skill-item-size;
  }
}
</style>

