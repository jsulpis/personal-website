import axios from "axios";

export default class EmailService {
  constructor() {
    this.validName = false;
    this.validEmail = false;
    this.validMessage = false;
  }

  distinctChars(str) {
    // returns the number of distinct characters in the string
    return Array.from(new Set(str.split(""))).length;
  }

  required(value) {
    return !!value || "Champ requis.";
  }

  checkName(value) {
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
  }

  checkEmail(value) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(value)) {
      this.validEmail = false;
      return "E-mail invalide.";
    } else {
      this.validEmail = true;
      return true;
    }
  }

  checkMessage(value) {
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

  sendEmail(emailObject) {
    if (this.validName && this.validEmail && this.validMessage) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.API_URL + "/contact", emailObject)
          .then(() => resolve())
          .catch(() => reject());
      });
    }
  }
}
