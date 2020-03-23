import $ from "jquery";
import { Difference_In_Days } from "./../common/index";

/**
 * @description Define all room value and add to all cart value
 */
export const allRoomValue = e => {
  // Define new whole value in cart after added element to cart
  let allValue =
    parseInt($(`#all-cost`).html()) +
    $(`#room-price`).html() *
      parseInt($(`.num`).val()) *
      parseInt(Difference_In_Days);

  // Display new whole value of cart
  $(`#all-cost`).html(allValue + " ZŁ");
};
