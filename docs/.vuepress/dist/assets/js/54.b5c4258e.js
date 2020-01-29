(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{283:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"python3-网络爬虫笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#python3-网络爬虫笔记","aria-hidden":"true"}},[a._v("#")]),a._v(" python3 网络爬虫笔记")]),a._v(" "),t("p",[a._v("https://python3webspider.cuiqingcai.com/1.1python3-de-an-zhuang#1-1-3-mac-xia-de-an-zhuang")]),a._v(" "),t("h2",{attrs:{id:"环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境配置")]),a._v(" "),t("h3",{attrs:{id:"mac-下安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-下安装","aria-hidden":"true"}},[a._v("#")]),a._v(" mac 下安装")]),a._v(" "),t("ol",[t("li",[a._v("安装 homebrew")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("ruby -e"),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("安装 python3 和 pip3")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装")]),a._v("\nbrew intall python3\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 升级")]),a._v("\nbrew upgrade python\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("查看")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("python -V\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[a._v("版本问题")])]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" ~/.bash_profile\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/Library/Frameworks/Python.framework/Versions/3.7/bin:'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v("}")]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" ~/.bashrc\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("python2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/System/Library/Frameworks/Python.framework/Versions/2.7/bin/python2.7'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("python3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/Library/Frameworks/Python.framework/Versions/3.7/bin/python3.7'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("python")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("python3\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加以上三行 ， 如果不知道自己的python3安装路径，可以用 which python3 命令进行查看路径")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.bash_profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" ~/.bashrc\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4")]),a._v("\npython -V\n")])])]),t("h3",{attrs:{id:"请求库-requests-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求库-requests-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 请求库 requests 安装")]),a._v(" "),t("ol",[t("li",[a._v("安装 requests")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install requests\n")])])]),t("p",[a._v("也可以通过 wheel 安装，它是 python 的一种安装包，后缀为 .whl。网速差可以用这种方法。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1 安装 wheel")]),a._v("\npip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" wheel\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2 下载 https://pypi.python.org/pypi/requests/2.17.3#downloads")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3 安装")]),a._v("\npip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" requests-2.17.3-py2.py3-none-any.whl\n")])])]),t("p",[a._v("源码安装，安装指定版本。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 下载")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git://github.com/kennethreitz/requests.git\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -OL https://github.com/kennethreitz/requests/tarball/master\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 安装")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" requests\npython3 setup.py "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),t("p",[a._v("验证安装好了，不报错即可。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ python3\n>>> import requests\n")])])]),t("h3",{attrs:{id:"selenium-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#selenium-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" selenium 安装")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install selenium\n")])])]),t("p",[a._v("安装完成后，还要安装 chrome 和 "),t("a",{attrs:{href:"https://sites.google.com/a/chromium.org/chromedriver/",target:"_blank",rel:"noopener noreferrer"}},[a._v("chromeDriver 驱动"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ mv chromedriver /usr/local/bin\n$ chromedriver\n")])])]),t("p",[a._v("firefox 的驱动: GeckoDriver，下载地址：https://github.com/mozilla/geckodriver/releases")]),a._v(" "),t("p",[a._v("PhantomJS: headless 的引擎，支持 dom、css、json、canvas、svg\n下载地址：https://phantomjs.org/download.html")]),a._v(" "),t("p",[a._v("requests 是同步的 ajax 库\naiohttp 是异步的，")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install aiohttp\n# 官方推荐还安装字符编码检测库 cchardet 和 dns加速解析 aiodns库\npip3 install cchardet aiodns\n")])])]),t("h3",{attrs:{id:"解析库安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解析库安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 解析库安装")]),a._v(" "),t("p",[a._v("lxml 是 Python 的一个解析库，支持 HTML 和 XML 的解析，支持 XPath 解析方式，而且解析效率非常高。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install lxml\n")])])]),t("p",[a._v("Beautiful Soup 是 Python 的一个 HTML 或 XML 的解析库，我们可以用它来方便地从网页中提取数据。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install beautifulsoup4\n")])])]),t("p",[a._v("pyquery 同样是一个强大的网页解析工具，它提供了和 jQuery 类似的语法来解析 HTML 文档，支持 CSS 选择器，使用非常方便。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install pyquery\n")])])]),t("p",[a._v("处理验证码")]),a._v(" "),t("p",[a._v("tesserocr 是 Python 的一个 OCR 识别库，但其实是对 tesseract 做的一层 Python API 封装，所以它的核心是 tesseract。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("brew install imagemagick\nbrew install tesseract --all-languages\n\npip3 install tesserocr pillow\n\n")])])]),t("p",[a._v("卡在 Updating Homebrew...上")]),a._v(" "),t("ol",[t("li",[a._v("关闭升级")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vim ~/.bash_profile\n\n# 新增一行\nexport HOMEBREW_NO_AUTO_UPDATE=true\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("替换 brew 源 https://www.jianshu.com/p/7cb05a2b39a5")])]),a._v(" "),t("h3",{attrs:{id:"web-库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-库","aria-hidden":"true"}},[a._v("#")]),a._v(" web 库")]),a._v(" "),t("p",[a._v("Flask 是一个轻量级的 Web 服务程序，它简单、易用、灵活，这里主要用来做一些 API 服务。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" flask\n")])])]),t("p",[a._v("Tornado 是一个支持异步的 Web 框架，通过使用非阻塞 I/O 流，它可以支撑成千上万的开放连接，效率非常高，")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" tornado\n")])])]),t("h3",{attrs:{id:"app-爬取相关库的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-爬取相关库的安装","aria-hidden":"true"}},[a._v("#")]),a._v(" App 爬取相关库的安装")]),a._v(" "),t("p",[a._v("Charles")]),a._v(" "),t("p",[a._v("mitmproxy 是一个支持 HTTP 和 HTTPS 的抓包程序，类似 Fiddler、Charles 的功能，只不过它通过控制台的形式操作。\n此外，mitmproxy 还有两个关联组件，一个是 mitmdump，它是 mitmproxy 的命令行接口，利用它可以对接 Python 脚本，实现监听后的处理；另一个是 mitmweb，它是一个 Web 程序，通过它以清楚地观察到 mitmproxy 捕获的请求")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("pip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mitmproxy\n")])])]),t("p",[a._v("Appium 是移动端的自动化测试工具，类似于前面所说的 Selenium，利用它可以驱动 Android、iOS 等设备完成自动化测试，比如模拟点击、滑动、输入等操作，其官方网站为：http://appium.io/。")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g appium\n")])])]),t("h3",{attrs:{id:"爬虫框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爬虫框架","aria-hidden":"true"}},[a._v("#")]),a._v(" 爬虫框架")]),a._v(" "),t("p",[a._v("pyspider 是国人 binux 编写的强大的网络爬虫框架，它带有强大的 WebUI、脚本编辑器、任务监控器、项目管理器以及结果处理器，同时支持多种数据库后端、多种消息队列，另外还支持 JavaScript 渲染页面的爬取，使用起来非常方便。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip3 install pyspider\n")])])]),t("p",[a._v("Scrapy 是一个十分强大的爬虫框架，依赖的库比较多，至少需要依赖的库有 Twisted 14.0、lxml 3.4 和 pyOpenSSL 0.14。在不同的平台环境下，它所依赖的库也各不相同，所以在安装之前，最好确保把一些基本库安装好。")]),a._v(" "),t("h3",{attrs:{id:"部署相关库的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署相关库的安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 部署相关库的安装")]),a._v(" "),t("h2",{attrs:{id:"基本库的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本库的使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本库的使用")]),a._v(" "),t("h3",{attrs:{id:"urllib"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#urllib","aria-hidden":"true"}},[a._v("#")]),a._v(" urllib")]),a._v(" "),t("ul",[t("li",[a._v("request：它是最基本的 HTTP 请求模块，可以用来模拟发送请求。")]),a._v(" "),t("li",[a._v("error：异常处理模块。")]),a._v(" "),t("li",[a._v("parse：一个工具模块，提供了许多 URL 处理方法，比如拆分、解析、合并等。")]),a._v(" "),t("li",[a._v("robotparser：主要是用来识别网站的 robots.txt 文件，然后判断哪些网站可以爬，哪些网站不可以爬，它其实用得比较少。")])]),a._v(" "),t("h3",{attrs:{id:"requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requests","aria-hidden":"true"}},[a._v("#")]),a._v(" requests")]),a._v(" "),t("ol",[t("li",[a._v("get 请求")]),a._v(" "),t("li",[a._v("post 请求")]),a._v(" "),t("li",[a._v("headers")]),a._v(" "),t("li",[a._v("带参数")]),a._v(" "),t("li",[a._v("response 的值，r.json()")])])])}),[],!1,null,null,null);s.default=r.exports}}]);