// rooms.js

import $ from "jquery";
import { header, basket, footer } from "./index";

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  const box = $(`<div class="rooms-box"></div>`);
  const title = $(`<h2>Dostępne pokoje:</h2>`);
  const list = $(`<ol id="rooms-list"></ol>`);
  const li = $(`<li id="room_1">Pokój unarny<span> &raquo;</span></li>
  <li id="room_2">Pokój binarny<span> &raquo;</span></li>
  <li id="room_3">Pokój trójkowy<span> &raquo;</span></li>
  <li id="room_4">Pokój czwórkowy<span> &raquo;</span></li>`);

  fragment
    .append(header)
    .append(box)
    .append(basket)
    .append(footer);

  box.append(title).append(list);

  list.append(li);

  return fragment;
};
