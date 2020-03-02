// home.js

import $ from "jquery";

export const home = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Witaj w spa</h1>`);
  const slogan = $(
    `<p class="slogan"><span class="pink">PigiSpa</span> zaprasza przepracowanych Front-End Developerów na zabiegi SPA!</p>`
  );

  fragment.append(h1).append(slogan);

  return fragment;
};
