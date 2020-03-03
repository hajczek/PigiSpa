// nav.js
import $ from "jquery";
import { routes } from "../router";
import { navItem } from "./index";

export const nav = () => {
  const fragment = $(new DocumentFragment());

  const navBar = $(`<ul id="menu-list"></ul>`);

  // Add li elements to ul element - route take from navItem component
  const navBarItems = routes.map(route => navItem(route));

  navBar.append(navBarItems);

  fragment.append(navBar);

  return fragment;
};
