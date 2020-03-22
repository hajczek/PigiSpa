import $ from "jquery";
import { displayMainMenu } from "./index";
import { url } from "./../database/database-conntection";

/**
 * Log out user
 */
export function logOut(e) {
  // Hide elements
  $(`.basket-box`).css("display", "none");
  $(`.treatments-box`).css("display", "none");
  $(`.treatment-box`).css("display", "none");
  $(`.rooms-box`).css("display", "none");
  $(`.room-box`).css("display", "none");
  $(`.thanks-box-after-payment`).css("display", "none");

  // Connect with database users
  fetch(`${url}/users`)
    .then(response => response.json())
    .then(users => {
      // Iterate on users
      for (let i = 0; i < users.length; i++) {
        // Check, if user exist in database
        if (users[i].active === "yes") {
          fetch(`${url}/users/${users[i].id}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: "PUT",
            // Change option 'active' of logout user for 'no'
            body: JSON.stringify({
              login: users[i].login,
              password: users[i].password,
              active: "no"
            })
          });
        }
      }
    })
    .catch(error => console.log("Error ...", error));
  displayMainMenu();
}
