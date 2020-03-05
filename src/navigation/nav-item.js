// nav-item.js
import $ from "jquery";

// Complete information about route element
export const navItem = route => {
  // Check value of data/data-type of all elements

  const li = $(`<li></li>`);
  const a = $(`<a>${route.name}</a>`);

  for (let key in route.data) {
    let styleVal = route.data[key];
    if (!$(`#welcome-text`).length) {
      if (styleVal === "all") {
        a.on("click", event => {
          // We don't want refresh page!!!
          event.preventDefault();
          // emision of event
          a.trigger("routechange", {
            path: route.path
          });
        });
        li.append(a);
        return li;
      }
    } else {
      a.on("click", event => {
        // We don't want refresh page!!!
        event.preventDefault();
        // emision of event
        a.trigger("routechange", {
          path: route.path
        });
      });
      li.append(a);
      return li;
    }
  }
  console.log($(`#welcome-text`).show(), !$(`#welcome-text`).show());
};
