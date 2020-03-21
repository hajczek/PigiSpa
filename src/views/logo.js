import $ from "jquery";
import PigiLogo from "./../assets/img/pigiSpaLogo.png";

export const logo = () => {
  const fragment = $(new DocumentFragment());

  // Define needed html elements
  const html = $(`<a href="./" id="logo"></a>`);
  const logoImg = new Image();
  logoImg.src = PigiLogo;

  // Display all elements on page
  fragment.append(html);
  html.append(logoImg);

  return html;
};
