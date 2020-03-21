import $ from "jquery";
import { basket, footer } from "./index";
import { removeFromCookie } from "./../cart/index";

export const afterPurchase = () => {
  const fragment = $(new DocumentFragment());

  // Hide elements
  $(`.rooms-box`).css("display", "none");
  $(`.room-box`).css("display", "none");
  $(`.treatments-box`).css("display", "none");
  $(`.treatment-box`).css("display", "none");
  $(`.value`).css("display", "none");
  $(`.room-price`).css("display", "none");
  $(`.remove`).css("display", "none");
  $(`#pay`).css("display", "none");

  // Change text about all value
  $(`#all-value`).html(
    `TO WSZYSTKO ZA JEDYNE<br/> 
    <span id="purchase-price">${$(`#all-cost`).html()}</span>`
  );

  // Set new css styles for price
  $(`#purchase-price`).css("font-size", "30px");
  $(`#purchase-price`).css("color", "#e654f6");

  // Define text after purchase
  const textAfterPurchase = $(`<div class="thanks-box-after-payment"><h2>Dziękujemy za rezerwację!</h2>
  <p>Czekamy na Ciebie w PigiSpa! Nie zapomnij kąpielówek ;)</p></div>`);

  // Display all elements on page
  fragment
    .append(textAfterPurchase)
    .append(basket)
    .append(footer);

  // Remove all cookie
  removeFromCookie("IT_SPA_CART");
  removeFromCookie(" IT_SPA_CART");

  return fragment;
};
