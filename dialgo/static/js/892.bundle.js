"use strict";(self.webpackChunkdialgo=self.webpackChunkdialgo||[]).push([[892],{2892:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(7294),o=e(5998),i=e(3543),a=e(7904),u=e(4184),l=e.n(u),c=e(1193),f=e.n(c);function s(t,n){if(t){if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,n):void 0}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function m(){var t,n,e=(0,o.v9)((function(t){return t.project.projects})),u=((0,o.v9)((function(t){return t.project.currentProjectIndex})),(0,o.I0)()),c=(t=(0,r.useState)(e[0].id),n=2,function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(e=e.call(t)).next,0===n){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=i.call(e)).done)&&(u.push(r.value),u.length!==n);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,n)||s(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=c[0],y=c[1],p=function(t){return e.findIndex((function(n){return n.id===t}))};(0,r.useEffect)((function(){e.length>1?y(e[e.length-1].id):y(e[0].id)}),[e]);var b=function(t){return function(n,r){var o=r.x,i=(r.y,e.findIndex((function(n){return n.id===t}))),a=function(t,n){var r=t,o=document.querySelector(".tabs").getBoundingClientRect().width,i=n+o/e.length/2;return i>o?r=e.length-1:i>0&&(r=Math.floor(i/(o/e.length))),r}(i,o);if(a!==i){var u=function(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e);return u.splice(i,1),u.splice(a,0,e[i]),y(t),u}}};return r.createElement(a.JL,{tabs:!0,className:"tabs"},e.map((function(t){return r.createElement(f(),{key:t.id,axis:"x",onStop:b(t.id),position:{x:0,y:0}},r.createElement(a.LY,null,r.createElement(a.OL,{className:l()({active:m===t.id}),onClick:function(){return n=t.id,y(n),void u((0,i.XE)(p(n)));var n},onDoubleClick:function(){return u((0,i.o)("name"))}},r.createElement("span",{className:"text-truncate"},t.name,".da"),r.createElement(a.zx,{close:!0,className:"ml-2",onClick:function(){return n=t.id,u((0,i.rR)(n)),void(m===n&&p(n)>=1&&(u((0,i.XE)(p(n)-1)),y(e[p(n)-1].id)));var n}}))))})))}}}]);
//# sourceMappingURL=892.bundle.js.map