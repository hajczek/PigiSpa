// after-register.js

import $ from "jquery";
import { header, footer } from "../index";

export const afterRegister = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="welcome-box-after-register"></div>`);
  const text = $(
    `<p>Zostałeś zarejestrowany.<br>Logując się uzyskasz dostęp do usług <b>PigiSPa</b> :)</p>`
  );

  fragment
    .append(header)
    .append(box)
    .append(footer);

  box.append(text);

  return fragment;
};
