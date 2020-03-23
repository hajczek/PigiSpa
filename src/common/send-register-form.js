import $ from "jquery";
import { afterRegister } from "./../views/index";
import { errorFunc } from "./index";
import { url } from "./../database/database-conntection";

/**
 * @description Send register form
 */
export function sendRegisterForm(e) {
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
    // Handle for information if user exist on database or not
    let userExist = [];

    // Connect with database
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(users => {
        // Iterate on users
        for (let i = 0; i < users.length; i++) {
          // Check, if user exist in database
          if (users[i].login === userEmail) {
            // If yes, push email to array UserExist
            userExist.push(userEmail);
          }
        }

        // Check, if array userExist is empty
        if (userExist.length === 0) {
          // Connect with database and create a new user
          fetch(`${url}/users`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "POST",
            // Save user login and password in database
            body: JSON.stringify({
              login: `${userEmail}`,
              password: `${userPassword}`,
              active: "no"
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
        } else {
          // Display info that this user exists in database
          errorFunc("Ten użytkownik jest już w naszej bazie.");
        }
      })
      .catch(error => console.log("Error ...", error));
  } else {
    // Display info about different passwords
    errorFunc("Hasła są różne. Wprowadź do obu pól to samo hasło.");
  }

  e.preventDefault();
}
