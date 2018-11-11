<template>
  <!-- SKILLS -->
  <section id="resume-skills">
    <h2 class="section-title">Compétences</h2>
    <v-container class="skills-container">

    <v-expansion-panel expand>
      <!-- Loop on domains -->
      <v-expansion-panel-content v-for="(domain, index) in skillSet" :key="index">
        <div slot="header" class="domain__name">{{domain.name}}</div>
        <div class="skill-list">
          <!-- Loop on subdomains -->
          <div v-for="(subdomain, index) in domain.subdomains" :key="index">
            <h4 v-if="subdomain.name != ''" class="domain__subtitle">{{ subdomain.name }}</h4>
            <!-- Loop on skills -->
            <div v-for="(skill, index) in subdomain.skills" :key="index" class="skill">
              <img class="skill__icon" :src="skill.icon" :alt="'logo_' + skill.icon.split('.')[0]">
            </div>
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
import ResumeSkillsProvider from "~/services/resumeSkillsProvider";

export default {
  components: {
    JSection,
    ...VExpansionPanel
  },
  data() {
    return {
      skillSet: ResumeSkillsProvider.provideSkills()
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";

$skill-item-size: 4rem;

#resume-skills {
  .resume-skills__subtitle {
    font-weight: normal;
  }
  .domain__name {
    font-weight: 500;
  }
  .domain__subtitle {
    position: relative;
    margin: 1.5rem auto 0 auto;
    font-weight: 500;

    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: -3px;
      right: -3px;
      height: 1px;
      background-image: -webkit-linear-gradient(
        left,
        transparent,
        $material-color-grey-400,
        transparent
      );
      background-image: -moz-linear-gradient(
        left,
        transparent,
        $material-color-grey-400,
        transparent
      );
      background-image: -o-linear-gradient(
        left,
        transparent,
        $material-color-grey-400,
        transparent
      );
    }
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

