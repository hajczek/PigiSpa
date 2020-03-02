// treatment.js

import $ from "jquery";

export const treatment = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Zabieg</h1>`);
  const slogan = $(`<p>Opis zabiegu</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
