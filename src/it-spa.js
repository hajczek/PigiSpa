import { registration } from "./views/registration.js";
import PigiLogo from "./assets/img/pigiSpaLogo.png";

let logo = new Image();
logo.src = PigiLogo;
document.querySelector("#logo").appendChild(logo);

console.log(registration());
