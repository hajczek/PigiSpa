!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=n.p+"pigiSpaLogo.png",l=n.p+"pigiSpa-logo-footer.png",r=new Image;r.src=o,document.querySelector("#logo").appendChild(r);var a=new Image;a.src=l,document.querySelector("#logo-small").appendChild(a);var u=document.getElementById("email"),c=document.getElementById("pass"),d=document.getElementById("pass-repeat"),i=document.getElementById("info-err"),s=document.getElementById("register-btn"),g=document.querySelector(".weak"),m=document.querySelector(".average"),v=document.querySelector(".strong");function p(e){e.preventDefault(),""!==u.value&&""!==c.value&&(console.log("it work"),g.style.backgroundColor="#f504d5"),/(?=.*?[A-Z])(?=.*?[a-z]).{8,}/.test(c.value)&&(m.style.backgroundColor="yellow"),/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{12,}/.test(c.value)&&(v.style.backgroundColor="greenyellow")}u&&u.addEventListener("input",p),c&&c.addEventListener("input",p),s&&s.addEventListener("click",(function(e){e.preventDefault(),""!==u.value&&pass.value===d.value?(console.log("Zapisz dane w bazie"),u.value="",pass.value="",d.value=""):(i.innerHTML="Hasła są różne. Wprowadź do obu pól takie same hasła.",i.style.backgroundColor="rgba(255, 255, 255, 0.5)",setTimeout((function(){i.style.display="none"}),3e3),console.log(c.value),console.log(d.value),console.log(i.value===d.value))}));var f=document.getElementById("email-login"),y=document.getElementById("pass-login"),E=document.getElementById("login-btn");E&&E.addEventListener("click",(function(e){e.preventDefault(),""===f.value&&""===y.value?(i.innerHTML="Nie wpisałeś loginu i hasła. Wprowadź poprawne dane.",i.style.backgroundColor="rgba(255, 255, 255, 0.5)",setTimeout((function(){i.style.display="none"}),3e3)):console.log("Zalogowano")}));var b=document.getElementById("treatments");b&&b.addEventListener("click",(function(e){e.preventDefault(),console.log("Kliknięto w pozycję Zabiegi")}));var I=document.getElementById("treatments-list");I&&I.addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.childNodes.item(0).nodeValue)}));var k=document.getElementById("rooms");k&&k.addEventListener("click",(function(e){e.preventDefault(),console.log("Kliknięto w pozycję Pokoje")}));var B=document.getElementById("rooms-list");B&&B.addEventListener("click",(function(e){e.preventDefault(),console.log(e.target.childNodes.item(0).nodeValue)}));var w=document.getElementById("add-treatment");w&&w.addEventListener("click",(function(e){e.preventDefault(),console.log("Added treatment to basket")}));var L=document.getElementById("add-room");L&&L.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("title").innerHTML;console.log(t);var n=new Date(document.getElementById("room-from").value);console.log(n);var o=new Date(document.getElementById("room-to").value);console.log(o);var l=parseInt(document.getElementById("room-price").innerHTML);console.log(l);var r=parseInt((o-n)/864e5);console.log(r);var a=r*l;console.log(a)}))}]);