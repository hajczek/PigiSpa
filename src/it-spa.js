import { Router, routes } from "./router";
import $ from "jquery";
import { activateRegisterForm } from "./common/index";

// Code for Router
const main = $("main");
const router = new Router(routes);

// Element main is our outlet for our views
router.mount(main);

// For special paths in browser
router.init();

// Functionality for register form
activateRegisterForm();

// Functionality for login form
// activateLoginForm();

/********** MAIN CODE ***************/

// /* FOR ADD POSITION FROM BOX TO BASKET AFTER CLICKED BUTTON 'Wrzuć do kosza' ON TREATMENT BOX */

// // Handle for button on treatment box
// const addTreatmentBtn = document.getElementById("add-treatment");

// // Add event after click button addTreatmentBtn
// addTreatmentBtn
//   ? addTreatmentBtn.addEventListener("click", addTreatmentToBasket)
//   : false;

// function addTreatmentToBasket(e) {
//   e.preventDefault();

//   /* Tutaj ma nastąpić dodanie pozycji z boxa do koszyka - trzeba pobrać wszystkie dane potrzebne w koszyku o usłudze i wyświetlić je w koszyku*/
//   // Display name of treatment
//   const treatmentName = document.getElementById("title").innerHTML;
//   console.log(treatmentName);
//   // Display price of treatment
//   const treatmentPrice = parseInt(
//     document.getElementById("treat-price").innerHTML
//   );
//   console.log(treatmentPrice);
//   // Display number of treatment
//   const treatmentNum = document.getElementById("treatment-num").value;
//   console.log(treatmentNum);
//   // Calculate cost of treatment
//   let treatmentCost = treatmentPrice * treatmentNum;
//   console.log(treatmentCost);
// }

// /* FOR ADD POSITION FROM BOX TO BASKET AFTER CLICKED BUTTON 'Wrzuć do kosza' ON ROOM BOX */

// // Handle for button on room box
// const addRoomBtn = document.getElementById("add-room");

// // Add event after click this button addRoomBtn
// addRoomBtn ? addRoomBtn.addEventListener("click", addRoomToBasket) : false;

// function addRoomToBasket(e) {
//   e.preventDefault();

//   /* Tutaj ma nastąpić dodanie pozycji z boxa do koszyka - trzeba pobrać wszystkie dane potrzebne w koszyku o usłudze i wyświetlić je w koszyku */

//   /* Display name of room */
//   const roomName = document.getElementById("title").innerHTML;
//   console.log(roomName);
//   /* Display term of arrival */
//   const roomFrom = new Date(document.getElementById("room-from").value);
//   console.log(roomFrom);
//   /* Display term of departure */
//   const roomTo = new Date(document.getElementById("room-to").value);
//   console.log(roomTo);
//   /* Display price of room */
//   const roomPrice = parseInt(document.getElementById("room-price").innerHTML);
//   console.log(roomPrice);
//   /* Display num of rooms */
//   const roomNum = document.getElementById("room-num").value;
//   /* Calculate number of days */
//   let numOfDays = parseInt((roomTo - roomFrom) / (24 * 3600 * 1000));
//   console.log(numOfDays);
//   /* Calculate cost of room */
//   let costOfRoom = numOfDays * roomPrice * roomNum;
//   console.log(costOfRoom);
// }

// /* FOR INPUT WITH 'quant' IN BASKET to change number of elements*/

// // Add event listener for every 'quant' element in each element on basket list
// inBasket.addEventListener("click", changeQuantOfElement);

// /* Function for change quantity of element */
// function changeQuantOfElement(e) {
//   e.preventDefault();

//   if (event.target.className === "quant") {
//     console.log(e.target.value);
//     /* Tutaj trzeba obliczyć nową cenę odpowiadającą ilości elementów - quant.value * priceOfElelemt */
//     let newQuantOfElement = e.target.value;

//     // Handle for actual price of element - tutaj trzeba pobrać cenę elementu z bazy
//     // let priceOfElement = ...

//     // Calculate a new price of element
//     let newPriceOfElement = newQuantOfElement * priceOfElement;
//     // Define element which display price of element on basket
//     let displayPrice = e.target.nextElementSibling;
//     displayPrice.innerHTML = newPriceOfElement;
//   }
// }

// /* FOR BUTTON 'Kupuję i płacę' IN BASKET */

// // Hanlde for button in basket
// const buyBtn = document.getElementById("pay");
// // Added event handler to this button
// buyBtn.addEventListener("click", buyAction);

// // Function after click button buyBtn
// function buyAction(e) {
//   e.preventDefault();
//   /* Tutaj ma nastąpić wyświetlenie podsumowania koszyka i wyświetenie wiadomości pozakupowej */
//   console.log("Bought!");
// }

// /* CONNECTION WITH DATA IN JSON FILE */
// function connectWithData() {
//   // fetch(dataJson, {
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //     Accept: "application/json"
//   //   }
//   // })
//   //   .then(resp => resp.json())
//   //   .then(json => console.log(json))
//   //   .catch(err => console.log(err));

//   fetch("./../database.json")
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       // Work with JSON data here
//       console.log(data);
//     })
//     .catch(err => {
//       // Do something for an error here
//       console.log("Error Reading data " + err);
//     });
// }
// connectWithData();
