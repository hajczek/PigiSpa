// login-form-func.js
import $ from "jquery";
import { afterLogin } from "./../views/index";

export const activateLoginForm = () => {
  $("#login-btn").on("click", logIn);

  function logIn(e) {
    // Check, if fields login and password are empty
    if (
      $("#email-login").val().length === 0 &&
      $("#pass-login").val().length === 0
    ) {
      // If yes, display info
      $("#info-err").html(
        "Nie wpisałeś loginu i hasła. Wprowadź poprawne dane."
      );
      $("#info-err").css("backgroundColor", "rgba(255, 255, 255, 0.5)");
      // Hide box with info after 3 seconds
      setTimeout(() => {
        $("#info-err").css("display", "none");
      }, 3000);
    } else {
      // Handle for user login and password
      let emailLogin = $("#email-login").val();
      let passLogin = $("#pass-login").val();

      // Connect with database
      fetch("http://localhost:3000/users")
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

              // Display on header welcome text with user name
              $(`nav`).after(
                `<p id="welcome-text">Panel użytkownika: <span>${emailLogin}</span></p>`
              );
              /* Todo: Display menu for user */
            } else {
              $("#info-err").html("Nie ma takiego użytkownika.");
              $("#info-err").css("backgroundColor", "rgba(255, 255, 255, 0.5)");
              // Hide box with info after 3 seconds
              setTimeout(() => {
                $("#info-err").css("display", "none");
              }, 3000);
            }
          })
        )
        .catch(error => console.log("Error ...", error));

      console.log(emailLogin, passLogin);
    }

    e.preventDefault();
  }
};
