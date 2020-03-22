import $ from "jquery";
import { header, footer, loginForm } from "../index";

/**
 * Define page with login form
 */
export const login = () => {
  const fragment = $(new DocumentFragment());

  // Defined needed html elements
  const loginBox = $(`<div class="login-box"></div>`);
  const title = $(`<h2>Zaloguj się</h2>`);
  const error = $(`<div id="info-err"></div>`);
  const form = loginForm;

  // Display defined elements on page
  fragment
    .append(header)
    .append(loginBox)
    .append(footer);
  loginBox
    .append(title)
    .append(error)
    .append(form);

  return fragment;
};
