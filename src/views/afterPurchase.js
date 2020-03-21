// after-purchase.js

import $ from "jquery";
import { basket, footer } from "./index";

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

  console.log(document.cookie.slice(";"));

  fragment
    .append(textAfterPurchase)
    .append(basket)
    .append(footer);

  // Remove all cookies
  // document.cookie.split(";").forEach(function(c) {
  //   document.cookie =
  //     c.trim().split("=")[0] + "=;" + "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  // });

  function delete_cookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  delete_cookie("IT_SPA_CART");
  delete_cookie(" IT_SPA_CART");

  return fragment;
};
