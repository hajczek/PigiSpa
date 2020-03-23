import $ from "jquery";
import { roomFrom, roomTo, Difference_In_Days } from "./../common/index";

/**
 * @description Define 'li' element for room in basket
 * @return {String}     Variable cartLi containing string with html code for 'li' element
 */
export const defineRoomLi = e => {
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
      parseInt(Difference_In_Days)}</span></p><span class="remove"></span></li>`
  );

  // Display cartLi element on page
  $(`#basket-content`).append(cartLi);

  return cartLi;
};
