import $ from "jquery";
import { Cart } from "./index";
import { errorFunc } from "./../common/index";
import { displayInBasket } from "./index";
import { defineTreatmentLi } from "./index";
import { defineRoomLi } from "./index";
import { allRoomValue } from "./index";
import { allTreatmentValue } from "./index";
import {
  roomFrom,
  roomTo,
  Difference_In_Days,
  calculateDaysNumberForRoom,
} from "./../common/index";

/**
 * @description Add product to cart and cookie file
 */
export const addToCart = (e) => {
  // Define a new cart
  let cart = new Cart();

  // Calculate number of days for room
  calculateDaysNumberForRoom();

  // Define what must be display on basket
  displayInBasket();

  // Check if product added to cart is not a room
  if ($(`#room-from`).val() === undefined) {
    // Check if number of treatments is set
    if ($(`.num`).val() === "") {
      // Display info that number of treatments must be given
      errorFunc("Podaj liczbę zabiegów.");
    } else {
      // Set details about added product to cart in cookies
      cart.add({
        name: $(`#title`).html(),
        count: $(`.num`).val(),
        price: parseInt($(`.product-price`).html()) * parseInt($(`.num`).val()),
      });

      // Define 'li' element with details about added treatment to display in cart
      defineTreatmentLi();

      // Define new whole value in cart after added treatment to cart
      allTreatmentValue();
    }
  } else {
    // Check if all needed informations about room are set
    if (
      $(`#room-from`).val() === "" ||
      $(`#room-to`).val() === "" ||
      $(`.num`).val() === ""
    ) {
      // Display info that all details about room are needed
      errorFunc(
        "Uzupełnij wymagane pola: datę przyjazdu i wyjazdu oraz liczbę pokoi."
      );
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
          parseInt(Difference_In_Days),
      });

      // Define li element with details about added room to display in cart
      defineRoomLi();

      // Define new whole value in cart after added room to cart
      allRoomValue();
    }
  }

  e.preventDefault();
};
