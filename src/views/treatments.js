import $ from "jquery";
import { header, basket, footer } from "./index";
import { addToCart } from "./../cart/index";

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  // Define all html elements
  const box = $(`<div class="treatments-box"></div>`);
  const title = $(`<h2>Dostępne zabiegi:</h2>`);
  const list = $(`<ol id="treatments-list"></ol>`);

  // Display all elements on page
  fragment
    .append(header)
    .append(box)
    .append(basket)
    .append(footer);

  box.append(title).append(list);

  // Connect with database
  fetch("http://localhost:3004/treatments")
    .then(response => response.json())
    .then(treatments => {
      // Prepare data with function map
      treatments.map(treatment => {
        // Define li element for each treatment
        let li = `<li id="treat_${treatment.id}">${treatment.name}<span> &raquo;</span></li>`;
        // Display list of treatments on page
        list.append(li);

        // Action for click on link with treeatment
        $(`#treat_${treatment.id}`).on("click", () => {
          // Remove existed box from page
          $(`.treatment-box`).remove();
          // Define box for treatment details
          const boxDetails = $(`<div class="treatment-box"></div>`);
          // Define all details about treatment which was clicked
          if (treatment.id) {
            const title = $(`<h2 id="title">${treatment.name}</h2>`);
            const details = $(`<p>Zabieg obejmuje obszar: <span id="treat-area">${treatment.area}</span><br>
            Czas trwania zabiegu: <span id="treat-time">${treatment.time}</span> min.<br>
            Cena zabiegu: <span id="treat-price" class="product-price">${treatment.price}</span> zł<br>
            Ilość zabiegów: <input id="treatment-num" class="num" type="number" min="1" max="10"></p>`);
            const button = $(
              `<button id="add-treatment">Wrzuć do kosza!</button>`
            );

            // Add action to button in cart
            button.on("click", addToCart);

            // Display all elements on page
            boxDetails
              .append(title)
              .append(details)
              .append(button);
            box.after(boxDetails);
          }
        });
      });
    })
    .catch(error => console.log("Error ...", error));
  return fragment;
};
