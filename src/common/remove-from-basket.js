// remove-from-basket.js
import $ from "jquery";

// Function for remove element from basket after click trash button
export function removeFromBasket(e) {
  e.preventDefault();

  /* Remove element from basket list after trash btn of this element was clicked  */
  if (event.target.className === "remove") {
    e.target.parentElement.remove();

    /* Subtract cost of remove element from all cost in basket */
    // Handle for price of remove element
    const elementPrice = parseInt(
      e.target.previousSibling.previousElementSibling.innerHTML
    );
    // Handke for actual all cost in basket
    let actuallCostInBasket = parseInt($(`#all-cost`).html());
    // Handle for new cost in basket, after remove element
    let newAllCostInBasket = actuallCostInBasket - elementPrice;
    // Put new cost in basket (after remove element) as an all cost in basket
    $(`#all-cost`).html(newAllCostInBasket);

    // Change display elements on basket if basket is empty
    if ($(`#all-cost`).html() === "0") {
      $("#slogan-basket").css("display", "block");
      $(".summary-text").css("display", "none");
      $("#pay").css("display", "none");
    }
  }
}
