(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",function(){return l}),t.d(n,"rightToc",function(){return c}),t.d(n,"default",function(){return b});t(0);var r=t(247);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l={title:"javascript 高级技巧",sidebar_label:"高级技巧"},c=[{value:"防抖 debounce",id:"防抖-debounce",children:[]},{value:"节流",id:"节流",children:[{value:"时间戳",id:"时间戳",children:[]},{value:"定时器",id:"定时器",children:[]},{value:"优化",id:"优化",children:[]}]},{value:"参考文章",id:"参考文章",children:[]}],u={rightToc:c},o="wrapper";function b(e){var n=e.components,t=i(e,["components"]);return Object(r.b)(o,a({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"防抖-debounce"},"防抖 debounce"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"scroll"),"、",Object(r.b)("inlineCode",{parentName:"p"},"resize"),"、",Object(r.b)("inlineCode",{parentName:"p"},"mousemove"),"这些"),Object(r.b)("p",null,"在给一些频繁触发的事件绑定处理函数时，如果函数处理时间较长，触发频率太高，可能会导致页面卡顿或其它问题。比如窗口",Object(r.b)("inlineCode",{parentName:"p"},"scroll"),"或",Object(r.b)("inlineCode",{parentName:"p"},"resize"),"，鼠标",Object(r.b)("inlineCode",{parentName:"p"},"mousemove"),"，或用户输入关键字搜索时，如果每修改一下，我们都发 ajax 请求到后端，会给后端造成压力。所以通常需要限制事件的触发频率。"),Object(r.b)("p",null,"一般有两种方案：",Object(r.b)("inlineCode",{parentName:"p"},"防抖(debounce)"),"和",Object(r.b)("inlineCode",{parentName:"p"},"节流(throttle)"),"。"),Object(r.b)("p",null,"防抖的原理是：事件触发之后的n秒后才执行回调，如果事件发生后n秒内又触发了事件，则以后触发的事件为准，再过n秒后触发回调。"),Object(r.b)("p",null,"编写 debounce 函数需要注意："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"func 的 this 指向，args 参数的传递。"),Object(r.b)("li",{parentName:"ul"},"func 函数可能有返回值。setTimeout 如果需要返回值，可以使用 Promise。")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function debounce(func, wait, immediate) {\n    let timeout, result\n    let debounced = function (...args) {\n        let context = this\n        if (timeout) clearTimeout(timeout)\n        if (immediate) {\n            // 立即执行\n            let callNow = !timeout\n            timeout = setTimeout(() => {\n                timeout = null\n            }, wait)\n            if (callNow) result = func.call(context, ...args)\n        } else {\n            timeout = setTimeout(() => {\n                func.call(context, ...args)\n            }, wait)\n        }\n        return result\n    }\n\n    debounced.cancel = function () {\n        clearTimeout(timeout)\n        timeout = null\n    }\n    return debounced\n}\n\n// 使用\nvar print = debounce(function (e) {\n    console.log(1, e)\n}, 1000)\ndocument.addEventListener('mousemove', print, false)\nbtn.addEventListener('click', print.cancel, false)\n")),Object(r.b)("p",null,"使用 ",Object(r.b)("inlineCode",{parentName:"p"},"debounce()")," 包装后，默认 func 会在 wait 时间后触发一次。如果 ",Object(r.b)("inlineCode",{parentName:"p"},"immediate")," 为 ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"，则 func 会立即触发，并在 wait 时间内不再重复触发。",Object(r.b)("inlineCode",{parentName:"p"},"cancel()")," 方法会取消上一次 func 的执行和延迟。"),Object(r.b)("h2",{id:"节流"},"节流"),Object(r.b)("p",null,"节流是指，如果事件持续触发，在一定时间内，事件函数只执行一次。"),Object(r.b)("p",null,"这可以使用时间戳或定时器来实现。"),Object(r.b)("h3",{id:"时间戳"},"时间戳"),Object(r.b)("p",null,"事件触发时，如果与上次执行时间之差大于了设置时间，就触发，否则就不触发。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function throttle(func, wait) {\n    let previous = 0\n\n    return function (...args) {\n        let now = +new Date()  // 相当于 Number(new Date())，获取当前时间戳\n        if (now - previous <= wait) return\n\n        func.apply(this, args)\n        previous = now\n    }\n}\n\n// 使用\nvar print = throttle(function () {\n    console.log(1)\n}, 3000, true)\ndocument.addEventListener('mousemove', print, false\n")),Object(r.b)("h3",{id:"定时器"},"定时器"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"function throttle(func, wait) {\n    let timeout\n\n    return function (...args) {\n        if (timeout) return\n        timeout = setTimeout(() => {\n            func.apply(this, args)\n            timeout = null\n        }, wait)\n    }\n}\n")),Object(r.b)("p",null,"上面代码中，首先会在定时器后执行 func，定时器期间，如果再次触发事件，会直接 return。定时器完成后，清除 timeout，使得事件触发时 func 能再次执行。"),Object(r.b)("p",null,"时间戳和定时器实现的区别："),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"使用时间戳实现，事件函数会立即触发。"),Object(r.b)("li",{parentName:"ul"},"使用定时器实现，事件函数会延迟 wait 时间后触发。")),Object(r.b)("h3",{id:"优化"},"优化"),Object(r.b)("p",null,"那么是否可以实现下面几个需求呢？"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"事件开始时立即触发，事件结束时，延迟 wait 后再触发。"),Object(r.b)("li",{parentName:"ul"},"事件开始时延迟触发，事件结束时，立即触发。")),Object(r.b)("p",null,"这时，就需要将上面两种方法结合起来。我们使用",Object(r.b)("inlineCode",{parentName:"p"},"leading"),"表示开始时是否立即执行，",Object(r.b)("inlineCode",{parentName:"p"},"trailing"),"表示结束时是否还执行。"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"")),Object(r.b)("h2",{id:"参考文章"},"参考文章"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://github.com/mqyqingfeng/Blog/issues/22"}),"JavaScript专题之跟着underscore学防抖")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://github.com/mqyqingfeng/Blog/issues/26"}),"JavaScript专题之跟着underscore学节流")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",a({parentName:"li"},{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5"}),"什么是防抖和节流？有什么区别？如何实现？"))))}b.isMDXComponent=!0},247:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return p});var r=t(0),a=t.n(r),i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var u="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=function(e){var n=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),u=l(n),b=t,p=u[i+"."+b]||u[b]||o[b]||r;return n?a.a.createElement(p,Object.assign({},c,{components:n})):a.a.createElement(p,c)};function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);