(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{36:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return u}),n.d(t,"rightToc",function(){return i}),n.d(t,"default",function(){return s});n(0);var r=n(88);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={id:"hola",title:"Hola",author:"Gao Wei",authorTitle:"Docusaurus Core Team",authorURL:"https://github.com/wgao19",authorImageURL:"https://avatars1.githubusercontent.com/u/2055384?v=4",authorTwitter:"wgao19",tags:["hola","docusaurus"]},i=[],c={rightToc:i},p="wrapper";function s(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(p,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l});var r=n(0),o=n.n(r),a=o.a.createContext({}),u=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=u(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){return o.a.createElement(o.a.Fragment,{},e.children)}},s=function(e){var t=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),c=u(t);return o.a.createElement(c[a+"."+n]||c[n]||p[n]||r,t?Object.assign({},i,{components:t}):i)};function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);