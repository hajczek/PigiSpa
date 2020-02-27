// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/bundle.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./src/it-spa.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./src/assets/img/pigiSpa-logo-footer.png":
  /*!************************************************!*\
    !*** ./src/assets/img/pigiSpa-logo-footer.png ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsImgPigiSpaLogoFooterPng(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"pigiSpa-logo-footer.png\");\n\n//# sourceURL=webpack:///./src/assets/img/pigiSpa-logo-footer.png?");
    /***/
  },

  /***/
  "./src/assets/img/pigiSpaLogo.png":
  /*!****************************************!*\
    !*** ./src/assets/img/pigiSpaLogo.png ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAssetsImgPigiSpaLogoPng(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"pigiSpaLogo.png\");\n\n//# sourceURL=webpack:///./src/assets/img/pigiSpaLogo.png?");
    /***/
  },

  /***/
  "./src/it-spa.js":
  /*!***********************!*\
    !*** ./src/it-spa.js ***!
    \***********************/

  /*! no exports provided */

  /***/
  function srcItSpaJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_img_pigiSpaLogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img/pigiSpaLogo.png */ \"./src/assets/img/pigiSpaLogo.png\");\n/* harmony import */ var _assets_img_pigiSpa_logo_footer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/pigiSpa-logo-footer.png */ \"./src/assets/img/pigiSpa-logo-footer.png\");\n\n // Create logo in header\n\nvar logo = new Image();\nlogo.src = _assets_img_pigiSpaLogo_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\ndocument.querySelector(\"#logo\").appendChild(logo); // Create logo in footer\n\nvar logoFooter = new Image();\nlogoFooter.src = _assets_img_pigiSpa_logo_footer_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\ndocument.querySelector(\"#logo-small\").appendChild(logoFooter); // FOR REGISTER FORM\n// Handle for register form\n\nvar email = document.getElementById(\"email\"); // Handle for input with password\n\nvar pas = document.getElementById(\"pass\"); // Handle for input with repeat password\n\nvar pasRepeat = document.getElementById(\"pass-repeat\"); // Handle for info about not the same password and repeat password\n\nvar infoErr = document.getElementById(\"info-err\"); // Handle for register button\n\nvar registerBtn = document.getElementById(\"register-btn\"); // Handle for sign the strongest of password\n\nvar weak = document.querySelector(\".weak\");\nvar average = document.querySelector(\".average\");\nvar strong = document.querySelector(\".strong\"); // Add event when text is put on input fields\n\nemail ? email.addEventListener(\"input\", registerUser) : false;\npas ? pas.addEventListener(\"input\", registerUser) : false;\n\nfunction registerUser(e) {\n  e.preventDefault(); // Check if inputs are not empty\n\n  if (email.value !== \"\" && pas.value !== \"\") {\n    // Set color for weaknes password\n    console.log(\"it work\");\n    weak.style.backgroundColor = \"#f504d5\";\n  } // Check if password has length 8 and one capital letter\n\n\n  if (/(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test(pas.value)) {\n    // If yes, set color for average password\n    average.style.backgroundColor = \"yellow\";\n  } // Check if password has length 12 and one capital letter and one digit\n\n\n  if (/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{12,}/.test(pas.value)) {\n    // If yes, set color for strong password\n    strong.style.backgroundColor = \"greenyellow\";\n  }\n} // Add event when button exist and is clicked\n\n\nregisterBtn ? registerBtn.addEventListener(\"click\", sendForm) : false;\n\nfunction sendForm(e) {\n  e.preventDefault(); // Check if password and repeat-password are the same\n\n  if (email.value !== \"\" && pass.value === pasRepeat.value) {\n    console.log(\"Zapisz dane w bazie\");\n    /* Tutaj ma nastąpić przekierowanie na stronę z wiadomością po zarejeestrowaniu */\n\n    /* Tutaj ma też nastąpić zapis danych zarejestrowanego użytkownika do bazy */\n    // Clear input fields value\n\n    email.value = \"\";\n    pass.value = \"\";\n    pasRepeat.value = \"\";\n  } else {\n    infoErr.innerHTML = \"Hasła są różne. Wprowadź do obu pól takie same hasła.\";\n    infoErr.style.backgroundColor = \"rgba(255, 255, 255, 0.5)\"; // Hide box with info after 3 minutes\n\n    setTimeout(function () {\n      infoErr.style.display = \"none\";\n    }, 3000);\n    console.log(pas.value);\n    console.log(pasRepeat.value);\n    console.log(infoErr.value === pasRepeat.value);\n  }\n}\n/* FOR LOGIN FORM */\n// Handle for input with login email\n\n\nvar emailLog = document.getElementById(\"email-login\"); // Handle for input with login password\n\nvar passLog = document.getElementById(\"pass-login\"); // Handle for login button\n\nvar loginBtn = document.getElementById(\"login-btn\"); // Add event when button exist and is clicked\n\nloginBtn ? loginBtn.addEventListener(\"click\", logIn) : false;\n\nfunction logIn(e) {\n  e.preventDefault();\n\n  if (emailLog.value === \"\" && passLog.value === \"\") {\n    infoErr.innerHTML = \"Nie wpisałeś loginu i hasła. Wprowadź poprawne dane.\";\n    infoErr.style.backgroundColor = \"rgba(255, 255, 255, 0.5)\"; // Hide box with info after 3 minutes\n\n    setTimeout(function () {\n      infoErr.style.display = \"none\";\n    }, 3000);\n  } else {\n    console.log(\"Zalogowano\");\n    /* Tutaj ma nastąpić sprawdzenie, czy podany login i hasło są w bazie */\n\n    /* Tutaj ma nastąpić przekierowanie do strony z wiadomością powitalną po zalogowaniu i widokiem pustego koszyka */\n  }\n}\n/* FOR DISPLAY LIST OF TREATMENTS AFTER CLICK IN MENU POSITION 'Zabiegi' */\n// Handle for button in menu 'Zabiegi'\n\n\nvar treatmentsMenuBtn = document.getElementById(\"treatments\"); // Add event when link in menu 'Zabiegi' is clicked\n\ntreatmentsMenuBtn ? treatmentsMenuBtn.addEventListener(\"click\", displayTreatmentsList) : false;\n\nfunction displayTreatmentsList(e) {\n  e.preventDefault();\n  /* Tutaj trzeba wykonać iterację po elementach z bazy z tablicy 'treatments' i wyświetlić nazwy wszyskich zabiegów w postaci listy w boxie */\n\n  /* Tutaj ma się też wyświetlić koszyk */\n\n  console.log(\"Kliknięto w pozycję Zabiegi\");\n}\n/* FOR DIPSPLAY BOX WITH TREATMENT DESCRIPTION AFTER CLICKED TITLE OF TREATMENT ON LIST */\n// Handle for list with treatments\n\n\nvar treatmentsList = document.getElementById(\"treatments-list\"); // Add event when one position on list is clicked\n\ntreatmentsList ? treatmentsList.addEventListener(\"click\", openTreatmentBox) : false;\n\nfunction openTreatmentBox(e) {\n  e.preventDefault();\n  /* Tutaj ma nastąpić przekierowanie na stronę z opisem klikniętej usługi */\n\n  /* 'e.target.childNodes.item(0).nodeValue' to 'name' usługi w bazie - trzeba ją wykorzystać przy generowaniu boxa z opisem usługi */\n\n  /* Tutaj ma się też wyświetlić koszyk */\n\n  console.log(e.target.childNodes.item(0).nodeValue);\n}\n/* FOR DISPLAY LIST OF ROOMS AFTER CLICK IN MENU POSITION 'Pokoje' */\n// Handle for button in menu 'Pokoje'\n\n\nvar roomsMenuBtn = document.getElementById(\"rooms\"); // Add event when link in menu 'Pokoje' is clicked\n\nroomsMenuBtn ? roomsMenuBtn.addEventListener(\"click\", displayRoomsList) : false;\n\nfunction displayRoomsList(e) {\n  e.preventDefault();\n  /* Tutaj trzeba wykonać iterację po elementach z bazy z tablicy 'rooms' i wyświetlić nazwy wszyskich pokojów w postaci listy w boxie */\n\n  /* Tutaj ma się też wyświetlić koszyk */\n\n  console.log(\"Kliknięto w pozycję Pokoje\");\n}\n/* FOR DISPLAY BOX WITH ROOM DESCRIPTION AFTER CLICKED TITLE OF ROOM ON LIST */\n// Handle for list with rooms\n\n\nvar roomsList = document.getElementById(\"rooms-list\"); // Add event when one position on list is clicked\n\nroomsList ? roomsList.addEventListener(\"click\", openRoomBox) : false;\n\nfunction openRoomBox(e) {\n  e.preventDefault();\n  /* Tutaj ma nastąpić przekierowanie na stronę z opisem klikniętego pokoju */\n\n  /* 'e.target.childNodes.item(0).nodeValue' to 'name' pokoju w bazie - trzeba ją wykorzystać przy generowaniu boxa z opisem pokoju */\n\n  /* Tutaj ma się też wyświetlić koszyk */\n\n  console.log(e.target.childNodes.item(0).nodeValue);\n}\n/* FOR ADD POSITION FROM BOX TO BASKET AFTER CLICKED BUTTON 'Wrzuć do kosza' ON TREATMENT BOX */\n// Handle for button on treatment box\n\n\nvar addTreatmentBtn = document.getElementById(\"add-treatment\"); // Add event after click button addTreatmentBtn\n\naddTreatmentBtn ? addTreatmentBtn.addEventListener(\"click\", addTreatmentToBasket) : false;\n\nfunction addTreatmentToBasket(e) {\n  e.preventDefault();\n  /* Tutaj ma nastąpić dodanie pozycji z boxa do koszyka - trzeba pobrać wszystkie dane potrzebne w koszyku o usłudze i wyświetlić je w koszyku*/\n  // Display name of treatment\n\n  var treatmentName = document.getElementById(\"title\").innerHTML;\n  console.log(treatmentName); // Display price of treatment\n\n  var treatmentPrice = parseInt(document.getElementById(\"treat-price\").innerHTML);\n  console.log(treatmentPrice); // Display number of treatment\n\n  var treatmentNum = document.getElementById(\"treatment-num\").value;\n  console.log(treatmentNum); // Calculate cost of treatment\n\n  var treatmentCost = treatmentPrice * treatmentNum;\n  console.log(treatmentCost);\n}\n/* FOR ADD POSITION FROM BOX TO BASKET AFTER CLICKED BUTTON 'Wrzuć do kosza' ON ROOM BOX */\n// Handle for button on room box\n\n\nvar addRoomBtn = document.getElementById(\"add-room\"); // Add event after click this button addRoomBtn\n\naddRoomBtn ? addRoomBtn.addEventListener(\"click\", addRoomToBasket) : false;\n\nfunction addRoomToBasket(e) {\n  e.preventDefault();\n  /* Tutaj ma nastąpić dodanie pozycji z boxa do koszyka - trzeba pobrać wszystkie dane potrzebne w koszyku o usłudze i wyświetlić je w koszyku */\n\n  /* Display name of room */\n\n  var roomName = document.getElementById(\"title\").innerHTML;\n  console.log(roomName);\n  /* Display term of arrival */\n\n  var roomFrom = new Date(document.getElementById(\"room-from\").value);\n  console.log(roomFrom);\n  /* Display term of departure */\n\n  var roomTo = new Date(document.getElementById(\"room-to\").value);\n  console.log(roomTo);\n  /* Display price of room */\n\n  var roomPrice = parseInt(document.getElementById(\"room-price\").innerHTML);\n  console.log(roomPrice);\n  /* Display num of rooms */\n\n  var roomNum = document.getElementById(\"room-num\").value;\n  /* Calculate number of days */\n\n  var numOfDays = parseInt((roomTo - roomFrom) / (24 * 3600 * 1000));\n  console.log(numOfDays);\n  /* Calculate cost of room */\n\n  var costOfRoom = numOfDays * roomPrice * roomNum;\n  console.log(costOfRoom);\n}\n/* FOR BUTTON 'remove' IN BASKET */\n// Handle for list of elements in basket\n\n\nvar inBasket = document.getElementById(\"basket-content\"); // Add event listener for every 'remove' element in each element on basket list\n\ninBasket.addEventListener(\"click\", removeFromBasket); // Handle for all cost of things in basket\n\nvar allCostInBasket = document.getElementById(\"all-cost\"); // Function for remove element from basket after click trash button\n\nfunction removeFromBasket(e) {\n  e.preventDefault();\n  /* Remove element from basket list after trash btn of this element was clicked  */\n\n  if (event.target.className === \"remove\") {\n    e.target.parentElement.remove();\n    /* Subtract cost of remove element from all cost in basket */\n    // Handle for price of remove element\n\n    var elementPrice = parseInt(e.target.previousSibling.previousElementSibling.innerHTML); // Handke for actual all cost in basket\n\n    var actuallCostInBasket = parseInt(allCostInBasket.innerHTML); // Handle for new cost in basket, after remove element\n\n    var newAllCostInBasket = actuallCostInBasket - elementPrice; // Put new cost in basket (after remove element) as an all cost in basket\n\n    allCostInBasket.innerHTML = newAllCostInBasket;\n\n    if (allCostInBasket.innerHTML === \"0\") {\n      document.querySelector(\".summary-text\").innerHTML = \"Załaduj coś do koszyka!\";\n      /* Tutaj ma się wyświetlać slogan z kosza */\n    }\n  }\n}\n/* FOR INPUT WITH 'quant' IN BASKET to change number of elements*/\n// Add event listener for every 'quant' element in each element on basket list\n\n\ninBasket.addEventListener(\"click\", changeQuantOfElement);\n/* Function for change quantity of element */\n\nfunction changeQuantOfElement(e) {\n  e.preventDefault();\n\n  if (event.target.className === \"quant\") {\n    console.log(e.target.value);\n    /* Tutaj trzeba obliczyć nową cenę odpowiadającą ilości elementów - quant.value * priceOfElelemt */\n\n    var newQuantOfElement = e.target.value; // Handle for actual price of element - tutaj trzeba pobrać cenę elementu z bazy\n    // let priceOfElement = ...\n    // Calculate a new price of element\n\n    var newPriceOfElement = newQuantOfElement * priceOfElement; // Define element which display price of element on basket\n\n    var displayPrice = e.target.nextElementSibling;\n    displayPrice.innerHTML = newPriceOfElement;\n  }\n}\n/* FOR BUTTON 'Kupuję i płacę' IN BASKET */\n// Hanlde for button in basket\n\n\nvar buyBtn = document.getElementById(\"pay\"); // Added event handler to this button\n\nbuyBtn.addEventListener(\"click\", buyAction); // Function after click button buyBtn\n\nfunction buyAction(e) {\n  e.preventDefault();\n  /* Tutaj ma nastąpić wyświetlenie podsumowania koszyka i wyświetenie wiadomości pozakupowej */\n\n  console.log(\"Bought!\");\n}\n/* CONNECTION WITH DATA IN JSON FILE */\n\n\nfunction connectWithData() {\n  // fetch(dataJson, {\n  //   headers: {\n  //     \"Content-Type\": \"application/json\",\n  //     Accept: \"application/json\"\n  //   }\n  // })\n  //   .then(resp => resp.json())\n  //   .then(json => console.log(json))\n  //   .catch(err => console.log(err));\n  fetch(\"./../database.json\").then(function (response) {\n    console.log(response);\n    return response.json();\n  }).then(function (data) {\n    // Work with JSON data here\n    console.log(data);\n  })[\"catch\"](function (err) {\n    // Do something for an error here\n    console.log(\"Error Reading data \" + err);\n  });\n}\n\nconnectWithData();\n\n//# sourceURL=webpack:///./src/it-spa.js?");
    /***/
  }
  /******/

});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56864" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","dist/bundle.js"], null)
//# sourceMappingURL=/bundle.1715513c.js.map