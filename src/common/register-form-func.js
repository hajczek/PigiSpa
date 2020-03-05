import $ from "jquery";
import { checkRegisterPass } from "./index";
import { afterRegister } from "./../views/index";
import { errorFunc } from "./index";

export const activateRegisterForm = () => {
  $("#email").change(checkRegisterPass);
  $("#pass").change(checkRegisterPass);
  $("#register-btn").on("click", sendForm);

  function sendForm(e) {
    if (
      // Check if all input fields are empty
      $("#email").val().length === 0 &&
      $("#pass").val().length === 0 &&
      $("#pass-repeat").val().length === 0
    ) {
      errorFunc("Nie podałeś żadnych danych. Wprowadź dane do formularza.");
    } else if (
      // Check if password and repeat-password are the same
      $("#email").val().length !== 0 &&
      $("#pass").val().length !== 0 &&
      $("#pass-repeat").val().length !== 0 &&
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
              // Display info that this user exists in database
              errorFunc("Ten użytkownik jest już w naszej bazie.");
            }
          })
        )
        .catch(error => console.log("Error ...", error));
    } else {
      // Display info about different passwords
      errorFunc("Hasła są różne. Wprowadź do obu pól to samo hasło.");
    }

    e.preventDefault();
  }
};
