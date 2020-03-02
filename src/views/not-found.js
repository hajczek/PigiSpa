// not-found.js

import $ from "jquery";

export const notFound = () => {
  const fragment = $(new DocumentFragment());

  const h1 = $(`<h1>Nie ma takiej strony</h1>`);

  fragment.append(h1);

  return fragment;
};
