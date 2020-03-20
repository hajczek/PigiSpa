// remove-from-basket.js
import $ from "jquery";
import { Cart } from "./../cart/index";

// Function for remove element from basket after click trash button
export function removeFromBasket(e) {
  e.preventDefault();

  let cart = new Cart();

  /* Remove element from basket list after trash btn of this element was clicked  */
  if (e.target.className === "remove") {
    // e.target.parentElement.remove();

    let targetParent = $(e.target).parent();
    let targetName = targetParent.children(".title").html();

    cart.remove({ name: targetName });
    cart.getItSpaCart();

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
    // Handle for actual all cost in basket
    let actuallCostInBasket = parseInt($(`#all-cost`).html());
    // Handle for the whole value of the basket, after remove element
    let newAllCostInBasket = actuallCostInBasket - elemPrice;
    // Put the new value in basket (after remove element)
    $(`#all-cost`).html(newAllCostInBasket);

    // Change display elements on basket if basket is empty
    if ($(`#all-cost`).html() === "0") {
      $("#slogan-basket").css("display", "block");
      $(".summary-text").css("display", "none");
      $("#pay").css("display", "none");
    }
  }
}
