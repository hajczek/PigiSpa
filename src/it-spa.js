import { Router, routes } from "./router";
import $ from "jquery";

// Code for Router
const main = $("main");
const router = new Router(routes);

// Element main is our outlet for our views
router.mount(main);

// For special paths in browser
router.init();
