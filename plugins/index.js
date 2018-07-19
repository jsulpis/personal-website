// Code with vendor librairy to execute on client side only
// (use window object)

import ScrollReveal from "scrollreveal/dist/scrollreveal.min";

window.sr = ScrollReveal();
sr.reveal(".progress-bar", {
  origin: "left",
  distance: "100%",
  easing: "ease-in-out",
  reset: false
});
sr.reveal(".skill", { reset: true }, 50);