export const state = () => ({
  header: {
    title: "",
    description: ""
  },
  appLoaded: false,
  currentArtwork: {
    title: "",
    userLiked: false
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
  },
  setApplicationLoaded(state) {
    state.appLoaded = true;
  },
  setCurrentArtwork(state, payload) {
    state.currentArtwork = payload;
  },
  toggleCurrentArtworkLike(state) {
    state.currentArtwork.userLiked = !state.currentArtwork.userLiked;
  },
  setArtworks(state, payload) {
    state.artworks = payload;
  }
};
