// room.js

import $ from "jquery";
import { header, footer } from "./index";

export const room = () => {
  const fragment = $(new DocumentFragment());

  const box = $(`<div class="room-box"></div>`);
  const title = $(`<h2 id="title">Pokój unarny</h2>`);
  const details = $(`<p>Ilość łóżek: <span id="beds-quantity">1</span><br>
  Ilość osób: <span id="persons-quantity">1</span><br>
  Cena pokoju: <span id="room-price">80</span> zł<br>
  Data przyjazdu: <input id="room-from" type="date"><br>
  Data wyjazdu: <input id="room-to" type="date"><br>
  Ilość pokoi: <input id="room-num" type="number" min="1" max="10"></p>`);
  const button = $(`<button id="add-room">Wrzuć do kosza!</button>;`);

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
