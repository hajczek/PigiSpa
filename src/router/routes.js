import {
  home,
  bookings,
  rooms,
  room,
  treatments,
  treatment,
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
    name: "Pokój",
    path: "/room",
    component: room,
    data: {}
  },
  {
    name: "Zabiegi",
    path: "/treatments",
    component: treatments,
    data: { "data-type": "user" }
  },
  {
    name: "Zabieg",
    path: "/treatment",
    component: treatment,
    data: {}
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

// Strona wejściowa - Home
// Logowanie
// Rejestracja
// Pokoje - Rooms
// Zabiegi - Treatments
// Pokój
// Zabieg
// Po rejestracji
// Po zalogowaniu
// Po zakupie
// Zamówienia - Bookings?
