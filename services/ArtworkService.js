import axios from "axios";
import Cookies from "~/services/CookiesService";

export default class ArtworkService {
  static viewCookieName = "artworkViews";
  static artworksEndpoint = process.env.API_URL + "/artworks/";
  static likeCookieName = "artworkLikes";

  constructor(store) {
    this.store = store;
  }

  static initArtwork(artworkTitle, store) {
    ArtworkService.setArtworkInStore(artworkTitle, store);
    ArtworkService.addViewIfNeverSeenBefore(artworkTitle);
  }

  static setArtworkInStore(artworkTitle, store) {
    store.commit("setCurrentArtwork", {
      title: artworkTitle,
      userLiked: ArtworkService.artworkInCookie(
        artworkTitle,
        ArtworkService.likeCookieName
      )
    });
  }

  static artworkInCookie(artworkTitle, cookieName) {
    return Cookies.read(cookieName)
      .split(".")
      .includes(artworkTitle);
  }

  static addViewIfNeverSeenBefore(artworkTitle) {
    if (ArtworkService.neverSeenBefore(artworkTitle)) {
      const url = ArtworkService.artworksEndpoint + artworkTitle + "/add-view";
      axios.post(url);
      ArtworkService.writeViewCookie(artworkTitle);
    }
  }

  static neverSeenBefore(artworkTitle) {
    return !ArtworkService.artworkInCookie(
      artworkTitle,
      ArtworkService.viewCookieName
    );
  }

  static writeViewCookie(artworkTitle) {
    const currentCookieContent = Cookies.read(ArtworkService.viewCookieName);
    if (currentCookieContent.split(".").indexOf(artworkTitle) === -1) {
      const newCookieContent = currentCookieContent + "." + artworkTitle;
      Cookies.write(ArtworkService.viewCookieName, newCookieContent);
    }
  }

  static getArtwork(artworkTitle) {
    return new Promise(resolve => {
      axios
        .get(ArtworkService.artworksEndpoint + artworkTitle)
        .then(response => resolve(response.data));
    });
  }

  static getArtworks() {
    return new Promise(resolve => {
      axios
        .get(ArtworkService.artworksEndpoint)
        .then(response => resolve(response.data));
    });
  }

  toggleLike(artworkTitle) {
    const baseUrl = ArtworkService.artworksEndpoint + artworkTitle;
    const query = this.store.state.currentArtwork.userLiked
      ? "/remove-like"
      : "/add-like";

    this.store.commit("toggleCurrentArtworkLike");

    axios.post(baseUrl + query).then(() => this.updateLikeCookie());
  }

  updateLikeCookie() {
    let cookieContent = Cookies.read(ArtworkService.likeCookieName);
    const currentArtwork = this.store.state.currentArtwork;
    if (currentArtwork.userLiked) {
      // add the current artwork to the list in liked artworks
      cookieContent = cookieContent + "." + currentArtwork.title;
    } else {
      // Remove the current artwork from the list
      cookieContent = cookieContent.split(".");
      cookieContent.splice(cookieContent.indexOf(currentArtwork.title), 1);
      cookieContent = cookieContent.join(".");
    }
    Cookies.write(ArtworkService.likeCookieName, cookieContent);
  }
}
