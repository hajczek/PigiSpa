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
      // Hide box with info after 3 minutes
      setTimeout(() => {
        $("#info-err").css("display", "none");
      }, 3000);
    } else {
      /* Todo: check, if login and pass are in database/users */

      // Hide form
      $(".login-box").css("display", "none");
      // Display text after login
      $("main")
        .find("header")
        .after(afterLogin);
    }

    e.preventDefault();
  }
};
