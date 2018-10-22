import { S3_WEBSITE_URL } from "~/assets/js/globals";

export default {
  provideAvatarUrl() {
    return S3_WEBSITE_URL + "/portrait.jpg";
  },

  provideAvatarProUrl() {
    return S3_WEBSITE_URL + "/portrait_pro.jpg";
  }
};
