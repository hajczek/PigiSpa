// nav-item.js
import $ from "jquery";

// Complete information about route element
export const navItem = route => {
  // Define value for css style of each a element
  let styleKey;
  let styleVal;
  for (let key in route.data) {
    styleKey = key;
    styleVal = route.data[key];
  }

  const a = $(`<a style="${styleKey}: ${styleVal}">${route.name}</a>`);

  a.on("click", event => {
    // We don't want refresh page!!!
    event.preventDefault();
    // emision of event
    a.trigger("routechange", { path: route.path });
  });

  return a;
};
