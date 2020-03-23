import $ from "jquery";
import { Cart } from "./index";

/**
 * @description Remove element from basket after click trash button
 */
export function removeFromCart(e) {
  e.preventDefault();

  // Define new cart object
  let cart = new Cart();

  /* Check if the trash btn of element in cart was clicked  */
  if (e.target.className === "remove") {
    // If yes, define parent element of this btn
    let targetParent = $(e.target).parent();
    // Define name of this product
    let targetName = targetParent.children(".title").html();

    // Remove this object from cookie
    cart.remove({ name: targetName });
    // Remove this element from cart
    targetParent.remove();

    /* Subtract cost of remove element from all cost in basket */
    // Handle for html element with price of remove element
    let elemWithValue = $(e.target).prev();
    // Handle for price of remove element
    let elemPrice = parseInt(
      elemWithValue
        .children(".price")
        .html()
        .trim()
    );
    // Handle for actual whole cost in basket
    let actuallCostInBasket = parseInt($(`#all-cost`).html());
    // Handle for the whole value of the basket, after remove element
    let newAllCostInBasket = actuallCostInBasket - elemPrice;
    // Put the new value in basket (after remove element)
    $(`#all-cost`).html(`${newAllCostInBasket} + ZŁ`);

    // Change display elements on basket if basket is empty
    if ($(`#all-cost`).html() === "0") {
      $("#slogan-basket").css("display", "block");
      $(".summary-text").css("display", "none");
      $("#pay").css("display", "none");
    }
  }
}
