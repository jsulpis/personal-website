<template>
  <div>
    <page-header
      title="Projets"
      description="Mes projets informatiques open-source.<br>Ce contenu est extrait de mon profil GitHub, qui est en anglais !"
    ></page-header>
    <nuxt-child/>
  </div>
</template>

<script>
import PageHeader from "~/components/shared/layout/PageHeader.vue";

export default {
  components: {
    PageHeader
  }
};
</script>
