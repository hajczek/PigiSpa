import $ from "jquery";
import { Cart } from "./index";
import { displayInBasket } from "./index";
import { defineTreatmentLi } from "./index";
import { defineRoomLi } from "./index";
import { allRoomValue } from "./index";
import { allTreatmentValue } from "./index";
import {
  roomFrom,
  roomTo,
  Difference_In_Days,
  calculateDaysNumberForRoom
} from "./../common/index";

/**
 * Add product to cart and cookie file
 */
export const addToCart = e => {
  // Define a new cart
  let cart = new Cart();

  // Calculate number of days for room
  calculateDaysNumberForRoom();

  // Define what must be display on basket
  displayInBasket();

  // Check if product added to cart is not a room
  if ($(`#room-from`).val() === undefined) {
    // Set details about added product to cart in cookies
    cart.add({
      name: $(`#title`).html(),
      count: $(`.num`).val(),
      price: parseInt($(`.product-price`).html()) * parseInt($(`.num`).val())
    });

    // Define 'li' element with details about added treatment to display in cart
    defineTreatmentLi();

    // Define new whole value in cart after added treatment to cart
    allTreatmentValue();
  } else {
    // Set details about added product to cart in cookies
    cart.add({
      name: $(`#title`).html(),
      count: $(`.num`).val(),
      from: roomFrom,
      to: roomTo,
      days: Difference_In_Days,
      price: $(`#room-price`).html(),
      valueAll:
        $(`#room-price`).html() *
        parseInt($(`.num`).val()) *
        parseInt(Difference_In_Days)
    });

    // Define li element with details about added room to display in cart
    defineRoomLi();

    // Define new whole value in cart after added room to cart
    allRoomValue();
  }

  e.preventDefault();
};
