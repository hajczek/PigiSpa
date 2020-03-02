// login.js

import $ from "jquery";

export const login = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Zaloguj się</h1>`);
  const slogan = $(`<p>Wypełnij formularz</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
