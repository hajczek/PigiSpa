// treatments.js

import $ from "jquery";
import { header, footer } from "./index";

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  // fetch("http://localhost:3000/treatments")
  //   .then(response => response.json())
  //   .then(treatments => console.log(treatments))
  //   .catch(error => console.log("Error ...", error));

  const box = $(`<div class="treamtments-box"></div>`);
  const title = $(`<h2>Dostępne zabiegi:</h2>`);
  const list = $(`<ol id="treatments-list"></ol>`);
  const li = $(`<li id="treat_1">Masaż rozgrzanym monitorem<span> &raquo;</span></li>
  <li id="treat_2">Biczowanie kablem od myszy<span> &raquo;</span></li>
  <li id="treat_3">Peeling odłamkami płyty CD<span> &raquo;</span></li>
  <li id="treat_4">Pedicure woskiem z USB<span> &raquo;</span></li>
  <li id="treat_5">Manicure analogowo-cyfrowy<span> &raquo;</span></li>
  <li id="treat_6">Kąpiel w gorącej kawie<span> &raquo;</span></li>
  <li id="treat_7">Depilacja dyskiem twardym<span> &raquo;</span></li>`);

  fragment
    .append(header)
    .append(box)
    .append(footer);

  box.append(title).append(list);

  list.append(li);

  return fragment;
};
