// logo.js

import $ from "jquery";
import PigiLogo from "./../assets/img/pigiSpaLogo.png";

export const logo = () => {
  // const fragment = $(new DocumentFragment());

  const html = $(`<a href="./" id="logo"></a>`);
  const logoImg = new Image();
  logoImg.src = PigiLogo;

  html.append(logoImg);

  return html;
};
