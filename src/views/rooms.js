// rooms.js

import $ from "jquery";
import { header, basket, footer } from "./index";
import { addToCart } from "./../cart/index";
// import { displayUserMenu } from "./../common/index";
import {
  limitDateFunction,
  todayDate,
  yearFromTodayDate
} from "./../common/index";

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  // Define html elements
  const box = $(`<div class="rooms-box"></div>`);
  const title = $(`<h2>Dostępne pokoje:</h2>`);
  const list = $(`<ol id="rooms-list"></ol>`);
  fragment
    .append(header)
    .append(box)
    .append(basket)
    .append(footer);

  box.append(title).append(list);

  // Connect with database form rooms
  fetch("http://localhost:3004/rooms")
    .then(response => response.json())
    .then(rooms => {
      // Display user menu
      // if (box) {
      //   displayUserMenu();
      // }
      // Prepare data with function map
      rooms.map(room => {
        // Define li element for each room
        let li = `<li id="room_${room.id}">${room.name}<span> &raquo;</span></li>`;
        // Display list of treatments on page
        list.append(li);

        // Action for click on link with treeatment
        $(`#room_${room.id}`).on("click", () => {
          // Remove existed box from page
          $(`.room-box`).remove();
          // Define box for room details
          const boxDetails = $(`<div class="room-box"></div>`);

          // Call function to set limit date for inpit with date type
          limitDateFunction();

          // Define all details about room which was clicked
          if (room.id) {
            const title = $(`<h2 id="title">${room.name}</h2>`);
            const details = $(`<p>Ilość łóżek: <span id="beds-quantity">${room.beds}</span>, 
            osób: <span id="persons-quantity">${room.guests}</span><br>
            Cena pokoju: <span id="room-price" class="product-price">${room.price}</span> zł<br>
            Data przyjazdu: <input id="room-from" type="date" min=${todayDate}><br>
            Data wyjazdu: <input id="room-to" type="date" max=${yearFromTodayDate}><br>
            Ilość pokoi: <input id="room-num" class="num" type="number" min="1" max="10"></p>`);
            const button = $(`<button id="add-room">Wrzuć do kosza!</button>`);

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
