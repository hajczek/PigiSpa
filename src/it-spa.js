import { Router, routes } from "./router";
import $ from "jquery";

// Code for Router
const main = $("main");
const router = new Router(routes);

// Element main is our outlet for our views
router.mount(main);

// For special paths in browser
router.init();

/********** MAIN CODE ***************/

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
