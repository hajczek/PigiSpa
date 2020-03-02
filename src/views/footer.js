import $ from "jquery";
import PigiLogoSmall from "./../assets/img/pigiSpa-logo-footer.png";

export const footer = () => {
  // const fragment = $(new DocumentFragment());
  const footer = $(`<footer><a href="./" id="logo-small"></a></footer>`);
  const logoImg = new Image();
  logoImg.src = PigiLogoSmall;
  footer.find("a").append(logoImg);

  return footer;
};
