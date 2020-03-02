// header.js

import $ from "jquery";
import { logo } from "./logo";
import { nav } from "./../navigation/nav";

export const header = () => {
  // const fragment = $(new DocumentFragment());
  const logoPigiSpa = logo;
  const header = $(`<header><nav></nav></header>`);
  header
    .append(logoPigiSpa)
    .find("nav")
    .append(nav);
  console.log(nav);

  return header;
};
