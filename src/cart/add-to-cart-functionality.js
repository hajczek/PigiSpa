import $ from "jquery";
// import { Cart } from "./cart";

export const addToCart = e => {
  // Display elements added to cart

  // Display added treatments
  if (parseInt($(`#treat-price`).html()) > 0) {
    const cartLi = $(`<li>${$(
      `#title`
    ).html()} x <input class="quant" type="number" value="${parseInt(
      $(`#treatment-num`).val()
    )}" min="1" max="100"><br/>Łączna wartość: <span class="price">${parseInt(
      $(`#treat-price`).html() * parseInt($(`#treatment-num`).val())
    )}</span> zł
  <span class="remove"></span></li>`);

    $("#slogan-basket").css("display", "none");
    $(`#basket-content`).append(cartLi);
    $("#all-value").removeClass("summary-text-not-display");
    $("#all-value").addClass("summary-text");
    $("#pay").removeClass("button-not-display");

    $(`#all-cost`).html(
      parseInt($(`#all-cost`).html()) +
        parseInt($(`#treat-price`).html()) * parseInt($(`#treatment-num`).val())
    );

    allPrice += allTreatmentPrice;
  }
  // Display added rooms
  else if (parseInt($(`#room-price`).html()) > 0) {
    // Handle for data for room
    const roomFrom = $(`#room-from`).val();
    const roomTo = $(`#room-to`).val();

    // console.log(typeof $(`#room-from`).val(), typeof $(`#room-data-from`).val());
    // Create new dates from data for room to calculate number of days
    let date1 = new Date(roomFrom);
    let date2 = new Date(roomTo);

    // Calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();

    // Calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    const cartLiRoom = $(`<li>${$(
      `#title`
    ).html()} x <input class="quant" type="number" value="${parseInt(
      $(`#room-num`).val()
    )}" min="1" max="100"><br/>
    od <span class="room-data" id="room-data-from">${roomFrom}</span>
    do <span class="room-data" id="room-data-to">${roomTo}</span><br/>
    Łączna ilość dni: ${Difference_In_Days}<br/>
    Cena pokoju (${$(
      `#room-price`
    ).html()} zł) * ilość pokoi * ilość dni:<br/>    
    Łączna wartość: <span class="price">${parseInt(
      $(`#room-price`).html() *
        parseInt($(`#room-num`).val()) *
        parseInt(Difference_In_Days)
    )}</span> zł
  <span class="remove"></span></li>`);

    $("#slogan-basket").css("display", "none");
    $(`#basket-content`).append(cartLiRoom);
    $("#all-value").removeClass("summary-text-not-display");
    $("#all-value").addClass("summary-text");
    $("#pay").removeClass("button-not-display");

    // Calculating all price of element in cart
    $(`#all-cost`).html(
      parseInt($(`#all-cost`).html()) +
        parseInt($(`#room-price`).html()) *
          parseInt($(`#room-num`).val()) *
          parseInt(Difference_In_Days)
    );
  }

  e.preventDefault();
};
