import $ from "jquery";
import { logo } from "./logo";
import { nav } from "./../navigation/index";
import { displayUserMenu } from "./../common/index";

export const header = () => {
  // Define all html elements
  const logoPigiSpa = logo;
  const header = $(`<header><nav></nav></header>`);

  // Display user menu if user is logon
  displayUserMenu();

  // Display all elements on page
  header
    .append(logoPigiSpa)
    .find("nav")
    .append(nav);

  return header;
};
