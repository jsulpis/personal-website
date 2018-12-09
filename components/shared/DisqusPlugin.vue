<template>
  <div id="disqus_thread"></div>
</template>

<script>
import { DISQUS_SCRIPT_URL } from "~/assets/js/globals";

export default {
  props: {
    identifier: String,
    url: String,
    title: String,
    language: String
  },
  mounted() {
    if (this.identifier) {
      this.loadDisqus();
    }
  },
  watch: {
    identifier(newId) {
      if (newId) {
        this.loadDisqus();
      }
    }
  },
  methods: {
    loadDisqus() {
      if (window.DISQUS) {
        this.reset(window.DISQUS);
        return;
      }
      this.init();
    },
    reset(dsq) {
      const self = this;
      dsq.reset({
        reload: true,
        config: function() {
          self.setBaseConfig(this);
        }
      });
    },
    init() {
      const self = this;
      window.disqus_config = function() {
        self.setBaseConfig(this);
      };
      setTimeout(() => {
        let d = document,
          s = d.createElement("script");
        s.setAttribute("id", "embed-disqus");
        s.setAttribute("data-timestamp", +new Date());
        s.type = "text/javascript";
        s.async = true;
        s.src = `${DISQUS_SCRIPT_URL}/embed.js`;
        (d.head || d.body).appendChild(s);
      }, 0);
    },
    setBaseConfig(disqusConfig) {
      disqusConfig.page.url = this.url || this.$el.baseURI;
      disqusConfig.page.identifier =
        this.identifier || this.$route.path || window.location.pathname;

      if (this.title) {
        disqusConfig.page.title = this.title;
      }
      if (this.language) {
        disqusConfig.language = this.language;
      }

      disqusConfig.callbacks.onReady = [
        () => {
          this.$emit("ready");
        }
      ];

      disqusConfig.callbacks.onNewComment = [
        comment => {
          this.$emit("new-comment", comment);
        }
      ];
    }
  }
};
</script>
