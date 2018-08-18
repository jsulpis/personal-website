<template>
  <!-- CONTACT -->
  <div>
    <v-container justify-center>
      <form id="contact-form" action="#" @submit.prevent="onSubmit">
        <!-- Name -->
        <v-text-field id="name-field" 
        v-model="name" 
        label="Nom" 
        prepend-inner-icon="account_box" 
        :rules="[rules.required, rules.nameChecker]"
        :success="validName" 
        required 
        validate-on-blur></v-text-field>

        <!-- Email-->
        <v-text-field 
        id="email-field" 
        v-model="email" 
        label="E-mail" 
        prepend-inner-icon="email" 
        hint="Il sera utilisé uniquement pour vous répondre."
        :rules="[rules.required, rules.emailChecker]" 
        :success="validEmail" 
        required 
        validate-on-blur></v-text-field>

        <!-- Message -->
        <v-textarea 
        id="message-field" 
        v-model="message" 
        label="Message" 
        auto-grow 
        counter="1000" 
        :rules="[rules.required, rules.messageChecker]"
        :success="validMessage" 
        required 
        validate-on-blur></v-textarea>

        <v-btn color="primary" 
        :loading="loading" 
        :disabled="loading" 
        type="submit">
          <v-icon left>send</v-icon>
          Envoyer
        </v-btn>
      </form>
    </v-container>

    <!-- SNACKBAR -->
    <v-snackbar 
    v-model="snackbar" 
    :color="snackBarState" 
    :timeout="snackBarTimeout">
      {{ snackBarText }}
      <v-btn dark flat @click="snackbar = false">
        OK
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import * as VTextField from "vuetify/es5/components/VTextField";
import * as VTextArea from "vuetify/es5/components/VTextarea";
import * as VSnackbar from "vuetify/es5/components/VSnackbar";

export default {
  components: {
    ...VTextField,
    ...VTextArea,
    ...VSnackbar
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      loading: false,
      snackbar: false,
      snackBarTimeout: 3000,
      snackBarState: "",
      snackBarText: "",
      validName: false,
      validEmail: false,
      validMessage: false,
      rules: {
        required: value => !!value || "Champ requis.",
        nameChecker: value => {
          const regex = /^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ ]{1,48}[A-Za-zÀ-ÿ]$/i;
          if (value.length < 3) {
            this.validName = false;
            return "Nom trop court.";
          } else if (value.length > 50) {
            this.validName = false;
            return "Nom trop long.";
          } else if (!regex.test(value) || this.distinctChars(value) < 3) {
            this.validName = false;
            return "Nom invalide.";
          } else {
            this.validName = true;
            return true;
          }
        },
        emailChecker: value => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!regex.test(value)) {
            this.validEmail = false;
            return "E-mail invalide.";
          } else {
            this.validEmail = true;
            return true;
          }
        },
        messageChecker: value => {
          if (value.length > 1000) {
            this.validMessage = false;
            return "Message trop long.";
          } else if (value.length < 32) {
            this.validMessage = false;
            return "Message trop court.";
          } else if (this.distinctChars(value) < 10) {
            this.validMessage = false;
            return "Message invalide.";
          } else {
            this.validMessage = true;
            return true;
          }
        }
      }
    };
  },
  computed: {
    validForm() {
      return this.validName && this.validEmail && this.validMessage;
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        console.log("Valid formular. Sending the e-mail...");
        this.loading = true;
        axios
          .post("https://90y1fzl9ij.execute-api.eu-west-3.amazonaws.com/prod", {
            name: this.name,
            email: this.email,
            message: this.message
          })
          .then(() => {
            console.log("success");
            this.showSnackBar("success", "Message envoyé !");
          })
          .catch(() => {
            console.log("error");
            this.showSnackBar(
              "error",
              "Une erreur est survenue. Veuillez réessayer."
            );
          });
      }
    },
    showSnackBar(state, text) {
      this.snackBarState = state;
      this.snackBarText = text;
      this.loading = false;
      this.snackbar = true;
    },
    distinctChars(str) {
      // returns the number of distinct characters in the string
      return Array.from(new Set(str.split(""))).length;
    }
  }
};
</script>