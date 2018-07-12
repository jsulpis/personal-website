import { MDCTemporaryDrawer } from "@material/drawer";
import { MDCTopAppBar } from "@material/top-app-bar/index";

// MDC DRAWER
let drawer = new MDCTemporaryDrawer(
  document.querySelector(".mdc-drawer--temporary")
);

// MDC TOP APP BAR
new MDCTopAppBar(document.querySelector(".mdc-top-app-bar"));

// Open the navigation drawer when clicking on the hamburger icon
$(".menu").on("click", () => (drawer.open = true));

// Set the listeners to each menu item
$(".mdc-list-item").each(function() {
  $(this).on("click", () => {
    $("aside").removeClass("mdc-drawer--open");
    $("body").removeClass("mdc-drawer-scroll-lock");
  });
});

// Set the target to _blank for all links in the page
$(function() {
  $("a").each(() => $(this).prop("target", "_blank"));
});
