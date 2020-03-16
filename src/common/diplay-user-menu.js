import $ from "jquery";

export function displayUserMenu() {
  // If link in menu is hidden, make it visible
  if ($(`.menu-link[style="visibility: hidden"]`)) {
    $(`.menu-link[style="visibility: hidden"]`).css("visibility", "visible");
  }
  // If link in menu is visible, make it hidden
  if ($(`.menu-link[style="visibility: visible"]`)) {
    $(`.menu-link[style="visibility: visible"]`).css("visibility", "hidden");
  }
  // Css sets for  link 'Zabiegi'
  $('.menu-link:contains("Zabiegi")').css("position", "absolute");
  $('.menu-link:contains("Zabiegi")').css("right", "150px");
}
