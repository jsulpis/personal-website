// MDC TABS

import "@material/tabs/index";

import { MDCTab, MDCTabFoundation } from "@material/tabs";
import { MDCTabBar, MDCTabBarFoundation } from "@material/tabs";

var dynamicTabBar = (window.dynamicTabBar = new MDCTabBar(
  document.querySelector("#dynamic-tab-bar")
));

// dynamicTabBar.tabs.forEach(function(tab) {
//   tab.preventDefaultOnClick = true;
// });

dynamicTabBar.listen("MDCTabBar:change", function({ detail: tabs }) {
  var nthChildIndex = tabs.activeTabIndex;

  //updatePanel(nthChildIndex);
  //updateDot(nthChildIndex);
});

// STICKY TAB BAR
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
var navbar = document.getElementById("dynamic-toolbar");
var firstSection = document.getElementById("experiences");
var profile = document.getElementById("profile");

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Get the offset position of the navbar
var sticky = profile.offsetHeight + convertRemToPixels(10) + 26 - 48;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("mdc-elevation--z4");
    firstSection.style.paddingTop = "96px";
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("mdc-elevation--z4");
    firstSection.style.paddingTop = "48px";
  }
}
