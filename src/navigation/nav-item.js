import $ from "jquery";

// Complete information about route element
export const navItem = route => {
  // Check value of data/data-type of all elements

  const li = $(`<li></li>`);
  let styleKey;
  let styleVal;

  // Loop through route data to check the value
  for (let key in route.data) {
    styleKey = key;
    styleVal = route.data[key];
  }
  // Define link for each route
  const a = $(
    `<a class="menu-link" style="${styleKey}: ${styleVal}">${route.name}</a>`
  );
  // Add action to each 'a' element
  a.on("click", event => {
    // We don't want refresh page!!!
    event.preventDefault();
    // emision of event
    a.trigger("routechange", {
      path: route.path
    });
  });

  // Display defined links on page
  li.append(a);
  return li;
};
