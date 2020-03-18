// basket.js

import { removeFromBasket } from "./../common/index";
import { Cart } from "./../cart/index";
import $ from "jquery";

export const basket = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="basket-box"></div>`);
  const title = $(`<h2 id="cartTitle">TWÓJ KOSZYK</h2>`);
  const boxContent = $(`<div id="basket-content-box"></div>`);
  const text = $(`<p id="slogan-basket">Załaduj coś do koszyka!</p>`);
  const cartList = $(`<ol id="basket-content"></ol>`);
  const cartSummary = $(
    `<p id="all-value" class="summary-text-not-display">Razem do zapłaty: <span id="all-cost">0</span> zł</p>`
  );
  const cartButton = $(
    `<button id="pay" class="button-not-display">Kupuję i płacę</button>`
  );

  cartList.on("click", removeFromBasket);
  
  // Display products from cookies in cart
  const cart = new Cart();

  if(cart.exists()){

    const cookies = cart.getItSpaCart();

    for(let i = 0; i < cookies.length; i++){
      // Define content to display details of added tratment in cart
      let cartLi = $(`<li><span class="title">${cookies[i].name}</span> x </li>`);
      let cartCount = $(
      `<span class="quant">${cookies[i].count}</span>`
      );
      let cartValueTreat = $(`<p>Łączna wartość: <span class="price">
      ${parseInt(cookies[i].price) * parseInt(cookies[i].count)}</span> zł</p>`);
      let cartRoomDetails = $(`<p>od <span class="room-data" id="room-data-from">${cookies[i].from}</span>
      do <span class="room-data" id="room-data-to">${cookies[i].to}</span></p>`);
      // cartRoomDays = $(
      // `<span>Łączna ilość dni: <b>${Difference_In_Days}</b></span><br/>`
      // );
      let cartRoomPrice = $(`<span>Cena pokoju (${cookies[i].price} zł) * ilość pokoi * ilość dni:<span><br/>
      <p>Łączna wartość: <span class="price">${parseInt(cookies[i].price) * parseInt(parseInt(cookies[i].count))}      
      // * parseInt(Difference_In_Days)}      
      )}</span> zł</p>`);
      let cartRemoveBtn = $(`<span class="remove"></span>`);
      
      cartList.append(cartLi);
      
      if(cookies[i].from) {
        cartLi
          .append(cartCount)
          .append(cartRoomDetails)
          // .append(cartRoomDays)
          .append(cartRoomPrice)
          .append(cartRemoveBtn);
      } else {
          cartLi.append(cartCount).append(cartValueTreat).append(cartRemoveBtn);;
        }
    } 

    // Define what must be display on basket
    text.css("display", "none");

    // Add price of added treatment to cart to all price
    $(`#all-cost`).html(
      parseInt($(`#all-cost`).html()) + parseInt($(`.price`).html())
    );

    $("#all-value").removeClass("summary-text-not-display");
    $("#all-value").addClass("summary-text");
    $("#pay").removeClass("button-not-display");
  }

  fragment.append(box);
  box
    .append(title)
    .append(boxContent)
    .append(text)
    // .append(basketContent)
    .append(cartSummary)
    .append(cartButton);

  boxContent.append(cartList);

  return fragment;
};
