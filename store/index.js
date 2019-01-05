export const state = () => ({
  header: {
    title: "",
    description: ""
  }
});

export const mutations = {
  setHeaderContent(state, payload) {
    state.header.title = payload.title;
    state.header.description = payload.description;
  },
  resetHeaderContent(state) {
    state.header.title = "";
    state.header.description = "";
  }
};
