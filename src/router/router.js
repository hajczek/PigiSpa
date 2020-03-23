import $ from "jquery";
import { notFound } from "./../views/not-found";

/** Class representing Router. */
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.outlet;
    // Listen all events in body
    this.body = $(document.body);
  }

  mount(outlet) {
    this.outlet = outlet;
    // Listen for event
    this.body.on("routechange", (event, detail) => {
      const { path } = detail;
      this.navigate(path);
    });
  }

  init() {
    const path = location.pathname;
    this.navigate(path);
  }

  get(path) {
    // Find rout with special path or return undefined
    return this.routes.find(route => route.path === path);
  }

  has(path) {
    // Check if path is existing in app
    return this.get(path) !== undefined;
  }

  navigate(path, data = {}) {
    if (this.has(path)) {
      // Service for exisitng path
      // Use resctucturization for take one object
      const { component } = this.get(path);
      const html = component();

      // Render new view from component: first clear, next append
      this.outlet.empty().append(html);
    } else {
      // Service for not existing path
      const html = notFound();
      this.outlet.empty().append(html);
    }

    history.pushState(data, "", path);
  }
}
