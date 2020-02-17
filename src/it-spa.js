import PigiLogo from "./assets/img/pigiSpaLogo.png";
import PigiLogoSmall from "./assets/img/pigiSpa-logo-footer.png";

// Create logo in header
const logo = new Image();
logo.src = PigiLogo;
document.querySelector("#logo").appendChild(logo);

// Create logo in footer
const logoFooter = new Image();
logoFooter.src = PigiLogoSmall;
document.querySelector("#logo-small").appendChild(logoFooter);

// FOR REGISTER FORM

// Handle for register form
const email = document.getElementById("email");
// Handle for input with password
const pas = document.getElementById("pass");
// Handle for input with repeat password
const pasRepeat = document.getElementById("pass-repeat");
// Handle for info about not the same password and repeat password
const infoErr = document.getElementById("info-err");
// Handle for register button
const registerBtn = document.getElementById("register-btn");

// Handle for sign the strongest of password
const weak = document.querySelector(".weak");
const average = document.querySelector(".average");
const strong = document.querySelector(".strong");

// Add event when text is put on input fields
email ? email.addEventListener("input", registerUser) : false;
pas ? pas.addEventListener("input", registerUser) : false;

function registerUser(e) {
  e.preventDefault();
  // Check if inputs are not empty
  if (email.value !== "" && pas.value !== "") {
    // Set color for weaknes password
    console.log("it work");
    weak.style.backgroundColor = "#f504d5";
  }

  // Check if password has length 8 and one capital letter
  if (/(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test(pas.value)) {
    // If yes, set color for average password
    average.style.backgroundColor = "yellow";
  }

  // Check if password has length 12 and one capital letter and one digit
  if (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{12,}/.test(pas.value)) {
    // If yes, set color for strong password
    strong.style.backgroundColor = "greenyellow";
  }
}

// Add event when button exist and is clicked
registerBtn ? registerBtn.addEventListener("click", sendForm) : false;

function sendForm(e) {
  e.preventDefault();
  // Check if password and repeat-password are the same
  if (email.value !== "" && pass.value === pasRepeat.value) {
    console.log("Zapisz dane w bazie");
    /* Tutaj ma nastąpić przekierowanie na stronę z wiadomością po zarejeestrowaniu */
    /* Tutaj ma też nastąpić zapis danych zarejestrowanego użytkownika do bazy */
    // Clear input fields value
    email.value = "";
    pass.value = "";
    pasRepeat.value = "";
  } else {
    infoErr.innerHTML = "Hasła są różne. Wprowadź do obu pól takie same hasła.";
    infoErr.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    // Hide box with info after 3 minutes
    setTimeout(() => {
      infoErr.style.display = "none";
    }, 3000);
    console.log(pas.value);
    console.log(pasRepeat.value);
    console.log(infoErr.value === pasRepeat.value);
  }
}

/* FOR LOGIN FORM */
// Handle for input with login email
const emailLog = document.getElementById("email-login");
// Handle for input with login password
const passLog = document.getElementById("pass-login");
// Handle for login button
const loginBtn = document.getElementById("login-btn");
// Add event when button exist and is clicked
loginBtn ? loginBtn.addEventListener("click", logIn) : false;

function logIn(e) {
  e.preventDefault();
  if (emailLog.value === "" && passLog.value === "") {
    infoErr.innerHTML = "Nie wpisałeś loginu i hasła. Wprowadź poprawne dane.";
    infoErr.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    // Hide box with info after 3 minutes
    setTimeout(() => {
      infoErr.style.display = "none";
    }, 3000);
  } else {
    console.log("Zalogowano");
    /* Tutaj ma nastąpić sprawdzenie, czy podany login i hasło są w bazie */
    /* Tutaj ma nastąpić przekierowanie do strony z wiadomością powitalną po zalogowaniu i widokiem pustego koszyka */
  }
}

/* FOR DISPLAY LIST OF TREATMENTS AFTER CLICK IN MENU POSITION 'Zabiegi' */

// Handle for button in menu 'Zabiegi'
let treatmentsMenuBtn = document.getElementById("treatments");
// Add event when link in menu 'Zabiegi' is clicked
treatmentsMenuBtn
  ? treatmentsMenuBtn.addEventListener("click", displayTreatmentsList)
  : false;

function displayTreatmentsList(e) {
  e.preventDefault();

  /* Tutaj trzeba wykonać iterację po elementach z bazy z tablicy 'treatments' i wyświetlić nazwy wszyskich zabiegów w postaci listy w boxie */
  /* Tutaj ma się też wyświetlić koszyk */
  console.log("Kliknięto w pozycję Zabiegi");
}

/* FOR DIPSPLAY BOX WITH TREATMENT DESCRIPTION AFTER CLICKED TITLE OF TREATMENT ON LIST */

// Handle for list with treatments
const treatmentsList = document.getElementById("treatments-list");
// Add event when one position on list is clicked
treatmentsList
  ? treatmentsList.addEventListener("click", openTreatmentBox)
  : false;

function openTreatmentBox(e) {
  e.preventDefault();

  /* Tutaj ma nastąpić przekierowanie na stronę z opisem klikniętej usługi */
  /* 'e.target.childNodes.item(0).nodeValue' to 'name' usługi w bazie - trzeba ją wykorzystać przy generowaniu boxa z opisem usługi */
  /* Tutaj ma się też wyświetlić koszyk */
  console.log(e.target.childNodes.item(0).nodeValue);
}

/* FOR DISPLAY LIST OF ROOMS AFTER CLICK IN MENU POSITION 'Pokoje' */

// Handle for button in menu 'Pokoje'
let roomsMenuBtn = document.getElementById("rooms");
// Add event when link in menu 'Pokoje' is clicked
roomsMenuBtn ? roomsMenuBtn.addEventListener("click", displayRoomsList) : false;

function displayRoomsList(e) {
  e.preventDefault();

  /* Tutaj trzeba wykonać iterację po elementach z bazy z tablicy 'rooms' i wyświetlić nazwy wszyskich pokojów w postaci listy w boxie */
  /* Tutaj ma się też wyświetlić koszyk */
  console.log("Kliknięto w pozycję Pokoje");
}

/* FOR DISPLAY BOX WITH ROOM DESCRIPTION AFTER CLICKED TITLE OF ROOM ON LIST */

// Handle for list with rooms
const roomsList = document.getElementById("rooms-list");
// Add event when one position on list is clicked
roomsList ? roomsList.addEventListener("click", openRoomBox) : false;

function openRoomBox(e) {
  e.preventDefault();

  /* Tutaj ma nastąpić przekierowanie na stronę z opisem klikniętego pokoju */
  /* 'e.target.childNodes.item(0).nodeValue' to 'name' pokoju w bazie - trzeba ją wykorzystać przy generowaniu boxa z opisem pokoju */
  /* Tutaj ma się też wyświetlić koszyk */
  console.log(e.target.childNodes.item(0).nodeValue);
}

/* FOR ADD POSITION FROM BOX TO BASKET AFTER CLICKED BUTTON 'Wrzuć do kosza' ON TREATMENT BOX */

// Handle for button on treatment box
const addTreatmentBtn = document.getElementById("add-treatment");

// Add event after click button addTreatmentBtn
addTreatmentBtn
  ? addTreatmentBtn.addEventListener("click", addTreatmentToBasket)
  : false;

function addTreatmentToBasket(e) {
  e.preventDefault();

  /* Tutaj ma nastąpić dodanie pozycji z boxa do koszyka - trzeba pobrać wszystkie dane potrzebne w koszyku o usłudze i wyświetlić je w koszyku*/
  console.log("Added treatment to basket");
}

/* FOR ADD POSITION FROM BOX TO BASKET AFTER CLICKED BUTTON 'Wrzuć do kosza' ON ROOM BOX */

// Handle for button on room box
const addRoomBtn = document.getElementById("add-room");

// Add event after click this button addRoomBtn
addRoomBtn ? addRoomBtn.addEventListener("click", addRoomToBasket) : false;

function addRoomToBasket(e) {
  e.preventDefault();

  /* Tutaj ma nastąpić dodanie pozycji z boxa do koszyka - trzeba pobrać wszystkie dane potrzebne w koszyku o usłudze i wyświetlić je w koszyku */

  /* Display name of room */
  console.log(document.getElementById("title").innerHTML);
  /* Display term of arrival */
  console.log(document.getElementById("room-from").value);
  /* Display term of departure */
  console.log(document.getElementById("room-to").value);
}
