import $ from "jquery";
import { removeFromCart } from "./../cart/index";
import { afterPurchase } from "./index";

export let box,
  closeBasket,
  title,
  boxContent,
  text,
  cartList,
  cartSummary,
  cartCost,
  cartButton;

/**
 * @description Define 'li' elements for basket
 */
export const basketLiElements = () => {
  // Define needed elements
  box = $(`<div class="basket-box"></div>`);
  closeBasket = $(`<span id="close-basket">x</span>`);
  title = $(`<h2 id="cartTitle">TWÓJ KOSZYK</h2>`);
  boxContent = $(`<div id="basket-content-box"></div>`);
  text = $(`<p id="slogan-basket">Załaduj coś do koszyka!</p>`);
  cartList = $(`<ol id="basket-content"></ol>`);
  cartSummary = $(
    `<p id="all-value" class="summary-text-not-display">Do zapłaty: </p>`
  );
  cartCost = $('<span id="all-cost">0</span>');
  cartButton = $(
    `<button id="pay" class="button-not-display">Kupuję i płacę</button>`
  );

  // Add function to button for close basket
  closeBasket.on("click", function(e) {
    $(`.basket-box`).css("display", "none");
    e.preventDefault();
  });

  // Add action to button on cart
  cartButton.on("click", function() {
    $("main")
      .find("header")
      .after(afterPurchase);
  });

  // Add action to remove buttons
  cartList.on("click", removeFromCart);

  // Display all elements on page
  box
    .append(closeBasket)
    .append(title)
    .append(boxContent)
    .append(text)
    .append(cartSummary)
    .append(cartButton);
};
