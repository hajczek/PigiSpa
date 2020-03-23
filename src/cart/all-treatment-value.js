import $ from "jquery";

/**
 * @description Define all treatment value and add to all cart value
 */
export const allTreatmentValue = e => {
  // Define new whole value in cart after added element to cart
  let allValue =
    parseInt($(`#all-cost`).html()) +
    parseInt($(`.product-price`).html()) * parseInt($(`.num`).val());

  // Display new whole value of cart
  $(`#all-cost`).html(allValue + " ZŁ");
};
