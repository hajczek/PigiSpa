// bookings.js
import $ from "jquery";

export const bookings = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Bookings</h1>`);
  const slogan = $(`<p>Zabukuj coś ...</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
