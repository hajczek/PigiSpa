// Handle for register form
import $ from "jquery";
import { afterRegister } from "./../views/index";

export const activateRegisterForm = () => {
  $("#email").change(registerUser);
  $("#pass").change(registerUser);
  $("#register-btn").on("click", sendForm);

  console.log($("#email").val().length, $("#pass").val().length);

  function registerUser() {
    // Handle for sign the strongest of password
    // Check if inputs are not empty
    if ($("#email").val().length !== 0 && $("#pass").val().length !== 0) {
      // Set color for weaknes password
      console.log($("#email").val(), $("#pass").val());
      $("span.weak").css("background-color", "#f504d5");
    }

    // Check if password has length 8 and one capital letter
    if (/(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test($("#pass").val())) {
      // If yes, set color for average password
      $("span.average").css("background-color", "yellow");
    }

    // Check if password has length 12 and one capital letter and one digit
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
      console.log("Zapisz dane w bazie");
      /* Tutaj ma nastąpić przekierowanie na stronę z wiadomością po zarejeestrowaniu */
      /* Tutaj ma też nastąpić zapis danych zarejestrowanego użytkownika do bazy */
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
      // Diplay text after registration
      $("main")
        .find("header")
        .after(afterRegister);
    } else {
      $("#info-err").html(
        "Hasła są różne. Wprowadź do obu pól takie same hasła."
      );
      $("#info-err").css("background-color", "rgba(255, 255, 255, 0.5)");
      // Hide box with info after 3 minutes
      setTimeout(() => {
        $("#info-err").css("display", "none");
      }, 3000);
      console.log($("#pass").val());
      console.log($("#pass-repeat").val());
      console.log($("#info-err").val() === $("#pass-repeat").val());
    }

    e.preventDefault();
  }
};
