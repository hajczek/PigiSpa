import $ from "jquery";
import { checkRegisterPass, sendRegisterForm } from "./../../common/index";

export const registrationForm = () => {
  const fragment = $(new DocumentFragment());

  // Define needeed html elements
  const form = $(`<form class="form" id="register-form"></form>`);
  const inputEmail = $(
    `<input type="email" name="email" id="email" placeholder="Wpisz email" value="">`
  );
  const inputPass = $(
    `<input type="password" name="pass" id="pass" placeholder="Wpisz hasło" value="">`
  );
  const inputPassRepeat = $(
    `<input type="password" name="pass-check" id="pass-repeat" placeholder="Ponownie wpisz hasło" value="">`
  );
  const visualInfo = $(`<p class="visualInfo">Siła hasła:
    <span class="weak"></span>
    <span class="average"></span>
    <span class="strong"></span>
  </p>`);
  const legend = $(`<p class="legend">
    <span class="weakCol"></span> słabe
    <span class="averageCol"></span> średnie
    <span class="strongCol"></span> silne
  </p>`);
  const button = $(`<button id="register-btn">Zarejestruj mnie</button>`);

  // Added action to inputs fields
  inputEmail.change(checkRegisterPass);
  inputPass.change(checkRegisterPass);

  // Added action to button
  button.on("click", sendRegisterForm);

  // Display all elements on page
  fragment.append(form);
  form
    .append(inputEmail)
    .append(inputPass)
    .append(inputPassRepeat)
    .append(visualInfo)
    .append(legend)
    .append(button);

  return fragment;
};
