import $ from "jquery";
// import { Cart } from "./cart";

export const addTreatmentToBasket = e => {
  console.log(
    `Wartość (ilość * cena): ${parseInt($(`#treat-price`).html()) *
      parseInt($(`#treatment-num`).val())}`
  );

  console.log(!cartSummary, !cartButton);

  // const cartList = $(`<ol id="basket-content"></ol>`);
  const cartLi = $(`<li id="poz_1">${$(
    `#title`
  ).html()}<br>Il. szt.: <input class="quant" type="number" value="${parseInt(
    $(`#treatment-num`).val()
  )}" min="1" max="100">, cena: <span class="price">${parseInt(
    $(`#treat-price`).html()
  )}</span> zł
<span class="remove"></span></li>`);
  const cartSummary = $(
    `<p class="summary-text">Razem do zapłaty: <span id="all-cost">840</span> zł</p>`
  );
  const cartButton = $(`<button id="pay">Kupuję i płacę</button>`);

  $("#slogan-basket").css("display", "none");

  $(`#basket-content`).append(cartLi);

  if (cartSummary && cartButton) {
    $(`#basket-content`).after(cartSummary);
    cartSummary.after(cartButton);
  }
  e.preventDefault();
};
