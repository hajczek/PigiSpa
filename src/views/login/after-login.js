// after-login.js

import $ from "jquery";
import { header, footer } from "../index";

export const afterLogin = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="box-after-login"></div>`);
  const boxWelcome = $(`<div class="welcome-box-after-login"></div>`);
  const title = $(`<h2>Witaj w PigiSpa!</h2>`);
  const text = $(
    `<p>Wybierz ulubione zabiegi i zarezerwuj pokój w dogodnym terminie.
    Nasze świnki z PigiSpa już na Ciebie czekają ;)</p>
</div>`
  );

  fragment.append(box);
  box.append(boxWelcome);
  boxWelcome.append(title).append(text);

  return fragment;
};
