// menu.js

import $ from "jquery";
import { nav } from "./navigation/nav";

export const menu = () => {
  // const fragment = $(new DocumentFragment());
  menu.append(nav);

  return menu;
};
