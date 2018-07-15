<template>
    <!-- CONTACT -->
  <section id="contact">
    <div class="container">

      <h2 class="mdc-typography--headline5 section-title">Contact</h2>
      <div class="card">

        <div class="container">

          <form id="contact-form" action="#">

            <!-- Name -->
            <div id="name-field" class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
              <i class="material-icons mdc-text-field__icon">account_box</i>
              <input type="text" id="form-name" class="mdc-text-field__input" required>
              <label for="form-name" class="mdc-floating-label">Nom</label>
              <div class="mdc-notched-outline">
                <svg>
                  <path class="mdc-notched-outline__path" />
                </svg>
              </div>
              <div class="mdc-notched-outline__idle"></div>
            </div>
            <p id="name--error" class="text-field--error">
              Nom invalide
            </p>

            <!-- Email-->
            <div id="email-field" class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
              <i class="material-icons mdc-text-field__icon">email</i>
              <input type="text" id="form-email" class="mdc-text-field__input" aria-controls="email-helper-text" aria-describedby="email-helper-text"
                required />
              <label for="form-email" class="mdc-floating-label">E-mail</label>
              <div class="mdc-notched-outline">
                <svg>
                  <path class="mdc-notched-outline__path" />
                </svg>
              </div>
              <div class="mdc-notched-outline__idle"/>
            </div>
            <p id="email-helper-text" class="mdc-text-field-helper-text" aria-hidden="true">
              Il sera utilisé uniquement pour vous répondre.
            </p>
            <p id="email--error" class="text-field--error">
              Adresse e-mail invalide
            </p>

            <!-- Message -->
            <div id="message-field" class="mdc-text-field mdc-text-field--textarea">
              <textarea id="form-message" class="mdc-text-field__input" rows="8" cols="40" required></textarea>
              <label for="textarea" class="mdc-floating-label">Message</label>
            </div>
            <p id="message-helper-text" class="text-field--error">
              0/2048
            </p>

            <button id="send-form-btn" class="mdc-button mdc-button--raised">

              <i id="send-btn-arrow" class="material-icons mdc-button__icon" aria-hidden="true" type="submit">send</i>

              <div class="animate_loader mdc-button__icon">
                <svg class="circular" viewBox="25 25 50 50">
                  <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" />
                </svg>
              </div>

              Envoyer
            </button>
          </form>

        </div>

        <div class="mdc-snackbar" aria-live="assertive" aria-atomic="true" aria-hidden="true">
          <div class="mdc-snackbar__text"></div>
          <div class="mdc-snackbar__action-wrapper">
            <button type="button" class="mdc-snackbar__action-button"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {message: ""}
  }
}
</script>
