import $ from "jquery";
// import { removeFromCart } from "./../cart/index";
import { Cart } from "./../cart/index";
import {
  basketLiElements,
  box,
  closeBasket,
  title,
  boxContent,
  text,
  cartList,
  cartSummary,
  cartCost,
  cartButton
} from "./index";
import {
  basketContentFromCookie,
  cartLi,
  cartCount,
  cartValueTreat,
  cartPriceTreat,
  cartRoomDetails,
  cartRoomDays,
  cartValueRoom,
  cartTextPriceRoom,
  cartPriceRoom,
  cartRemoveBtn
} from "./index";

/**
 * @description Define basket
 */
export const basket = () => {
  const fragment = $(new DocumentFragment());

  // Define needed elements for basket
  basketLiElements();

  // Display products from cookies in cart
  const cart = new Cart();

  // Check if cookie exists
  if (cart.exists()) {
    // If yes, get data from cookie
    const cookies = cart.getItSpaCart();

    // Iterate after data from cookie
    for (let i = 0; i < cookies.length; i++) {
      // Define content to display details of added product in cart
      basketContentFromCookie();

      // Display all element on page
      cartList.append(cartLi);

      // Check if item from cookie have parameter with date 'from'
      if (cookies[i].from) {
        // If yes, display needed elements on cart
        cartLi
          .append(cartCount)
          .append(cartRoomDetails)
          .append(cartRoomDays)
          .append(cartValueRoom)
          .append(cartTextPriceRoom)
          .append(cartRemoveBtn);

        cartTextPriceRoom.append(cartPriceRoom);

        // Add price of added room to cart to all price
        cartCost.html(
          parseInt(cartCost.html()) + parseInt(cartPriceRoom.html()) + ` zł`
        );
      } else {
        cartLi
          .append(cartCount)
          .append(cartValueTreat)
          .append(cartRemoveBtn);

        cartValueTreat.append(cartPriceTreat);
        // Add price of added treatment to cart to all price
        cartCost.html(
          parseInt(cartCost.html()) + parseInt(cartPriceTreat.html()) + ` zł`
        );
      }

      // Check if cart object length is longer than 0
      if (cart.getItSpaCart().length > 0) {
        // Define what must be display on basket
        text.css("display", "none");
        cartSummary.removeClass("summary-text-not-display");
        cartSummary.addClass("summary-text");
        cartButton.removeClass("button-not-display");
      }
    }
  }

  // Display all elements on page
  fragment.append(box);
  cartSummary.append(cartCost);
  boxContent.append(cartList);

  return fragment;
};
