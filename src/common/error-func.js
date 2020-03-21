import $ from "jquery";

export function errorFunc(text) {
  // Handle for element where error must be display
  $("#info-err").html(text);
  // Change css for this element
  $("#info-err").css("background-color", "rgba(255, 255, 255, 0.5)");

  // Hide box with info after 3 minutes
  setTimeout(() => {
    $("#info-err").css("display", "none");
  }, 3000);
}
