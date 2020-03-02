// registration.js

import $ from "jquery";
import { header, footer, registrationForm } from "../index";

export const registration = () => {
  const fragment = $(new DocumentFragment());
  // const headerBox = header();
  const box = $(`<div class="registration-box"></div`);
  const title = $(`<h2>Wypełnij formularz</h2>`);
  const error = $(`<div id="info-err"></div>`);
  const form = registrationForm;

  fragment
    .append(header)
    .append(box)
    .append(footer);

  box
    .append(title)
    .append(error)
    .append(form);

  return fragment;
};
