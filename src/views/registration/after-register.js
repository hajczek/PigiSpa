import $ from "jquery";

export const afterRegister = () => {
  const fragment = $(new DocumentFragment());

  // Define needed html elements
  const box = $(`<div class="welcome-box-after-register"></div>`);
  const text = $(
    `<p>Zostałeś zarejestrowany.<br>Logując się uzyskasz dostęp do usług <b>PigiSPa</b> :)</p>`
  );

  // Display defined elements on page
  fragment.append(box);
  box.append(text);

  return fragment;
};
