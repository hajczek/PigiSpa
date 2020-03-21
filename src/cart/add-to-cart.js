import $ from "jquery";
import { Cart } from "./index";
import {
  roomFrom,
  roomTo,
  Difference_In_Days,
  calculateNumberDaysForRoom
} from "./../common/index";

export const addToCart = e => {
  // Define a new cart
  let cart = new Cart();

  // Calculate number of days for room
  calculateNumberDaysForRoom();

  // Define what must be display on basket
  $(`#slogan-basket`).css("display", "none");
  $(`#all-value`).removeClass("summary-text-not-display");
  $(`#all-value`).addClass("summary-text");
  $(`#pay`).removeClass("button-not-display");

  // Check if product added to cart is not a room
  if ($(`#room-from`).val() === undefined) {
    // Set details about added product to cart in cookies
    cart.add({
      name: $(`#title`).html(),
      count: $(`.num`).val(),
      price: parseInt($(`.product-price`).html()) * parseInt($(`.num`).val())
    });

    // Define 'li' element with details about added treatment to display in cart
    let cartLi = $(`<li><span class="title">${$(
      `#title`
    ).html()}</span> x <span class="quant">
      ${$(
        `.num`
      ).val()}</span><p class="value">Łączna wartość: <span class="price">${parseInt(
      $(`.product-price`).html()
    ) *
      parseInt(
        $(`.num`).val()
      )}</span><br></p><span class="remove"></span></li>`);

    // Display cartLi element on page
    $(`#basket-content`).append(cartLi);

    // Define new whole value in cart after added element to cart
    let allValue =
      parseInt($(`#all-cost`).html()) +
      parseInt($(`.product-price`).html()) * parseInt($(`.num`).val());

    // Display new whole value of cart
    $(`#all-cost`).html(allValue + " ZŁ");
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
    let cartLi = $(
      `<li><span class="title">${$(
        `#title`
      ).html()}</span> x <span class="quant">${$(
        `.num`
      ).val()}</span><br><span>od <span class="room-data" id="room-data-from">${roomFrom}</span> do <span class="room-data" id="room-data-to">${roomTo}</span></span><br><span>Łączna ilość dni: <b>${Difference_In_Days}</b></span><br><span class="room-price">Cena pokoju (${$(
        `#room-price`
      ).html()} zł) * il. pokoi * il. dni:<span><br></span></span><p class="value">Łączna wartość: <span class="price">${$(
        `#room-price`
      ).html() *
        parseInt($(`.num`).val()) *
        parseInt(
          Difference_In_Days
        )}</span></p><span class="remove"></span></li>`
    );

    // Display cartLi element on page
    $(`#basket-content`).append(cartLi);

    // Define new whole value in cart after added element to cart
    let allValue =
      parseInt($(`#all-cost`).html()) +
      $(`#room-price`).html() *
        parseInt($(`.num`).val()) *
        parseInt(Difference_In_Days);

    // Display new whole value of cart
    $(`#all-cost`).html(allValue + " ZŁ");
  }

  e.preventDefault();
};
