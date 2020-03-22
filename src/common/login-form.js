import $ from "jquery";
import { afterLogin } from "../views/index";
import { errorFunc, displayUserMenu } from "./index";
import { url } from "./../database/database-conntection";

export function logIn(e) {
  // Check, if fields login and password are empty
  if (
    $("#email-login").val().length === 0 &&
    $("#pass-login").val().length === 0
  ) {
    // If yes, display info about error
    errorFunc("Nie wpisałeś loginu i hasła. Wprowadź poprawne dane.");
  } else {
    // Handle for user login and password
    let emailLogin = $("#email-login").val();
    let passLogin = $("#pass-login").val();

    // Connect with database
    fetch(`${url}/users`)
      .then(response => response.json())
      .then(users =>
        // Filter users
        users.filter(user => {
          // Check, if login and pass are in database/users
          if (user.login === emailLogin && user.password === passLogin) {
            // Connect with database and create a new user
            fetch(`${url}/users/${user.id}`, {
              headers: { "Content-Type": "application/json; charset=utf-8" },
              method: "PUT",
              // Change 'active' of logon user for 'yes'
              body: JSON.stringify({
                login: user.login,
                password: user.password,
                active: "yes"
              })
            });

            // Hide form
            $(".login-box").css("display", "none");
            // Display text after login
            $("main")
              .find("header")
              .after(afterLogin);
            // Display menu for user
            displayUserMenu();
          } else {
            // Display info about error
            errorFunc("Podane dane do logowania są nieprawidłowe.");
          }
        })
      )
      .catch(error => console.log("Error ...", error));
  }
  e.preventDefault();
}
