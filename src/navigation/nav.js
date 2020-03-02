// nav.js
import $ from "jquery";
import { routes } from "../router";
import { navItem } from "./nav-item";

export const nav = () => {
  const fragment = $(new DocumentFragment());

  // Main navbar
  // const navBar = $(
  //   `<nav><a href="#" id="login">Logowanie</a> | <a href="#" id="register">Rejestracja</a></nav>`
  // );

  // Navbar from lesson
  const navBar = $(`<nav></nav>`);

  // Add li elements to ul element - route take from navItem component
  const navBarItems = routes.map(route => navItem(route));

  navBar.append(navBarItems);

  // Main code
  // let ul = document.getElementsByTagName("ul");
  // const { items } = navbarItems;
  // for (const rout in items) {
  //   console.log(rout.name, rout.path);
  //   let li = `<li><a href="${rout.path}">${rout.name}</a></li>`;
  //   ul.append(li);
  // }

  fragment.append(navBar);

  return fragment;
};
