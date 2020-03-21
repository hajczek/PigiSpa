import $ from "jquery";

export const afterLogin = () => {
  const fragment = $(new DocumentFragment());
  // Define needed html elements
  const box = $(`<div class="box-after-login"></div>`);
  const boxWelcome = $(`<div class="welcome-box-after-login"></div>`);
  const title = $(`<h2>Witaj w PigiSpa!</h2>`);
  const text = $(
    `<p>Wybierz ulubione zabiegi i zarezerwuj pokój w dogodnym terminie.
    Nasze świnki z PigiSpa już na Ciebie czekają ;)</p>
</div>`
  );

  // Display defined html elements on page
  fragment.append(box);
  box.append(boxWelcome);
  boxWelcome.append(title).append(text);

  return fragment;
};
