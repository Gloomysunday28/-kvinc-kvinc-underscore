!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.MUnderscore=e():t.MUnderscore=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){(function(t,n){!function(){var r="object"==typeof self&&self.self===self&&self||"object"==typeof t&&t.global===t&&t||this||{},o=function(t){if(!(this instanceof o))return new o(t);this._wrapped=t};function i(t,e){return t._chain?t:e}o.slice=Array.prototype.slice,o.isFunction=function(t){return"function"==typeof t},o.sub_curry=function(t){const e=o.slice.call(arguments,1);return function(){const n=e.concat(o.slice.call(arguments));return t.apply(this,n)}},o.compose=function(){let t=arguments.length-1,e=o.slice.call(arguments);return function(){let n=e[t--].apply(this,arguments);for(;t>=0;)n=e[t--].call(this,n);return n}},o.debounce=function(t,e,n){let r=null;function o(){if(r&&clearTimeout(r),n){const n=!r;if(r=setTimeout(t=>{r=null},e),n)return t&&t.apply(this,arguments)}else r=setTimeout(e=>{t&&t.apply(this,arguments)},e)}return o.cancel=function(){clearTimeout(r),r=null},o},o.throttle=function(t,e){let n=null,r=+new Date;return function(){let o=+new Date;o-r<e?(n&&clearTimeout(n),n=setTimeout(e=>{t&&t.apply(this,arguments)},e)):(t&&t.apply(this,arguments),r=o)}},o.curry=function(t,e){let n=e||t.length;return function(){if(arguments.length<n){const e=[t];return e.push(...o.slice.call(arguments)),o.curry(o.sub_curry.apply(this,e),n-arguments.length)}return t.apply(this,arguments)}},o.addOne=function(t,e){return t+e},o.hasTwo=function(t){return t},o.changeFn=function(t){return t.apply(this,[1,2])},o.chain=function(t){var e=o(t);return e._chain=!0,e},o.push=function(t,e){return this._wrapped.push(e),i(this,this._wrapped)},o.unshift=function(t,e){return this._wrapped.unshift(e),i(this,this._wrapped)},o.value=function(){return this._chain=!1,this._wrapped},o.mixin=function(t){const e=Array.prototype.push;return Object.keys(t).forEach(n=>{const r=t[n];o.isFunction(r)&&(o.prototype[n]=function(){const t=[this._wrapped];return e.apply(t,arguments),i(this,r.apply(this,t))})}),o},o.mixin(o),e.nodeType?r._=o:(!n.nodeType&&n.exports&&(e=n.exports=o),e._=o)}()}).call(this,n(1),n(2)(t))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}])}));