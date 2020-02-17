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
    /* Tutaj ma nastąpić przekierowanie do strony z wiadomością powitalną po zalogowaniu */
  }
}
