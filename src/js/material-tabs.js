// MDC TABS

import "@material/tabs/index";

import { MDCTab, MDCTabFoundation } from "@material/tabs";
import { MDCTabBar, MDCTabBarFoundation } from "@material/tabs";

var dynamicTabBar = (window.dynamicTabBar = new MDCTabBar(
  document.querySelector("#dynamic-tab-bar")
));

// "Debouncer" to freeze the active tab when
// clicking on a tab
var tabClickedTime;
var tabs = document.getElementsByClassName("mdc-tab");
for (var i = 0; i < tabs.length; i++) {
  console.log(tabs[i]);
  tabs[i].addEventListener("click", function() {
    console.log("elt clicked");
    tabClickedTime = new Date().getTime();
  });
}

// STICKY TAB BAR
var navbar = document.getElementById("dynamic-toolbar");
var firstSection = document.getElementById("experiences");
var profile = document.getElementById("profile");
var studies = document.getElementById("studies");
var skills = document.getElementById("skills");
var certifications = document.getElementById("certifications");

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Get the offset position of the navbar
var sticky = profile.offsetHeight + convertRemToPixels(10) + 26 - 48;

// Add the sticky class to the header when we reach its scroll position. Remove "sticky" when we leave the scroll position.
var offsetY;
window.onscroll = function() {
  offsetY = window.pageYOffset;
  // Set the sticky tab bar
  if (offsetY >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.add("mdc-elevation--z4");
    firstSection.style.paddingTop = "96px";
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("mdc-elevation--z4");
    firstSection.style.paddingTop = "48px";
  }

  if (new Date().getTime() - tabClickedTime > 1000) {
    // update the active tab
    if (offsetY < sticky) {
      dynamicTabBar.activeTabIndex = 0;
    } else if (offsetY < studies.offsetTop) {
      dynamicTabBar.activeTabIndex = 1;
    } else if (offsetY < skills.offsetTop) {
      dynamicTabBar.activeTabIndex = 2;
    } else if (offsetY < certifications.offsetTop) {
      dynamicTabBar.activeTabIndex = 3;
    } else {
      dynamicTabBar.activeTabIndex = 4;
    }
  }
};

