(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{73:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",function(){return l}),t.d(e,"rightToc",function(){return c}),t.d(e,"default",function(){return o});t(0);var a=t(88);function i(){return(i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}function r(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l={title:"Nginx基础知识",date:new Date("2018-04-17T05:57:45.000Z"),draft:!0},c=[{value:"什么是Nginx",id:"什么是nginx",children:[]},{value:"常见的中间件服务",id:"常见的中间件服务",children:[]},{value:"为什么选择nginx?",id:"为什么选择nginx",children:[]},{value:"安装",id:"安装",children:[]},{value:"安装目录",id:"安装目录",children:[]},{value:"安装编译参数",id:"安装编译参数",children:[]},{value:"nginx基础语法",id:"nginx基础语法",children:[]},{value:"nginx 403 forbidden错误",id:"nginx-403-forbidden错误",children:[]},{value:"配置https",id:"配置https",children:[]}],b={rightToc:c},p="wrapper";function o(n){var e=n.components,t=r(n,["components"]);return Object(a.b)(p,i({},b,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"什么是nginx"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#什么是nginx"}),"#"),"什么是Nginx"),Object(a.b)("p",null,"中间件的作用是隔离应用与应用，应用与操作系统，层次分明，让应用专注于业务。而 Nginx 就是一个开源且高性能、可靠的HTTP中间件、代理服务。"),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"常见的中间件服务"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#常见的中间件服务"}),"#"),"常见的中间件服务"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"HTTPD: apache基金会的产品"),Object(a.b)("li",{parentName:"ul"},"IIS: 微软"),Object(a.b)("li",{parentName:"ul"},"GWS: google web server")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"为什么选择nginx"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#为什么选择nginx"}),"#"),"为什么选择nginx?"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1、IO多路复用epoll(单线程异步IO)")),Object(a.b)("p",null,"为了解决并发的问题，可以采用的方案有多线程、IO多路复用。多线程存在资源消耗的问题。IO多路复用就是单线程异步IO，响应会主动上报(内核会主动发送文件信息给应用端)。"),Object(a.b)("p",null,"IO多路复用的实现方式：select、poll、epoll。"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"select"),": 是单线程同步的方式，效率低下，而且能够监听文件描述符的数量存在最大限制1024个。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"epoll"),": 是单线程异步的方式，最大连接无限制。")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"2、轻量级")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"功能模块少，只保留了和http核心相关的代码。"),Object(a.b)("li",{parentName:"ul"},"代码模块化")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"3、CPU亲和")),Object(a.b)("p",null,"多核服务器主要用于多线程，密集计算型服务使用。如果有多个CPU，利用它自动的切换工作方式，会造成性能的损耗。"),Object(a.b)("p",null,"Nginx是将工作进程和CPU核心，也就是把每个 worker 进程固定到一个 CPU 上执行，减少切换 CPU 的 cache miss，获得更好的性能。"),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"./1/nginx.png",alt:null}))),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"4、sendfile")),Object(a.b)("p",null,"nginx处理静态资源服务是非常高效的。"),Object(a.b)("p",null,"请求文件时，会经过操作系统的",Object(a.b)("inlineCode",{parentName:"p"},"内核空间 -> 用户空间 -> 内核空间 -> Socket"),"多次切换后返回给用户。但是静态文件的获取时可以在内核空间直接返回，不需要用户空间的逻辑处理。nginx是采用了linux2的零拷贝传输模式，把文件的传输只通过内核空间传给Socket，返回给用户。所以在CBN、或动静分离的静态文件处理上，性能更优。"),Object(a.b)("p",null,Object(a.b)("img",i({parentName:"p"},{src:"./1/2.png",alt:null}))),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"安装"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#安装"}),"#"),"安装"),Object(a.b)("p",null,"官网网站：",Object(a.b)("a",i({parentName:"p"},{href:"http://nginx.org/en/download.html"}),"http://nginx.org/"),"。版本信息如下："),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Mainline version"),": 开发版本"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Stable version"),": 稳定版本"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Legacy version"),": 历史版本"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CHANGES"),": 版本更新信息"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pgp"),": 用于对源代码做安全校验的工具，非官方下载的包要验证一下。"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"source code"),": 源代码提交、修改记录"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Pre-Built Packages"),": 通过 yum 等方式源安装，里面有各个系统,如 centeros 的安装方式")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"centeros安装方式")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"新建",Object(a.b)("inlineCode",{parentName:"li"},"vim /etc/yum.repos.d/nginx.repo"),"，这个是 nginx 的源(我的腾讯云不需要这步，直接yum install nginx即可，加了这个文件反而有错误，应该是要翻墙的问题)。")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"# centos是系统,7是系统版本\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/centos/OSRELEASE/7/$basearch/\ngpgcheck=0\nenabled=1\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yum list |grep nginx"),": 列出 nginx 的版本"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"yum install nginx"),"：安装")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"执行安装命令：",Object(a.b)("inlineCode",{parentName:"p"},"yum install nginx"),"。")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"检查安装成功，通过命令",Object(a.b)("inlineCode",{parentName:"p"},"nginx -v"),"。"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"nginx -V"),"：编译的参数。")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"安装目录"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#安装目录"}),"#"),"安装目录"),Object(a.b)("p",null,"通过yum安装都是一个个的rpm包。"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"# 列出安装时创建的文件\nrpm -ql nginx\n\n# 配置文件，Nginx日志轮转，用于logrotate服务的日志切割\n/etc/logrotate.d/nginx\n\n# 目录和配置文件，作用是nginx主配置文件\n/etc/nginx\n/etc/nginx/nginx.conf    // 启动加载的配置文件\n/etc/nginx/conf.d\n/etc/nginx/conf.d/default.conf // 默认读的配置文件\n\n# cgi配置相关，fastcgi配置\n/etc/nginx/fastcgi_params\n/etc/nginx/uwsgi_params\n/etc/nginx/scgi_params\n\n# 编码转换映射转化文件，很少用到\n/etc/nginx/koi-utf\n/etc/nginx/koi-win\n/etc/nginx/win-utf\n\n# 设置http协议的Content-Type与扩展名对应关系，不能识别的扩展名可以在这里添加\n/etc/nginx/mime.types\n\n# 用于配置出系统守护进程管理器管理方式，centeros7.2新的方式\n/usr/lib/systemd/system/nginx-debug.service\n/usr/lib/systemd/system/nginx.service\n/usr/sysconfig/nginx\n/usr/sysconfig/nginx-debug\n\n# Nginx模块目录，安装的一些模块\n/usr/lib64/nginx/modules\n/usr/nginx/modules\n\n# nginx服务的启动管理的终端命令\n/usr/sbin/nginx\n/usr/sbin/nginx-debug    // 用来具体的调试分析\n\n# 手册和帮助文件\n/usr/share/doc/nginx-1.12.0\n/usr/share/doc/nginx-1.12.0/COPYRIGHT\n/usr/share/man/man8/nginx.8.gz\n\n# nginx的缓存目录\n/var/cache/nginx\n\n# nginx的日志目录\n/var/log/nginx\n")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"安装编译参数"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#安装编译参数"}),"#"),"安装编译参数"),Object(a.b)("p",null,"通过",Object(a.b)("inlineCode",{parentName:"p"},"nginx -V"),"命令查看。就是通过源码编译(",Object(a.b)("inlineCode",{parentName:"p"},"./configure"),")时带的参数。"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"# 安装目录\n--prefix=/usr/share/nginx \n--sbin-path=/usr/sbin/nginx \n--modules-path=/usr/lib64/nginx/modules \n--conf-path=/etc/nginx/nginx.conf \n--error-log-path=/var/log/nginx/error.log \n\n# 执行对应模块时，nginx所保留的临时性文件，不是很重要的\n--http-log-path=/var/log/nginx/access.log \n--http-client-body-temp-path=/var/lib/nginx/tmp/client_body\n--http-proxy-temp-path=/var/lib/nginx/tmp/proxy \n--http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi \n--http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi \n--http-scgi-temp-path=/var/lib/nginx/tmp/scgi \n\n# 设定nginx进程启动的用户和组用户，虽然是用root运行，但是它是用nginx用户在跑\n--user=nginx --group=nginx\n\n# 设置额外的参数将被添加到CFLAGS参数\n--with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic'\n\n# 设置附加的参数，链接系统库。比如c编译要依赖那些库，可以把路径添加进来，找库\n--with-ld-opt='-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E'\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ps -ef | grep nginx")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"find /|grep nginx.conf"),": 查找安装目录")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"nginx基础语法"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#nginx基础语法"}),"#"),"nginx基础语法"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"主配置文件 /etc/nginx/nginx.conf")),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"user 设置nginx服务的系统使用用户，和上面的--user类似 \nworker_processes 工作进程数，设置为cpu数即可\nerror_log 错误日志\npid 服务启动时候的pid，会把启动的信息写入文件中\n\nevents \n    - worker_connections 每个进程允许的最大连接数\n    - use  定义内核模型,select或epoll\n\nhttp {\n    ...\n    # 每个独立站点\n    server {\n        listen 80;\n        server_name localhost; # 域名\n\n        # 配置默认访问的路径\n        location / {\n            # 存放首页的目录\n            root  /usr/share/nginx/html;\n\n            # 首页的路径\n            index index.html index.htm;\n        }\n\n        # 错误页面，把500,502,503,504错误码页面定位到50x.html\n        error_page 500 502 503 504 /50x.html\n        location = /50x.html {\n\n            # 页面存放在系统的哪个目录下面\n            root  /usr/share/nginx/html; \n        }\n    }\n\n    server {}\n}\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"log_format 日志类型")),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"nginx-403-forbidden错误"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#nginx-403-forbidden错误"}),"#"),"nginx 403 forbidden错误"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"# 查看nginx状态，绿色active表示正常\nsystemctl status nginx \n\n# 查看端口\nnetstat -tnlp \n\n# nginx端口被占用了\nps -ef | grep nginx\npkill -9 nginx\n\n# 重载服务\n# 无效 service nginx start\n# 有效 service sshd reload \nnginx -s reload\n")),Object(a.b)("p",null,"参考资料：",Object(a.b)("a",i({parentName:"p"},{href:"https://blog.csdn.net/u012832088/article/details/80729002"}),"关于Nginx不能正常启动的问题")),Object(a.b)("p",null,"404，先ping一下看看ip，可能hosts文件改了。"),Object(a.b)("h2",null,Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"配置https"})),Object(a.b)("a",i({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#配置https"}),"#"),"配置https"),Object(a.b)("p",null,"首先在腾讯云申请https证书，然后下载。下载完成后通过下面命令上传到服务器。"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"# 将文件上传到服务器的data目录\nscp www.banli17.com_bundle.crt  www.banli17.com.key  root@101.101.111.121:data/key/\n")),Object(a.b)("p",null,"然后设置",Object(a.b)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf"),"文件。"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-nginx"}),"    server {\n        listen 80;\n        server_name  banli17.com www.banli17.com;\n        rewrite ^(.*)$ https://$host$1 permanent;   # 重定向http 到 https\n        }\n\n    server {\n        listen 443;\n        server_name  banli17.com www.banli17.com;\n\n        #root         /usr/share/nginx/html;\n\n        # 设置 https 证书\n        ssl on;\n        ssl_certificate /data/key/www.banli17.com_bundle.crt;\n        ssl_certificate_key /data/key/www.banli17.com.key;\n        ssl_session_timeout 5m;\n        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_prefer_server_ciphers on;\n\n        # Load configuration files for the default server block.\n        include /etc/nginx/default.d/*.conf;\n\n        location / {\n                root  /data/www/blog/public;\n                index index.html;\n        }\n\n        error_page 404 /404.html;\n            location = /40x.html {\n        }\n\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n")),Object(a.b)("p",null,"最后通过",Object(a.b)("inlineCode",{parentName:"p"},"service nginx reload"),"重载一下后，就可以了。在浏览器输入",Object(a.b)("inlineCode",{parentName:"p"},"http://www.banli17.com"),"就可以重定向到",Object(a.b)("inlineCode",{parentName:"p"},"https://www.banli17.com"),"了。"))}o.isMDXComponent=!0},88:function(n,e,t){"use strict";t.d(e,"a",function(){return c}),t.d(e,"b",function(){return s});var a=t(0),i=t.n(a),r=i.a.createContext({}),l=function(n){var e=i.a.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):Object.assign({},e,n)),t},c=function(n){var e=l(n.components);return i.a.createElement(r.Provider,{value:e},n.children)},b="mdxType",p={inlineCode:"code",wrapper:function(n){return i.a.createElement(i.a.Fragment,{},n.children)}},o=function(n){var e=n.components,t=n.mdxType,a=n.originalType,r=n.parentName,c=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&-1===e.indexOf(a)&&(t[a]=n[a]);return t}(n,["components","mdxType","originalType","parentName"]),b=l(e);return i.a.createElement(b[r+"."+t]||b[t]||p[t]||a,e?Object.assign({},c,{components:e}):c)};function s(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,l=new Array(r);l[0]=o;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c[b]="string"==typeof n?n:a,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}o.displayName="MDXCreateElement"}}]);