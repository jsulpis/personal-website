import "../scss/index.scss";

// import "materialize-css/js/component";
// import "materialize-css/js/global";
// import "materialize-css/js/cash";
// import "materialize-css/js/sidenav";
// import "materialize-css/dist/js/materialize.min";

import "@material/tabs/index";

import fontawesome from '@fortawesome/fontawesome';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faChevron from '@fortawesome/fontawesome-free-solid/faChevronCircleDown';
import faQuoteLeft from '@fortawesome/fontawesome-free-solid/faQuoteLeft';
import faQuoteRight from '@fortawesome/fontawesome-free-solid/faQuoteRight';

fontawesome.library.add(faGithub, faLinkedin, faTwitter, faChevron, faQuoteLeft, faQuoteRight);

import "particles.js/particles";
import "./particles-config.js";

// MDC TABS

import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

var dynamicTabBar = window.dynamicTabBar = new MDCTabBar(document.querySelector('#dynamic-tab-bar'));


// dynamicTabBar.tabs.forEach(function(tab) {
//   tab.preventDefaultOnClick = true;
// });


dynamicTabBar.listen('MDCTabBar:change', function ({detail: tabs}) {
  var nthChildIndex = tabs.activeTabIndex;

  //updatePanel(nthChildIndex);
  //updateDot(nthChildIndex);
});

// MDC DRAWER
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';


let drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);
document.querySelector('.mdc-list-item').addEventListener('click', () => document.querySelector('aside').classList.remove("mdc-drawer--open"));

window.onload = function(){
  var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){
    anchors[i].setAttribute('target', '_blank');
  }
}

// MDC TOP APP BAR
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var navbar = document.getElementById("dynamic-toolbar");
var firstSection = document.getElementById("experiences");

var profile = document.getElementById("profile");

function convertRemToPixels(rem) {    
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
console.log("profile: " + profile.offsetHeight);
console.log("particles: " + convertRemToPixels(10));

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

// SCROLL
import SmoothScroll from "smooth-scroll/dist/smooth-scroll.polyfills.min";
var scroll = new SmoothScroll('[data-scroll]', {
  easing: 'easeInOutQuint',
  speed: 500
});
