export const state = () => ({
  appLoaded: false,
  projects: []
});

export const mutations = {
  setApplicationLoaded(state) {
    state.appLoaded = true;
  },
  setProjects(state, payload) {
    state.projects = payload;
  }
};
