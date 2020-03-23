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

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  var r;
  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */

  !function (t, n) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e);
    } : n(t);
  }("undefined" != typeof window ? window : this, function (n, o) {
    "use strict";

    var i = [],
        a = n.document,
        s = Object.getPrototypeOf,
        u = i.slice,
        l = i.concat,
        c = i.push,
        p = i.indexOf,
        f = {},
        d = f.toString,
        h = f.hasOwnProperty,
        m = h.toString,
        g = m.call(Object),
        v = {},
        y = function y(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        b = function b(e) {
      return null != e && e === e.window;
    },
        x = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(e, t, n) {
      var r,
          o,
          i = (n = n || a).createElement("script");
      if (i.text = e, t) for (r in x) {
        (o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
      }
      n.head.appendChild(i).parentNode.removeChild(i);
    }

    function k(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? f[d.call(e)] || "object" : _typeof(e);
    }

    var T = function T(e, t) {
      return new T.fn.init(e, t);
    },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function S(e) {
      var t = !!e && "length" in e && e.length,
          n = k(e);
      return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    T.fn = T.prototype = {
      jquery: "3.4.1",
      constructor: T,
      length: 0,
      toArray: function toArray() {
        return u.call(this);
      },
      get: function get(e) {
        return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = T.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return T.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(T.map(this, function (t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(u.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(e) {
        var t = this.length,
            n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: c,
      sort: i.sort,
      splice: i.splice
    }, T.extend = T.fn.extend = function () {
      var e,
          t,
          n,
          r,
          o,
          i,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;

      for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
        if (null != (e = arguments[s])) for (t in e) {
          r = e[t], "__proto__" !== t && a !== r && (l && r && (T.isPlainObject(r) || (o = Array.isArray(r))) ? (n = a[t], i = o && !Array.isArray(n) ? [] : o || T.isPlainObject(n) ? n : {}, o = !1, a[t] = T.extend(l, i, r)) : void 0 !== r && (a[t] = r));
        }
      }

      return a;
    }, T.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, n;
        return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && m.call(n) === g);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t) {
        w(e, {
          nonce: t && t.nonce
        });
      },
      each: function each(e, t) {
        var n,
            r = 0;
        if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {
          ;
        } else for (r in e) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
        return e;
      },
      trim: function trim(e) {
        return null == e ? "" : (e + "").replace(C, "");
      },
      makeArray: function makeArray(e, t) {
        var n = t || [];
        return null != e && (S(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n;
      },
      inArray: function inArray(e, t, n) {
        return null == t ? -1 : p.call(t, e, n);
      },
      merge: function merge(e, t) {
        for (var n = +t.length, r = 0, o = e.length; r < n; r++) {
          e[o++] = t[r];
        }

        return e.length = o, e;
      },
      grep: function grep(e, t, n) {
        for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) {
          !t(e[o], o) !== a && r.push(e[o]);
        }

        return r;
      },
      map: function map(e, t, n) {
        var r,
            o,
            i = 0,
            a = [];
        if (S(e)) for (r = e.length; i < r; i++) {
          null != (o = t(e[i], i, n)) && a.push(o);
        } else for (i in e) {
          null != (o = t(e[i], i, n)) && a.push(o);
        }
        return l.apply([], a);
      },
      guid: 1,
      support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = i[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      f["[object " + t + "]"] = t.toLowerCase();
    });

    var j =
    /*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */
    function (e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          s,
          u,
          l,
          c,
          p,
          f,
          d,
          h,
          m,
          g,
          v,
          y,
          b,
          x = "sizzle" + 1 * new Date(),
          w = e.document,
          k = 0,
          T = 0,
          C = ue(),
          S = ue(),
          j = ue(),
          D = ue(),
          E = function E(e, t) {
        return e === t && (p = !0), 0;
      },
          A = {}.hasOwnProperty,
          N = [],
          q = N.pop,
          L = N.push,
          I = N.push,
          P = N.slice,
          O = function O(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          if (e[n] === t) return n;
        }

        return -1;
      },
          H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          z = "[\\x20\\t\\r\\n\\f]",
          R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          M = "\\[" + z + "*(" + R + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + z + "*\\]",
          W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
          F = new RegExp(z + "+", "g"),
          _ = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
          $ = new RegExp("^" + z + "*," + z + "*"),
          B = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
          U = new RegExp(z + "|>"),
          X = new RegExp(W),
          Z = new RegExp("^" + R + "$"),
          V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
      },
          J = /HTML$/i,
          Y = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          K = /^[^{]+\{\s*\[native \w/,
          Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
          ne = function ne(e, t, n) {
        var r = "0x" + t - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      },
          re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          oe = function oe(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          ie = function ie() {
        f();
      },
          ae = xe(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        I.apply(N = P.call(w.childNodes), w.childNodes), N[w.childNodes.length].nodeType;
      } catch (e) {
        I = {
          apply: N.length ? function (e, t) {
            L.apply(e, P.call(t));
          } : function (e, t) {
            for (var n = e.length, r = 0; e[n++] = t[r++];) {
              ;
            }

            e.length = n - 1;
          }
        };
      }

      function se(e, t, r, o) {
        var i,
            s,
            l,
            c,
            p,
            h,
            v,
            y = t && t.ownerDocument,
            k = t ? t.nodeType : 9;
        if (r = r || [], "string" != typeof e || !e || 1 !== k && 9 !== k && 11 !== k) return r;

        if (!o && ((t ? t.ownerDocument || t : w) !== d && f(t), t = t || d, m)) {
          if (11 !== k && (p = Q.exec(e))) if (i = p[1]) {
            if (9 === k) {
              if (!(l = t.getElementById(i))) return r;
              if (l.id === i) return r.push(l), r;
            } else if (y && (l = y.getElementById(i)) && b(t, l) && l.id === i) return r.push(l), r;
          } else {
            if (p[2]) return I.apply(r, t.getElementsByTagName(e)), r;
            if ((i = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(r, t.getElementsByClassName(i)), r;
          }

          if (n.qsa && !D[e + " "] && (!g || !g.test(e)) && (1 !== k || "object" !== t.nodeName.toLowerCase())) {
            if (v = e, y = t, 1 === k && U.test(e)) {
              for ((c = t.getAttribute("id")) ? c = c.replace(re, oe) : t.setAttribute("id", c = x), s = (h = a(e)).length; s--;) {
                h[s] = "#" + c + " " + be(h[s]);
              }

              v = h.join(","), y = ee.test(e) && ve(t.parentNode) || t;
            }

            try {
              return I.apply(r, y.querySelectorAll(v)), r;
            } catch (t) {
              D(e, !0);
            } finally {
              c === x && t.removeAttribute("id");
            }
          }
        }

        return u(e.replace(_, "$1"), t, r, o);
      }

      function ue() {
        var e = [];
        return function t(n, o) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = o;
        };
      }

      function le(e) {
        return e[x] = !0, e;
      }

      function ce(e) {
        var t = d.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function pe(e, t) {
        for (var n = e.split("|"), o = n.length; o--;) {
          r.attrHandle[n[o]] = t;
        }
      }

      function fe(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; n = n.nextSibling;) {
          if (n === t) return -1;
        }
        return e ? 1 : -1;
      }

      function de(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function he(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }

      function me(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function ge(e) {
        return le(function (t) {
          return t = +t, le(function (n, r) {
            for (var o, i = e([], n.length, t), a = i.length; a--;) {
              n[o = i[a]] && (n[o] = !(r[o] = n[o]));
            }
          });
        });
      }

      function ve(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in n = se.support = {}, i = se.isXML = function (e) {
        var t = e.namespaceURI,
            n = (e.ownerDocument || e).documentElement;
        return !J.test(t || n && n.nodeName || "HTML");
      }, f = se.setDocument = function (e) {
        var t,
            o,
            a = e ? e.ownerDocument || e : w;
        return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, m = !i(d), w !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = ce(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), n.getElementsByTagName = ce(function (e) {
          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
        }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function (e) {
          return h.appendChild(e).id = x, !d.getElementsByName || !d.getElementsByName(x).length;
        }), n.getById ? (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && m) {
            var n = t.getElementById(e);
            return n ? [n] : [];
          }
        }) : (r.filter.ID = function (e) {
          var t = e.replace(te, ne);
          return function (e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t;
          };
        }, r.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && m) {
            var n,
                r,
                o,
                i = t.getElementById(e);

            if (i) {
              if ((n = i.getAttributeNode("id")) && n.value === e) return [i];

              for (o = t.getElementsByName(e), r = 0; i = o[r++];) {
                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
              }
            }

            return [];
          }
        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var n,
              r = [],
              o = 0,
              i = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; n = i[o++];) {
              1 === n.nodeType && r.push(n);
            }

            return r;
          }

          return i;
        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
        }, v = [], g = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function (e) {
          h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + z + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + z + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + x + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]");
        }), ce(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = d.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + z + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
        })), (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
          n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", W);
        }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(h.compareDocumentPosition), b = t || K.test(h.contains) ? function (e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
              r = t && t.parentNode;
          return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, E = t ? function (e, t) {
          if (e === t) return p = !0, 0;
          var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && b(w, e) ? -1 : t === d || t.ownerDocument === w && b(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
        } : function (e, t) {
          if (e === t) return p = !0, 0;
          var n,
              r = 0,
              o = e.parentNode,
              i = t.parentNode,
              a = [e],
              s = [t];
          if (!o || !i) return e === d ? -1 : t === d ? 1 : o ? -1 : i ? 1 : c ? O(c, e) - O(c, t) : 0;
          if (o === i) return fe(e, t);

          for (n = e; n = n.parentNode;) {
            a.unshift(n);
          }

          for (n = t; n = n.parentNode;) {
            s.unshift(n);
          }

          for (; a[r] === s[r];) {
            r++;
          }

          return r ? fe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
        }, d) : d;
      }, se.matches = function (e, t) {
        return se(e, null, null, t);
      }, se.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== d && f(e), n.matchesSelector && m && !D[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
          var r = y.call(e, t);
          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
        } catch (e) {
          D(t, !0);
        }
        return se(t, d, null, [e]).length > 0;
      }, se.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && f(e), b(e, t);
      }, se.attr = function (e, t) {
        (e.ownerDocument || e) !== d && f(e);
        var o = r.attrHandle[t.toLowerCase()],
            i = o && A.call(r.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
        return void 0 !== i ? i : n.attributes || !m ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
      }, se.escape = function (e) {
        return (e + "").replace(re, oe);
      }, se.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, se.uniqueSort = function (e) {
        var t,
            r = [],
            o = 0,
            i = 0;

        if (p = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(E), p) {
          for (; t = e[i++];) {
            t === e[i] && (o = r.push(i));
          }

          for (; o--;) {
            e.splice(r[o], 1);
          }
        }

        return c = null, e;
      }, o = se.getText = function (e) {
        var t,
            n = "",
            r = 0,
            i = e.nodeType;

        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              n += o(e);
            }
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; t = e[r++];) {
          n += o(t);
        }

        return n;
      }, (r = se.selectors = {
        cacheLength: 50,
        createPseudo: le,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                n = !e[6] && e[2];
            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = C[e + " "];
            return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && C(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, n) {
            return function (r) {
              var o = se.attr(r, e);
              return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function CHILD(e, t, n, r, o) {
            var i = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
            return 1 === r && 0 === o ? function (e) {
              return !!e.parentNode;
            } : function (t, n, u) {
              var l,
                  c,
                  p,
                  f,
                  d,
                  h,
                  m = i !== a ? "nextSibling" : "previousSibling",
                  g = t.parentNode,
                  v = s && t.nodeName.toLowerCase(),
                  y = !u && !s,
                  b = !1;

              if (g) {
                if (i) {
                  for (; m;) {
                    for (f = t; f = f[m];) {
                      if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                    }

                    h = m = "only" === e && !h && "nextSibling";
                  }

                  return !0;
                }

                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                  for (b = (d = (l = (c = (p = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === k && l[1]) && l[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || h.pop();) {
                    if (1 === f.nodeType && ++b && f === t) {
                      c[e] = [k, d, b];
                      break;
                    }
                  }
                } else if (y && (b = d = (l = (c = (p = (f = t)[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === k && l[1]), !1 === b) for (; (f = ++d && f && f[m] || (b = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((c = (p = f[x] || (f[x] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] = [k, b]), f !== t));) {
                  ;
                }

                return (b -= o) === r || b % r == 0 && b / r >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var n,
                o = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return o[x] ? o(t) : o.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
              for (var r, i = o(e, t), a = i.length; a--;) {
                e[r = O(e, i[a])] = !(n[r] = i[a]);
              }
            }) : function (e) {
              return o(e, 0, n);
            }) : o;
          }
        },
        pseudos: {
          not: le(function (e) {
            var t = [],
                n = [],
                r = s(e.replace(_, "$1"));
            return r[x] ? le(function (e, t, n, o) {
              for (var i, a = r(e, null, o, []), s = e.length; s--;) {
                (i = a[s]) && (e[s] = !(t[s] = i));
              }
            }) : function (e, o, i) {
              return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop();
            };
          }),
          has: le(function (e) {
            return function (t) {
              return se(e, t).length > 0;
            };
          }),
          contains: le(function (e) {
            return e = e.replace(te, ne), function (t) {
              return (t.textContent || o(t)).indexOf(e) > -1;
            };
          }),
          lang: le(function (e) {
            return Z.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
              var n;

              do {
                if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function root(e) {
            return e === h;
          },
          focus: function focus(e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !r.pseudos.empty(e);
          },
          header: function header(e) {
            return G.test(e.nodeName);
          },
          input: function input(e) {
            return Y.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ge(function () {
            return [0];
          }),
          last: ge(function (e, t) {
            return [t - 1];
          }),
          eq: ge(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ge(function (e, t) {
            for (var n = 0; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          odd: ge(function (e, t) {
            for (var n = 1; n < t; n += 2) {
              e.push(n);
            }

            return e;
          }),
          lt: ge(function (e, t, n) {
            for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) {
              e.push(r);
            }

            return e;
          }),
          gt: ge(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) {
              e.push(r);
            }

            return e;
          })
        }
      }).pseudos.nth = r.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        r.pseudos[t] = de(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        r.pseudos[t] = he(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) {
          r += e[t].value;
        }

        return r;
      }

      function xe(e, t, n) {
        var r = t.dir,
            o = t.next,
            i = o || r,
            a = n && "parentNode" === i,
            s = T++;
        return t.first ? function (t, n, o) {
          for (; t = t[r];) {
            if (1 === t.nodeType || a) return e(t, n, o);
          }

          return !1;
        } : function (t, n, u) {
          var l,
              c,
              p,
              f = [k, s];

          if (u) {
            for (; t = t[r];) {
              if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            }
          } else for (; t = t[r];) {
            if (1 === t.nodeType || a) if (c = (p = t[x] || (t[x] = {}))[t.uniqueID] || (p[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[r] || t;else {
              if ((l = c[i]) && l[0] === k && l[1] === s) return f[2] = l[2];
              if (c[i] = f, f[2] = e(t, n, u)) return !0;
            }
          }

          return !1;
        };
      }

      function we(e) {
        return e.length > 1 ? function (t, n, r) {
          for (var o = e.length; o--;) {
            if (!e[o](t, n, r)) return !1;
          }

          return !0;
        } : e[0];
      }

      function ke(e, t, n, r, o) {
        for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
          (i = e[s]) && (n && !n(i, r, o) || (a.push(i), l && t.push(s)));
        }

        return a;
      }

      function Te(e, t, n, r, o, i) {
        return r && !r[x] && (r = Te(r)), o && !o[x] && (o = Te(o, i)), le(function (i, a, s, u) {
          var l,
              c,
              p,
              f = [],
              d = [],
              h = a.length,
              m = i || function (e, t, n) {
            for (var r = 0, o = t.length; r < o; r++) {
              se(e, t[r], n);
            }

            return n;
          }(t || "*", s.nodeType ? [s] : s, []),
              g = !e || !i && t ? m : ke(m, f, e, s, u),
              v = n ? o || (i ? e : h || r) ? [] : a : g;

          if (n && n(g, v, s, u), r) for (l = ke(v, d), r(l, [], s, u), c = l.length; c--;) {
            (p = l[c]) && (v[d[c]] = !(g[d[c]] = p));
          }

          if (i) {
            if (o || e) {
              if (o) {
                for (l = [], c = v.length; c--;) {
                  (p = v[c]) && l.push(g[c] = p);
                }

                o(null, v = [], l, u);
              }

              for (c = v.length; c--;) {
                (p = v[c]) && (l = o ? O(i, p) : f[c]) > -1 && (i[l] = !(a[l] = p));
              }
            }
          } else v = ke(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : I.apply(a, v);
        });
      }

      function Ce(e) {
        for (var t, n, o, i = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = xe(function (e) {
          return e === t;
        }, s, !0), p = xe(function (e) {
          return O(t, e) > -1;
        }, s, !0), f = [function (e, n, r) {
          var o = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
          return t = null, o;
        }]; u < i; u++) {
          if (n = r.relative[e[u].type]) f = [xe(we(f), n)];else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
              for (o = ++u; o < i && !r.relative[e[o].type]; o++) {
                ;
              }

              return Te(u > 1 && we(f), u > 1 && be(e.slice(0, u - 1).concat({
                value: " " === e[u - 2].type ? "*" : ""
              })).replace(_, "$1"), n, u < o && Ce(e.slice(u, o)), o < i && Ce(e = e.slice(o)), o < i && be(e));
            }

            f.push(n);
          }
        }

        return we(f);
      }

      return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = se.tokenize = function (e, t) {
        var n,
            o,
            i,
            a,
            s,
            u,
            l,
            c = S[e + " "];
        if (c) return t ? 0 : c.slice(0);

        for (s = e, u = [], l = r.preFilter; s;) {
          for (a in n && !(o = $.exec(s)) || (o && (s = s.slice(o[0].length) || s), u.push(i = [])), n = !1, (o = B.exec(s)) && (n = o.shift(), i.push({
            value: n,
            type: o[0].replace(_, " ")
          }), s = s.slice(n.length)), r.filter) {
            !(o = V[a].exec(s)) || l[a] && !(o = l[a](o)) || (n = o.shift(), i.push({
              value: n,
              type: a,
              matches: o
            }), s = s.slice(n.length));
          }

          if (!n) break;
        }

        return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
      }, s = se.compile = function (e, t) {
        var n,
            o = [],
            i = [],
            s = j[e + " "];

        if (!s) {
          for (t || (t = a(e)), n = t.length; n--;) {
            (s = Ce(t[n]))[x] ? o.push(s) : i.push(s);
          }

          (s = j(e, function (e, t) {
            var n = t.length > 0,
                o = e.length > 0,
                i = function i(_i, a, s, u, c) {
              var p,
                  h,
                  g,
                  v = 0,
                  y = "0",
                  b = _i && [],
                  x = [],
                  w = l,
                  T = _i || o && r.find.TAG("*", c),
                  C = k += null == w ? 1 : Math.random() || .1,
                  S = T.length;

              for (c && (l = a === d || a || c); y !== S && null != (p = T[y]); y++) {
                if (o && p) {
                  for (h = 0, a || p.ownerDocument === d || (f(p), s = !m); g = e[h++];) {
                    if (g(p, a || d, s)) {
                      u.push(p);
                      break;
                    }
                  }

                  c && (k = C);
                }

                n && ((p = !g && p) && v--, _i && b.push(p));
              }

              if (v += y, n && y !== v) {
                for (h = 0; g = t[h++];) {
                  g(b, x, a, s);
                }

                if (_i) {
                  if (v > 0) for (; y--;) {
                    b[y] || x[y] || (x[y] = q.call(u));
                  }
                  x = ke(x);
                }

                I.apply(u, x), c && !_i && x.length > 0 && v + t.length > 1 && se.uniqueSort(u);
              }

              return c && (k = C, l = w), b;
            };

            return n ? le(i) : i;
          }(i, o))).selector = e;
        }

        return s;
      }, u = se.select = function (e, t, n, o) {
        var i,
            u,
            l,
            c,
            p,
            f = "function" == typeof e && e,
            d = !o && a(e = f.selector || e);

        if (n = n || [], 1 === d.length) {
          if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && m && r.relative[u[1].type]) {
            if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
            f && (t = t.parentNode), e = e.slice(u.shift().value.length);
          }

          for (i = V.needsContext.test(e) ? 0 : u.length; i-- && (l = u[i], !r.relative[c = l.type]);) {
            if ((p = r.find[c]) && (o = p(l.matches[0].replace(te, ne), ee.test(u[0].type) && ve(t.parentNode) || t))) {
              if (u.splice(i, 1), !(e = o.length && be(u))) return I.apply(n, o), n;
              break;
            }
          }
        }

        return (f || s(e, d))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n;
      }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!p, f(), n.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      }), ce(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || pe("type|href|height|width", function (e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), n.attributes && ce(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || pe("value", function (e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), ce(function (e) {
        return null == e.getAttribute("disabled");
      }) || pe(H, function (e, t, n) {
        var r;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }), se;
    }(n);

    T.find = j, T.expr = j.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = j.uniqueSort, T.text = j.getText, T.isXMLDoc = j.isXML, T.contains = j.contains, T.escapeSelector = j.escape;

    var D = function D(e, t, n) {
      for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (o && T(e).is(n)) break;
          r.push(e);
        }
      }

      return r;
    },
        E = function E(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    },
        A = T.expr.match.needsContext;

    function N(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, n) {
      return y(t) ? T.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      }) : t.nodeType ? T.grep(e, function (e) {
        return e === t !== n;
      }) : "string" != typeof t ? T.grep(e, function (e) {
        return p.call(t, e) > -1 !== n;
      }) : T.filter(t, e, n);
    }

    T.filter = function (e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, T.fn.extend({
      find: function find(e) {
        var t,
            n,
            r = this.length,
            o = this;
        if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
          for (t = 0; t < r; t++) {
            if (T.contains(o[t], this)) return !0;
          }
        }));

        for (n = this.pushStack([]), t = 0; t < r; t++) {
          T.find(e, o[t], n);
        }

        return r > 1 ? T.uniqueSort(n) : n;
      },
      filter: function filter(e) {
        return this.pushStack(L(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(L(this, e || [], !0));
      },
      is: function is(e) {
        return !!L(this, "string" == typeof e && A.test(e) ? T(e) : e || [], !1).length;
      }
    });
    var I,
        P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (e, t, n) {
      var r, o;
      if (!e) return this;

      if (n = n || I, "string" == typeof e) {
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

        if (r[1]) {
          if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), q.test(r[1]) && T.isPlainObject(t)) for (r in t) {
            y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          }
          return this;
        }

        return (o = a.getElementById(r[2])) && (this[0] = o, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this);
    }).prototype = T.fn, I = T(a);
    var O = /^(?:parents|prev(?:Until|All))/,
        H = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function z(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    T.fn.extend({
      has: function has(e) {
        var t = T(e, this),
            n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) {
            if (T.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var n,
            r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof e && T(e);
        if (!A.test(e)) for (; r < o; r++) {
          for (n = this[r]; n && n !== t; n = n.parentNode) {
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
              i.push(n);
              break;
            }
          }
        }
        return this.pushStack(i.length > 1 ? T.uniqueSort(i) : i);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? p.call(T(e), this[0]) : p.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), T.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return D(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, n) {
        return D(e, "parentNode", n);
      },
      next: function next(e) {
        return z(e, "nextSibling");
      },
      prev: function prev(e) {
        return z(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return D(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return D(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, n) {
        return D(e, "nextSibling", n);
      },
      prevUntil: function prevUntil(e, t, n) {
        return D(e, "previousSibling", n);
      },
      siblings: function siblings(e) {
        return E((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return E(e.firstChild);
      },
      contents: function contents(e) {
        return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), T.merge([], e.childNodes));
      }
    }, function (e, t) {
      T.fn[e] = function (n, r) {
        var o = T.map(this, t, n);
        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = T.filter(r, o)), this.length > 1 && (H[e] || T.uniqueSort(o), O.test(e) && o.reverse()), this.pushStack(o);
      };
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
      return e;
    }

    function W(e) {
      throw e;
    }

    function F(e, t, n, r) {
      var o;

      try {
        e && y(o = e.promise) ? o.call(e).done(t).fail(n) : e && y(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }

    T.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return T.each(e.match(R) || [], function (e, n) {
          t[n] = !0;
        }), t;
      }(e) : T.extend({}, e);

      var t,
          n,
          r,
          o,
          i = [],
          a = [],
          s = -1,
          u = function u() {
        for (o = o || e.once, r = t = !0; a.length; s = -1) {
          for (n = a.shift(); ++s < i.length;) {
            !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
          }
        }

        e.memory || (n = !1), t = !1, o && (i = n ? [] : "");
      },
          l = {
        add: function add() {
          return i && (n && !t && (s = i.length - 1, a.push(n)), function t(n) {
            T.each(n, function (n, r) {
              y(r) ? e.unique && l.has(r) || i.push(r) : r && r.length && "string" !== k(r) && t(r);
            });
          }(arguments), n && !t && u()), this;
        },
        remove: function remove() {
          return T.each(arguments, function (e, t) {
            for (var n; (n = T.inArray(t, i, n)) > -1;) {
              i.splice(n, 1), n <= s && s--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? T.inArray(e, i) > -1 : i.length > 0;
        },
        empty: function empty() {
          return i && (i = []), this;
        },
        disable: function disable() {
          return o = a = [], i = n = "", this;
        },
        disabled: function disabled() {
          return !i;
        },
        lock: function lock() {
          return o = a = [], n || t || (i = n = ""), this;
        },
        locked: function locked() {
          return !!o;
        },
        fireWith: function fireWith(e, n) {
          return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
        },
        fire: function fire() {
          return l.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!r;
        }
      };

      return l;
    }, T.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
            r = "pending",
            o = {
          state: function state() {
            return r;
          },
          always: function always() {
            return i.done(arguments).fail(arguments), this;
          },
          catch: function _catch(e) {
            return o.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return T.Deferred(function (n) {
              T.each(t, function (t, r) {
                var o = y(e[r[4]]) && e[r[4]];
                i[r[1]](function () {
                  var e = o && o.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, o ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, r, o) {
            var i = 0;

            function a(e, t, r, o) {
              return function () {
                var s = this,
                    u = arguments,
                    l = function l() {
                  var n, l;

                  if (!(e < i)) {
                    if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    l = n && ("object" == _typeof(n) || "function" == typeof n) && n.then, y(l) ? o ? l.call(n, a(i, t, M, o), a(i, t, W, o)) : (i++, l.call(n, a(i, t, M, o), a(i, t, W, o), a(i, t, M, t.notifyWith))) : (r !== M && (s = void 0, u = [n]), (o || t.resolveWith)(s, u));
                  }
                },
                    c = o ? l : function () {
                  try {
                    l();
                  } catch (n) {
                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= i && (r !== W && (s = void 0, u = [n]), t.rejectWith(s, u));
                  }
                };

                e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c));
              };
            }

            return T.Deferred(function (n) {
              t[0][3].add(a(0, n, y(o) ? o : M, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : M)), t[2][3].add(a(0, n, y(r) ? r : W));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? T.extend(e, o) : o;
          }
        },
            i = {};
        return T.each(t, function (e, n) {
          var a = n[2],
              s = n[5];
          o[n[1]] = a.add, s && a.add(function () {
            r = s;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), i[n[0]] = function () {
            return i[n[0] + "With"](this === i ? void 0 : this, arguments), this;
          }, i[n[0] + "With"] = a.fireWith;
        }), o.promise(i), e && e.call(i, i), i;
      },
      when: function when(e) {
        var t = arguments.length,
            n = t,
            r = Array(n),
            o = u.call(arguments),
            i = T.Deferred(),
            a = function a(e) {
          return function (n) {
            r[e] = this, o[e] = arguments.length > 1 ? u.call(arguments) : n, --t || i.resolveWith(r, o);
          };
        };

        if (t <= 1 && (F(e, i.done(a(n)).resolve, i.reject, !t), "pending" === i.state() || y(o[n] && o[n].then))) return i.then();

        for (; n--;) {
          F(o[n], a(n), i.reject);
        }

        return i.promise();
      }
    });
    var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    T.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && _.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, T.readyException = function (e) {
      n.setTimeout(function () {
        throw e;
      });
    };
    var $ = T.Deferred();

    function B() {
      a.removeEventListener("DOMContentLoaded", B), n.removeEventListener("load", B), T.ready();
    }

    T.fn.ready = function (e) {
      return $.then(e).catch(function (e) {
        T.readyException(e);
      }), this;
    }, T.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || $.resolveWith(a, [T]));
      }
    }), T.ready.then = $.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", B), n.addEventListener("load", B));

    var U = function U(e, t, n, r, o, i, a) {
      var s = 0,
          u = e.length,
          l = null == n;
      if ("object" === k(n)) for (s in o = !0, n) {
        U(e, t, s, n[s], !0, i, a);
      } else if (void 0 !== r && (o = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
        return l.call(T(e), n);
      })), t)) for (; s < u; s++) {
        t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      }
      return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
    },
        X = /^-ms-/,
        Z = /-([a-z])/g;

    function V(e, t) {
      return t.toUpperCase();
    }

    function J(e) {
      return e.replace(X, "ms-").replace(Z, V);
    }

    var Y = function Y(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function G() {
      this.expando = T.expando + G.uid++;
    }

    G.uid = 1, G.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, n) {
        var r,
            o = this.cache(e);
        if ("string" == typeof t) o[J(t)] = n;else for (r in t) {
          o[J(r)] = t[r];
        }
        return o;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)];
      },
      access: function access(e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function remove(e, t) {
        var n,
            r = e[this.expando];

        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(J) : (t = J(t)) in r ? [t] : t.match(R) || []).length;

            for (; n--;) {
              delete r[t[n]];
            }
          }

          (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !T.isEmptyObject(t);
      }
    };
    var K = new G(),
        Q = new G(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;

    function ne(e, t, n) {
      var r;
      if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
        try {
          n = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
          }(n);
        } catch (e) {}

        Q.set(e, t, n);
      } else n = void 0;
      return n;
    }

    T.extend({
      hasData: function hasData(e) {
        return Q.hasData(e) || K.hasData(e);
      },
      data: function data(e, t, n) {
        return Q.access(e, t, n);
      },
      removeData: function removeData(e, t) {
        Q.remove(e, t);
      },
      _data: function _data(e, t, n) {
        return K.access(e, t, n);
      },
      _removeData: function _removeData(e, t) {
        K.remove(e, t);
      }
    }), T.fn.extend({
      data: function data(e, t) {
        var n,
            r,
            o,
            i = this[0],
            a = i && i.attributes;

        if (void 0 === e) {
          if (this.length && (o = Q.get(i), 1 === i.nodeType && !K.get(i, "hasDataAttrs"))) {
            for (n = a.length; n--;) {
              a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = J(r.slice(5)), ne(i, r, o[r]));
            }

            K.set(i, "hasDataAttrs", !0);
          }

          return o;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Q.set(this, e);
        }) : U(this, function (t) {
          var n;
          if (i && void 0 === t) return void 0 !== (n = Q.get(i, e)) ? n : void 0 !== (n = ne(i, e)) ? n : void 0;
          this.each(function () {
            Q.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      }
    }), T.extend({
      queue: function queue(e, t, n) {
        var r;
        if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, T.makeArray(n)) : r.push(n)), r || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var n = T.queue(e, t),
            r = n.length,
            o = n.shift(),
            i = T._queueHooks(e, t);

        "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
          T.dequeue(e, t);
        }, i)), !r && i && i.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var n = t + "queueHooks";
        return K.get(e, n) || K.access(e, n, {
          empty: T.Callbacks("once memory").add(function () {
            K.remove(e, [t + "queue", n]);
          })
        });
      }
    }), T.fn.extend({
      queue: function queue(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = T.queue(this, e, t);
          T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          T.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var n,
            r = 1,
            o = T.Deferred(),
            i = this,
            a = this.length,
            s = function s() {
          --r || o.resolveWith(i, [i]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
          (n = K.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        }

        return s(), o.promise(t);
      }
    });

    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ae = a.documentElement,
        se = function se(e) {
      return T.contains(e.ownerDocument, e);
    },
        ue = {
      composed: !0
    };

    ae.getRootNode && (se = function se(e) {
      return T.contains(e.ownerDocument, e) || e.getRootNode(ue) === e.ownerDocument;
    });

    var le = function le(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === T.css(e, "display");
    },
        ce = function ce(e, t, n, r) {
      var o,
          i,
          a = {};

      for (i in t) {
        a[i] = e.style[i], e.style[i] = t[i];
      }

      for (i in o = n.apply(e, r || []), t) {
        e.style[i] = a[i];
      }

      return o;
    };

    function pe(e, t, n, r) {
      var o,
          i,
          a = 20,
          s = r ? function () {
        return r.cur();
      } : function () {
        return T.css(e, t, "");
      },
          u = s(),
          l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (T.cssNumber[t] || "px" !== l && +u) && oe.exec(T.css(e, t));

      if (c && c[3] !== l) {
        for (u /= 2, l = l || c[3], c = +u || 1; a--;) {
          T.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
        }

        c *= 2, T.style(e, t, c + l), n = n || [];
      }

      return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o;
    }

    var fe = {};

    function de(e) {
      var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = fe[r];
      return o || (t = n.body.appendChild(n.createElement(r)), o = T.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), fe[r] = o, o);
    }

    function he(e, t) {
      for (var n, r, o = [], i = 0, a = e.length; i < a; i++) {
        (r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = K.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && le(r) && (o[i] = de(r))) : "none" !== n && (o[i] = "none", K.set(r, "display", n)));
      }

      for (i = 0; i < a; i++) {
        null != o[i] && (e[i].style.display = o[i]);
      }

      return e;
    }

    T.fn.extend({
      show: function show() {
        return he(this, !0);
      },
      hide: function hide() {
        return he(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          le(this) ? T(this).show() : T(this).hide();
        });
      }
    });
    var me = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i,
        ye = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? T.merge([e], n) : n;
    }

    function xe(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
    }

    ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
    var we,
        ke,
        Te = /<|&#?\w+;/;

    function Ce(e, t, n, r, o) {
      for (var i, a, s, u, l, c, p = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++) {
        if ((i = e[d]) || 0 === i) if ("object" === k(i)) T.merge(f, i.nodeType ? [i] : i);else if (Te.test(i)) {
          for (a = a || p.appendChild(t.createElement("div")), s = (ge.exec(i) || ["", ""])[1].toLowerCase(), u = ye[s] || ye._default, a.innerHTML = u[1] + T.htmlPrefilter(i) + u[2], c = u[0]; c--;) {
            a = a.lastChild;
          }

          T.merge(f, a.childNodes), (a = p.firstChild).textContent = "";
        } else f.push(t.createTextNode(i));
      }

      for (p.textContent = "", d = 0; i = f[d++];) {
        if (r && T.inArray(i, r) > -1) o && o.push(i);else if (l = se(i), a = be(p.appendChild(i), "script"), l && xe(a), n) for (c = 0; i = a[c++];) {
          ve.test(i.type || "") && n.push(i);
        }
      }

      return p;
    }

    we = a.createDocumentFragment().appendChild(a.createElement("div")), (ke = a.createElement("input")).setAttribute("type", "radio"), ke.setAttribute("checked", "checked"), ke.setAttribute("name", "t"), we.appendChild(ke), v.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
        je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        De = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
      return !0;
    }

    function Ae() {
      return !1;
    }

    function Ne(e, t) {
      return e === function () {
        try {
          return a.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function qe(e, t, n, r, o, i) {
      var a, s;

      if ("object" == _typeof(t)) {
        for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
          qe(e, s, n, r, t[s], i);
        }

        return e;
      }

      if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = Ae;else if (!o) return e;
      return 1 === i && (a = o, (o = function o(e) {
        return T().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
        T.event.add(this, t, o, r, n);
      });
    }

    function Le(e, t, n) {
      n ? (K.set(e, t, !1), T.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var r,
              o,
              i = K.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (i.length) (T.event.special[t] || {}).delegateType && e.stopPropagation();else if (i = u.call(arguments), K.set(this, t, i), r = n(this, t), this[t](), i !== (o = K.get(this, t)) || r ? K.set(this, t, !1) : o = {}, i !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value;
          } else i.length && (K.set(this, t, {
            value: T.event.trigger(T.extend(i[0], T.Event.prototype), i.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === K.get(e, t) && T.event.add(e, t, Ee);
    }

    T.event = {
      global: {},
      add: function add(e, t, n, r, o) {
        var i,
            a,
            s,
            u,
            l,
            c,
            p,
            f,
            d,
            h,
            m,
            g = K.get(e);
        if (g) for (n.handler && (n = (i = n).handler, o = i.selector), o && T.find.matchesSelector(ae, o), n.guid || (n.guid = T.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
          return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(R) || [""]).length; l--;) {
          d = m = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (p = T.event.special[d] || {}, d = (o ? p.delegateType : p.bindType) || d, p = T.event.special[d] || {}, c = T.extend({
            type: d,
            origType: m,
            data: r,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && T.expr.match.needsContext.test(o),
            namespace: h.join(".")
          }, i), (f = u[d]) || ((f = u[d] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), T.event.global[d] = !0);
        }
      },
      remove: function remove(e, t, n, r, o) {
        var i,
            a,
            s,
            u,
            l,
            c,
            p,
            f,
            d,
            h,
            m,
            g = K.hasData(e) && K.get(e);

        if (g && (u = g.events)) {
          for (l = (t = (t || "").match(R) || [""]).length; l--;) {
            if (d = m = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              for (p = T.event.special[d] || {}, f = u[d = (r ? p.delegateType : p.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) {
                c = f[i], !o && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
              }

              a && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, g.handle) || T.removeEvent(e, d, g.handle), delete u[d]);
            } else for (d in u) {
              T.event.remove(e, d + t[l], n, r, !0);
            }
          }

          T.isEmptyObject(u) && K.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            s = T.event.fix(e),
            u = new Array(arguments.length),
            l = (K.get(this, "events") || {})[s.type] || [],
            c = T.event.special[s.type] || {};

        for (u[0] = s, t = 1; t < arguments.length; t++) {
          u[t] = arguments[t];
        }

        if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
          for (a = T.event.handlers.call(this, s, l), t = 0; (o = a[t++]) && !s.isPropagationStopped();) {
            for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) {
              s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((T.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
            }
          }

          return c.postDispatch && c.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function handlers(e, t) {
        var n,
            r,
            o,
            i,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
        if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (i = [], a = {}, n = 0; n < u; n++) {
              void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? T(o, this).index(l) > -1 : T.find(o, this, null, [l]).length), a[o] && i.push(r);
            }

            i.length && s.push({
              elem: l,
              handlers: i
            });
          }
        }
        return l = this, u < t.length && s.push({
          elem: l,
          handlers: t.slice(u)
        }), s;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(T.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[T.expando] ? e : new T.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return me.test(t.type) && t.click && N(t, "input") && Le(t, "click", Ee), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return me.test(t.type) && t.click && N(t, "input") && Le(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return me.test(t.type) && t.click && N(t, "input") && K.get(t, "click") || N(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, T.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, T.Event = function (e, t) {
      if (!(this instanceof T.Event)) return new T.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0;
    }, T.Event.prototype = {
      constructor: T.Event,
      isDefaultPrevented: Ae,
      isPropagationStopped: Ae,
      isImmediatePropagationStopped: Ae,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, T.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, T.event.addProp), T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      T.event.special[e] = {
        setup: function setup() {
          return Le(this, e, Ne), !1;
        },
        trigger: function trigger() {
          return Le(this, e), !0;
        },
        delegateType: t
      };
    }), T.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      T.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var n,
              r = this,
              o = e.relatedTarget,
              i = e.handleObj;
          return o && (o === r || T.contains(r, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
        }
      };
    }), T.fn.extend({
      on: function on(e, t, n, r) {
        return qe(this, e, t, n, r);
      },
      one: function one(e, t, n, r) {
        return qe(this, e, t, n, r, 1);
      },
      off: function off(e, t, n) {
        var r, o;
        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

        if ("object" == _typeof(e)) {
          for (o in e) {
            this.off(o, t, e[o]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each(function () {
          T.event.remove(this, e, n, t);
        });
      }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ze(e, t) {
      return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e;
    }

    function Re(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function Me(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function We(e, t) {
      var n, r, o, i, a, s, u, l;

      if (1 === t.nodeType) {
        if (K.hasData(e) && (i = K.access(e), a = K.set(t, i), l = i.events)) for (o in delete a.handle, a.events = {}, l) {
          for (n = 0, r = l[o].length; n < r; n++) {
            T.event.add(t, o, l[o][n]);
          }
        }
        Q.hasData(e) && (s = Q.access(e), u = T.extend({}, s), Q.set(t, u));
      }
    }

    function Fe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }

    function _e(e, t, n, r) {
      t = l.apply([], t);
      var o,
          i,
          a,
          s,
          u,
          c,
          p = 0,
          f = e.length,
          d = f - 1,
          h = t[0],
          m = y(h);
      if (m || f > 1 && "string" == typeof h && !v.checkClone && Oe.test(h)) return e.each(function (o) {
        var i = e.eq(o);
        m && (t[0] = h.call(this, o, i.html())), _e(i, t, n, r);
      });

      if (f && (i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
        for (s = (a = T.map(be(o, "script"), Re)).length; p < f; p++) {
          u = o, p !== d && (u = T.clone(u, !0, !0), s && T.merge(a, be(u, "script"))), n.call(e[p], u, p);
        }

        if (s) for (c = a[a.length - 1].ownerDocument, T.map(a, Me), p = 0; p < s; p++) {
          u = a[p], ve.test(u.type || "") && !K.access(u, "globalEval") && T.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? T._evalUrl && !u.noModule && T._evalUrl(u.src, {
            nonce: u.nonce || u.getAttribute("nonce")
          }) : w(u.textContent.replace(He, ""), u, c));
        }
      }

      return e;
    }

    function $e(e, t, n) {
      for (var r, o = t ? T.filter(t, e) : e, i = 0; null != (r = o[i]); i++) {
        n || 1 !== r.nodeType || T.cleanData(be(r)), r.parentNode && (n && se(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
      }

      return e;
    }

    T.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(Ie, "<$1></$2>");
      },
      clone: function clone(e, t, n) {
        var r,
            o,
            i,
            a,
            s = e.cloneNode(!0),
            u = se(e);
        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++) {
          Fe(i[r], a[r]);
        }
        if (t) if (n) for (i = i || be(e), a = a || be(s), r = 0, o = i.length; r < o; r++) {
          We(i[r], a[r]);
        } else We(e, s);
        return (a = be(s, "script")).length > 0 && xe(a, !u && be(e, "script")), s;
      },
      cleanData: function cleanData(e) {
        for (var t, n, r, o = T.event.special, i = 0; void 0 !== (n = e[i]); i++) {
          if (Y(n)) {
            if (t = n[K.expando]) {
              if (t.events) for (r in t.events) {
                o[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
              }
              n[K.expando] = void 0;
            }

            n[Q.expando] && (n[Q.expando] = void 0);
          }
        }
      }
    }), T.fn.extend({
      detach: function detach(e) {
        return $e(this, e, !0);
      },
      remove: function remove(e) {
        return $e(this, e);
      },
      text: function text(e) {
        return U(this, function (e) {
          return void 0 === e ? T.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return _e(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ze(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return _e(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = ze(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return _e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return _e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (T.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return T.clone(this, e, t);
        });
      },
      html: function html(e) {
        return U(this, function (e) {
          var t = this[0] || {},
              n = 0,
              r = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Pe.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = T.htmlPrefilter(e);

            try {
              for (; n < r; n++) {
                1 === (t = this[n] || {}).nodeType && (T.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return _e(this, arguments, function (t) {
          var n = this.parentNode;
          T.inArray(this, e) < 0 && (T.cleanData(be(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), T.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      T.fn[e] = function (e) {
        for (var n, r = [], o = T(e), i = o.length - 1, a = 0; a <= i; a++) {
          n = a === i ? this : this.clone(!0), T(o[a])[t](n), c.apply(r, n.get());
        }

        return this.pushStack(r);
      };
    });

    var Be = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        Ue = function Ue(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = n), t.getComputedStyle(e);
    },
        Xe = new RegExp(ie.join("|"), "i");

    function Ze(e, t, n) {
      var r,
          o,
          i,
          a,
          s = e.style;
      return (n = n || Ue(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || se(e) || (a = T.style(e, t)), !v.pixelBoxStyles() && Be.test(a) && Xe.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a;
    }

    function Ve(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (c) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(l).appendChild(c);
          var e = n.getComputedStyle(c);
          r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), c.style.position = "absolute", i = 12 === t(c.offsetWidth / 3), ae.removeChild(l), c = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var r,
          o,
          i,
          s,
          u,
          l = a.createElement("div"),
          c = a.createElement("div");
      c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(v, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), o;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), s;
        },
        pixelPosition: function pixelPosition() {
          return e(), r;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), u;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), i;
        }
      }));
    }();
    var Je = ["Webkit", "Moz", "ms"],
        Ye = a.createElement("div").style,
        Ge = {};

    function Ke(e) {
      var t = T.cssProps[e] || Ge[e];
      return t || (e in Ye ? e : Ge[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;) {
          if ((e = Je[n] + t) in Ye) return e;
        }
      }(e) || e);
    }

    var Qe = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function rt(e, t, n) {
      var r = oe.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }

    function ot(e, t, n, r, o, i) {
      var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
      if (n === (r ? "border" : "content")) return 0;

      for (; a < 4; a += 2) {
        "margin" === n && (u += T.css(e, n + ie[a], !0, o)), r ? ("content" === n && (u -= T.css(e, "padding" + ie[a], !0, o)), "margin" !== n && (u -= T.css(e, "border" + ie[a] + "Width", !0, o))) : (u += T.css(e, "padding" + ie[a], !0, o), "padding" !== n ? u += T.css(e, "border" + ie[a] + "Width", !0, o) : s += T.css(e, "border" + ie[a] + "Width", !0, o));
      }

      return !r && i >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u;
    }

    function it(e, t, n) {
      var r = Ue(e),
          o = (!v.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r),
          i = o,
          a = Ze(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);

      if (Be.test(a)) {
        if (!n) return a;
        a = "auto";
      }

      return (!v.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === T.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + ot(e, t, n || (o ? "border" : "content"), i, r, a) + "px";
    }

    function at(e, t, n, r, o) {
      return new at.prototype.init(e, t, n, r, o);
    }

    T.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var n = Ze(e, "opacity");
              return "" === n ? "1" : n;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, n, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
              i,
              a,
              s = J(t),
              u = et.test(t),
              l = e.style;
          if (u || (t = Ke(s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
          "string" === (i = _typeof(n)) && (o = oe.exec(n)) && o[1] && (n = pe(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (T.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
        }
      },
      css: function css(e, t, n, r) {
        var o,
            i,
            a,
            s = J(t);
        return et.test(t) || (t = Ke(s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ze(e, t, r)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o;
      }
    }), T.each(["height", "width"], function (e, t) {
      T.cssHooks[t] = {
        get: function get(e, n, r) {
          if (n) return !Qe.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, r) : ce(e, tt, function () {
            return it(e, t, r);
          });
        },
        set: function set(e, n, r) {
          var o,
              i = Ue(e),
              a = !v.scrollboxSize() && "absolute" === i.position,
              s = (a || r) && "border-box" === T.css(e, "boxSizing", !1, i),
              u = r ? ot(e, t, r, s, i) : 0;
          return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - ot(e, t, "border", !1, i) - .5)), u && (o = oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = T.css(e, t)), rt(0, n, u);
        }
      };
    }), T.cssHooks.marginLeft = Ve(v.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Ze(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), T.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      T.cssHooks[e + t] = {
        expand: function expand(n) {
          for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
            o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
          }

          return o;
        }
      }, "margin" !== e && (T.cssHooks[e + t].set = rt);
    }), T.fn.extend({
      css: function css(e, t) {
        return U(this, function (e, t, n) {
          var r,
              o,
              i = {},
              a = 0;

          if (Array.isArray(t)) {
            for (r = Ue(e), o = t.length; a < o; a++) {
              i[t[a]] = T.css(e, t[a], !1, r);
            }

            return i;
          }

          return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), T.Tween = at, at.prototype = {
      constructor: at,
      init: function init(e, t, n, r, o, i) {
        this.elem = e, this.prop = n, this.easing = o || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (T.cssNumber[n] ? "" : "px");
      },
      cur: function cur() {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            n = at.propHooks[this.prop];
        return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this;
      }
    }, at.prototype.init.prototype = at.prototype, at.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, T.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, T.fx = at.prototype.init, T.fx.step = {};
    var st,
        ut,
        lt = /^(?:toggle|show|hide)$/,
        ct = /queueHooks$/;

    function pt() {
      ut && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(pt) : n.setTimeout(pt, T.fx.interval), T.fx.tick());
    }

    function ft() {
      return n.setTimeout(function () {
        st = void 0;
      }), st = Date.now();
    }

    function dt(e, t) {
      var n,
          r = 0,
          o = {
        height: e
      };

      for (t = t ? 1 : 0; r < 4; r += 2 - t) {
        o["margin" + (n = ie[r])] = o["padding" + n] = e;
      }

      return t && (o.opacity = o.width = e), o;
    }

    function ht(e, t, n) {
      for (var r, o = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), i = 0, a = o.length; i < a; i++) {
        if (r = o[i].call(n, t, e)) return r;
      }
    }

    function mt(e, t, n) {
      var r,
          o,
          i = 0,
          a = mt.prefilters.length,
          s = T.Deferred().always(function () {
        delete u.elem;
      }),
          u = function u() {
        if (o) return !1;

        for (var t = st || ft(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), i = 0, a = l.tweens.length; i < a; i++) {
          l.tweens[i].run(r);
        }

        return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
      },
          l = s.promise({
        elem: e,
        props: T.extend({}, t),
        opts: T.extend(!0, {
          specialEasing: {},
          easing: T.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: st || ft(),
        duration: n.duration,
        tweens: [],
        createTween: function createTween(t, n) {
          var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function stop(t) {
          var n = 0,
              r = t ? l.tweens.length : 0;
          if (o) return this;

          for (o = !0; n < r; n++) {
            l.tweens[n].run(1);
          }

          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
        }
      }),
          c = l.props;

      for (!function (e, t) {
        var n, r, o, i, a;

        for (n in e) {
          if (o = t[r = J(n)], i = e[n], Array.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = T.cssHooks[r]) && ("expand" in a)) for (n in i = a.expand(i), delete e[r], i) {
            (n in e) || (e[n] = i[n], t[n] = o);
          } else t[r] = o;
        }
      }(c, l.opts.specialEasing); i < a; i++) {
        if (r = mt.prefilters[i].call(l, e, c, l.opts)) return y(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
      }

      return T.map(c, ht, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(u, {
        elem: e,
        anim: l,
        queue: l.opts.queue
      })), l;
    }

    T.Animation = T.extend(mt, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return pe(n.elem, e, oe.exec(t), n), n;
        }]
      },
      tweener: function tweener(e, t) {
        y(e) ? (t = e, e = ["*"]) : e = e.match(R);

        for (var n, r = 0, o = e.length; r < o; r++) {
          n = e[r], mt.tweeners[n] = mt.tweeners[n] || [], mt.tweeners[n].unshift(t);
        }
      },
      prefilters: [function (e, t, n) {
        var r,
            o,
            i,
            a,
            s,
            u,
            l,
            c,
            p = "width" in t || "height" in t,
            f = this,
            d = {},
            h = e.style,
            m = e.nodeType && le(e),
            g = K.get(e, "fxshow");

        for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
          a.unqueued || s();
        }), a.unqueued++, f.always(function () {
          f.always(function () {
            a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
          });
        })), t) {
          if (o = t[r], lt.test(o)) {
            if (delete t[r], i = i || "toggle" === o, o === (m ? "hide" : "show")) {
              if ("show" !== o || !g || void 0 === g[r]) continue;
              m = !0;
            }

            d[r] = g && g[r] || T.style(e, r);
          }
        }

        if ((u = !T.isEmptyObject(t)) || !T.isEmptyObject(d)) for (r in p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = g && g.display) && (l = K.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (he([e], !0), l = e.style.display || l, c = T.css(e, "display"), he([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (u || (f.done(function () {
          h.display = l;
        }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
          h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), u = !1, d) {
          u || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
            display: l
          }), i && (g.hidden = !m), m && he([e], !0), f.done(function () {
            for (r in m || he([e]), K.remove(e, "fxshow"), d) {
              T.style(e, r, d[r]);
            }
          })), u = ht(m ? g[r] : 0, r, f), r in g || (g[r] = u.start, m && (u.end = u.start, u.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
      }
    }), T.speed = function (e, t, n) {
      var r = e && "object" == _typeof(e) ? T.extend({}, e) : {
        complete: n || !n && t || y(e) && e,
        duration: e,
        easing: n && t || t && !y(t) && t
      };
      return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
        y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue);
      }, r;
    }, T.fn.extend({
      fadeTo: function fadeTo(e, t, n, r) {
        return this.filter(le).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, n, r);
      },
      animate: function animate(e, t, n, r) {
        var o = T.isEmptyObject(e),
            i = T.speed(t, n, r),
            a = function a() {
          var t = mt(this, T.extend({}, e), i);
          (o || K.get(this, "finish")) && t.stop(!0);
        };

        return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
      },
      stop: function stop(e, t, n) {
        var r = function r(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };

        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              o = null != e && e + "queueHooks",
              i = T.timers,
              a = K.get(this);
          if (o) a[o] && a[o].stop && r(a[o]);else for (o in a) {
            a[o] && a[o].stop && ct.test(o) && r(a[o]);
          }

          for (o = i.length; o--;) {
            i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
          }

          !t && n || T.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              n = K.get(this),
              r = n[e + "queue"],
              o = n[e + "queueHooks"],
              i = T.timers,
              a = r ? r.length : 0;

          for (n.finish = !0, T.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) {
            i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
          }

          for (t = 0; t < a; t++) {
            r[t] && r[t].finish && r[t].finish.call(this);
          }

          delete n.finish;
        });
      }
    }), T.each(["toggle", "show", "hide"], function (e, t) {
      var n = T.fn[t];

      T.fn[t] = function (e, r, o) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, r, o);
      };
    }), T.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      T.fn[e] = function (e, n, r) {
        return this.animate(t, e, n, r);
      };
    }), T.timers = [], T.fx.tick = function () {
      var e,
          t = 0,
          n = T.timers;

      for (st = Date.now(); t < n.length; t++) {
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      }

      n.length || T.fx.stop(), st = void 0;
    }, T.fx.timer = function (e) {
      T.timers.push(e), T.fx.start();
    }, T.fx.interval = 13, T.fx.start = function () {
      ut || (ut = !0, pt());
    }, T.fx.stop = function () {
      ut = null;
    }, T.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, T.fn.delay = function (e, t) {
      return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
        var o = n.setTimeout(t, e);

        r.stop = function () {
          n.clearTimeout(o);
        };
      });
    }, function () {
      var e = a.createElement("input"),
          t = a.createElement("select").appendChild(a.createElement("option"));
      e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value;
    }();
    var gt,
        vt = T.expr.attrHandle;
    T.fn.extend({
      attr: function attr(e, t) {
        return U(this, T.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          T.removeAttr(this, e);
        });
      }
    }), T.extend({
      attr: function attr(e, t, n) {
        var r,
            o,
            i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === i && T.isXMLDoc(e) || (o = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!v.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var n,
            r = 0,
            o = t && t.match(R);
        if (o && 1 === e.nodeType) for (; n = o[r++];) {
          e.removeAttribute(n);
        }
      }
    }), gt = {
      set: function set(e, t, n) {
        return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = vt[t] || T.find.attr;

      vt[t] = function (e, t, r) {
        var o,
            i,
            a = t.toLowerCase();
        return r || (i = vt[a], vt[a] = o, o = null != n(e, t, r) ? a : null, vt[a] = i), o;
      };
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;

    function xt(e) {
      return (e.match(R) || []).join(" ");
    }

    function wt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function kt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
    }

    T.fn.extend({
      prop: function prop(e, t) {
        return U(this, T.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[T.propFix[e] || e];
        });
      }
    }), T.extend({
      prop: function prop(e, t, n) {
        var r,
            o,
            i = e.nodeType;
        if (3 !== i && 8 !== i && 2 !== i) return 1 === i && T.isXMLDoc(e) || (t = T.propFix[t] || t, o = T.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = T.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), v.optSelected || (T.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      T.propFix[this.toLowerCase()] = this;
    }), T.fn.extend({
      addClass: function addClass(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u = 0;
        if (y(e)) return this.each(function (t) {
          T(this).addClass(e.call(this, t, wt(this)));
        });
        if ((t = kt(e)).length) for (; n = this[u++];) {
          if (o = wt(n), r = 1 === n.nodeType && " " + xt(o) + " ") {
            for (a = 0; i = t[a++];) {
              r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            }

            o !== (s = xt(r)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u = 0;
        if (y(e)) return this.each(function (t) {
          T(this).removeClass(e.call(this, t, wt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = kt(e)).length) for (; n = this[u++];) {
          if (o = wt(n), r = 1 === n.nodeType && " " + xt(o) + " ") {
            for (a = 0; i = t[a++];) {
              for (; r.indexOf(" " + i + " ") > -1;) {
                r = r.replace(" " + i + " ", " ");
              }
            }

            o !== (s = xt(r)) && n.setAttribute("class", s);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var n = _typeof(e),
            r = "string" === n || Array.isArray(e);

        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
          T(this).toggleClass(e.call(this, n, wt(this), t), t);
        }) : this.each(function () {
          var t, o, i, a;
          if (r) for (o = 0, i = T(this), a = kt(e); t = a[o++];) {
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          } else void 0 !== e && "boolean" !== n || ((t = wt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            n,
            r = 0;

        for (t = " " + e + " "; n = this[r++];) {
          if (1 === n.nodeType && (" " + xt(wt(n)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var Tt = /\r/g;
    T.fn.extend({
      val: function val(e) {
        var t,
            n,
            r,
            o = this[0];
        return arguments.length ? (r = y(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (null == (o = r ? e.call(this, n, T(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function (e) {
            return null == e ? "" : e + "";
          })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
        })) : o ? (t = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0;
      }
    }), T.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = T.find.attr(e, "value");
            return null != t ? t : xt(T.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                n,
                r,
                o = e.options,
                i = e.selectedIndex,
                a = "select-one" === e.type,
                s = a ? null : [],
                u = a ? i + 1 : o.length;

            for (r = i < 0 ? u : a ? i : 0; r < u; r++) {
              if (((n = o[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                if (t = T(n).val(), a) return t;
                s.push(t);
              }
            }

            return s;
          },
          set: function set(e, t) {
            for (var n, r, o = e.options, i = T.makeArray(t), a = o.length; a--;) {
              ((r = o[a]).selected = T.inArray(T.valHooks.option.get(r), i) > -1) && (n = !0);
            }

            return n || (e.selectedIndex = -1), i;
          }
        }
      }
    }), T.each(["radio", "checkbox"], function () {
      T.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1;
        }
      }, v.checkOn || (T.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), v.focusin = "onfocusin" in n;

    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        St = function St(e) {
      e.stopPropagation();
    };

    T.extend(T.event, {
      trigger: function trigger(e, t, r, o) {
        var i,
            s,
            u,
            l,
            c,
            p,
            f,
            d,
            m = [r || a],
            g = h.call(e, "type") ? e.type : e,
            v = h.call(e, "namespace") ? e.namespace.split(".") : [];

        if (s = d = u = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == _typeof(e) && e)).isTrigger = o ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), f = T.event.special[g] || {}, o || !f.trigger || !1 !== f.trigger.apply(r, t))) {
          if (!o && !f.noBubble && !b(r)) {
            for (l = f.delegateType || g, Ct.test(l + g) || (s = s.parentNode); s; s = s.parentNode) {
              m.push(s), u = s;
            }

            u === (r.ownerDocument || a) && m.push(u.defaultView || u.parentWindow || n);
          }

          for (i = 0; (s = m[i++]) && !e.isPropagationStopped();) {
            d = s, e.type = i > 1 ? l : f.bindType || g, (p = (K.get(s, "events") || {})[e.type] && K.get(s, "handle")) && p.apply(s, t), (p = c && s[c]) && p.apply && Y(s) && (e.result = p.apply(s, t), !1 === e.result && e.preventDefault());
          }

          return e.type = g, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), t) || !Y(r) || c && y(r[g]) && !b(r) && ((u = r[c]) && (r[c] = null), T.event.triggered = g, e.isPropagationStopped() && d.addEventListener(g, St), r[g](), e.isPropagationStopped() && d.removeEventListener(g, St), T.event.triggered = void 0, u && (r[c] = u)), e.result;
        }
      },
      simulate: function simulate(e, t, n) {
        var r = T.extend(new T.Event(), n, {
          type: e,
          isSimulated: !0
        });
        T.event.trigger(r, null, t);
      }
    }), T.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          T.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var n = this[0];
        if (n) return T.event.trigger(e, t, n, !0);
      }
    }), v.focusin || T.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var n = function n(e) {
        T.event.simulate(t, e.target, T.event.fix(e));
      };

      T.event.special[t] = {
        setup: function setup() {
          var r = this.ownerDocument || this,
              o = K.access(r, t);
          o || r.addEventListener(e, n, !0), K.access(r, t, (o || 0) + 1);
        },
        teardown: function teardown() {
          var r = this.ownerDocument || this,
              o = K.access(r, t) - 1;
          o ? K.access(r, t, o) : (r.removeEventListener(e, n, !0), K.remove(r, t));
        }
      };
    });
    var jt = n.location,
        Dt = Date.now(),
        Et = /\?/;

    T.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new n.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t;
    };

    var At = /\[\]$/,
        Nt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function It(e, t, n, r) {
      var o;
      if (Array.isArray(t)) T.each(t, function (t, o) {
        n || At.test(e) ? r(e, o) : It(e + "[" + ("object" == _typeof(o) && null != o ? t : "") + "]", o, n, r);
      });else if (n || "object" !== k(t)) r(e, t);else for (o in t) {
        It(e + "[" + o + "]", t[o], n, r);
      }
    }

    T.param = function (e, t) {
      var n,
          r = [],
          o = function o(e, t) {
        var n = y(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
        o(this.name, this.value);
      });else for (n in e) {
        It(n, e[n], t, o);
      }
      return r.join("&");
    }, T.fn.extend({
      serialize: function serialize() {
        return T.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = T.prop(this, "elements");
          return e ? T.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !T(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !me.test(e));
        }).map(function (e, t) {
          var n = T(this).val();
          return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
            return {
              name: t.name,
              value: e.replace(Nt, "\r\n")
            };
          }) : {
            name: t.name,
            value: n.replace(Nt, "\r\n")
          };
        }).get();
      }
    });

    var Pt = /%20/g,
        Ot = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Wt = {},
        Ft = {},
        _t = "*/".concat("*"),
        $t = a.createElement("a");

    function Bt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var r,
            o = 0,
            i = t.toLowerCase().match(R) || [];
        if (y(n)) for (; r = i[o++];) {
          "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        }
      };
    }

    function Ut(e, t, n, r) {
      var o = {},
          i = e === Ft;

      function a(s) {
        var u;
        return o[s] = !0, T.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || i || o[l] ? i ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
        }), u;
      }

      return a(t.dataTypes[0]) || !o["*"] && a("*");
    }

    function Xt(e, t) {
      var n,
          r,
          o = T.ajaxSettings.flatOptions || {};

      for (n in t) {
        void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      }

      return r && T.extend(!0, e, r), e;
    }

    $t.href = jt.href, T.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: jt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": _t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": T.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Xt(Xt(e, T.ajaxSettings), t) : Xt(T.ajaxSettings, e);
      },
      ajaxPrefilter: Bt(Wt),
      ajaxTransport: Bt(Ft),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var r,
            o,
            i,
            s,
            u,
            l,
            c,
            p,
            f,
            d,
            h = T.ajaxSetup({}, t),
            m = h.context || h,
            g = h.context && (m.nodeType || m.jquery) ? T(m) : T.event,
            v = T.Deferred(),
            y = T.Callbacks("once memory"),
            b = h.statusCode || {},
            x = {},
            w = {},
            k = "canceled",
            C = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (c) {
              if (!s) for (s = {}; t = zt.exec(i);) {
                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = s[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return c ? i : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (c) C.always(e[C.status]);else for (t in e) {
              b[t] = [b[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || k;
            return r && r.abort(t), S(0, t), this;
          }
        };

        if (v.promise(C), h.url = ((e || h.url || jt.href) + "").replace(Mt, jt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
          l = a.createElement("a");

          try {
            l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + "//" + $t.host != l.protocol + "//" + l.host;
          } catch (e) {
            h.crossDomain = !0;
          }
        }

        if (h.data && h.processData && "string" != typeof h.data && (h.data = T.param(h.data, h.traditional)), Ut(Wt, h, t, C), c) return C;

        for (f in (p = T.event && h.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Rt.test(h.type), o = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Et.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (Et.test(o) ? "&" : "?") + "_=" + Dt++ + d), h.url = o + d), h.ifModified && (T.lastModified[o] && C.setRequestHeader("If-Modified-Since", T.lastModified[o]), T.etag[o] && C.setRequestHeader("If-None-Match", T.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
          C.setRequestHeader(f, h.headers[f]);
        }

        if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || c)) return C.abort();

        if (k = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = Ut(Ft, h, t, C)) {
          if (C.readyState = 1, p && g.trigger("ajaxSend", [C, h]), c) return C;
          h.async && h.timeout > 0 && (u = n.setTimeout(function () {
            C.abort("timeout");
          }, h.timeout));

          try {
            c = !1, r.send(x, S);
          } catch (e) {
            if (c) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");

        function S(e, t, a, s) {
          var l,
              f,
              d,
              x,
              w,
              k = t;
          c || (c = !0, u && n.clearTimeout(u), r = void 0, i = s || "", C.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (x = function (e, t, n) {
            for (var r, o, i, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
              u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (r) for (o in s) {
              if (s[o] && s[o].test(r)) {
                u.unshift(o);
                break;
              }
            }
            if (u[0] in n) i = u[0];else {
              for (o in n) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                  i = o;
                  break;
                }

                a || (a = o);
              }

              i = i || a;
            }
            if (i) return i !== u[0] && u.unshift(i), n[i];
          }(h, C, a)), x = function (e, t, n, r) {
            var o,
                i,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) {
              l[a.toLowerCase()] = e.converters[a];
            }

            for (i = c.shift(); i;) {
              if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift()) if ("*" === i) i = u;else if ("*" !== u && u !== i) {
                if (!(a = l[u + " " + i] || l["* " + i])) for (o in l) {
                  if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                    break;
                  }
                }
                if (!0 !== a) if (a && e.throws) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + i
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(h, x, C, l), l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (T.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (T.etag[o] = w)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, f = x.data, l = !(d = x.error))) : (d = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || k) + "", l ? v.resolveWith(m, [f, k, C]) : v.rejectWith(m, [C, k, d]), C.statusCode(b), b = void 0, p && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? f : d]), y.fireWith(m, [C, k]), p && (g.trigger("ajaxComplete", [C, h]), --T.active || T.event.trigger("ajaxStop")));
        }

        return C;
      },
      getJSON: function getJSON(e, t, n) {
        return T.get(e, t, n, "json");
      },
      getScript: function getScript(e, t) {
        return T.get(e, void 0, t, "script");
      }
    }), T.each(["get", "post"], function (e, t) {
      T[t] = function (e, n, r, o) {
        return y(n) && (o = o || r, r = n, n = void 0), T.ajax(T.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: r
        }, T.isPlainObject(e) && e));
      };
    }), T._evalUrl = function (e, t) {
      return T.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          T.globalEval(e, t);
        }
      });
    }, T.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return y(e) ? this.each(function (t) {
          T(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = T(this),
              n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = y(e);
        return this.each(function (n) {
          T(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          T(this).replaceWith(this.childNodes);
        }), this;
      }
    }), T.expr.pseudos.hidden = function (e) {
      return !T.expr.pseudos.visible(e);
    }, T.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, T.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (e) {}
    };
    var Zt = {
      0: 200,
      1223: 204
    },
        Vt = T.ajaxSettings.xhr();
    v.cors = !!Vt && "withCredentials" in Vt, v.ajax = Vt = !!Vt, T.ajaxTransport(function (e) {
      var _t3, r;

      if (v.cors || Vt && !e.crossDomain) return {
        send: function send(o, i) {
          var a,
              s = e.xhr();
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
            s[a] = e.xhrFields[a];
          }

          for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
            s.setRequestHeader(a, o[a]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Zt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()));
            };
          }, s.onload = _t3(), r = s.onerror = s.ontimeout = _t3("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
            4 === s.readyState && n.setTimeout(function () {
              _t3 && r();
            });
          }, _t3 = _t3("abort");

          try {
            s.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), T.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), T.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return T.globalEval(e), e;
        }
      }
    }), T.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), T.ajaxTransport("script", function (e) {
      var t, _n;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(r, o) {
          t = T("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), a.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n && _n();
        }
      };
    });
    var Jt,
        Yt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Yt.pop() || T.expando + "_" + Dt++;
        return this[e] = !0, e;
      }
    }), T.ajaxPrefilter("json jsonp", function (e, t, r) {
      var o,
          i,
          a,
          s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + o) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return a || T.error(o + " was not called"), a[0];
      }, e.dataTypes[0] = "json", i = n[o], n[o] = function () {
        a = arguments;
      }, r.always(function () {
        void 0 === i ? T(n).removeProp(o) : n[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, Yt.push(o)), a && y(i) && i(a[0]), a = i = void 0;
      }), "script";
    }), v.createHTMLDocument = ((Jt = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), T.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), i = !n && [], (o = q.exec(e)) ? [t.createElement(o[1])] : (o = Ce([e], t, i), i && i.length && T(i).remove(), T.merge([], o.childNodes)));
      var r, o, i;
    }, T.fn.load = function (e, t, n) {
      var r,
          o,
          i,
          a = this,
          s = e.indexOf(" ");
      return s > -1 && (r = xt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (o = "POST"), a.length > 0 && T.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        i = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e);
      }).always(n && function (e, t) {
        a.each(function () {
          n.apply(this, i || [e.responseText, t, e]);
        });
      }), this;
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      T.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), T.expr.pseudos.animated = function (e) {
      return T.grep(T.timers, function (t) {
        return e === t.elem;
      }).length;
    }, T.offset = {
      setOffset: function setOffset(e, t, n) {
        var r,
            o,
            i,
            a,
            s,
            u,
            l = T.css(e, "position"),
            c = T(e),
            p = {};
        "static" === l && (e.style.position = "relative"), s = c.offset(), i = T.css(e, "top"), u = T.css(e, "left"), ("absolute" === l || "fixed" === l) && (i + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(u) || 0), y(t) && (t = t.call(e, n, T.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + o), "using" in t ? t.using.call(e, p) : c.css(p);
      }
    }, T.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          T.offset.setOffset(this, e, t);
        });
        var t,
            n,
            r = this[0];
        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              n,
              r = this[0],
              o = {
            top: 0,
            left: 0
          };
          if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect();else {
            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== r && 1 === e.nodeType && ((o = T(e).offset()).top += T.css(e, "borderTopWidth", !0), o.left += T.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - o.top - T.css(r, "marginTop", !0),
            left: t.left - o.left - T.css(r, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === T.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || ae;
        });
      }
    }), T.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var n = "pageYOffset" === t;

      T.fn[e] = function (r) {
        return U(this, function (e, r, o) {
          var i;
          if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === o) return i ? i[t] : e[r];
          i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o;
        }, e, r, arguments.length);
      };
    }), T.each(["top", "left"], function (e, t) {
      T.cssHooks[t] = Ve(v.pixelPosition, function (e, n) {
        if (n) return n = Ze(e, t), Be.test(n) ? T(e).position()[t] + "px" : n;
      });
    }), T.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      T.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (n, r) {
        T.fn[r] = function (o, i) {
          var a = arguments.length && (n || "boolean" != typeof o),
              s = n || (!0 === o || !0 === i ? "margin" : "border");
          return U(this, function (t, n, o) {
            var i;
            return b(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? T.css(t, n, s) : T.style(t, n, o, s);
          }, t, a ? o : void 0, a);
        };
      });
    }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      T.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
      };
    }), T.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), T.fn.extend({
      bind: function bind(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function undelegate(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      }
    }), T.proxy = function (e, t) {
      var n, r, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = u.call(arguments, 2), (o = function o() {
        return e.apply(t || this, r.concat(u.call(arguments)));
      }).guid = e.guid = e.guid || T.guid++, o;
    }, T.holdReady = function (e) {
      e ? T.readyWait++ : T.ready(!0);
    }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = N, T.isFunction = y, T.isWindow = b, T.camelCase = J, T.type = k, T.now = Date.now, T.isNumeric = function (e) {
      var t = T.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (r = function () {
      return T;
    }.apply(t, [])) || (e.exports = r);
    var Kt = n.jQuery,
        Qt = n.$;
    return T.noConflict = function (e) {
      return n.$ === T && (n.$ = Qt), e && n.jQuery === T && (n.jQuery = Kt), T;
    }, o || (n.jQuery = n.$ = T), T;
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r,
      o,
      i,
      a,
      s,
      u = n(0),
      l = n.n(u),
      c = "http://localhost:3004";

  function p(e) {
    if (0 === l()("#email-login").val().length && 0 === l()("#pass-login").val().length) d("Nie wpisałeś loginu i hasła. Wprowadź poprawne dane.");else {
      var t = l()("#email-login").val(),
          n = l()("#pass-login").val();
      fetch("".concat(c, "/users")).then(function (e) {
        return e.json();
      }).then(function (e) {
        return e.filter(function (e) {
          e.login === t && e.password === n ? (fetch("".concat(c, "/users/").concat(e.id), {
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            },
            method: "PUT",
            body: JSON.stringify({
              login: e.login,
              password: e.password,
              active: "yes"
            })
          }), l()(".login-box").css("display", "none"), l()("main").find("header").after(ee), g()) : d("Podane dane do logowania są nieprawidłowe.");
        });
      }).catch(function (e) {
        return console.log("Error ...", e);
      });
    }
    e.preventDefault();
  }

  function f(e) {
    l()(".basket-box").css("display", "none"), l()(".treatments-box").css("display", "none"), l()(".treatment-box").css("display", "none"), l()(".rooms-box").css("display", "none"), l()(".room-box").css("display", "none"), l()(".thanks-box-after-payment").css("display", "none"), fetch("".concat(c, "/users")).then(function (e) {
      return e.json();
    }).then(function (e) {
      for (var t = 0; t < e.length; t++) {
        "yes" === e[t].active && fetch("".concat(c, "/users/").concat(e[t].id), {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          method: "PUT",
          body: JSON.stringify({
            login: e[t].login,
            password: e[t].password,
            active: "no"
          })
        });
      }
    }).catch(function (e) {
      return console.log("Error ...", e);
    }), function () {
      l()('.menu-link:contains("Zabiegi")').css("visibility", "hidden"), l()('.menu-link:contains("Pokoje")').css("visibility", "hidden"), l()('.menu-link:contains("Wyloguj")').css("visibility", "hidden"), l()('.menu-link:contains("Logowanie")').css("visibility", "visible"), l()('.menu-link:contains("Rejestracja")').css("visibility", "visible"), l()('.menu-link:contains("Logowanie")').css("position", "relative"), l()('.menu-link:contains("Rejestracja")').css("position", "relative"), l()('.menu-link:contains("Logowanie")').css("right", 0), l()('.menu-link:contains("Rejestracja")').css("right", 0), l()("#welcome-text").css("display", "none"), l()("#logout").css("display", "none"), l()(".box-after-login").css("display", "none");
      var e = l()('<p class="slogan"><span class="pink">PigiSpa</span> zaprasza przepracowanych Front-End Developerów na zabiegi SPA!</p>');
      l()("header").append(e);
    }();
  }

  function d(e) {
    l()("#info-err").html(e), l()("#info-err").css("background-color", "rgba(255, 255, 255, 0.5)"), setTimeout(function () {
      l()("#info-err").css("display", "none");
    }, 3e3);
  }

  function h() {
    0 !== l()("#email").val().length && 0 !== l()("#pass").val().length && l()("span.weak").css("background-color", "#f504d5"), /(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test(l()("#pass").val()) && l()("span.average").css("background-color", "yellow"), /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{12,}/.test(l()("#pass").val()) && l()("span.strong").css("background-color", "greenyellow");
  }

  function m(e) {
    if (0 === l()("#email").val().length && 0 === l()("#pass").val().length && 0 === l()("#pass-repeat").val().length) d("Nie podałeś żadnych danych. Wprowadź dane do formularza.");else if (0 !== l()("#email").val().length && 0 !== l()("#pass").val().length && 0 !== l()("#pass-repeat").val().length && l()("#pass").val() === l()("#pass-repeat").val()) {
      var t = l()("#email").val(),
          n = l()("#pass").val(),
          r = [];
      fetch("".concat(c, "/users")).then(function (e) {
        return e.json();
      }).then(function (e) {
        for (var o = 0; o < e.length; o++) {
          e[o].login === t && r.push(t);
        }

        0 === r.length ? (fetch("".concat(c, "/users"), {
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
          method: "POST",
          body: JSON.stringify({
            login: "".concat(t),
            password: "".concat(n),
            active: "no"
          })
        }), l()("#email").val(""), l()("#pass").val(""), l()("#pass-repeat").val(""), l()("span.weak").css("background-color", "#fff"), l()("span.average").css("background-color", "#fff"), l()("span.strong").css("background-color", "#fff"), l()(".registration-box").css("display", "none"), l()("main").find("header").after(ne)) : d("Ten użytkownik jest już w naszej bazie.");
      }).catch(function (e) {
        return console.log("Error ...", e);
      });
    } else d("Hasła są różne. Wprowadź do obu pól to samo hasło.");
    e.preventDefault();
  }

  function g() {
    fetch("".concat(c, "/users")).then(function (e) {
      return e.json();
    }).then(function (e) {
      for (var t = 0; t < e.length; t++) {
        if ("yes" === e[t].active) {
          l()('.menu-link[style="visibility: hidden"]') && l()('.menu-link[style="visibility: hidden"]').css("visibility", "visible"), l()('.menu-link[style="visibility: visible"]') && l()('.menu-link[style="visibility: visible"]').css("visibility", "hidden"), l()('.menu-link:contains("Zabiegi")').css("position", "absolute"), l()('.menu-link:contains("Zabiegi")').css("right", "150px"), l()("nav").after('<p id="welcome-text">Panel użytkownika: <span>'.concat(e[t].login, "</span></p>"));
          var n = l()('<div id="login-box"></div>');
          l()("footer").append(n), n.append(G).append('<span class="span-btn" id="logout">Wyloguj</span>'), l()("#logout").on("click", f);
        }
      }
    });
  }

  var v = function v(e) {
    var t = new k();
    !function () {
      i = l()("#room-from").val(), a = l()("#room-to").val();
      var e = new Date(i),
          t = new Date(a).getTime() - e.getTime();
      s = t / 864e5;
    }(), S(), void 0 === l()("#room-from").val() ? (t.add({
      name: l()("#title").html(),
      count: l()(".num").val(),
      price: parseInt(l()(".product-price").html()) * parseInt(l()(".num").val())
    }), C(), b()) : (t.add({
      name: l()("#title").html(),
      count: l()(".num").val(),
      from: i,
      to: a,
      days: s,
      price: l()("#room-price").html(),
      valueAll: l()("#room-price").html() * parseInt(l()(".num").val()) * parseInt(s)
    }), T(), y()), e.preventDefault();
  },
      y = function y(e) {
    var t = parseInt(l()("#all-cost").html()) + l()("#room-price").html() * parseInt(l()(".num").val()) * parseInt(s);
    l()("#all-cost").html(t + " ZŁ");
  },
      b = function b(e) {
    var t = parseInt(l()("#all-cost").html()) + parseInt(l()(".product-price").html()) * parseInt(l()(".num").val());
    l()("#all-cost").html(t + " ZŁ");
  };

  function x(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  function w(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  var k = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.key = "IT_SPA_CART", this.exists() || this.setItSpaCart([]);
    }

    var t, n, r;
    return t = e, (n = [{
      key: "get",
      value: function value() {
        var e = this,
            t = document.cookie.split(";"),
            n = t.find(function (t) {
          return t.startsWith(e.key);
        }),
            r = t.find(function (t) {
          return t.startsWith(" " + e.key);
        });
        return n || r;
      }
    }, {
      key: "exists",
      value: function value() {
        return void 0 !== this.get();
      }
    }, {
      key: "getItSpaCart",
      value: function value() {
        var e;
        return e = "IT_SPA_CART" === this.get() ? this.get().slice(12) : this.get().slice(13), JSON.parse(e);
      }
    }, {
      key: "setItSpaCart",
      value: function value(e) {
        var t = JSON.stringify(e);
        document.cookie = "".concat(this.key, "=").concat(t);
      }
    }, {
      key: "add",
      value: function value(e) {
        var t = this.getItSpaCart();
        this.setItSpaCart([].concat(x(t), [e]));
      }
    }, {
      key: "remove",
      value: function value(e) {
        var t = this.getItSpaCart(),
            n = t.findIndex(function (t) {
          return t.name === e.name;
        });
        -1 !== n && (t.splice(n, 1), this.setItSpaCart(t));
      }
    }]) && w(t.prototype, n), r && w(t, r), e;
  }(),
      T = function T(e) {
    var t = l()('<li><span class="title">'.concat(l()("#title").html(), '</span> x <span class="quant">').concat(l()(".num").val(), '</span><br><span>od <span class="room-data" id="room-data-from">').concat(i, '</span> do <span class="room-data" id="room-data-to">').concat(a, "</span></span><br><span>Łączna ilość dni: <b>").concat(s, '</b></span><br><span class="room-price">Cena pokoju (').concat(l()("#room-price").html(), ' zł) * il. pokoi * il. dni:<span><br></span></span><p class="value">Łączna wartość: <span class="price">').concat(l()("#room-price").html() * parseInt(l()(".num").val()) * parseInt(s), '</span></p><span class="remove"></span></li>'));
    return l()("#basket-content").append(t), t;
  },
      C = function C(e) {
    var t = l()('<li><span class="title">'.concat(l()("#title").html(), '</span> x <span class="quant">\n    ').concat(l()(".num").val(), '</span><p class="value">Łączna wartość: <span class="price">').concat(parseInt(l()(".product-price").html()) * parseInt(l()(".num").val()), '</span><br></p><span class="remove"></span></li>'));
    return l()("#basket-content").append(t), t;
  },
      S = function S() {
    l()("#slogan-basket").css("display", "none"), l()("#all-value").removeClass("summary-text-not-display"), l()("#all-value").addClass("summary-text"), l()("#pay").removeClass("button-not-display");
  };

  function j(e) {
    e.preventDefault();
    var t = new k();

    if ("remove" === e.target.className) {
      var n = l()(e.target).parent(),
          r = n.children(".title").html();
      t.remove({
        name: r
      }), n.remove();
      var o = l()(e.target).prev(),
          i = parseInt(o.children(".price").html().trim()),
          a = parseInt(l()("#all-cost").html()) - i;
      l()("#all-cost").html("".concat(a, " ZŁ")), "0" === l()("#all-cost").html() && (l()("#slogan-basket").css("display", "block"), l()(".summary-text").css("display", "none"), l()("#pay").css("display", "none"));
    }
  }

  function D(e) {
    document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  var E,
      A,
      N,
      q,
      L,
      I,
      P,
      O,
      H,
      z,
      R,
      M,
      W,
      F,
      _,
      $,
      B,
      U,
      X,
      Z = function Z() {
    var e = l()(new DocumentFragment());
    J();
    var t = new k();
    if (t.exists()) for (var n = t.getItSpaCart(), r = 0; r < n.length; r++) {
      V(), $.append(E), n[r].from ? (E.append(A).append(L).append(I).append(P).append(O).append(z), O.append(H), U.html(parseInt(U.html()) + parseInt(H.html()) + " zł")) : (E.append(A).append(N).append(z), N.append(q), U.html(parseInt(U.html()) + parseInt(q.html()) + " zł")), t.getItSpaCart().length > 0 && (_.css("display", "none"), B.removeClass("summary-text-not-display"), B.addClass("summary-text"), X.removeClass("button-not-display"));
    }
    return e.append(R), B.append(U), F.append($), e;
  },
      V = function V() {
    for (var e = new k().getItSpaCart(), t = 0; t < e.length; t++) {
      E = l()('<li><span class="title">'.concat(e[t].name, "</span> x </li>")), A = l()('<span class="quant">'.concat(e[t].count, "</span>")), N = l()('<p class="value">Łączna wartość: </p>'), q = l()('<span class="price">'.concat(parseInt(e[t].price) * parseInt(e[t].count), "</span><br/>")), L = l()('<br/><span>od <span class="room-data" id="room-data-from">'.concat(e[t].from, '</span>\n  do <span class="room-data" id="room-data-to">').concat(e[t].to, "</span></span><br/>")), I = l()("<span>Łączna ilość dni: <b>".concat(e[t].days, "</b></span><br/>")), P = l()('<span class="room-price">Cena pokoju ('.concat(e[t].price, " zł) * il. pokoi * il. dni:<span><br/>")), O = l()('<p class="value">Łączna wartość: </p>'), H = l()('<span class="price">'.concat(e[t].valueAll, "</span>")), z = l()('<span class="remove"></span>');
    }
  },
      J = function J() {
    R = l()('<div class="basket-box"></div>'), M = l()('<span id="close-basket">x</span>'), W = l()('<h2 id="cartTitle">TWÓJ KOSZYK</h2>'), F = l()('<div id="basket-content-box"></div>'), _ = l()('<p id="slogan-basket">Załaduj coś do koszyka!</p>'), $ = l()('<ol id="basket-content"></ol>'), B = l()('<p id="all-value" class="summary-text-not-display">Do zapłaty: </p>'), U = l()('<span id="all-cost">0</span>'), X = l()('<button id="pay" class="button-not-display">Kupuję i płacę</button>'), M.on("click", function (e) {
      l()(".basket-box").css("display", "none"), e.preventDefault();
    }), X.on("click", function () {
      l()("main").find("header").after(K);
    }), $.on("click", j), R.append(M).append(W).append(F).append(_).append(B).append(X);
  },
      Y = n.p + "basket.png",
      G = function G() {
    var e = l()(new DocumentFragment()),
        t = l()('<a href="./" id="basket-mobile"></a>'),
        n = new Image();
    return n.src = Y, t.on("click", function (e) {
      l()(".basket-box").css("display", "flex"), e.preventDefault();
    }), e.append(t), t.append(n), t;
  },
      K = function K() {
    var e = l()(new DocumentFragment());
    l()(".rooms-box").css("display", "none"), l()(".room-box").css("display", "none"), l()(".treatments-box").css("display", "none"), l()(".treatment-box").css("display", "none"), l()(".value").css("display", "none"), l()(".room-price").css("display", "none"), l()(".remove").css("display", "none"), l()("#pay").css("display", "none"), l()("#all-value").html('TO WSZYSTKO ZA JEDYNE<br/> \n    <span id="purchase-price">'.concat(l()("#all-cost").html(), "</span>")), l()("#purchase-price").css("font-size", "30px"), l()("#purchase-price").css("color", "#e654f6");
    var t = l()('<div class="thanks-box-after-payment"><h2>Dziękujemy za rezerwację!</h2>\n  <p>Czekamy na Ciebie w PigiSpa! Nie zapomnij kąpielówek ;)</p></div>');
    return e.append(t).append(Z).append(le), D("IT_SPA_CART"), D(" IT_SPA_CART"), e;
  },
      Q = function Q() {
    var e = l()(new DocumentFragment()),
        t = l()('<form class="form" id="login-form"></form>'),
        n = l()('<input type="email" name="email-login" id="email-login" placeholder="Wpisz email">\n  <input type="password" name="pass-login" id="pass-login" placeholder="Wpisz hasło">'),
        r = l()('<button id="login-btn">Zaloguj mnie</button>');
    return r.on("click", p), e.append(t), t.append(n).append(r), e;
  },
      ee = function ee() {
    var e = l()(new DocumentFragment()),
        t = l()('<div class="box-after-login"></div>'),
        n = l()('<div class="welcome-box-after-login"></div>'),
        r = l()("<h2>Witaj w PigiSpa!</h2>"),
        o = l()("<p>Wybierz ulubione zabiegi i zarezerwuj pokój w dogodnym terminie.\n    Nasze świnki z PigiSpa już na Ciebie czekają ;)</p>\n</div>");
    return e.append(t), t.append(n), n.append(r).append(o), e;
  },
      te = function te() {
    var e = l()(new DocumentFragment()),
        t = l()('<form class="form" id="register-form"></form>'),
        n = l()('<input type="email" name="email" id="email" placeholder="Wpisz email" value="">'),
        r = l()('<input type="password" name="pass" id="pass" placeholder="Wpisz hasło" value="">'),
        o = l()('<input type="password" name="pass-check" id="pass-repeat" placeholder="Ponownie wpisz hasło" value="">'),
        i = l()('<p class="visualInfo">Siła hasła:\n    <span class="weak"></span>\n    <span class="average"></span>\n    <span class="strong"></span>\n  </p>'),
        a = l()('<p class="legend">\n    <span class="weakCol"></span> słabe\n    <span class="averageCol"></span> średnie\n    <span class="strongCol"></span> silne\n  </p>'),
        s = l()('<button id="register-btn">Zarejestruj mnie</button>');
    return n.change(h), r.change(h), s.on("click", m), e.append(t), t.append(n).append(r).append(o).append(i).append(a).append(s), e;
  },
      ne = function ne() {
    var e = l()(new DocumentFragment()),
        t = l()('<div class="welcome-box-after-register"></div>'),
        n = l()("<p>Zostałeś zarejestrowany.<br>Logując się uzyskasz dostęp do usług <b>PigiSpa</b> :)</p>");
    return e.append(t), t.append(n), e;
  },
      re = n.p + "pigiSpaLogo.png",
      oe = function oe() {
    var e = l()(new DocumentFragment()),
        t = l()('<a href="./" id="logo"></a>'),
        n = new Image();
    return n.src = re, e.append(t), t.append(n), t;
  },
      ie = function ie() {
    var e = l()(new DocumentFragment()),
        t = l()('<ul id="menu-list"></ul>'),
        n = de.map(function (e) {
      return ae(e);
    });
    return t.append(n), e.append(t), e;
  },
      ae = function ae(e) {
    var t,
        n,
        r = l()("<li></li>");

    for (var o in e.data) {
      t = o, n = e.data[o];
    }

    var i = l()('<a class="menu-link" style="'.concat(t, ": ").concat(n, '">').concat(e.name, "</a>"));
    return i.on("click", function (t) {
      t.preventDefault(), i.trigger("routechange", {
        path: e.path
      });
    }), r.append(i), r;
  },
      se = function se() {
    var e = oe,
        t = l()("<header><nav></nav></header>");
    return g(), t.append(e).find("nav").append(ie), t;
  },
      ue = n.p + "pigiSpa-logo-footer.png",
      le = function le() {
    var e = l()('<footer><a href="./" id="logo-small"></a></footer>'),
        t = new Image();
    return t.src = ue, e.find("a").append(t), e;
  },
      ce = function ce() {
    var e = l()(new DocumentFragment()),
        t = se(),
        n = l()('<p class="slogan">Strona z takim adresem nie istnieje :(</p>');
    return e.append(t).append(n).append(le), e;
  };

  function pe(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  var fe = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.routes = t, this.outlet, this.body = l()(document.body);
    }

    var t, n, r;
    return t = e, (n = [{
      key: "mount",
      value: function value(e) {
        var t = this;
        this.outlet = e, this.body.on("routechange", function (e, n) {
          var r = n.path;
          t.navigate(r);
        });
      }
    }, {
      key: "init",
      value: function value() {
        var e = location.pathname;
        this.navigate(e);
      }
    }, {
      key: "get",
      value: function value(e) {
        return this.routes.find(function (t) {
          return t.path === e;
        });
      }
    }, {
      key: "has",
      value: function value(e) {
        return void 0 !== this.get(e);
      }
    }, {
      key: "navigate",
      value: function value(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};

        if (this.has(e)) {
          var n = this.get(e),
              r = n.component,
              o = r();
          this.outlet.empty().append(o);
        } else {
          var i = ce();
          this.outlet.empty().append(i);
        }

        history.pushState(t, "", e);
      }
    }]) && pe(t.prototype, n), r && pe(t, r), e;
  }(),
      de = [{
    name: "Home",
    path: "/",
    component: function component() {
      var e = l()(new DocumentFragment()),
          t = se(),
          n = l()('<p class="slogan"><span class="pink">PigiSpa</span> zaprasza przepracowanych Front-End Developerów na zabiegi SPA!</p>');
      return e.append(t).append(n).append(le), e;
    },
    data: {
      display: "none"
    }
  }, {
    name: "Pokoje",
    path: "/rooms",
    component: function component() {
      var e = l()(new DocumentFragment()),
          t = l()('<div class="rooms-box"></div>'),
          n = l()("<h2>Dostępne pokoje:</h2>"),
          i = l()('<ol id="rooms-list"></ol>');
      return e.append(se).append(t).append(Z).append(le), t.append(n).append(i), fetch("".concat(c, "/rooms")).then(function (e) {
        return e.json();
      }).then(function (e) {
        e.map(function (e) {
          var n = '<li id="room_'.concat(e.id, '">').concat(e.name, "<span> &raquo;</span></li>");
          i.append(n), l()("#room_".concat(e.id)).on("click", function () {
            l()(".room-box").remove();
            var n,
                i,
                a,
                s,
                u,
                c = l()('<div class="room-box"></div>');

            if (n = new Date(), i = n.getFullYear(), a = n.getMonth() + 1, s = n.getDate(), u = i + 1, 1 === s.toString().length && (s = "0" + s), 1 === a.toString().length && (a = "0" + a), r = i.toString() + "-" + a.toString() + "-" + s.toString(), o = u.toString() + "-" + a.toString() + "-" + s.toString(), e.id) {
              var p = l()('<h2 id="title">'.concat(e.name, "</h2>")),
                  f = l()('<p>Ilość łóżek: <span id="beds-quantity">'.concat(e.beds, '</span>, \n            osób: <span id="persons-quantity">').concat(e.guests, '</span><br>\n            Cena pokoju: <span id="room-price" class="product-price">').concat(e.price, '</span> zł<br>\n            Data przyjazdu: <input id="room-from" type="date" min=').concat(r, " max=").concat(o, '><br>\n            Data wyjazdu: <input id="room-to" type="date" min=').concat(r, " max=").concat(o, '><br>\n            Ilość pokoi: <input id="room-num" class="num" type="number" min="1" max="10"></p>')),
                  d = l()('<button id="add-room">Wrzuć do kosza!</button>');
              d.on("click", v), c.append(p).append(f).append(d), t.after(c);
            }
          });
        });
      }).catch(function (e) {
        return console.log("Error ...", e);
      }), e;
    },
    data: {
      visibility: "hidden"
    }
  }, {
    name: "Zabiegi",
    path: "/treatments",
    component: function component() {
      var e = l()(new DocumentFragment()),
          t = l()('<div class="treatments-box"></div>'),
          n = l()("<h2>Dostępne zabiegi:</h2>"),
          r = l()('<ol id="treatments-list"></ol>');
      return e.append(se).append(t).append(Z).append(le), t.append(n).append(r), fetch("".concat(c, "/treatments")).then(function (e) {
        return e.json();
      }).then(function (e) {
        e.map(function (e) {
          var n = '<li id="treat_'.concat(e.id, '">').concat(e.name, "<span> &raquo;</span></li>");
          r.append(n), l()("#treat_".concat(e.id)).on("click", function () {
            l()(".treatment-box").remove();
            var n = l()('<div class="treatment-box"></div>');

            if (e.id) {
              var r = l()('<h2 id="title">'.concat(e.name, "</h2>")),
                  o = l()('<p>Zabieg obejmuje obszar: <span id="treat-area">'.concat(e.area, '</span><br>\n            Czas trwania zabiegu: <span id="treat-time">').concat(e.time, '</span> min.<br>\n            Cena zabiegu: <span id="treat-price" class="product-price">').concat(e.price, '</span> zł<br>\n            Ilość zabiegów: <input id="treatment-num" class="num" type="number" min="1" max="10"></p>')),
                  i = l()('<button id="add-treatment">Wrzuć do kosza!</button>');
              i.on("click", v), n.append(r).append(o).append(i), t.after(n);
            }
          });
        });
      }).catch(function (e) {
        return console.log("Error ...", e);
      }), e;
    },
    data: {
      visibility: "hidden"
    }
  }, {
    name: "Logowanie",
    path: "/login",
    component: function component() {
      var e = l()(new DocumentFragment()),
          t = l()('<div class="login-box"></div>'),
          n = l()("<h2>Zaloguj się</h2>"),
          r = l()('<div id="info-err"></div>'),
          o = Q;
      return e.append(se).append(t).append(le), t.append(n).append(r).append(o), e;
    },
    data: {
      visibility: "visible"
    }
  }, {
    name: "Rejestracja",
    path: "/registration",
    component: function component() {
      var e = l()(new DocumentFragment()),
          t = l()('<div class="registration-box"></div'),
          n = l()("<h2>Zarejestruj się</h2>"),
          r = l()('<div id="info-err"></div>'),
          o = te;
      return e.append(se).append(t).append(le), t.append(n).append(r).append(o), e;
    },
    data: {
      visibility: "visible"
    }
  }],
      he = l()("main"),
      me = new fe(de);

  me.mount(he), me.init();
}]);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56364" + '/');

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