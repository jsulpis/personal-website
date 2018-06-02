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
document
  .querySelector(".mdc-list-item")
  .addEventListener("click", () =>
    document.querySelector("aside").classList.remove("mdc-drawer--open")
  );

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
