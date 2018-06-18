import { MDCTextField } from "@material/textfield";
import { MDCTextFieldIcon } from "@material/textfield/icon";
import { MDCTextFieldHelperText } from "@material/textfield/helper-text";

document.querySelectorAll(".mdc-text-field-helper-text").forEach(function(elt) {
  new MDCTextFieldHelperText(elt);
});

document.querySelectorAll(".mdc-text-field").forEach(function(elt) {
  new MDCTextField(elt);
});

new MDCTextFieldIcon(document.querySelector(".mdc-text-field__icon"));

/**
 * E-mail verification
 */
document.getElementById("form-email").addEventListener("blur", function(elt) {
  var mail = elt.target.value;
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var errorMsg = document.querySelector("#email--error");
  if (!regex.test(mail) || mail.length > 64) {
    setInvalid(document.querySelector("#email-field"));
    document.querySelector("#email-helper-text").style.display = "none";
    errorMsg.style.visibility = "visible";
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.visibility = "hidden";
  }
});

/**
 * Name verification
 */
document.getElementById("form-name").addEventListener("blur", function(elt) {
  var name = elt.target.value;
  var nameField = document.getElementById("name-field");
  var nameErrorMsg = document.querySelector("#name--error");
  var regex = /[^a-zA-Z ]/;
  if (regex.test(name) || distinctChars(name) < 3) {
    nameErrorMsg.textContent = "Nom invalide";
    setInvalid(nameField);
    return;
  }

  if (name.length > 64) {
    nameErrorMsg.textContent = "Nom trop long";
    setInvalid(nameField);
  }
});

/**
 * Message character count
 */
displayCharacterCount(0);
document.getElementById("form-message").addEventListener("focus", function(elt) {
    displayCharacterCount(elt.target.value.length);
});

document.getElementById("form-message").addEventListener("keyup", function(elt) {
    displayCharacterCount(elt.target.value.length);
});

/**
 * Message verification
 */
document.getElementById("form-message").addEventListener("blur", function(elt) {
  var message = elt.target.value;
  var messageField = document.getElementById("message-field");
  var messageErrorMsg = document.querySelector("#message-helper-text");
  if (distinctChars(message) < 5) {
    messageErrorMsg.textContent = "Message invalide";
    messageErrorMsg.classList.add("message-error");
    setInvalid(messageField);
    return;
  }

  if (message.length < 32) {
    messageErrorMsg.textContent = "Message trop court";
    messageErrorMsg.classList.add("message-error");
    setInvalid(messageField);
  } else if (message.length > 2048) {
    messageErrorMsg.textContent = "Message trop long: " + message.length;
    messageErrorMsg.classList.add("message-error");
    setInvalid(messageField);
  }
});

/**
 * Form sending
 */
document.querySelector('#contact-form').addEventListener("submit", function(elt) {
    if (document.querySelectorAll('.mdc-text-field--invalid').length > 0) {
        console.log("Invalid form");
    } else {
        console.log("success");
        // TODO: send email
    }
});

/**
 * Utils
 */
function setInvalid(elt) {
  elt.classList.add("mdc-text-field--invalid");
}

function distinctChars(str) {
  // return the number of distinct characters in the string
  return Array.from(new Set(str.split(""))).length;
}

function displayCharacterCount(charNumber) {
    var messageErrorMsg = document.querySelector("#message-helper-text");
    messageErrorMsg.classList.remove("message-error");
    messageErrorMsg.textContent = charNumber + "/2048";
}
