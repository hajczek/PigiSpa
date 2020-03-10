// basket.js

import $ from "jquery";

export const basket = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="basket-box"></div>`);
  const title = $(`<h2 id="cartTitle">TWÓJ KOSZYK</h2>`);
  const text = $(`<p id="slogan-basket">Załaduj coś do koszyka!</p>`);
  const cartList = $(`<ol id="basket-content"></ol>`);
  // const cartSummary = $(
  //   `<p class="summary-text">Razem do zapłaty: <span id="all-cost">840</span> zł</p>`
  // );
  // const cartButton = $(`<button id="pay">Kupuję i płacę</button>`);

  fragment.append(box);
  box
    .append(title)
    .append(cartList)
    .append(text);

  return fragment;
};
