import $ from "jquery";
import { Cart } from "../../cart/index";

export let cartLi,
  cartCount,
  cartValueTreat,
  cartPriceTreat,
  cartRoomDetails,
  cartRoomDays,
  cartValueRoom,
  cartTextPriceRoom,
  cartPriceRoom,
  cartRemoveBtn;

/**
 * @description Display products from cookies in cart
 */
export const basketContentFromCookie = () => {
  // Define cart object
  const cart = new Cart();

  // Handle for items from cookie
  const cookies = cart.getItSpaCart();
  // Iterate after data from cookie
  for (let i = 0; i < cookies.length; i++) {
    cartLi = $(`<li><span class="title">${cookies[i].name}</span> x </li>`);
    cartCount = $(`<span class="quant">${cookies[i].count}</span>`);
    cartValueTreat = $(`<p class="value">Łączna wartość: </p>`);
    cartPriceTreat = $(
      `<span class="price">${parseInt(cookies[i].price) *
        parseInt(cookies[i].count)}</span><br/>`
    );
    cartRoomDetails = $(`<br/><span>od <span class="room-data" id="room-data-from">${cookies[i].from}</span>
  do <span class="room-data" id="room-data-to">${cookies[i].to}</span></span><br/>`);
    cartRoomDays = $(
      `<span>Łączna ilość dni: <b>${cookies[i].days}</b></span><br/>`
    );
    cartValueRoom = $(
      `<span class="room-price">Cena pokoju (${cookies[i].price} zł) * il. pokoi * il. dni:<span><br/>`
    );
    cartTextPriceRoom = $(`<p class="value">Łączna wartość: </p>`);
    cartPriceRoom = $(`<span class="price">${cookies[i].valueAll}</span>`);
    cartRemoveBtn = $(`<span class="remove"></span>`);
  }
};
