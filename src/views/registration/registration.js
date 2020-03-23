import $ from "jquery";
import { header, footer, registrationForm } from "../index";

/**
 * @description Define page with register form
 */
export const registration = () => {
  const fragment = $(new DocumentFragment());

  // Define needed elements
  const box = $(`<div class="registration-box"></div`);
  const title = $(`<h2>Zarejestruj się</h2>`);
  const error = $(`<div id="info-err"></div>`);
  const form = registrationForm;

  // Display all elements on page
  fragment
    .append(header)
    .append(box)
    .append(footer);

  box
    .append(title)
    .append(error)
    .append(form);

  return fragment;
};
