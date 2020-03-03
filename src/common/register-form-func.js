import $ from "jquery";
import { afterRegister } from "./../views/index";

export const activateRegisterForm = () => {
  $("#email").change(registerUser);
  $("#pass").change(registerUser);
  $("#register-btn").on("click", sendForm);

  function registerUser() {
    // Check strength of password
    // Check if inputs are not empty
    if ($("#email").val().length !== 0 && $("#pass").val().length !== 0) {
      // Set color for weaknes password
      $("span.weak").css("background-color", "#f504d5");
    }

    // Check if password has length 8 and 1 capital letter
    if (/(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test($("#pass").val())) {
      // If yes, set color for average password
      $("span.average").css("background-color", "yellow");
    }

    // Check if password has length 12 and 1 capital letter and 1 digit
    if (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{12,}/.test($("#pass").val())) {
      // If yes, set color for strong password
      $("span.strong").css("background-color", "greenyellow");
    }
  }

  function sendForm(e) {
    // Check if password and repeat-password are the same
    if (
      $("#email").val().length !== 0 &&
      $("#pass").val() === $("#pass-repeat").val()
    ) {
      /* Todo:  Save login and password in database */

      // Clear input fields value
      $("#email").val("");
      $("#pass").val("");
      $("#pass-repeat").val("");
      // Clear fields for checking strength of password
      $("span.weak").css("background-color", "#fff");
      $("span.average").css("background-color", "#fff");
      $("span.strong").css("background-color", "#fff");

      // Hide form
      $(".registration-box").css("display", "none");
      // Display text after registration
      $("main")
        .find("header")
        .after(afterRegister);
    } else {
      // Display info about different passwords
      $("#info-err").html(
        "Hasła są różne. Wprowadź do obu pól takie same hasła."
      );
      $("#info-err").css("background-color", "rgba(255, 255, 255, 0.5)");
      // Hide box with info after 3 minutes
      setTimeout(() => {
        $("#info-err").css("display", "none");
      }, 3000);
    }

    e.preventDefault();
  }
};
