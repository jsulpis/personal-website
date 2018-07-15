<template>
    <div id="header-wrapper">
    <div id="particles"></div>

    <div id="profile">
      <div class="avatar">
        <img class="rounded-circle" src="/img/avatar.jpeg" alt="photo_profile" />
      </div>
      <h1 class="mdc-typography--headline5">Julien Sulpis</h1>
      <h2 class="mdc-typography--subtitle1">Stagiaire développeur Android</h2>
      <h3 class="mdc-typography--body2">SOLUTEC &#x2022; École des Mines de Saint-Étienne<br>Région de Lyon, France</h3>
      <p class="social">
        <a href="https://www.linkedin.com/in/julien-sulpis">
          <font-awesome-icon :icon="['fab', 'linkedin-in']"></font-awesome-icon>
        </a>
        <a href="https://github.com/jsulpis">
          <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
        </a>
        <a href="https://twitter.com/JulienSulpis">
          <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
        </a>
      </p>

      <p id="description" class="mdc-typography--body1">
        <font-awesome-icon icon="quote-left"></font-awesome-icon>
        Développeur généraliste passionné et curieux, toujours à la recherche de technologies à explorer. <br>Gros consommateur de cours en ligne et chasseur de certifications.
        <font-awesome-icon icon="quote-right"></font-awesome-icon>
      </p> 


      <div id="dynamic-toolbar">
        <nav id="dynamic-tab-bar" class="mdc-tab-bar hide-on-med-and-down" role="tablist">
          <a data-scroll role="tab" aria-controls="panel-1" class="mdc-tab mdc-tab--active" href="#header-wrapper">A propos</a>
          <a data-scroll role="tab" aria-controls="panel-2" class="mdc-tab" href="#experiences">Expériences</a>
          <a data-scroll role="tab" aria-controls="panel-3" class="mdc-tab" href="#studies">Formation</a>
          <a data-scroll role="tab" aria-controls="panel-3" class="mdc-tab" href="#skills">Compétences</a>
          <a data-scroll role="tab" aria-controls="panel-3" class="mdc-tab" href="#certificates">Certifications</a>
          <a data-scroll role="tab" aria-controls="panel-3" class="mdc-tab" href="#contact">Contact</a>
          <span class="mdc-tab-bar__indicator"></span>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedinIn, faGithub, faTwitter, faQuoteLeft, faQuoteRight);

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>
