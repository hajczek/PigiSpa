// login-form-func.js
import $ from "jquery";
import { afterLogin } from "../views/index";
import { errorFunc, displayUserMenu } from "./index";

export const activateLoginForm = e => {
  $("#login-btn").on("click", logIn);

  function logIn(e) {
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
      fetch("http://localhost:3004/users")
        .then(response => response.json())
        .then(users =>
          // Filter users
          users.filter(user => {
            // Check, if login and pass are in database/users
            if (user.login === emailLogin && user.password === passLogin) {
              // Hide form
              $(".login-box").css("display", "none");
              // Display text after login
              $("main")
                .find("header")
                .after(afterLogin);
              // Display info for user about panel in header
              $(`nav`).after(
                `<p id="welcome-text">Panel użytkownika: <span>${emailLogin}</span></p>`
              );
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
};
