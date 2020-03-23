import $ from "jquery";

/**
 * @description Display main menu
 */
export function displayMainMenu() {
  // Define which elements must be visible, which not
  $('.menu-link:contains("Zabiegi")').css("visibility", "hidden");
  $('.menu-link:contains("Pokoje")').css("visibility", "hidden");
  $('.menu-link:contains("Wyloguj")').css("visibility", "hidden");

  $('.menu-link:contains("Logowanie")').css("visibility", "visible");
  $('.menu-link:contains("Rejestracja")').css("visibility", "visible");

  $('.menu-link:contains("Logowanie")').css("position", "relative");
  $('.menu-link:contains("Rejestracja")').css("position", "relative");

  $('.menu-link:contains("Logowanie")').css("right", 0);
  $('.menu-link:contains("Rejestracja")').css("right", 0);

  $(`#welcome-text`).css("display", "none");
  $(`#logout`).css("display", "none");
  $(`.box-after-login`).css("display", "none");

  // Define slogan text
  const slogan = $(
    `<p class="slogan"><span class="pink">PigiSpa</span> zaprasza przepracowanych Front-End Developerów na zabiegi SPA!</p>`
  );

  // Display slogan text on page
  $("header").append(slogan);
}
