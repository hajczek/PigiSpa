import {
  // afterRegister,
  // afterLogin,
  // afterPurchase,
  home,
  rooms,
  treatments,
  login,
  registration
} from "../views";

// Routes in project
export const routes = [
  { name: "Home", path: "/", component: home, data: { display: "none" } },
  // {
  //   name: "After Register",
  //   path: "/after-register",
  //   component: afterRegister,
  //   data: { display: "none" }
  // },
  // {
  //   name: "After Login",
  //   path: "/after-login",
  //   component: afterLogin,
  //   data: { display: "none" }
  // },
  // {
  //   name: "After Purchase",
  //   path: "/after-purchase",
  //   component: afterPurchase,
  //   data: { display: "none" }
  // },
  {
    name: "Pokoje",
    path: "/rooms",
    component: rooms,
    data: { visibility: "hidden" }
  },
  {
    name: "Zabiegi",
    path: "/treatments",
    component: treatments,
    data: { visibility: "hidden" }
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
