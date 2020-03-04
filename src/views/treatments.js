// treatments.js

import $ from "jquery";
import { header, treatmentBox, basket, footer } from "./index";

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  const box = $(`<div class="treamtments-box"></div>`);
  const title = $(`<h2>Dostępne zabiegi:</h2>`);
  const list = $(`<ol id="treatments-list"></ol>`);
  fragment
    .append(header)
    .append(box)
    .append(basket)
    .append(footer);

  box.append(title).append(list);

  fetch("http://localhost:3000/treatments")
    .then(response => response.json())
    .then(treatments =>
      treatments.map(treatment => {
        let li = `<li id="treat_${treatment.id}">${treatment.name}<span> &raquo;</span></li>`;
        list.append(li);

        $(`#treat_${treatment.id}`).on("click", () => {
          if (treatment.id) {
            const boxDetails = $(`<div class="treamtment-box"></div>`);
            const title = $(`<h2 id="title">${treatment.name}</h2>`);
            const details = `<p>Zabieg obejmuje obszar: <span id="treat-area">${treatment.area}</span><br>
            Czas trwania zabiegu: <span id="treat-time">${treatment.time}</span> min.<br>
            Cena zabiegu: <span id="treat-price">${treatment.price}</span> zł<br>
            Ilość zabiegów: <input id="treatment-num" type="number" min="1" max="10"></p>`;
            const button = $(
              `<button id="add-treatment">Wrzuć do kosza!</button>`
            );
            box.after(boxDetails);
            boxDetails
              .empty()
              .append(title)
              .append(details)
              .append(button);
          }
        });
      })
    )
    .catch(error => console.log("Error ...", error));

  return fragment;
};
