import PigiLogo from "./assets/img/pigiSpaLogo.png";
import PigiLogoSmall from "./assets/img/pigiSpa-logo-footer.png";
import $ from "jquery";

// Create logo in header
const logo = new Image();
logo.src = PigiLogo;
document.querySelector("#logo").appendChild(logo);

// Create logo in footer
const logoFooter = new Image();
logoFooter.src = PigiLogoSmall;
document.querySelector("#logo-small").appendChild(logoFooter);

$(function() {
  // Handle for register form
  const form = $("#register-form");
  // Handle for input with login
  const email = form.find("#email");
  // Handle for input with password
  const pas = form.find("#pass");
  const pasRepeat = form.find("#pass-repeat");

  // Handle for sign the strongest of password
  const weak = $(".weak");
  const average = $(".average");
  const strong = $(".strong");

  // Add event when text is put on input fields
  email.on("input", registerUser);
  pas.on("input", registerUser);

  function registerUser(e) {
    // console.log($(this).val());
    e.preventDefault();
    // Check if inputs are not empty
    if (email.val().length !== 0 && pas.val().length !== 0) {
      // Set color for weaknes password
      weak.css("background-color", "#f57648");
    }

    // Check if password has length 8 and one capital letter
    if (/(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test(pas.val())) {
      // If yes, set color for average password
      average.css("background-color", "yellow");
    }

    // Check if password has length 12 and one capital letter and one digit
    if (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{12,}/.test(pas.val())) {
      // If yes, set color for strong password
      strong.css("background-color", "greenyellow");
    }

    // Check if password and repeat-password are the same
    if (pas.val() !== pasRepeat.val()) {
      console.log("Hasła nie są takie same!");
    } else {
      console.log("Zapisz dane w bazie");
    }
  }
});
