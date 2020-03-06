import {
  home,
  bookings,
  rooms,
  treatments,
  login,
  registration,
  afterRegister,
  afterLogin
} from "../views";

// Routes in project
export const routes = [
  { name: "Home", path: "/", component: home, data: { display: "none" } },
  {
    name: "After Register",
    path: "/after-register",
    component: afterRegister,
    data: { display: "none" }
  },
  {
    name: "After Login",
    path: "/after-login",
    component: afterLogin,
    data: { display: "none" }
  },
  {
    name: "Pokoje",
    path: "/rooms",
    component: rooms,
    // data: { "data-type": "user" }
    data: { visibility: "hidden" }
  },
  {
    name: "Zabiegi",
    path: "/treatments",
    component: treatments,
    // data: { "data-type": "user" }
    data: { visibility: "hidden" }
  },
  {
    name: "Bookings",
    path: "/bookings",
    component: bookings,
    data: { display: "none" }
  },
  {
    name: "Logowanie",
    path: "/login",
    component: login,
    // data: { "data-type": "all" }
    data: { visibility: "visible" }
  },
  {
    name: "Rejestracja",
    path: "/registration",
    component: registration,
    // data: { "data-type": "all" }
    data: { visibility: "visible" }
  }
];
