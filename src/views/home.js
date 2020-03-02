// home.js

import $ from "jquery";
import { header } from "./header";

export const home = () => {
  const fragment = $(new DocumentFragment());

  const html = header();
  const slogan = $(
    `<p class="slogan"><span class="pink">PigiSpa</span> zaprasza przepracowanych Front-End Developerów na zabiegi SPA!</p>`
  );

  fragment.append(html).append(slogan);

  return fragment;
};
