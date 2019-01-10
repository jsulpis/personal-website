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
              <img class="skill__icon" :src="skill.icon" :alt="'logo ' + skill.name" :title="skill.name">
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </section>
</template>

<script>
import * as VExpansionPanel from "vuetify/es5/components/VExpansionPanel";
import JSection from "./JSection.vue";

export default {
  props: { skills: Array },
  components: {
    JSection,
    ...VExpansionPanel
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
    position: relative;
    width: $skill-item-size;
    height: $skill-item-size;
    margin: 0.75rem;
    vertical-align: top;
  }
  .skill__icon {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    max-height: $skill-item-size;
    max-width: $skill-item-size;
  }
}
</style>

