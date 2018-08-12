<template>
      <!-- Header -->
  <header id="presentation" class="section">
    <div class="header-container">
      <nav class="hidden-sm-and-down main-menu text-sm-right">
        <ul>
          <li 
          v-for="(item, i) in items" 
          :key="i"
          :class="i == 0 ? 'active' : ''"><nuxt-link :to="item.to">{{ item.title }}</nuxt-link></li>
        </ul>
      </nav>
      <div class="inner">
        <div class="vertical-center">
          <h1 class="panel-title">{{ title }}</h1>
          <h3 class="panel-subtitle"></h3>
          <p class="panel-description"><slot></slot></p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: { items: Array, title: String }
};
</script>
