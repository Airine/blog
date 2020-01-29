(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{279:function(_,v,a){"use strict";a.r(v);var t=a(0),e=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h2",{attrs:{id:"前端工程3个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端工程3个阶段","aria-hidden":"true"}},[_._v("#")]),_._v(" 前端工程3个阶段")]),_._v(" "),a("ol",[a("li",[_._v("库/框架的选型")]),_._v(" "),a("li",[_._v("简单构建优化")]),_._v(" "),a("li",[_._v("JS/CSS模块化开发: 分治\njs模块化：AMD/COMMON JS/UMD/ES6 MODULE\ncss模块化：less/sass/stylus")])]),_._v(" "),a("p",[_._v("第4阶段")]),_._v(" "),a("ul",[a("li",[_._v("大体量: 多功能，多页面，多状态，多系统")]),_._v(" "),a("li",[_._v("大规模: 多人合作。")]),_._v(" "),a("li",[_._v("高性能: CDN部署、缓存控制、文件指纹、缓存复用、请求合并、按需加载、同步/异步加载、移动端首屏CSS内嵌、HTTP2.0服务端资源推送。\n进入第四阶段，我们只需做好两件事就能大幅提升前端开发效率，并且兼顾运行性能，那就是——组件化开发与资源管理。")])]),_._v(" "),a("p",[_._v("其实就是从开发到线上的问题：\n开发：多人合作\n选库\n加速")]),_._v(" "),a("p",[_._v("组件化开发")]),_._v(" "),a("ul",[a("li",[_._v("根据页面可视区、可交互区域划分")]),_._v(" "),a("li",[_._v("每个组件一个目录，组件所需资源放一个目录,就近维护")]),_._v(" "),a("li",[_._v("组件之间自由组合")]),_._v(" "),a("li",[_._v("页面是组件的容器")]),_._v(" "),a("li",[_._v("组件可以直接替换或删除")])]),_._v(" "),a("p",[_._v("js模块：浏览器环境检测(detect)、ajax、config、DOM操作、工具函数utils、组件里的js单元\ncss模块：栅格系统grid、字体图标icon-fonts、动画样式(animate)、以及组件里的CSS单元\nUI组件：页头、页尾、搜索框\n页面\n应用")]),_._v(" "),a("p",[_._v("静态资源管理\n前端代码和软件不同，是增量下载的。\n增量原则引申出来的性能优化技巧：")]),_._v(" "),a("ul",[a("li",[_._v("加载相关：按需加载、延迟加载、预加载、请求合并")]),_._v(" "),a("li",[_._v("缓存：缓存利用、缓存更新、缓存共享、非覆盖式发布")]),_._v(" "),a("li",[_._v("BigRender、BigPipe、Quicking、PageCache")])]),_._v(" "),a("p",[_._v("静态资源管理系统 = 资源表 + 资源加载框架")]),_._v(" "),a("p",[_._v("资源表字段：key，类别，部署路径，依赖关系，打包合并\n资源加载框架则提供一些资源引用的API，让开发者根据id来引用资源，替代静态的script/link标签来收集、去重、按需加载资源。")]),_._v(" "),a("h2",{attrs:{id:"前端集成解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端集成解决方案","aria-hidden":"true"}},[_._v("#")]),_._v(" 前端集成解决方案")]),_._v(" "),a("p",[_._v("Front-end Integrated Solution,缩写fis，发音[fɪs]")]),_._v(" "),a("p",[_._v("前端领域的技术元素\n"),a("strong",[_._v("技术与业务相关的开发需求")])]),_._v(" "),a("ol",[a("li",[_._v("开发规范： 开发、部署的目录规范，编码规范。")]),_._v(" "),a("li",[_._v("模块化开发：针对js、css以功能或业务为单元组织代码，js方面解决独立作用域、依赖管理、api暴露、按需加载与执行、安全合并等问题，css解决依赖管理、组件内部样式管理等问题。")]),_._v(" "),a("li",[_._v("组件化开发\n"),a("strong",[_._v("技术沉淀与共享需求")])]),_._v(" "),a("li",[_._v("组件仓库\n"),a("strong",[_._v("工程化需求")])]),_._v(" "),a("li",[_._v("性能优化")]),_._v(" "),a("li",[_._v("项目部署：静态资源缓存、cdn、非覆盖式发布。")]),_._v(" "),a("li",[_._v("开发流程：开发调试、视觉效果走查确认、前后端联调、提测、上线。")]),_._v(" "),a("li",[_._v("开发工具：工程工具，包括构建与优化工具、开发调试部署工具、组件库获取、提交，运营、文档、配置发布。")])]),_._v(" "),a("p",[_._v("攒一套前端集成解决方案")]),_._v(" "),a("p",[_._v("所有技术点有一定联系：模块化开发涉及到性能优化、对构建工具有要求")]),_._v(" "),a("h2",{attrs:{id:"性能优化原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化原则","aria-hidden":"true"}},[_._v("#")]),_._v(" 性能优化原则")]),_._v(" "),a("ul",[a("li",[a("code",[_._v("请求数量")]),_._v(": 合并脚本和css、css sprites、拆分初始化负载、划分主域。")]),_._v(" "),a("li",[a("code",[_._v("请求带宽")]),_._v(": gzip、精简js、移除重复脚本、图像优化。")]),_._v(" "),a("li",[a("code",[_._v("缓存利用")]),_._v("：cdn、外部js和css、expires头、减少dns查找、etag、使Ajax缓存。")]),_._v(" "),a("li",[a("code",[_._v("页面结构")]),_._v(": css放顶部、js放底部、尽早刷新文档的输出。")]),_._v(" "),a("li",[a("code",[_._v("代码校验")]),_._v("：避免css表达式、避免重定向。")])]),_._v(" "),a("h3",{attrs:{id:"请求数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求数量","aria-hidden":"true"}},[_._v("#")]),_._v(" 请求数量")]),_._v(" "),a("p",[_._v("浏览器\b同一个服务器加载资源的并发量是有限制的，chrome大致是6个。所以可以对静态资源划分不同的主域，以加速资源的请求。")]),_._v(" "),a("h3",{attrs:{id:"请求带宽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求带宽","aria-hidden":"true"}},[_._v("#")]),_._v(" 请求带宽")]),_._v(" "),a("h3",{attrs:{id:"缓存利用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存利用","aria-hidden":"true"}},[_._v("#")]),_._v(" 缓存利用")]),_._v(" "),a("p",[_._v("from disk cache\nfrom memory cache")]),_._v(" "),a("p",[_._v("静态资源管理都是打包时根据文件hash生成新的文件名。使用query存在的问题是：覆盖式发布，浏览器缓存问题。")]),_._v(" "),a("p",[_._v("静态资源表和模块化加载方案的思路。")]),_._v(" "),a("ol",[a("li",[_._v("生成资源表")]),_._v(" "),a("li",[_._v("插入到合适的位置，js底部，css头部")]),_._v(" "),a("li",[_._v("资源的合并combo，如a.html里a\\b\\c\\d.js，b.html里a\\b\\e\\f.js。在pkg里根据ab合并有个资源。")])]),_._v(" "),a("h3",{attrs:{id:"页面结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面结构","aria-hidden":"true"}},[_._v("#")]),_._v(" 页面结构")]),_._v(" "),a("p",[_._v("md5的计算过程")]),_._v(" "),a("h3",{attrs:{id:"代码校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码校验","aria-hidden":"true"}},[_._v("#")]),_._v(" 代码校验")]),_._v(" "),a("h2",{attrs:{id:"学习资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习资源","aria-hidden":"true"}},[_._v("#")]),_._v(" 学习资源")]),_._v(" "),a("p",[_._v("https://developer.yahoo.com/performance/rules.html?guccounter=1")]),_._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/creeperyang/blog/issues/1",target:"_blank",rel:"noopener noreferrer"}},[_._v("雅虎前端优化35条规则翻译"),a("OutboundLink")],1)]),_._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/fouber/blog/issues/3",target:"_blank",rel:"noopener noreferrer"}},[_._v("fouber 前端工程与性能优化"),a("OutboundLink")],1)]),_._v(" "),a("li",[_._v("https://medium.com/@arpingajjar/faster-web-page-loading-with-facebook-bigpipe-fbbc49b28959")])])])}),[],!1,null,null,null);v.default=e.exports}}]);