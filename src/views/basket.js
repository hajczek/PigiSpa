// basket.js

import { removeFromBasket } from "./../common/index";

import $ from "jquery";

export const basket = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="basket-box"></div>`);
  const title = $(`<h2 id="cartTitle">TWÓJ KOSZYK</h2>`);
  const boxContent = $(`<div id="basket-content-box"></div>`);
  const text = $(`<p id="slogan-basket">Załaduj coś do koszyka!</p>`);
  const cartList = $(`<ol id="basket-content"></ol>`);
  const cartSummary = $(
    `<p id="all-value" class="summary-text-not-display">Razem do zapłaty: <span id="all-cost">0</span> zł</p>`
  );
  const cartButton = $(
    `<button id="pay" class="button-not-display">Kupuję i płacę</button>`
  );

  cartList.on("click", removeFromBasket);

  fragment.append(box);
  box
    .append(title)
    .append(boxContent)
    .append(text)
    .append(cartSummary)
    .append(cartButton);

  boxContent.append(cartList);

  return fragment;
};
