// MDC DRAWER
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation,
  util
} from "@material/drawer";

let drawer = new MDCTemporaryDrawer(
  document.querySelector(".mdc-drawer--temporary")
);
document
  .querySelector(".menu")
  .addEventListener("click", () => (drawer.open = true));
document.querySelectorAll(".mdc-list-item").forEach(function(elt) {
  elt.addEventListener("click", () => {
    document.querySelector("aside").classList.remove("mdc-drawer--open");
    document.querySelector("body").classList.remove("mdc-drawer-scroll-lock");
  }
  );
});

window.onload = function() {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].setAttribute("target", "_blank");
  }
};

// MDC TOP APP BAR
import { MDCTopAppBar } from "@material/top-app-bar/index";

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);
