<template>
  <v-card class="repo-item">
    <div class="repo-item__media">
      <nuxt-link :to="'/portfolio/code/' + repo.name">
        <img :src="repoPictureUrl">
      </nuxt-link>
    </div>

    <v-card-title class="repo-item__card-title">
      <div>
        <h3 class="repo-item__title headline mb-0">{{repo.name | beautify}}</h3>
        <p class="repo-item__description body-2">{{repo.description}}</p>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="primary" :to="'/portfolio/code/' + repo.name">Details</v-btn>
      <v-spacer/>
      <p class="body-1">{{repo.language}}</p>
      <v-spacer/>
      <v-icon small class="repo-item__icon">star</v-icon>
      {{repo.stargazers_count}}
      <v-spacer/>
      <v-icon small class="repo-item__icon">fas fa-code-branch</v-icon>
      {{repo.forks_count}}
      <v-spacer/>
      <span class="repo-item__license" v-show="showLicense">{{license}}</span>
      <v-spacer/>
    </v-card-actions>
  </v-card>
</template>

<script>
import GitHubDataProvider from "~/services/GitHubDataProvider";

export default {
  props: ["repoProp"],
  data() {
    return {
      repo: { name: "" },
      repoPictureUrl: "",
      showLicense: false
    };
  },
  computed: {
    license() {
      return this.repo.license != null ? this.repo.license.spdx_id : "";
    }
  },
  filters: {
    beautify(text) {
      return text != ""
        ? text
            .split("-")
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ")
        : "";
    }
  },
  methods: {
    setLicenseDisplay() {
      const screenWidth = window.innerWidth;
      this.showLicense =
        screenWidth < 600 ||
        (screenWidth > 699 && screenWidth < 960) ||
        screenWidth > 1264;
    }
  },
  mounted() {
    this.repo = this.repoProp;
    this.setLicenseDisplay();
    window.addEventListener("orientationchange", () =>
      setTimeout(() => this.setLicenseDisplay(), 100)
    );

    const defaultRepoPictureUrl =
      "https://raw.githubusercontent.com/jsulpis/" +
      this.repo.name +
      "/" +
      this.repo.default_branch +
      "/preview.png";
    this.repoPictureUrl = defaultRepoPictureUrl;
    GitHubDataProvider.checkRepoPictureUrl(defaultRepoPictureUrl).then(
      verifiedPictureUrl => (this.repoPictureUrl = verifiedPictureUrl)
    );
  }
};
</script>

<style lang="scss">
.repo-item {
  margin: 0.75rem;
  text-align: left;
}
.repo-item__card-title {
  padding: 0 1rem;
}
.repo-item__media {
  max-width: 100%;
  text-align: center;
  overflow: hidden;

  img {
    max-width: 106%;
    transform: translateX(-3%) translateY(-2%);
  }
}
.repo-item__description {
  font-weight: normal;
  margin-bottom: 0;
}
.repo-item__icon {
  margin-right: 3px;
}
</style>
