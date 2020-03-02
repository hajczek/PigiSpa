// treatment.js

import $ from "jquery";
import { header, footer } from "./index";

export const treatment = () => {
  const fragment = $(new DocumentFragment());

  const box = $(`<div class="treamtment-box"></div>`);
  const title = $(`<h2 id="title">Masaż rozgrzanym monitorem</h2>`);
  const details = $(`<p>Zabieg obejmuje obszar: <span id="treat-area">back</span><br>
  Czas trwania zabiegu: <span id="treat-time">30</span> min.<br>
  Cena zabiegu: <span id="treat-price">80</span> zł<br>
  Ilość zabiegów: <input id="treatment-num" type="number" min="1" max="10"></p>`);
  const button = $(`<button id="add-treatment">Wrzuć do kosza!</button>`);

  fragment
    .append(header)
    .append(box)
    .append(footer);

  box
    .append(title)
    .append(details)
    .append(button);

  return fragment;
};
