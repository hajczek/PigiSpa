import $ from "jquery";
import { header, footer } from "./index";

/**
 * @description Define page for not found error
 */
export const notFound = () => {
  const fragment = $(new DocumentFragment());

  // Define all html elements
  const html = header();
  const slogan = $(
    `<p class="slogan">Strona z takim adresem nie istnieje :(</p>`
  );

  // Display all elements on page
  fragment
    .append(html)
    .append(slogan)
    .append(footer);

  return fragment;
};
