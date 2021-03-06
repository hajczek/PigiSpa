import $ from "jquery";
import { basketMobile } from "./../views/index";
import { logOut } from "./index";
import { url } from "./../database/database-conntection";

/**
 * @description Display user menu
 */
export function displayUserMenu() {
  // Connect with database users
  fetch(`${url}/users`)
    .then(response => response.json())
    .then(users => {
      // Iterate on users
      for (let i = 0; i < users.length; i++) {
        // Check, if user exist in database
        if (users[i].active === "yes") {
          // If link in menu is hidden, make it visible
          if ($(`.menu-link[style="visibility: hidden"]`)) {
            $(`.menu-link[style="visibility: hidden"]`).css(
              "visibility",
              "visible"
            );
          }
          // If link in menu is visible, make it hidden
          if ($(`.menu-link[style="visibility: visible"]`)) {
            $(`.menu-link[style="visibility: visible"]`).css(
              "visibility",
              "hidden"
            );
          }
          // Css sets for  link 'Zabiegi'
          $('.menu-link:contains("Zabiegi")').css("position", "absolute");
          $('.menu-link:contains("Zabiegi")').css("right", "150px");

          // Display info for user about panel in header
          $(`nav`).after(
            `<p id="welcome-text">Panel użytkownika: <span>${users[i].login}</span></p>`
          );

          // Display logout button and basket for mobile version in footer
          let loginBox = $(`<div id="login-box"></div>`);
          $(`footer`).append(loginBox);

          loginBox
            .append(basketMobile)
            .append(`<span class="span-btn" id="logout">Wyloguj</span>`);

          $(`#logout`).on("click", logOut);
        }
      }
    });
}
