"use strict";(self.webpackChunkdialgo=self.webpackChunkdialgo||[]).push([[727],{2727:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var a=r(7294),u=r(5998),i=r(3543),m=r(7904);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(t,e){var r,n=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)),n}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){p(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(e,t,r){return(t=function(e){e=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e,"string");return"symbol"===n(e)?e:String(e)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,o,c,a=[],u=!0,i=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){i=!0,l=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(i)throw l}}return a}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?o(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e){function t(e){c(f(f({},o),{},p({},e.target.name,e.target.value)))}var e=e.closeModal,r=(0,u.v9)(function(e){return e.project.projects})[(0,u.v9)(function(e){return e.project.currentProjectIndex})],n=(0,u.I0)(),l=y((0,a.useState)({name:r.name,width:r.width,height:r.height}),2),o=l[0],c=l[1];return a.createElement(a.Fragment,null,a.createElement(m.JX,{md:"8"},a.createElement("object",{data:"https://velickovicdj.github.io/files/CV_VELICKOVICDJ.pdf",type:"application/pdf"})),a.createElement(m.JX,{md:"4"},a.createElement(m.l0,{onSubmit:function(e){e.preventDefault(),n((0,i.ty)(f(f({},r),{},{exportData:o})))}},a.createElement(m.cw,{row:!0},a.createElement(m.JX,null,a.createElement(m.__,null,"Name"),a.createElement(m.II,{type:"text",defaultValue:r.name}))),a.createElement(m.cw,{row:!0},a.createElement(m.JX,null,a.createElement(m.__,null,"Format"),a.createElement("br",null),a.createElement("select",null,a.createElement("option",null,"PDF"),a.createElement("option",null,"PNG"),a.createElement("option",null,"JPG")))),a.createElement(m.cw,{row:!0},a.createElement(m.JX,null,a.createElement(m.__,null,"Width"),a.createElement(m.II,{type:"text",name:"width",value:o.width,onChange:t})),a.createElement(m.JX,null,a.createElement(m.__,null,"Height"),a.createElement(m.II,{type:"text",name:"height",value:o.height,onChange:t}))),a.createElement(m.X2,null,a.createElement(m.JX,null,a.createElement("p",{className:"small text-muted"},"File size: 141 KB"))),a.createElement(m.cw,{row:!0},a.createElement(m.JX,{md:"6"},a.createElement(m.zx,{className:"w-100",color:"secondary",onClick:e},"Cancel")),a.createElement(m.JX,{md:"6"},a.createElement(m.zx,{type:"submit",className:"w-100",color:"primary"},"Export"))))))}}}]);