import $ from "jquery";

/**
 * @description Define which elements display in basket
 */
export const displayInBasket = e => {
  $(`#slogan-basket`).css("display", "none");
  $(`#all-value`).removeClass("summary-text-not-display");
  $(`#all-value`).addClass("summary-text");
  $(`#pay`).removeClass("button-not-display");
};
