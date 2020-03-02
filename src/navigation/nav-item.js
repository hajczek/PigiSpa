// nav-item.js
import $ from "jquery";

// Complete information about route element
export const navItem = route => {
  const a = $(`<a>${route.name}</a>`);

  a.on("click", event => {
    // We don't want refresh page!!!
    event.preventDefault();
    // emition of event
    a.trigger("routechange", { path: route.path });
  });

  return a;
};