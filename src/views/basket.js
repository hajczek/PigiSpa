// basket.js

import $ from "jquery";
import { removeFromBasket } from "./../common/index";
import { Cart } from "./../cart/index";
import { afterPurchase } from "./index";

export const basket = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="basket-box"></div>`);
  const title = $(`<h2 id="cartTitle">TWÓJ KOSZYK</h2>`);
  const boxContent = $(`<div id="basket-content-box"></div>`);
  const text = $(`<p id="slogan-basket">Załaduj coś do koszyka!</p>`);
  const cartList = $(`<ol id="basket-content"></ol>`);
  const cartSummary = $(
    `<p id="all-value" class="summary-text-not-display">Do zapłaty: </p>`
  );
  const cartCost = $('<span id="all-cost">0</span>');
  const cartButton = $(
    `<button id="pay" class="button-not-display">Kupuję i płacę</button>`
  );

  cartButton.on("click", function() {
    $("main")
      .find("header")
      .after(afterPurchase);
  });

  cartList.on("click", removeFromBasket);

  // Display products from cookies in cart
  const cart = new Cart();

  if (cart.exists()) {
    const cookies = cart.getItSpaCart();

    for (let i = 0; i < cookies.length; i++) {
      // Define content to display details of added tratment in cart
      let cartLi = $(
        `<li><span class="title">${cookies[i].name}</span> x </li>`
      );
      let cartCount = $(`<span class="quant">${cookies[i].count}</span>`);
      let cartValueTreat = $(`<p class="value">Łączna wartość: </p>`);
      let cartPriceTreat = $(`<span class="price">
      ${parseInt(cookies[i].price) * parseInt(cookies[i].count)}</span><br/>`);
      let cartRoomDetails = $(`<br/><span>od <span class="room-data" id="room-data-from">${cookies[i].from}</span>
      do <span class="room-data" id="room-data-to">${cookies[i].to}</span></span><br/>`);
      let cartRoomDays = $(
        `<span>Łączna ilość dni: <b>${cookies[i].days}</b></span><br/>`
      );
      let cartValueRoom = $(
        `<span class="room-price">Cena pokoju (${cookies[i].price} zł) * ilość pokoi * ilość dni:<span><br/>`
      );
      let cartTextPriceRoom = $(`<p class="value">Łączna wartość: </p>`);
      let cartPriceRoom = $(
        `<span class="price">${parseInt(cookies[i].price) *
          parseInt(parseInt(cookies[i].count)) *
          parseInt(cookies[i].days)}</span>`
      );
      let cartRemoveBtn = $(`<span class="remove"></span>`);

      cartList.append(cartLi);

      if (cookies[i].from) {
        cartLi
          .append(cartCount)
          .append(cartRoomDetails)
          .append(cartRoomDays)
          .append(cartValueRoom)
          .append(cartTextPriceRoom)
          .append(cartRemoveBtn);

        cartTextPriceRoom.append(cartPriceRoom);
        // Add price of added room to cart to all price
        cartCost.html(
          parseInt(cartCost.html()) + parseInt(cartPriceRoom.html()) + ` zł`
        );
      } else {
        cartLi
          .append(cartCount)
          .append(cartValueTreat)
          .append(cartRemoveBtn);

        cartValueTreat.append(cartPriceTreat);
        // Add price of added treatment to cart to all price
        cartCost.html(
          parseInt(cartCost.html()) + parseInt(cartPriceTreat.html()) + ` zł`
        );
      }

      if (cart.getItSpaCart().length > 0) {
        // Define what must be display on basket
        text.css("display", "none");
        cartSummary.removeClass("summary-text-not-display");
        cartSummary.addClass("summary-text");
        cartButton.removeClass("button-not-display");
      }
    }
  }

  fragment.append(box);
  box
    .append(title)
    .append(boxContent)
    .append(text)
    .append(cartSummary)
    .append(cartButton);

  cartSummary.append(cartCost);

  boxContent.append(cartList);

  return fragment;
};
