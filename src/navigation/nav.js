import $ from "jquery";
import { routes } from "../router";
import { navItem } from "./index";

/**
 * @description Define navigation for page
 */
export const nav = () => {
  const fragment = $(new DocumentFragment());

  // Define navbar
  const navBar = $(`<ul id="menu-list"></ul>`);

  // Add li elements to ul element - route take from navItem component
  const navBarItems = routes.map(route => navItem(route));
  navBar.append(navBarItems);

  // Display navbar on page
  fragment.append(navBar);

  return fragment;
};
