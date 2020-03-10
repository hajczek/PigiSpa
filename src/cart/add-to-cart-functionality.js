import $ from "jquery";
// import { Cart } from "./cart";

export const addTreatmentToBasket = e => {
  const cartLi = $(`<li>${$(
    `#title`
  ).html()}<br>Il. szt.: <input class="quant" type="number" value="${parseInt(
    $(`#treatment-num`).val()
  )}" min="1" max="100">, wartość: <span class="price">${parseInt(
    $(`#treat-price`).html() * parseInt($(`#treatment-num`).val())
  )}</span> zł
<span class="remove"></span></li>`);

  $("#slogan-basket").css("display", "none");
  $(`#basket-content`).append(cartLi);
  $("#all-value").removeClass("summary-text-not-display");
  $("#all-value").addClass("summary-text");
  $("#pay").removeClass("button-not-display");

  e.preventDefault();
};
