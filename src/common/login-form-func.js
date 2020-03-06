// login-form-func.js
import $ from "jquery";
import { afterLogin } from "../views/index";
import { errorFunc } from "./index";

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
              /* Todo: Display menu for user */
              if ($(`.menu-link[style="visibility: hidden"]`)) {
                $(`.menu-link[style="visibility: hidden"]`).css(
                  "visibility",
                  "visible"
                );
              }
              if ($(`.menu-link[style="visibility: visible"]`)) {
                $(`.menu-link[style="visibility: visible"]`).css(
                  "visibility",
                  "hidden"
                );
              }
              $('.menu-link:contains("Zabiegi")').css("position", "absolute");
              $('.menu-link:contains("Zabiegi")').css("right", "150px");
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
