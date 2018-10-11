<template>
  <div>
    <v-btn
    v-for="(media, i) in socialMedia"
    :key="i"
    class="mx-2"
    icon
    :href="media.link">
      <v-icon size="24px">{{ media.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        {
          icon: "fab fa-facebook-f",
          link: "https://www.facebook.com/julien.sulpis"
        },
        {
          icon: "fab fa-linkedin-in",
          link: "https://www.linkedin.com/in/julien-sulpis"
        },
        {
          icon: "fab fa-twitter",
          link: "https://twitter.com/JulienSulpis"
        },
        {
          icon: "fab fa-github",
          link: "https://github.com/jsulpis"
        },
        {
          icon: "email",
          link: "/contact"
        }
      ]
    };
  }
};
</script>
