"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{538:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,'/*******************\r\n Box Sizing\r\n *******************/\r\nhtml {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n/****************************\r\n Generic Margins and Paddings\r\n ****************************/\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nul,\r\nol,\r\nli,\r\np,\r\npre,\r\nblockquote,\r\nfigure,\r\nhr {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n/*******************\r\n Lists\r\n *******************/\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n/*******************\r\n Forms and buttons\r\n *******************/\r\ninput,\r\ntextarea,\r\nselect,\r\nbutton {\r\n  color: inherit;\r\n  font: inherit;\r\n  letter-spacing: inherit;\r\n}\r\n\r\n/* I usually expand input and textarea to full-width */\r\ninput[type="text"],\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\n/* More friendly border */\r\ninput,\r\ntextarea,\r\nbutton {\r\n  border: 1px solid gray;\r\n}\r\n\r\n/* Some defaults for one-liner buttons */\r\nbutton {\r\n  padding: 0.75em 1em;\r\n  border-radius: 0;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n}\r\n\r\nbutton * {\r\n  pointer-events: none;\r\n}\r\n\r\n/***********************************\r\n Easy responsive for media elements\r\n ***********************************/\r\nimg,\r\nsvg,\r\niframe,\r\nvideo,\r\nobject,\r\nembed {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n/*******************\r\n Useful table styles\r\n *******************/\r\ntable {\r\n  table-layout: fixed;\r\n  width: 100%;\r\n}\r\n\r\n/*******************\r\n The hidden attribute\r\n *******************/\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n\r\n/*******************\r\n Noscript\r\n *******************/\r\nnoscript {\r\n  display: block;\r\n  margin-bottom: 1em;\r\n  margin-top: 1em;\r\n}\r\n\r\n/*******************\r\n Focus\r\n *******************/\r\n[tabindex="-1"] {\r\n  outline: none !important;\r\n}\r\n',""]);const s=a},740:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),s=e(538),d=e(667),l=e.n(d),c=new URL(e(912),e.b),p=new URL(e(634),e.b),u=new URL(e(636),e.b),f=a()(o());f.i(s.Z);var m=l()(c),h=l()(p),b=l()(u);f.push([n.id,"/* import reset.css */\r\n\r\n/* import fonts */\r\n\r\n/* Open Sans regular font */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  src: url("+m+") format('TrueType');\r\n  font-weight: 400;\r\n}\r\n\r\n/* Open Sans medium font */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  src: url("+h+") format('TrueType');\r\n  font-weight: 500;\r\n}\r\n\r\n/* Open Sans bold font */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  src: url("+b+") format('TrueType');\r\n  font-weight: 700;\r\n}\r\n\r\n/* Global styles\r\n------------------------------------ */\r\n:root {\r\n  /* Default font size */\r\n  font-size: 16px;\r\n\r\n  /* custom font family */\r\n  --primary-ff: 'Open Sans', sans-serif;\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: var(--primary-ff);\r\n  font-weight: 400;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  margin-inline: auto;\r\n  padding-inline: 10px;\r\n}\r\n\r\n.container > * {\r\n  max-width: 100%;\r\n}\r\n\r\n.container > main {\r\n  margin-block: auto;\r\n}\r\n\r\n.container > :first-child:not(main) {\r\n  margin-block-start: 0;\r\n}\r\n\r\n.container > :last-child:not(main) {\r\n  margin-block-end: 0;\r\n}\r\n\r\n/* MAIN STYLING\r\n------------------------------------ */\r\n.main__page-title {\r\n  margin-block-end: 2rem;\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  text-align: center;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 500px;\r\n  margin-inline: auto;\r\n  background-color: #fff;\r\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\r\n  border-radius: 10px;\r\n}\r\n\r\n.todos > * + *,\r\n.todos__body > * + * {\r\n  border-block-start: 2px solid #f6f6f6;\r\n}\r\n\r\n.todos__header {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1em;\r\n}\r\n\r\n.todos__header-title {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.todos__header-icon {\r\n  width: 1.125rem;\r\n  height: auto;\r\n}\r\n\r\n.todos__body {\r\n  font-size: 1rem;\r\n}\r\n\r\n.todos__form {\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.todos__form * {\r\n  width: 100%;\r\n  padding-block: 1em;\r\n  font-style: italic;\r\n  border: none;\r\n}\r\n\r\n.todos__label {\r\n  position: relative;\r\n}\r\n\r\n.todos__label-input {\r\n  opacity: 0.5;\r\n}\r\n\r\n.todos__input-img {\r\n  position: absolute;\r\n  inset-inline-end: 0;\r\n  inset-block-start: 0;\r\n  width: 15px;\r\n  height: auto;\r\n}\r\n\r\n.todos__label-input:focus-visible {\r\n  opacity: 1;\r\n  outline: none;\r\n}\r\n\r\n.todo__item {\r\n  position: relative;\r\n}\r\n\r\n.todo__btn-check {\r\n  position: absolute;\r\n  inset-inline-start: 0;\r\n  inset-inline-start: 0;\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  border: 2px solid #9D9D9D;\r\n}\r\n\r\n.todo__label:focus-within {\r\n  background-color: #FFFED7;\r\n}\r\n\r\n.todo__btn-img {\r\n  display: none;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.todo__btn-check.checked {\r\n  border: none;\r\n}\r\n\r\n.todo__btn-img.checked {\r\n  display: block;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  border: none;\r\n  resize: none;\r\n  background: transparent;\r\n  padding-inline-start: 3rem;\r\n}\r\n\r\n.todo.completed {\r\n  text-decoration: line-through;\r\n  opacity: 0.5;\r\n}\r\n\r\n.todo:focus-visible,\r\n.todo.completed:focus-visible {\r\n  outline: none;\r\n  text-decoration: none;\r\n  opacity: 1;\r\n}\r\n\r\n.todo__btn-delete,\r\n.todo__btn-more {\r\n  width: 30px;\r\n  height: auto;\r\n}\r\n\r\n.todo__btn-delete {\r\n  display: none;\r\n  inset-inline-end: 1rem;\r\n}\r\n\r\n.todo__btn-more {\r\n  cursor:move;\r\n  opacity: 0.5;\r\n}\r\n\r\n.todo__btn-more:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.todo__item:focus-within .todo__btn-delete {\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo__item:focus-within .todo__btn-more {\r\n  display: none;\r\n}\r\n\r\n.todo__footer {\r\n  background-color: #f6f6f6;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n.todo__clear-btn {\r\n  font-size: 1rem;\r\n  color: #808080;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.todo__clear-btn:hover,\r\n.todo__clear-btn:active {\r\n  color: #000;\r\n  text-decoration: underline;\r\n}",""]);const g=f},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);t&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),r.push(c))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],l=t.base?d[0]+t.base:d[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var u=e(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var d=t(n,o),l=0;l<i.length;l++){var c=e(i[l]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=d}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},533:(n,r,e)=>{var t=e(379),o=e.n(t),i=e(795),a=e.n(i),s=e(569),d=e.n(s),l=e(565),c=e.n(l),p=e(216),u=e.n(p),f=e(589),m=e.n(f),h=e(538),b={};b.styleTagTransform=m(),b.setAttributes=c(),b.insert=d().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=u(),o()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;var g=e(740),y={};y.styleTagTransform=m(),y.setAttributes=c(),y.insert=d().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u(),o()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals},636:(n,r,e)=>{n.exports=e.p+"assets/OpenSans-Bold.ttf"},634:(n,r,e)=>{n.exports=e.p+"assets/OpenSans-Medium.ttf"},912:(n,r,e)=>{n.exports=e.p+"assets/OpenSans-Regular.ttf"}},n=>{n(n.s=533)}]);