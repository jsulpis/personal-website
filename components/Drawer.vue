<template>
    <div>
        <!-- MOBILE MENU -->
                <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <a id="hamburger-menu" class="menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
        <span class="mdc-top-app-bar__title"></span>
      </section>
    </div>
  </header>

  <aside class="mdc-drawer mdc-drawer--temporary mdc-typography">
    <nav class="mdc-drawer__drawer">
      <header class="mdc-drawer__header">
        <div class="mdc-drawer__header-content title-underline">Menu</div>
      </header>
      <nav id="icon-with-text-demo" class="mdc-drawer__content mdc-list">
        <a class="mdc-list-item" data-scroll role="tab" href="#header-wrapper">A propos</a>
        <br>
        <a class="mdc-list-item" data-scroll role="tab" href="#experiences">Expériences</a>
        <br>
        <a class="mdc-list-item" data-scroll role="tab" href="#studies">Formation</a>
        <br>
        <a class="mdc-list-item" data-scroll role="tab" href="#skills">Compétences</a>
        <br>
        <a class="mdc-list-item" data-scroll role="tab" href="#certificates">Certifications</a>
        <br>
        <a class="mdc-list-item" data-scroll role="tab" href="#contact">Contact</a>
      </nav>
    </nav>
  </aside>
    </div>
</template>
