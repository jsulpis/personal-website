import { skills } from "~/assets/data/skills";

export default {
  getSkillsFromLocalFile() {
    return skills;
  },

  getSkillsFromRemoteApi() {
    // not implemented
  },

  provideSkills() {
    return this.getSkillsFromLocalFile();
  }
};
