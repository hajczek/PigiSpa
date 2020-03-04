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
  { name: "Home", path: "/", component: home, data: {} },
  {
    name: "After Register",
    path: "/after-register",
    component: afterRegister,
    data: {}
  },
  {
    name: "After Login",
    path: "/after-login",
    component: afterLogin,
    data: {}
  },
  {
    name: "Pokoje",
    path: "/rooms",
    component: rooms,
    data: { "data-type": "user" }
  },
  {
    name: "Zabiegi",
    path: "/treatments",
    component: treatments,
    data: { "data-type": "user" }
  },
  {
    name: "Bookings",
    path: "/bookings",
    component: bookings,
    data: {}
  },
  {
    name: "Logowanie",
    path: "/login",
    component: login,
    data: { "data-type": "all" }
  },
  {
    name: "Rejestracja",
    path: "/registration",
    component: registration,
    data: { "data-type": "all" }
  }
];
