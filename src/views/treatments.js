// treatments.js

import $ from "jquery";
import { header, footer } from "./index";

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  const box = $(`<div class="treamtments-box"></div>`);
  const title = $(`<h2>Dostępne zabiegi:</h2>`);
  const list = $(`<ol id="treatments-list"></ol>`);
  fragment
    .append(header)
    .append(box)
    .append(footer);

  box.append(title).append(list);

  fetch("http://localhost:3000/treatments")
    .then(response => response.json())
    .then(treatments =>
      treatments.map(treatment => {
        let li = `<li id="treat_${treatment.id}">${treatment.name}<span> &raquo;</span></li>`;
        console.log(li);
        list.append(li);
      })
    )
    .catch(error => console.log("Error ...", error));

  return fragment;
};
