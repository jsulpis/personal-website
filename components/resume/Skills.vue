<template>
  <!-- SKILLS -->
  <j-section id="resume-skills" title="Compétences techniques">
    <p class="resume-skills__subtitle body-2">Compétences auto-évaluées de 1 à 5 (débutant, autonome, habitué, confirmé, expert).</p>
    <!-- Loop on domains -->
    <div v-for="(domain, index) in skillSet" :key="index">
      <h3 :class="'domain-title' + (index == 0 ? ' domain-title--first' : '')">{{ domain.name }}</h3>
      <!-- Loop on subdomains -->
      <div v-for="(subdomain, index) in domain.subdomains" :key="index">
        <h4 v-if="subdomain.name != ''" class="domain-subtitle">{{ subdomain.name }}</h4>
        <!-- Loop on skills -->
        <div v-for="(skill, index) in subdomain.skills" :key="index" class="skill-container">
          <div class="skill">
            <div >
              <img class="skill__icon" :src="skill.icon" :alt="'logo_' + skill.icon.split('.')[0]">
            </div>
            <div class="skill__progress">
              <div class="skill__progress-bar" :style="'width: ' + skill.level + '%'"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </j-section>
</template>

<script>
import JSection from "./JSection.vue";
import ResumeSkillsProvider from "~/services/resumeSkillsProvider";

if (process.browser) {
  const ScrollReveal = require("scrollreveal/dist/scrollreveal.min");
  window.sr = ScrollReveal();
  sr.reveal(".skill__progress-bar", {
    origin: "left",
    distance: "100%",
    easing: "ease-in-out",
    reset: false
  });
  sr.reveal(".skill", { reset: true }, 50);
}

export default {
  components: {
    JSection
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

$skill-item-size: 5rem;

#resume-skills {
  .resume-skills__subtitle {
    font-weight: normal;
  }
}

.domain-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  position: relative;

  &:not(.domain-title--first) {
    margin-top: 3rem;
    &::before {
      content: "";
      position: absolute;
      top: -8px;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: $material-color-grey-300;
    }
  }
}
.domain-subtitle {
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
      $material-color-grey-300,
      transparent
    );
    background-image: -moz-linear-gradient(
      left,
      transparent,
      $material-color-grey-300,
      transparent
    );
    background-image: -o-linear-gradient(
      left,
      transparent,
      $material-color-grey-300,
      transparent
    );
  }
}

.skill-container {
  display: inline-block;
  width: $skill-item-size;
  margin: 1rem 1.5rem;
}
.skill {
  display: flex;
  flex-direction: column;
}
.skill__icon {
  position: relative;
  max-height: $skill-item-size * 0.8;
  max-width: $skill-item-size;
  margin-bottom: 0.5rem;
}
.skill__progress {
  flex-basis: 100%;
  border-radius: $skill-item-size * 0.1;
  overflow: hidden;
  height: $skill-item-size * 0.1;
  background-color: $material-color-grey-300;
  .skill__progress-bar {
    height: $skill-item-size * 0.1;
    background-color: $mdc-theme-primary;
  }
}
</style>

