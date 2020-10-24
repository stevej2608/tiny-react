(()=>{"use strict";var n={87:(n,r,e)=>{e.d(r,{Z:()=>A});var a=e(15),t=e.n(a),i=e(645),o=e.n(i)()(t());o.push([n.id,"body {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #fff;\r\n  font-family: 'Open Sans', Helvetica, sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 50px 1fr 50px;\r\n  grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n  height: 100vh;\r\n}\r\n\r\n.menu-icon {\r\n  position: fixed; /* Needs to stay visible for all mobile scrolling */\r\n  display: flex;\r\n  top: 5px;\r\n  left: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #DADAE3;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  padding: 12px;\r\n}\r\n\r\n/* Give every child element its grid name */\r\n.header {\r\n  grid-area: header;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 16px;\r\n  background-color: #648ca6;\r\n}\r\n\r\n/* Make room for the menu icon on mobile */\r\n.header__search {\r\n  margin-left: 42px;\r\n}\r\n\r\n.sidenav {\r\n  grid-area: sidenav;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 240px;\r\n  position: fixed;\r\n  overflow-y: auto;\r\n  transform: translateX(-245px);\r\n  transition: all .6s ease-in-out;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n  z-index: 2; /* Needs to sit above the hamburger menu icon */\r\n  background-color: #394263;\r\n}\r\n\r\n.sidenav.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.sidenav__close-icon {\r\n  position: absolute;\r\n  visibility: visible;\r\n  top: 8px;\r\n  right: 12px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  color: #ddd;\r\n}\r\n\r\n.sidenav__list {\r\n  padding: 0;\r\n  margin-top: 85px;\r\n  list-style-type: none;\r\n}\r\n\r\n.sidenav__list-item {\r\n  padding: 20px 20px 20px 40px;\r\n  color: #ddd;\r\n}\r\n\r\n.sidenav__list-item:hover {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.main {\r\n  grid-area: main;\r\n  background-color: #8fd4d9;\r\n}\r\n\r\n.main-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 20px;\r\n  padding: 20px;\r\n  height: 150px;\r\n  background-color: #e3e4e6;\r\n  color: slategray;\r\n}\r\n\r\n.main-overview {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));\r\n  grid-auto-rows: 94px;\r\n  grid-gap: 20px;\r\n  margin: 20px;\r\n}\r\n\r\n.overviewcard {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n  background-color: #d3d3;\r\n}\r\n\r\n.main-cards {\r\n  column-count: 1;\r\n  column-gap: 20px;\r\n  margin: 20px;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #82bef6;\r\n  margin-bottom: 20px;\r\n  -webkit-column-break-inside: avoid;\r\n  padding: 24px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Force varying heights to simulate dynamic content */\r\n.card:first-child {\r\n  height: 485px;\r\n}\r\n\r\n.card:nth-child(2) {\r\n  height: 200px;\r\n}\r\n\r\n.card:nth-child(3) {\r\n  height: 265px;\r\n}\r\n\r\n.footer {\r\n  grid-area: footer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 16px;\r\n  background-color: #648ca6;\r\n}\r\n\r\n/* Non-mobile styles, 750px breakpoint */\r\n@media only screen and (min-width: 46.875em) {\r\n  /* Show the sidenav */\r\n  .grid-container {\r\n    grid-template-columns: 240px 1fr;\r\n    grid-template-areas:\r\n      \"sidenav header\"\r\n      \"sidenav main\"\r\n      \"sidenav footer\";\r\n  }\r\n\r\n  .header__search {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .sidenav {\r\n    position: relative;\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .sidenav__close-icon {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/* Medium screens breakpoint (1050px) */\r\n@media only screen and (min-width: 65.625em) {\r\n  /* Break out main cards into two columns */\r\n  .main-cards {\r\n    column-count: 2;\r\n  }\r\n}\r\n","",{version:3,sources:["webpack://src/App.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,WAAW;EACX,+CAA+C;EAC/C,sBAAsB;AACxB;;AAEA,2FAA2F;AAC3F;EACE,aAAa;EACb,0BAA0B;EAC1B,iCAAiC;EACjC;;;YAGU;EACV,aAAa;AACf;;AAEA;EACE,eAAe,EAAE,mDAAmD;EACpE,aAAa;EACb,QAAQ;EACR,UAAU;EACV,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,eAAe;EACf,aAAa;AACf;;AAEA,2CAA2C;AAC3C;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,yBAAyB;AAC3B;;AAEA,0CAA0C;AAC1C;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,6BAA6B;EAC7B,+BAA+B;EAC/B,0EAA0E;EAC1E,UAAU,EAAE,+CAA+C;EAC3D,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,QAAQ;EACR,WAAW;EACX,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,0CAA0C;EAC1C,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,oBAAoB;EACpB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,kCAAkC;EAClC,aAAa;EACb,sBAAsB;AACxB;;AAEA,sDAAsD;AACtD;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,yBAAyB;AAC3B;;AAEA,wCAAwC;AACxC;EACE,qBAAqB;EACrB;IACE,gCAAgC;IAChC;;;sBAGkB;EACpB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,uCAAuC;AACvC;EACE,0CAA0C;EAC1C;IACE,eAAe;EACjB;AACF",sourcesContent:["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #fff;\r\n  font-family: 'Open Sans', Helvetica, sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Assign grid instructions to our parent grid container, mobile-first (hide the sidenav) */\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 50px 1fr 50px;\r\n  grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n  height: 100vh;\r\n}\r\n\r\n.menu-icon {\r\n  position: fixed; /* Needs to stay visible for all mobile scrolling */\r\n  display: flex;\r\n  top: 5px;\r\n  left: 10px;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #DADAE3;\r\n  border-radius: 50%;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  padding: 12px;\r\n}\r\n\r\n/* Give every child element its grid name */\r\n.header {\r\n  grid-area: header;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 16px;\r\n  background-color: #648ca6;\r\n}\r\n\r\n/* Make room for the menu icon on mobile */\r\n.header__search {\r\n  margin-left: 42px;\r\n}\r\n\r\n.sidenav {\r\n  grid-area: sidenav;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  width: 240px;\r\n  position: fixed;\r\n  overflow-y: auto;\r\n  transform: translateX(-245px);\r\n  transition: all .6s ease-in-out;\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n  z-index: 2; /* Needs to sit above the hamburger menu icon */\r\n  background-color: #394263;\r\n}\r\n\r\n.sidenav.active {\r\n  transform: translateX(0);\r\n}\r\n\r\n.sidenav__close-icon {\r\n  position: absolute;\r\n  visibility: visible;\r\n  top: 8px;\r\n  right: 12px;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  color: #ddd;\r\n}\r\n\r\n.sidenav__list {\r\n  padding: 0;\r\n  margin-top: 85px;\r\n  list-style-type: none;\r\n}\r\n\r\n.sidenav__list-item {\r\n  padding: 20px 20px 20px 40px;\r\n  color: #ddd;\r\n}\r\n\r\n.sidenav__list-item:hover {\r\n  background-color: rgba(255, 255, 255, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.main {\r\n  grid-area: main;\r\n  background-color: #8fd4d9;\r\n}\r\n\r\n.main-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 20px;\r\n  padding: 20px;\r\n  height: 150px;\r\n  background-color: #e3e4e6;\r\n  color: slategray;\r\n}\r\n\r\n.main-overview {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));\r\n  grid-auto-rows: 94px;\r\n  grid-gap: 20px;\r\n  margin: 20px;\r\n}\r\n\r\n.overviewcard {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n  background-color: #d3d3;\r\n}\r\n\r\n.main-cards {\r\n  column-count: 1;\r\n  column-gap: 20px;\r\n  margin: 20px;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #82bef6;\r\n  margin-bottom: 20px;\r\n  -webkit-column-break-inside: avoid;\r\n  padding: 24px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Force varying heights to simulate dynamic content */\r\n.card:first-child {\r\n  height: 485px;\r\n}\r\n\r\n.card:nth-child(2) {\r\n  height: 200px;\r\n}\r\n\r\n.card:nth-child(3) {\r\n  height: 265px;\r\n}\r\n\r\n.footer {\r\n  grid-area: footer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0 16px;\r\n  background-color: #648ca6;\r\n}\r\n\r\n/* Non-mobile styles, 750px breakpoint */\r\n@media only screen and (min-width: 46.875em) {\r\n  /* Show the sidenav */\r\n  .grid-container {\r\n    grid-template-columns: 240px 1fr;\r\n    grid-template-areas:\r\n      \"sidenav header\"\r\n      \"sidenav main\"\r\n      \"sidenav footer\";\r\n  }\r\n\r\n  .header__search {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .sidenav {\r\n    position: relative;\r\n    transform: translateX(0);\r\n  }\r\n\r\n  .sidenav__close-icon {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/* Medium screens breakpoint (1050px) */\r\n@media only screen and (min-width: 65.625em) {\r\n  /* Break out main cards into two columns */\r\n  .main-cards {\r\n    column-count: 2;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const A=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,a){"string"==typeof n&&(n=[[null,n,""]]);var t={};if(a)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(t[o]=!0)}for(var A=0;A<n.length;A++){var s=[].concat(n[A]);a&&t[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),r.push(s))}},r}},15:n=>{function r(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=n[e];return a}n.exports=function(n){var e,a,t=(a=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],a=!0,t=!1,i=void 0;try{for(var o,A=n[Symbol.iterator]();!(a=(o=A.next()).done)&&(e.push(o.value),!r||e.length!==r);a=!0);}catch(n){t=!0,i=n}finally{try{a||null==A.return||A.return()}finally{if(t)throw i}}return e}}(e,a)||function(n,e){if(n){if("string"==typeof n)return r(n,e);var a=Object.prototype.toString.call(n).slice(8,-1);return"Object"===a&&n.constructor&&(a=n.constructor.name),"Map"===a||"Set"===a?Array.from(n):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(n,e):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[1],o=t[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),c="/*# ".concat(s," */"),d=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[i].concat(d).concat([c]).join("\n")}return[i].join("\n")}},379:(n,r,e)=>{var a,t=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function o(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function A(n,r){for(var e={},a=[],t=0;t<n.length;t++){var A=n[t],s=r.base?A[0]+r.base:A[0],c=e[s]||0,d="".concat(s," ").concat(c);e[s]=c+1;var l=o(d),m={css:A[1],media:A[2],sourceMap:A[3]};-1!==l?(i[l].references++,i[l].updater(m)):i.push({identifier:d,updater:f(m,r),references:1}),a.push(d)}return a}function s(n){var r=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=e.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){r.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(r);else{var o=t(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var c,d=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function l(n,r,e,a){var t=e?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=d(r,t);else{var i=document.createTextNode(t),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(i,o[r]):n.appendChild(i)}}function m(n,r,e){var a=e.css,t=e.media,i=e.sourceMap;if(t?n.setAttribute("media",t):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var p=null,u=0;function f(n,r){var e,a,t;if(r.singleton){var i=u++;e=p||(p=s(r)),a=l.bind(null,e,i,!1),t=l.bind(null,e,i,!0)}else e=s(r),a=m.bind(null,e,r),t=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return a(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;a(n=r)}else t()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var e=A(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<e.length;a++){var t=o(e[a]);i[t].references--}for(var s=A(n,r),c=0;c<e.length;c++){var d=o(e[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}e=s}}}}},r={};function e(a){if(r[a])return r[a].exports;var t=r[a]={id:a,exports:{}};return n[a](t,t.exports,e),t.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var a in r)e.o(r,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:r[a]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;!function(n){n.createElement=function(n,r){for(var e=[],a=2;a<arguments.length;a++)e[a-2]=arguments[a];function t(n,r){r instanceof Node||(r=document.createTextNode(r.toString())),n.appendChild(r)}if("function"==typeof n){var i=n(r||{});return i}var o=document.createElement(n);return Object.entries(r||{}).forEach((function(n){var r=n[0],e=n[1];r.startsWith("on")&&r.toLowerCase()in window?o.addEventListener(r.toLowerCase().substr(2),e):(e=e.toString(),"className"==r?o.className=e:o.setAttribute(r,e))})),e.forEach((function(n){return Array.isArray(n)?n.forEach((function(n){return t(o,n)})):t(o,n)})),r&&r.ref&&r.ref(o),o}}(n||(n={}));const r=n,a=function(){function n(){}return n.render=function(n,r){console.log("ReactDOM.render()"),r.appendChild(n)},n}();var t=e(379),i=e.n(t),o=e(87);function A(n){return r.createElement("aside",{className:"sidenav",ref:n.ref,onClick:n.onClick},r.createElement("div",{className:"sidenav__close-icon"},r.createElement("i",{className:"fas fa-times sidenav__brand-close"})),r.createElement("ul",{className:"sidenav__list"},r.createElement("li",{className:"sidenav__list-item"},"Item One"),r.createElement("li",{className:"sidenav__list-item"},"Item Two"),r.createElement("li",{className:"sidenav__list-item"},"Item Three"),r.createElement("li",{className:"sidenav__list-item"},"Item Four"),r.createElement("li",{className:"sidenav__list-item"},"Item Five")))}i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var s=document.getElementById("root");a.render(r.createElement((function(n){var e;function a(n,r){n.classList.contains(r)?n.classList.remove(r):n.classList.add(r)}return n.greeting,console.log("render()"),r.createElement("div",{className:"grid-container"},r.createElement("div",{className:"menu-icon"},r.createElement("i",{className:"fas fa-bars header__menu",onClick:function(){a(e,"active")}})),r.createElement("header",{className:"header"},r.createElement("div",{className:"header__search"},"Search..."),r.createElement("div",{className:"header__avatar"},"Your face")),r.createElement(A,{ref:function(n){return e=n},onClick:function(){a(e,"active")}}),r.createElement("main",{className:"main"},r.createElement("div",{className:"main-header"},r.createElement("div",{className:"main-header__heading"},"Hello User"),r.createElement("div",{className:"main-header__updates"},"Recent Items")),r.createElement("div",{className:"main-overview"},r.createElement("div",{className:"overviewcard"},r.createElement("div",{className:"overviewcard__icon"},"Overview"),r.createElement("div",{className:"overviewcard__info"},"Card")),r.createElement("div",{className:"overviewcard"},r.createElement("div",{className:"overviewcard__icon"},"Overview"),r.createElement("div",{className:"overviewcard__info"},"Card")),r.createElement("div",{className:"overviewcard"},r.createElement("div",{className:"overviewcard__icon"},"Overview"),r.createElement("div",{className:"overviewcard__info"},"Card")),r.createElement("div",{className:"overviewcard"},r.createElement("div",{className:"overviewcard__icon"},"Overview"),r.createElement("div",{className:"overviewcard__info"},"Card"))),r.createElement("div",{className:"main-cards"},r.createElement("div",{className:"card"},"Card"),r.createElement("div",{className:"card"},"Card"),r.createElement("div",{className:"card"},"Card"))),r.createElement("footer",{className:"footer"},r.createElement("div",{className:"footer__copyright"},"© 2018 MTH"),r.createElement("div",{className:"footer__signature"},"Made with love by pure genius")))}),{greeting:"Hello Typescript, tinyReact and Webpack 5"}),s)})()})();
//# sourceMappingURL=app.bundle.js.map