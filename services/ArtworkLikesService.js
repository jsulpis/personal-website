import axios from "axios";
import Cookies from "~/services/CookiesService";
import { API_ROOT_URL } from "~/assets/js/globals";

export default class ArtworkLikesService {
  constructor(imgName) {
    this.imgName = imgName;
    this.cookieName = "artworkLikes";
  }

  checkCookie() {
    this.userLiked = Cookies.read(this.cookieName)
      .split(".")
      .includes(this.imgName);
    return this.userLiked;
  }

  toggleLike() {
    // Construct the url depending on the current like status
    const url = this.buildUrl();

    // Post the request and update the value
    axios.post(url).then(() => {
      this.userLiked = !this.userLiked;
      this.updateCookie();
    });
  }

  buildUrl() {
    return (
      API_ROOT_URL +
      "/artworks/" +
      this.imgName +
      (this.userLiked ? "/remove-like" : "/add-like")
    );
  }

  updateCookie() {
    let cookieContent = Cookies.read(this.cookieName);
    if (this.userLiked) {
      // add the current artwork to the list in liked artworks
      cookieContent = cookieContent + "." + this.imgName;
    } else {
      // Remove the current artwork from the list
      cookieContent = cookieContent.split(".");
      cookieContent.splice(cookieContent.indexOf(this.imgName), 1);
      cookieContent = cookieContent.join(".");
    }
    Cookies.write(this.cookieName, cookieContent);
  }
}
