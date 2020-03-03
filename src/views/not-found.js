// not-found.js

import $ from "jquery";
import { header, footer } from "./index";

export const notFound = () => {
  const fragment = $(new DocumentFragment());

  const html = header();
  const slogan = $(
    `<p class="slogan">Strona z takim adresem nie istnieje :(</p>`
  );

  fragment
    .append(html)
    .append(slogan)
    .append(footer);

  return fragment;
};
