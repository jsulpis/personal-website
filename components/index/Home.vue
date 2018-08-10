<template>
      <!-- Header -->
  <header class="panel presentation" data-section-name="presentation">
    <div class="header-container">
      <nav class="hidden-sm-and-down borderXwidth text-sm-right">
        <ul>
          <li 
          v-for="(item, i) in items" 
          :key="i"><nuxt-link :to="item.to">{{ item.title }}</nuxt-link></li>
        </ul>
      </nav>
      <div class="inner">
      <div class="vertical-center">
        <h1 class="panel-title">{{ panelContent.title }}</h1>
        <p class="panel-description">{{ panelContent.description }}</p>
      </div>
    </div>
        <a class="down-arrow" id="about" href="#developpeur">
        <v-icon dark size=60>keyboard_arrow_down</v-icon>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  props: { items: Array, panelContent: Object }
};
</script>
