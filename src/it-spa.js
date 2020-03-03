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

activateRegisterForm();

/********** MAIN CODE ***************/

// /* FOR LOGIN FORM */
// // Handle for input with login email
// const emailLog = document.getElementById("email-login");
// // Handle for input with login password
// const passLog = document.getElementById("pass-login");
// // Handle for login button
// const loginBtn = document.getElementById("login-btn");
// // Add event when button exist and is clicked
// loginBtn ? loginBtn.addEventListener("click", logIn) : false;

// function logIn(e) {
//   e.preventDefault();
//   if (emailLog.value === "" && passLog.value === "") {
//     infoErr.innerHTML = "Nie wpisałeś loginu i hasła. Wprowadź poprawne dane.";
//     infoErr.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
//     // Hide box with info after 3 minutes
//     setTimeout(() => {
//       infoErr.style.display = "none";
//     }, 3000);
//   } else {
//     console.log("Zalogowano");
//     /* Tutaj ma nastąpić sprawdzenie, czy podany login i hasło są w bazie */
//     /* Tutaj ma nastąpić przekierowanie do strony z wiadomością powitalną po zalogowaniu i widokiem pustego koszyka */
//   }
// }

// /* FOR DISPLAY LIST OF TREATMENTS AFTER CLICK IN MENU POSITION 'Zabiegi' */

// // Handle for button in menu 'Zabiegi'
// let treatmentsMenuBtn = document.getElementById("treatments");
// // Add event when link in menu 'Zabiegi' is clicked
// treatmentsMenuBtn
//   ? treatmentsMenuBtn.addEventListener("click", displayTreatmentsList)
//   : false;

// function displayTreatmentsList(e) {
//   e.preventDefault();

//   /* Tutaj trzeba wykonać iterację po elementach z bazy z tablicy 'treatments' i wyświetlić nazwy wszyskich zabiegów w postaci listy w boxie */
//   /* Tutaj ma się też wyświetlić koszyk */
//   console.log("Kliknięto w pozycję Zabiegi");
// }

// /* FOR DIPSPLAY BOX WITH TREATMENT DESCRIPTION AFTER CLICKED TITLE OF TREATMENT ON LIST */

// // Handle for list with treatments
// const treatmentsList = document.getElementById("treatments-list");
// // Add event when one position on list is clicked
// treatmentsList
//   ? treatmentsList.addEventListener("click", openTreatmentBox)
//   : false;

// function openTreatmentBox(e) {
//   e.preventDefault();

//   /* Tutaj ma nastąpić przekierowanie na stronę z opisem klikniętej usługi */
//   /* 'e.target.childNodes.item(0).nodeValue' to 'name' usługi w bazie - trzeba ją wykorzystać przy generowaniu boxa z opisem usługi */
//   /* Tutaj ma się też wyświetlić koszyk */
//   console.log(e.target.childNodes.item(0).nodeValue);
// }

// /* FOR DISPLAY LIST OF ROOMS AFTER CLICK IN MENU POSITION 'Pokoje' */

// // Handle for button in menu 'Pokoje'
// let roomsMenuBtn = document.getElementById("rooms");
// // Add event when link in menu 'Pokoje' is clicked
// roomsMenuBtn ? roomsMenuBtn.addEventListener("click", displayRoomsList) : false;

// function displayRoomsList(e) {
//   e.preventDefault();

//   /* Tutaj trzeba wykonać iterację po elementach z bazy z tablicy 'rooms' i wyświetlić nazwy wszyskich pokojów w postaci listy w boxie */
//   /* Tutaj ma się też wyświetlić koszyk */
//   console.log("Kliknięto w pozycję Pokoje");
// }

// /* FOR DISPLAY BOX WITH ROOM DESCRIPTION AFTER CLICKED TITLE OF ROOM ON LIST */

// // Handle for list with rooms
// const roomsList = document.getElementById("rooms-list");
// // Add event when one position on list is clicked
// roomsList ? roomsList.addEventListener("click", openRoomBox) : false;

// function openRoomBox(e) {
//   e.preventDefault();

//   /* Tutaj ma nastąpić przekierowanie na stronę z opisem klikniętego pokoju */
//   /* 'e.target.childNodes.item(0).nodeValue' to 'name' pokoju w bazie - trzeba ją wykorzystać przy generowaniu boxa z opisem pokoju */
//   /* Tutaj ma się też wyświetlić koszyk */
//   console.log(e.target.childNodes.item(0).nodeValue);
// }

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

// /* FOR BUTTON 'remove' IN BASKET */

// // Handle for list of elements in basket
// const inBasket = document.getElementById("basket-content");
// // Add event listener for every 'remove' element in each element on basket list
// inBasket.addEventListener("click", removeFromBasket);

// // Handle for all cost of things in basket
// const allCostInBasket = document.getElementById("all-cost");

// // Function for remove element from basket after click trash button
// function removeFromBasket(e) {
//   e.preventDefault();

//   /* Remove element from basket list after trash btn of this element was clicked  */
//   if (event.target.className === "remove") {
//     e.target.parentElement.remove();

//     /* Subtract cost of remove element from all cost in basket */
//     // Handle for price of remove element
//     const elementPrice = parseInt(
//       e.target.previousSibling.previousElementSibling.innerHTML
//     );
//     // Handke for actual all cost in basket
//     let actuallCostInBasket = parseInt(allCostInBasket.innerHTML);
//     // Handle for new cost in basket, after remove element
//     let newAllCostInBasket = actuallCostInBasket - elementPrice;
//     // Put new cost in basket (after remove element) as an all cost in basket
//     allCostInBasket.innerHTML = newAllCostInBasket;

//     if (allCostInBasket.innerHTML === "0") {
//       document.querySelector(".summary-text").innerHTML =
//         "Załaduj coś do koszyka!";
//       /* Tutaj ma się wyświetlać slogan z kosza */
//     }
//   }
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
