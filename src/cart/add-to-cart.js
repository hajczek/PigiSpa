import $ from "jquery";
import { Cart } from "./index";

export const addToCart = e => {
  // Display elements added to cart

  let cart = new Cart();

  // Handle for data for room
  const roomFrom = $(`#room-from`).val();
  const roomTo = $(`#room-to`).val();

  // Create new dates from data for room to calculate number of days
  let date1 = new Date(roomFrom);
  let date2 = new Date(roomTo);

  // Calculate the time difference of two dates
  let Difference_In_Time = date2.getTime() - date1.getTime();

  // Calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  // Display added treatments

  // Define content to display details of added tratment in cart
  const cartLi = $(
    `<li><span class="title">${$(`#title`).html()}</span> x </li>`
  );
  const cartCount = $(
    `<span class="quant">${parseInt($(`.num`).val())}</span>`
  );
  const cartValueTreat = $(`<p>Łączna wartość: <span class="price">
  ${parseInt($(`.price`).html() * parseInt($(`.num`).val()))}</span> zł</p>`);

  let cartRoomDetails = $(`<p>od <span class="room-data" id="room-data-from">${roomFrom}</span>
    do <span class="room-data" id="room-data-to">${roomTo}</span></p>`);
  let cartRoomDays = $(
    `<span>Łączna ilość dni: <b>${Difference_In_Days}</b></span>`
  );
  let cartRoomPrice = $(`<span>Cena pokoju (${$(
    `#room-price`
  ).html()} zł) * ilość pokoi * ilość dni:<span><br/>
  <p>Łączna wartość: <span class="price">${parseInt(
    $(`#room-price`).html() *
      parseInt($(`#room-num`).val()) *
      parseInt(Difference_In_Days)
  )}</span> zł</p>`);

  const cartRemoveBtn = $(`<span class="remove"></span>`);

  // Define what must be display on basket
  $("#slogan-basket").css("display", "none");

  // Check if product is on basket
  // if (
  //   $(`.title`)
  //     .first()
  //     .html() !== $(`#title`).html()
  // ) {
  //   $(`#basket-content`).prepend(cartLi);
  //   cartLi.append(cartCount).append(cartRemoveBtn);
  // } else {
  //   alert("Ten produkt jest już w koszyku");
  // }

  console.log(typeof $(`#room-from`).val(), $(`#room-from`).val());

  if ($(`#room-from`).val() === undefined) {
    $(`#basket-content`).prepend(cartLi);
    cartLi
      .append(cartCount)
      .append(cartValueTreat)
      .append(cartRemoveBtn);
  } else {
    $(`#basket-content`).prepend(cartLi);
    cartLi
      .append(cartCount)
      .append(cartRoomDetails)
      .append(cartRoomDays)
      .append(cartRoomPrice)
      .append(cartRemoveBtn);
  }

  $("#all-value").removeClass("summary-text-not-display");
  $("#all-value").addClass("summary-text");
  $("#pay").removeClass("button-not-display");

  // Add price of added treatment to cart to all price
  $(`#all-cost`).html(
    parseInt($(`#all-cost`).html()) +
      parseInt($(`.price`).html()) * parseInt($(`.num`).val())
  );
  e.preventDefault();
};
