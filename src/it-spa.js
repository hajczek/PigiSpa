import { registration } from "./views/registration.js";
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

console.log(registration());
