// treatments.js

import $ from "jquery";

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Zabiegi</h1>`);
  const slogan = $(`<p>Nasze zabiegi ...</p>`);

  fragment.append(h1).append(slogan);

  return fragment;
};
