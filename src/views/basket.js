// basket.js

import $ from "jquery";

export const basket = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="basket-box">`);
  const title = $(`<h2>TWÓJ KOSZYK</h2>`);
  const text = $(`<p id="slogan-basket">Załaduj coś do koszyka!</p>`);

  fragment.append(box);
  box.append(title).append(text);

  return fragment;
};
