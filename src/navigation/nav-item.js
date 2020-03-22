import $ from "jquery";

/**
 * Generate links for menu
 * @param {Object} route Object with all details for link element
 */
export const navItem = route => {
  // Define li element for link
  const li = $(`<li></li>`);
  let styleKey;
  let styleVal;

  // Loop through route data to check the value
  for (let key in route.data) {
    // Set key and value of route in styleKey and styleVal variables
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
