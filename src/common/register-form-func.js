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
      // Handle for data from register form
      let userEmail = $("#email").val();
      let userPassword = $("#pass").val();

      // Connect with database
      fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users =>
          // Filter users
          users.filter(user => {
            // Check, if login and pass are in database/users
            if (user.login !== userEmail) {
              // Save user login and password in database
              // Connect with database and create a new user
              fetch("http://localhost:3000/users", {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: "POST",
                body: JSON.stringify({
                  login: `${userEmail}`,
                  password: `${userPassword}`
                })
              });

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
            } else if (user.login === userEmail) {
              console.log("Taki użytkownik już istnieje w naszej bazie");

              // Display info about different passwords
              $("#info-err").html("Ten użytkownik jest już w naszej bazie.");
              $("#info-err").css(
                "background-color",
                "rgba(255, 255, 255, 0.5)"
              );

              // Hide box with info after 3 minutes
              setTimeout(() => {
                $("#info-err").css("display", "none");
              }, 3000);
            }
          })
        )
        .catch(error => console.log("Error ...", error));
    } else {
      // Display info about different passwords
      $("#info-err").html("Hasła są różne. Wprowadź do obu pól to samo hasło.");
      $("#info-err").css("background-color", "rgba(255, 255, 255, 0.5)");

      // Hide box with info after 3 minutes
      setTimeout(() => {
        $("#info-err").css("display", "none");
      }, 3000);
    }

    e.preventDefault();
  }
};
