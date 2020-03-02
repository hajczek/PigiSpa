// rooms.js

import $ from "jquery";

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Pokoje</h1>`);
  const slogan = $(`<p>Nasze pokoje</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
