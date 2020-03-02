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
    data: { display: "none" }
  },
  {
    name: "After Login",
    path: "/after-login",
    component: afterLogin,
    data: { display: "none" }
  },
  {
    name: "Rooms",
    path: "/rooms",
    component: rooms,
    data: { visibility: "hidden" }
  },
  {
    name: "Room",
    path: "/room",
    component: room,
    data: { display: "none" }
  },
  {
    name: "Treatments",
    path: "/treatments",
    component: treatments,
    data: { visibility: "hidden" }
  },
  {
    name: "Treatment",
    path: "/treatment",
    component: treatment,
    data: { display: "inline-block" }
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
    data: { visibility: "visible" }
  },
  {
    name: "Rejestracja",
    path: "/registration",
    component: registration,
    data: { visibility: "visible" }
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
