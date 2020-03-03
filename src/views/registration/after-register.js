// after-register.js
import $ from "jquery";

export const afterRegister = () => {
  const fragment = $(new DocumentFragment());
  const box = $(`<div class="welcome-box-after-register"></div>`);
  const text = $(
    `<p>Zostałeś zarejestrowany.<br>Logując się uzyskasz dostęp do usług <b>PigiSPa</b> :)</p>`
  );

  fragment.append(box);
  box.append(text);

  return fragment;
};
