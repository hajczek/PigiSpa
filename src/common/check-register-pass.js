import $ from "jquery";

/**
 * @description Check register password
 */
export function checkRegisterPass() {
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
