<template>
  <div>
    <v-btn v-for="(network, i) in socialNetworks" :key="i" class="mx-2" icon :href="network.url">
      <v-icon size="24px">{{ network.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import SOCIAL_NETWORKS from "~/static/data/socialNetworks.json";

export default {
  data() {
    return {
      socialNetworks: SOCIAL_NETWORKS
    };
  }
};
</script>
