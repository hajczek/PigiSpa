// Handle for register form
import $ from "jquery";

export const regForm = $("#register-form");
export const email = $("#email");
export const pas = $("#pass");

export const registerUser = () => {
  // Handle for sign the strongest of password
  const weak = $(".weak");
  const average = $(".average");
  const strong = $(".strong");

  // Check if inputs are not empty
  if (email.val() !== "" && pas.val() !== "") {
    // Set color for weaknes password
    console.log("it work");
    weak.css("background-color", "#f504d5");
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
};

export const sendForm = e => {
  // Handle for input with repeat password
  const pasRepeat = $("#pass-repeat");
  // Handle for info about not the same password and repeat password
  const infoErr = $("#info-err");
  // // Handle for register button
  // const registerBtn = $("#register-btn");

  // Check if password and repeat-password are the same
  if (email.val() !== "" && pas.val() === pasRepeat.val()) {
    console.log("Zapisz dane w bazie");
    /* Tutaj ma nastąpić przekierowanie na stronę z wiadomością po zarejeestrowaniu */
    /* Tutaj ma też nastąpić zapis danych zarejestrowanego użytkownika do bazy */
    // Clear input fields value
    email.val("");
    pas.val("");
    pasRepeat.val("");
  } else {
    infoErr.html("Hasła są różne. Wprowadź do obu pól takie same hasła.");
    infoErr.css("background-color", "rgba(255, 255, 255, 0.5)");
    // Hide box with info after 3 minutes
    setTimeout(() => {
      infoErr.css("display", "none");
    }, 3000);
    console.log(pas.val());
    console.log(pasRepeat.val());
    console.log(infoErr.val() === pasRepeat.val());
  }

  // e.preventDefault();
};
