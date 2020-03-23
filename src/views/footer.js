import $ from "jquery";
import PigiLogoSmall from "./../assets/img/pigiSpa-logo-footer.png";

/**
 * @description Define foter
 */
export const footer = () => {
  // Define all needed html elements
  const footer = $(`<footer><a href="./" id="logo-small"></a></footer>`);
  const logoImg = new Image();
  logoImg.src = PigiLogoSmall;

  // Display elements on page
  footer.find("a").append(logoImg);

  return footer;
};
