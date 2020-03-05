// nav-item.js
import $ from "jquery";

// Complete information about route element
export const navItem = route => {
  // Check value of data/data-type of all elements

  const li = $(`<li></li>`);
  const a = $(`<a>${route.name}</a>`);

  // Add event to a element
  a.on("click", event => {
    // We don't want refresh page!!!
    event.preventDefault();
    // emision of event
    a.trigger("routechange", {
      path: route.path
    });
  });

  // Loop through route data to check the value
  for (let key in route.data) {
    // Check if on page is element with id '#welcome-text'
    if (!$(`#welcome-text`).length) {
      // If yes, find routes with data 'all' and display on page
      if (route.data[key] === "all") {
        li.append(a);
        return li;
      }
    } else {
      // If no, find routes with data 'user' and display on page
      if (route.data[key] === "user") {
        li.append(a);
        return li;
      }
    }
  }
};
