import $ from "jquery";
import { header, footer } from "./index";

/**
 * Define home page
 */
export const home = () => {
  const fragment = $(new DocumentFragment());

  // Define needed html elements
  const html = header();
  const slogan = $(
    `<p class="slogan"><span class="pink">PigiSpa</span> zaprasza przepracowanych Front-End Developerów na zabiegi SPA!</p>`
  );

  // Display all elements on page
  fragment
    .append(html)
    .append(slogan)
    .append(footer);

  return fragment;
};
