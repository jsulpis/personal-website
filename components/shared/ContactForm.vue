<template>
  <!-- CONTACT -->
  <div>
    <v-container justify-center>
      <v-form class="contact-form" action="#" ref="form" @submit.prevent="onSubmit">
        <!-- Name -->
        <v-text-field
          v-model="name"
          label="Nom"
          prepend-inner-icon="account_box"
          :rules="[rules.required, rules.nameChecker]"
          required
          validate-on-blur
        ></v-text-field>

        <!-- Email-->
        <v-text-field
          v-model="email"
          label="E-mail"
          prepend-inner-icon="email"
          hint="Il sera utilisé uniquement pour vous répondre."
          :rules="[rules.required, rules.emailChecker]"
          required
          validate-on-blur
        ></v-text-field>

        <!-- Message -->
        <v-textarea
          v-model="message"
          label="Message"
          auto-grow
          counter="1000"
          :rules="[rules.required, rules.messageChecker]"
          required
          validate-on-blur
        ></v-textarea>

        <v-btn color="primary" :loading="loading" :disabled="loading || btnDisabled" type="submit">
          <v-icon left>send</v-icon>Envoyer
        </v-btn>
      </v-form>
    </v-container>

    <!-- SNACKBAR -->
    <v-snackbar v-model="snackbar" :color="snackBarState" :timeout="snackBarTimeout">
      {{ snackBarText }}
      <v-btn dark flat @click="snackbar = false">OK</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import EmailService from "~/services/EmailService";

export default {
  data() {
    return {
      controller: new EmailService(),
      name: "",
      email: "",
      message: "",
      loading: false,
      snackbar: false,
      btnDisabled: false,
      snackBarTimeout: 3000,
      snackBarState: "",
      snackBarText: "",
      rules: {
        required: value => this.controller.required(value),
        nameChecker: value => this.controller.checkName(value),
        emailChecker: value => this.controller.checkEmail(value),
        messageChecker: value => this.controller.checkMessage(value)
      }
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        console.log("Valid formular. Sending the e-mail...");
        this.loading = true;
        this.controller
          .sendEmail({
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then(() => this.emailSucceeded())
          .catch(() => this.emailFailed());
      }
    },
    emailSucceeded() {
      console.log("success");
      this.showSnackBar("success", "Message envoyé !");
      // Discourage the client from sending another email
      this.btnDisabled = true;
    },
    emailFailed() {
      console.log("error");
      this.showSnackBar(
        "error",
        "Une erreur est survenue. Veuillez réessayer."
      );
    },
    showSnackBar(state, text) {
      this.snackBarState = state;
      this.snackBarText = text;
      this.loading = false;
      this.snackbar = true;
    }
  }
};
</script>

<style>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}
</style>
