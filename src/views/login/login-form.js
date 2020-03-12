// login-form.js

import $ from "jquery";
import { logIn } from "./../../common/index";

export const loginForm = () => {
  const fragment = $(new DocumentFragment());

  const form = $(`<form class="form" id="login-form"></form>`);
  const inputs = $(`<input type="email" name="email-login" id="email-login" placeholder="Wpisz email">
  <input type="password" name="pass-login" id="pass-login" placeholder="Wpisz hasło">`);
  const button = $(`<button id="login-btn">Zaloguj mnie</button>`);
  button.on("click", logIn);

  fragment.append(form);
  form.append(inputs).append(button);

  return fragment;
};
