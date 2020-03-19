import $ from "jquery";
import { Cart } from "./index";

export const addToCart = () => {
  console.log("Added to cart");

  // Define a new cart
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

  // Check if added product to cart is not a room
  if ($(`#room-from`).val() === undefined) {
    // Add to cookies details about added prodact to cart
    cart.add({
      name: $(`#title`).html(),
      count: $(`.num`).val(),
      price: $(`.product-price`).html() * parseInt($(`.num`).val())
    });
  } else {
    // Add to cookies details about added prodact to cart
    cart.add({
      name: $(`#title`).html(),
      count: $(`.num`).val(),
      from: roomFrom,
      to: roomTo,
      days: Difference_In_Days,
      price:
        $(`.product-price`).html() *
        parseInt($(`.num`).val()) *
        parseInt(Difference_In_Days)
    });
  }

  e.preventDefault();
};
