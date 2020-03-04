// registration-form.js

import $ from "jquery";

export const registrationForm = () => {
  const fragment = $(new DocumentFragment());

  const form = $(`<form class="form" id="register-form"></form>`);
  const inputs = $(`<input type="email" name="email" id="email" placeholder="Wpisz email" value="">
  <input type="password" name="pass" id="pass" placeholder="Wpisz hasło" value="">
  <input type="password" name="pass-check" id="pass-repeat" placeholder="Ponownie wpisz hasło" value="">`);
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

  fragment.append(form);
  form
    .append(inputs)
    .append(visualInfo)
    .append(legend)
    .append(button);

  return fragment;
};
