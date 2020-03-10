(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(v,_,t){v.exports=t.p+"assets/img/1-1-0.cdc9215e.png"},196:function(v,_,t){v.exports=t.p+"assets/img/1-2-0.b61cab52.png"},197:function(v,_,t){v.exports=t.p+"assets/img/1-2-1.329658fe.png"},198:function(v,_,t){v.exports=t.p+"assets/img/1-2-2.a9ba86d7.png"},199:function(v,_,t){v.exports=t.p+"assets/img/b8993c73f7b60feb9b8bd147545c47d7.b8993c73.png"},200:function(v,_,t){v.exports=t.p+"assets/img/3e30476a4bbda49fd7cd4fd0ea09f076.3e30476a.png"},201:function(v,_,t){v.exports=t.p+"assets/img/1b49976aca2c700883d48d927f48986c.1b49976a.png"},202:function(v,_,t){v.exports=t.p+"assets/img/92d73c75308e50d5c06ad44612bcb45d.92d73c75.png"},296:function(v,_,t){"use strict";t.r(_);var e=t(0),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"宏观视角下的浏览器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#宏观视角下的浏览器","aria-hidden":"true"}},[v._v("#")]),v._v(" 宏观视角下的浏览器")]),v._v(" "),e("h2",{attrs:{id:"chrome-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chrome-架构","aria-hidden":"true"}},[v._v("#")]),v._v(" Chrome 架构")]),v._v(" "),e("p",[v._v("查看 Chrome 进程情况： Chrome 又上角选项 -> 更多工具 -> 任务管理器。")]),v._v(" "),e("p",[v._v("并行处理：同一时刻处理多个任务。举例:")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("A = 1+1\nB = 2*3\nC = A*B\n")])])]),e("p",[v._v("单线程从上到下计算，多线程同时计算 A、B，最后计算 C，性能提高了。")]),v._v(" "),e("p",[v._v("线程：不能单独存在，由进程来启动和管理。\n进程：一个进程就是一个程序的运行实例，启动程序时，操作系统会为程序分配内存，用来存放代码、运行时数据和一个执行任务的主线程，这样的一个运行环境叫做进程。")]),v._v(" "),e("p",[v._v("线程依附于进程，而进程中使用多线程能并行处理提升运算效率。")]),v._v(" "),e("p",[v._v("关系：")]),v._v(" "),e("ol",[e("li",[v._v("进程中任意线程出错，都会导致整个进程崩溃。如 B 计算 1/0 出错。")]),v._v(" "),e("li",[v._v("线程之间共享进程的数据。")]),v._v(" "),e("li",[v._v("进程关闭后，操作系统回收所占用的内存。")]),v._v(" "),e("li",[v._v("进程之间的内容相互隔离。一个进程崩溃，不会影响其它进程。进程通信需要 IPC 机制。")])]),v._v(" "),e("p",[v._v("单进程浏览器：网络、插件、js 运行环境、渲染引擎和页面都在一个进程。问题：")]),v._v(" "),e("ol",[e("li",[v._v("不稳定")]),v._v(" "),e("li",[v._v("不流畅")]),v._v(" "),e("li",[v._v("不安全：运行插件可以获取操作系统的任意资源。恶意插件可以释放病毒，盗取密码。页面脚本也可以通过浏览器漏洞获取系统权限。")])]),v._v(" "),e("p",[v._v("多进程浏览器")]),v._v(" "),e("p",[e("img",{attrs:{src:t(195),alt:""}})]),v._v(" "),e("p",[v._v("解决不稳定：多进程\n不流畅：js 运行在渲染进程中，即使阻塞进程，也只影响当前渲染页面，而不会影响浏览器和其它页面。\n安全问题：安全沙箱，即沙箱里的程序可以运行，单不能在硬盘上写入数据，也不能读取敏感位置的数据。插件进程和渲染进程在沙箱中。")]),v._v(" "),e("p",[v._v("目前多进程架构")]),v._v(" "),e("p",[e("img",{attrs:{src:t(196),alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("浏览器进程： 负责界面显示、用户交互、子进程管理、提供存储等功能。")]),v._v(" "),e("li",[v._v("渲染进程：将 html/css/js 转为用户可交互的网页，排版引擎 Blick 和 js 引擎 v8 都在该进程中，默认 Chrome 会给每个同站点页面共享一个渲染进程(process-per-site-instance，"),e("a",{attrs:{href:"http://www.chromium.org/developers/design-documents/process-models",target:"_blank",rel:"noopener noreferrer"}},[v._v("查看更多"),e("OutboundLink")],1),v._v(")。运行在沙箱模式下。")]),v._v(" "),e("li",[v._v("GPU 进程: 初衷是为了实现 3D CSS，后来网页、Chrome UI 界面都采用 GPU 来绘制。")]),v._v(" "),e("li",[v._v("网络进程")]),v._v(" "),e("li",[v._v("插件进程")])]),v._v(" "),e("p",[v._v("多进程模型的问题：")]),v._v(" "),e("ul",[e("li",[v._v("更高的资源占用。每个进程都包含公共基础结构的副本(如 js 运行环境)。")]),v._v(" "),e("li",[v._v("更复杂的体系架构：浏览器各模块之间耦合性高，扩展性差。")])]),v._v(" "),e("p",[v._v("面向未来服务的架构")]),v._v(" "),e("p",[v._v("2016 年,Chrome 提出了 "),e("strong",[v._v("面向服务的架构")]),v._v("(Services Oriented Architecture，简称 SOA)。将原来各种模块重构为独立的服务，每个服务都可以在独立的进程中运行，访问服务必须使用定义好的接口，通过 IPC 通信，从而构建一个更内聚、松耦合、易于维护和扩展的系统。")]),v._v(" "),e("p",[e("img",{attrs:{src:t(197),alt:""}})]),v._v(" "),e("p",[v._v("同时，如果资源受限制的设备上，Chrome 会整合服务到一个进程中，节省内存。")]),v._v(" "),e("p",[e("img",{attrs:{src:t(198),alt:""}})]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://v8.dev/",target:"_blank",rel:"noopener noreferrer"}},[v._v("v8 官网"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"http://www.chromium.org/developers",target:"_blank",rel:"noopener noreferrer"}},[v._v("chrome 设计文档"),e("OutboundLink")],1)])]),v._v(" "),e("h2",{attrs:{id:"tcp-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议","aria-hidden":"true"}},[v._v("#")]),v._v(" TCP 协议")]),v._v(" "),e("p",[v._v("FP(first paint): 从页面加载到首次开始绘制的时长。这个指标直接影响用户跳出率。")]),v._v(" "),e("p",[v._v("大数据拆成小数据包来传输。数据包从 A 到 B 传输过程：")]),v._v(" "),e("ol",[e("li",[v._v("ip: 数据包要在互联网传输，就要符合网际协议(internet protocol, ip)标准。")]),v._v(" "),e("li",[v._v("数据包交给网络层，网络层给数据包附加 ip 头， 包括 ip 版本， 源 ip ，目标 ip，生存时间。")]),v._v(" "),e("li",[v._v("通过物理网络传输给 B。")]),v._v(" "),e("li",[v._v("B 网络层拆开数据包 ip 头，将数据交给应用层。")])]),v._v(" "),e("p",[v._v("ip 将数据包发给指定的电脑。\nUDP（user datagram protocol) 用户数据包协议，通过端口号将数据给指定程序。")]),v._v(" "),e("p",[v._v("UDP 可以校验数据是否正确，但是对错误的包，不提供重发机制，不知道数据是否到达 B，也不能重组包。传输速度快，适合在线视频，互动游戏。\n但是有些数据需要安全的到达，所以有了 TCP。\nTCP: transmission control protocol，传输控制协议，面向连接、可靠的、基于字节流的传输层协议。\n特点：")]),v._v(" "),e("ul",[e("li",[v._v("对于数据包丢失，重传机制")]),v._v(" "),e("li",[v._v("数据包排序机制，将乱序数据包重组为完整的包")])]),v._v(" "),e("p",[v._v("完整的 TCP 生命周期：")]),v._v(" "),e("ul",[e("li",[v._v("连接三次握手 时序图")]),v._v(" "),e("li",[v._v("传输数据")]),v._v(" "),e("li",[v._v("断开：四次挥手")])]),v._v(" "),e("h2",{attrs:{id:"http-请求流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-请求流程","aria-hidden":"true"}},[v._v("#")]),v._v(" HTTP 请求流程")]),v._v(" "),e("p",[v._v("浏览器发起 http 请求过程：")]),v._v(" "),e("ol",[e("li",[v._v("构建请求： 构建请求头信息")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("GET /index.html HTTP1.1\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[v._v("查找缓存：有缓存则直接返回该资源的副本，并直接结束请求。好处：减少服务器压力，提升资源加载速度。")]),v._v(" "),e("li",[v._v("缓存查找失败，开始网络请求。")]),v._v(" "),e("li",[v._v("为数据传输准备 ip 和端口。\n"),e("ul",[e("li",[v._v("DNS (domain name system)将 url 映射成 ip。")]),v._v(" "),e("li",[v._v("有 DNS 数据缓存服务")]),v._v(" "),e("li",[v._v("得到 ip")]),v._v(" "),e("li",[v._v("根据 url 得到端口号，默认 80")])])]),v._v(" "),e("li",[v._v("等待 TCP 队列，chrome 默认同一个域名最多 6 个 TCP 连接。如果小于 6 则建立 TCP 连接。")]),v._v(" "),e("li",[v._v("建立 TCP 连接。")]),v._v(" "),e("li",[v._v("TCP 传输数据，即发送 HTTP 请求，包括请求方法、url，http 版本、请求头、请求体(post)。http 请求报文格式：")])]),v._v(" "),e("p",[e("img",{attrs:{src:t(199),alt:""}})]),v._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[v._v("服务器处理 HTTP 请求，返回响应，包括协议版本、状态码、服务器信息等。")])]),v._v(" "),e("p",[e("img",{attrs:{src:t(200),alt:""}})]),v._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[v._v("断开连接：一旦服务器返回请求数据，就要关闭 TCP 连接，不过可以在头信息中加入 "),e("code",[v._v("Connection: Keep-Alive")]),v._v(" 保持连接复用 TCP，这样可以省去下次连接的开销。")]),v._v(" "),e("li",[v._v("重定向，如果状态码是 301 ，就是告诉浏览器要重定向，浏览器获取响应头的 Location，重新导航这个地址。")])]),v._v(" "),e("p",[v._v("为什么很多站点第二次打开速度会很快？")]),v._v(" "),e("p",[v._v("因为有缓存: DNS 缓存，页面缓存。")]),v._v(" "),e("p",[v._v("缓存查找过程：\n服务器返回 http 响应给浏览器，浏览器通过响应头 Cache-Control 设置是否缓存资源，时长通过 Cache-Control 里的 Max-age 设置。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("Cache-Control: Max-age=2000\n")])])]),e("p",[v._v("如果缓存资源未过期，则直接返回，如果过期了，则发起网络请求，并在 HTTP 请求头带上")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('If-None-Match:"4f80f-13c-3a1xb12a"\n')])])]),e("p",[v._v("服务器收到后，会根据 If-None-Match 值判断请求的资源是否有更新。\n没更新就返回 304，表示该缓存可以继续用。\n有更新就返回资源给浏览器。")]),v._v(" "),e("p",[v._v("登录状态如何保持？")]),v._v(" "),e("p",[v._v("用户 post 账户密码\n服务器返回头 "),e("code",[v._v("Set-Cookie: UID=3431uad;")]),v._v("给浏览器。\n浏览器会保存到本地，再次访问时，会将"),e("code",[v._v("Cookie: UID=3431uad;")]),v._v("发送给服务器。\n服务器根据 Cookie 判断用户是否登录。")]),v._v(" "),e("p",[v._v("disk：新 tab 打开时，都是 disk；html 文件都是 disk\nmemory：新 tab 再次使用缓存时，是 memory")]),v._v(" "),e("p",[v._v("完整的示意图")]),v._v(" "),e("p",[e("img",{attrs:{src:t(201),alt:""}})]),v._v(" "),e("p",[v._v("http 请求的 8 个阶段: 构建请求、查找缓存、准备 IP 和端口、发起 TCP 连接、发送 HTTP 请求、服务器处理请求、服务器返回请求和端口连接。")]),v._v(" "),e("p",[v._v("如果一个页面的网络加载时间过久，你是如何分析卡在哪个阶段的?\nhttps://developers.google.com/web/tools/chrome-devtools/network/reference#timing-explanation 举个例子 Content Download 如果太长，很有可能是下载的资源太大，但也有可能是网络慢导致的下载太慢，简单计算一下，在例如 Waiting (TTFB) 这个太长的话，有可能是网络慢，或者就是 后端处理时间过长导致的，至少可以排查掉前端原因，还有很多，例如 DNS lookup 等，但是最终要确认具体哪里慢，最好是结合系统日志去分析")]),v._v(" "),e("h2",{attrs:{id:"导航流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航流程","aria-hidden":"true"}},[v._v("#")]),v._v(" 导航流程")]),v._v(" "),e("p",[v._v("从输入 URL 到页面展示，这中间发生了什么？")]),v._v(" "),e("p",[e("img",{attrs:{src:t(202),alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("浏览器进程收到用户输入的 URL 请求，将该 URL 转发给网络进程。")]),v._v(" "),e("li",[v._v("网络进程发起 URL 请求。")]),v._v(" "),e("li",[v._v("网络进程收到响应头数据，解析并将数据转发给浏览器进程。")]),v._v(" "),e("li",[v._v("浏览器进程收到网络进程的响应头数据后，发送"),e("code",[v._v("提交导航")]),v._v("(CommitNavigation)消息(会携带响应头等基本信息)到渲染进程。")]),v._v(" "),e("li",[v._v("渲染进程收到消息后，开始准备接收 HTML 数据，接收方式是直接和网络进程建立数据管道。")]),v._v(" "),e("li",[v._v("渲染进程向浏览器进程"),e("code",[v._v("确认提交")]),v._v("，告诉浏览器已经准备好接收和解析数据。")]),v._v(" "),e("li",[v._v("浏览器进程收到渲染进程"),e("code",[v._v("提交文档")]),v._v("的消息后，移除之前旧文档，更新浏览器进程中的页面状态。")])]),v._v(" "),e("p",[v._v("其中，用户发起 url 请求到页面开始解析的过程，叫做导航。")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("用户输入")]),v._v(" "),e("ul",[e("li",[v._v("输入搜索内容: 和浏览器默认搜索引擎合成 URL。")]),v._v(" "),e("li",[v._v("输入请求 URL: 加协议等，合成完整的 URL。")])])]),v._v(" "),e("li",[e("p",[v._v("回车")]),v._v(" "),e("ul",[e("li",[v._v("清理旧页面， beforeunload 事件可以做数据清理或询问用户是否要离开。")]),v._v(" "),e("li",[v._v("标签页图标变成加载状态，页面还是之前的页面，需要等提交文档阶段，页面内容才会替换。")])])]),v._v(" "),e("li",[e("p",[v._v("URL 请求过程")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("浏览器进程通过 IPC 把 URL 发给网络进程")])]),v._v(" "),e("li",[e("p",[v._v("网络进程查找缓存，有则直接返回，没有则网络请求(DNS 解析，如果是 HTTPS 还要建立 TLS)")])]),v._v(" "),e("li",[e("p",[v._v("利用 IP 和服务器建立 TCP 连接，浏览器端构建请求行、请求头等信息，发给服务器")])]),v._v(" "),e("li",[e("p",[v._v("服务器收到后，生成响应数据，发给网络进程，网络进程收到响应行和响应头开始解析")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("处理状态码")]),v._v(" "),e("ul",[e("li",[v._v("重定向： 301 或 302，读 Location，重新导航请求")]),v._v(" "),e("li",[v._v("200 浏览器继续处理请求")])])]),v._v(" "),e("li",[e("p",[v._v("处理响应类型")]),v._v(" "),e("ul",[e("li",[v._v("Content-Type: 响应体数据是什么类型\n"),e("ul",[e("li",[e("code",[v._v("application/octet-stream")]),v._v(": 字节流，按下载类型处理，同时该 url 请求导航流程结束")]),v._v(" "),e("li",[e("code",[v._v("text/html")]),v._v(": 继续导航")])])])])]),v._v(" "),e("li",[e("p",[v._v("准备渲染进程：")]),v._v(" "),e("ul",[e("li",[v._v("每个标签对应一个渲染进程（左键点击才算，右键新开会新开渲染进程)")]),v._v(" "),e("li",[v._v("同一站点(same-site)： 根域名、协议相同。新页面会复用父页面的渲染进程,process-per-site-instance。")]),v._v(" "),e("li",[v._v("使用 noopener noreferrer 就是告诉浏览器，新打开的子窗口不需要访问父窗口的任何内容，这是为了防止一些钓鱼网站窃取父窗口的信息。会新开渲染进程")])])]),v._v(" "),e("li",[e("p",[v._v("提交文档，浏览器进程将网络进程数据交给渲染进程")]),v._v(" "),e("ul",[e("li",[v._v("浏览器进程收到网络进程的响应头数据后，向渲染进程发起"),e("code",[v._v("提交文档")]),v._v("的消息。")]),v._v(" "),e("li",[v._v("渲染进程收到消息，会和网络进程建立传输数据的管道。")]),v._v(" "),e("li",[v._v("数据传输完成，渲染进程返回"),e("code",[v._v("确认提交")]),v._v("消息给浏览器进程。")]),v._v(" "),e("li",[v._v("浏览器进程收到消息，更新浏览器界面状态，包括安全状态、地址栏 URL、前进后退的历史状态，并更新 web 页面。")])])]),v._v(" "),e("li",[e("p",[v._v("渲染阶段：渲染进程开始页面解析和子资源加载")])])])])])])]),v._v(" "),e("h2",{attrs:{id:"渲染流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染流程","aria-hidden":"true"}},[v._v("#")]),v._v(" 渲染流程")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developers.google.com/web/updates/2018/09/inside-browser-part1",target:"_blank",rel:"noopener noreferrer"}},[v._v("深入了解现代 Web 浏览器（第 1 部分）"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);