<template>
  <div id="disqus_thread"></div>
</template>

<script>
import { DISQUS_ROOT_URL, DISQUS_SCRIPT_URL } from "~/assets/js/globals";

export default {
  props: { imgName: String },
  methods: {
    initDisqus() {
      // Disqus plugin
      const disqus_config = function() {
        this.page.url = DISQUS_ROOT_URL + "/" + this.imgName; // Page's canonical URL variable
        this.page.identifier = response.data.Item.uuid; // Page's unique identifier variable
      };
      (function() {
        var d = document,
          s = d.createElement("script");
        s.src = DISQUS_SCRIPT_URL + "/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        d.body.appendChild(s);
      })();
    },
    resetDisqus() {
      DISQUS.reset({
        reload: true,
        config: function() {
          this.page.identifier = response.data.Item.uuid; // Page's unique identifier variable
          this.page.url = DISQUS_ROOT_URL + "/" + this.imgName; // Page's canonical URL variable
        }
      });
    }
  },
  mounted() {
    // Load the Disqus comment plugin if it's not already done (when coming from another artwork for example)
    if ("undefined" == typeof DISQUS) {
      this.initDisqus();
    } else {
      // Or reset the plugin if it's already loaded
      this.resetDisqus();
    }
  }
};
</script>
