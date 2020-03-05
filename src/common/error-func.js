import $ from "jquery";

export function errorFunc(text) {
  $("#info-err").html(text);
  $("#info-err").css("background-color", "rgba(255, 255, 255, 0.5)");

  // Hide box with info after 3 minutes
  setTimeout(() => {
    $("#info-err").css("display", "none");
  }, 3000);
}
