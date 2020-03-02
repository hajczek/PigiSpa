// registration.js

import $ from "jquery";

export const registration = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Zarejestruj się</h1>`);
  const slogan = $(`<p>Wypełnij formularz rejestracji</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
