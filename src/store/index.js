export const state = () => ({
  appLoaded: false
});

export const mutations = {
  setApplicationLoaded(state) {
    state.appLoaded = true;
  },
  setArtworks(state, payload) {
    state.artworks = payload;
  }
};
