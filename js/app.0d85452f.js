(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],f=0,h=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container"},[a("ais-instant-search",{attrs:{"search-client":t.searchClient,"index-name":"algolia_se_assignment"}},[a("div",{staticClass:"search-panel"},[a("div",{staticClass:"search-panel__filters"},[a("ais-clear-refinements"),a("h2",[t._v("Filter by Location 📍")]),a("ais-refinement-list",{attrs:{attribute:"location","show-more":""}}),a("h2",[t._v("Filter by Score")]),a("ais-range-input",{attrs:{attribute:"score"}}),a("h2",[t._v("Still active in the NBA 🏀")]),a("ais-toggle-refinement",{attrs:{attribute:"active",label:"Active Teams"}})],1),a("div",{staticClass:"search-panel__results"},[a("ais-search-box",{staticClass:"searchbox",attrs:{placeholder:"Type here your city or favorite franchise",autofocus:""}}),a("ais-stats"),a("ais-current-refinements"),a("ais-hits",{scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[a("img",{attrs:{src:r.logoUrl,alt:"no logo found ☹️",height:"75px"}}),a("h1",[a("ais-highlight",{attrs:{hit:r,attribute:"location"}}),t._v(" "),a("ais-highlight",{attrs:{hit:r,attribute:"name"}})],1),r.active?a("a",{staticClass:"ais-RangeInput-submit",attrs:{href:"https://www.google.com/search?q="+r.location.toLowerCase()+"+"+r.name.toLowerCase()+"+last+game",target:"_blank"}},[t._v("Last game results 🏀")]):t._e()]}}])}),a("div",{staticClass:"pagination"},[a("ais-pagination")],1)],1)])])],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("img",{staticClass:"logo",attrs:{src:"nba.png",alt:""}}),a("p",{staticClass:"header-subtitle"},[t._v("\n      Franchise Search Engine 🏀\n    ")])])}],s=a("bb29"),o=a.n(s),l=(a("c2ca"),{data:function(){return{searchClient:o()("Q9ITTKHWZN","f05df4ddd68b97d3fb720da019f14ef1")}}}),c=l,u=(a("034f"),a("2877")),f=Object(u["a"])(c,n,i,!1,null,null,null),h=f.exports,p=a("0756");r["a"].use(p["a"]),new r["a"]({el:"#app",render:function(t){return t(h)}})},"64a9":function(t,e,a){}});
//# sourceMappingURL=app.0d85452f.js.map