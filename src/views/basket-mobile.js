import $ from "jquery";
import basketImg from "./../assets/img/basket.png";

/**
 * Define basket icon for mobile devices
 */
export const basketMobile = () => {
  const fragment = $(new DocumentFragment());

  // Define needed html elements
  const html = $(`<a href="./" id="basket-mobile"></a>`);
  const basketImage = new Image();
  basketImage.src = basketImg;

  // Define action for display basket on mobile device
  html.on("click", function(e) {
    $(`.basket-box`).css("display", "flex");
    e.preventDefault();
  });

  // Display all elements on page
  fragment.append(html);
  html.append(basketImage);

  return html;
};
