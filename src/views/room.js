// room.js

import $ from "jquery";

export const room = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Pokój</h1>`);
  const slogan = $(`<p>Opis pokoju</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
