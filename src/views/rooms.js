import $ from "jquery";
import { header, basket, footer } from "./index";
import { addToCart } from "./../cart/index";
import {
  limitDateFunction,
  todayDate,
  yearFromTodayDate,
} from "./../common/index";
import { url } from "./../database/database-conntection";

/**
 * @description Define box with rooms
 */
export const rooms = () => {
  const fragment = $(new DocumentFragment());

  // Define html elements
  const box = $(`<div class="rooms-box"></div>`);
  const title = $(`<h2>Dostępne pokoje:</h2>`);
  const list = $(`<ol id="rooms-list"></ol>`);

  // Display all elements on page
  fragment.append(header).append(box).append(basket).append(footer);

  box.append(title).append(list);

  // Connect with database for rooms
  fetch(`${url}/rooms`)
    .then((response) => response.json())
    .then((rooms) => {
      // Prepare data with function map
      rooms.map((room) => {
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
            const error = $(`<div id="info-err"></div>`);
            const title = $(`<h2 id="title">${room.name}</h2>`);
            const allText = $(`<p></p>`);
            const details = $(`<span class="thin">Ilość łóżek: <span id="beds-quantity">${room.beds}</span>, 
            osób: <span id="persons-quantity">${room.guests}</span><br>
            Cena pokoju: <span id="room-price" class="product-price">${room.price}</span> zł<br>
            Data przyjazdu: </span>`);
            const dataFrom = $(
              `<input id="room-from" type="date" min=${todayDate} max=${yearFromTodayDate} required>`
            );
            const details2 = $(`<br><span class="thin">Data wyjazdu: <input id="room-to" type="date" max=${yearFromTodayDate} required><br>
            Ilość pokoi: <input id="room-num" class="num" type="number" min="1" max="10"></span>`);
            const button = $(`<button id="add-room">Wrzuć do kosza!</button>`);

            // Add 'change' event to input field 'dataFrom'
            dataFrom.on("change", function () {
              // Set attribute 'min' for input field with id 'room-to' with value as data set in dataFrom input
              $(`#room-to`).attr("min", $(this).val());
            });

            // Add action to button in cart
            button.on("click", addToCart);

            // Display all elements on page
            boxDetails.append(error).append(allText).append(button);
            allText
              .append(title)
              .append(details)
              .append(dataFrom)
              .append(details2);
            box.after(boxDetails);
          }
        });
      });
    })
    .catch((error) => console.log("Error ...", error));

  return fragment;
};
