import $ from "jquery";
import { logo } from "./logo";
import { nav } from "./../navigation/index";
import { displayUserMenu } from "./../common/index";

export const header = () => {
  // const fragment = $(new DocumentFragment());
  const logoPigiSpa = logo;
  const header = $(`<header><nav></nav></header>`);

  displayUserMenu();

  header
    .append(logoPigiSpa)
    .find("nav")
    .append(nav);
  return header;
};
