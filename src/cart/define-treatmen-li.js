import $ from "jquery";

/**
 * @description Define 'li' element for treatment in basket
 * @return {String}     Variable cartLi containing string with html code for 'li' element
 */
export const defineTreatmentLi = e => {
  // Define 'li' element with details about added treatment to display in cart
  let cartLi = $(`<li><span class="title">${$(
    `#title`
  ).html()}</span> x <span class="quant">
    ${$(
      `.num`
    ).val()}</span><p class="value">Łączna wartość: <span class="price">${parseInt(
    $(`.product-price`).html()
  ) *
    parseInt(
      $(`.num`).val()
    )}</span><br></p><span class="remove"></span></li>`);

  // Display cartLi element on page
  $(`#basket-content`).append(cartLi);

  return cartLi;
};
