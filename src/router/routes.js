import {
  home,
  bookings,
  rooms,
  room,
  treatments,
  treatment,
  login,
  registration
} from "../views";

// Routes in project

export const routes = [
  { name: "Home", path: "/", component: home, data: {} },
  { name: "Rooms", path: "/rooms", component: rooms, data: {} },
  { name: "Room", path: "/room", component: room, data: {} },
  { name: "Treatments", path: "/treatments", component: treatments, data: {} },
  { name: "Treatment", path: "/treatment", component: treatment, data: {} },
  { name: "Bookings", path: "/bookings", component: bookings, data: {} },
  { name: "Login", path: "/login", component: login, data: {} },
  {
    name: "Rejestracja",
    path: "/registration",
    component: registration,
    data: {}
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
