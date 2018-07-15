import { MDCTextField } from "@material/textfield";
import { MDCTextFieldIcon } from "@material/textfield/icon";
import { MDCTextFieldHelperText } from "@material/textfield/helper-text";
import { MDCRipple } from "@material/ripple";
import { MDCSnackbar } from "@material/snackbar";
import axios from "axios";

$(function() {
  $(".mdc-text-field-helper-text").each(function() {
    new MDCTextFieldHelperText(this);
  });

  $(".mdc-text-field").each(function() {
    new MDCTextField(this);
  });

  $(".mdc-button").each(function() {
    new MDCRipple(this);
  });

  new MDCTextFieldIcon(document.querySelector(".mdc-text-field__icon"));

  const snackbar = new MDCSnackbar(document.querySelector(".mdc-snackbar"));

  // E-mail verification
  $("#form-email").on("blur", function(e) {
    const mail = e.target.value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(mail) || mail.length > 64) {
      setInvalid("#email-field");
      $("#email-helper-text").css("display", "none");
      $("#email--error").css("visibility", "visible");
      $("#email--error").css("display", "block");
    } else {
      $("#email--error").css("visibility", "hidden");
    }
  });

  // Name verification
  $("#form-name").on("blur", function(e) {
    const name = e.target.value;
    const regex = /[^a-zA-Z ]/;
    if (regex.test(name) || distinctChars(name) < 3) {
      $("#name--error").text("Nom invalide");
      setInvalid("#name-field");
      return;
    }

    if (name.length > 64) {
      $("#name--error").text("Nom trop long");
      setInvalid("#name-field");
    }
  });

  // Message character count
  displayCharacterCount(0);
  $("#form-message").on("focus", function(e) {
    displayCharacterCount(e.target.value.length);
  });

  $("#form-message").on("keyup", function(e) {
    displayCharacterCount(e.target.value.length);
  });

  // Message verification
  $("#form-message").on("blur", function(e) {
    const message = e.target.value;
    if (distinctChars(message) < 5) {
      $("#message-helper-text").text("Message invalide");
      $("#message-helper-text").addClass("message-error");
      setInvalid("#message-field");
      return;
    }

    if (message.length < 32) {
      $("#message-helper-text").text("Message trop court");
      $("#message-helper-text").addClass("message-error");
      setInvalid($("#message-field"));
    } else if (message.length > 2048) {
      $("#message-helper-text").text("Message trop long: " + message.length);
      $("#message-helper-text").addClass("message-error");
      setInvalid("#message-field");
    }
  });

  // Form sending
  $("#contact-form").on("submit", function(e) {
    e.preventDefault();
    console.log($(this).serialize());
    if ($(".mdc-text-field--invalid").length > 0) {
      console.log("Invalid formular");
      displayErrorMessage("Formulaire invalide.");
    } else {
      console.log("Valid formular. Sending an e-mail...");
      $("#send-btn-arrow").css("display", "none");
      $(".animate_loader").css("display", "inline-block");
      $("#send-form-btn").prop("disabled", true);

      axios
        .post(
          "https://90y1fzl9ij.execute-api.eu-west-3.amazonaws.com/prod",
          getContactFormContent()
        )
        .then(function(response) {
          console.log(
            "E-mail sent. Response: " +
              response.status +
              " - " +
              JSON.stringify(response.data)
          );
          $(".mdc-snackbar").removeClass("invalid");
          snackbar.show({ message: "Message envoyé !" });
          activateSendButton();
        })
        .catch(function(error) {
          displayErrorMessage("Une erreur est survenue. Veuillez réessayer.");
          activateSendButton();
        });
    }
  });

  // Returns a JSON object containing the formular content.
  function getContactFormContent() {
    return {
      name: $("#form-name").val(),
      email: $("#form-email").val(),
      message: $("#form-message").val()
    };
  }

  function activateSendButton() {
    $("#send-btn-arrow").css("display", "inline-block");
    $(".animate_loader").css("display", "none");
    $("#send-form-btn").prop("disabled", false);
  }

  function displayErrorMessage(msg) {
    $(".mdc-snackbar").addClass("invalid");
    snackbar.show({ message: msg });
  }

  // Utils
  function setInvalid(identifier) {
    $(identifier).addClass("mdc-text-field--invalid");
  }

  function distinctChars(str) {
    // returns the number of distinct characters in the string
    return Array.from(new Set(str.split(""))).length;
  }

  function displayCharacterCount(charNumber) {
    $("#message-helper-text").removeClass("message-error");
    $("#message-helper-text").text(charNumber + "/2048");
  }
});
