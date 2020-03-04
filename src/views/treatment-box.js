// treatment-box.js

import $ from "jquery";

export const treatmentBox = () => {
  const fragment = $(new DocumentFragment());

  const boxDetails = $(`<div class="treamtment-box"></div>`);

  const button = $(`<button id="add-treatment">Wrzuć do kosza!</button>`);

  treatments.map(treatment => {
    const title = $(`<h2 id="title">${treatment.name}</h2>`);
    const details = `<p>Zabieg obejmuje obszar: <span id="treat-area">${treatment.area}</span><br>
        Czas trwania zabiegu: <span id="treat-time">${treatment.time}</span> min.<br>
        Cena zabiegu: <span id="treat-price">${treatment.price}</span> zł<br>
        Ilość zabiegów: <input id="treatment-num" type="number" min="1" max="10"></p>`;
    boxDetails
      .append(title)
      .append(details)
      .append(button);
  });

  return fragment;
};
