---
title: "浏览器缓存机制"
# sidebar_label: 
---

缓存可以说是性能优化中简单高效的一种优化方式了，它可以显著减少网络传输所带来的损耗。


## 缓存位置

从缓存位置上来说分为四种，并且各自有优先级，当依次查找缓存且都没有命中的时候，才会去请求网络。

1. Service Worker
2. Memory Cache (内存缓存)
3. Disk Cache (硬盘缓存)
4. Push Cache
5. 网络请求

## Memory Cache

Memory Cache 就是内存缓存，读取内存中数据要比磁盘中快。使用内存缓存虽然高效，但是会随着进程销毁而释放。一旦关闭 Tab 页面，内存中的缓存也会被释放掉。

当访问过页面，再次刷新时，发现有些数据会来自于内存缓存。

![](/img/browser/cache/1.png)

内存比硬盘贵，而且小很多。操作系统会很精细的使用内存，所以我们能使用的内存并不多。

- 对于大文件来说，大概率不会使用内存缓存，而小文件，会优先使用内存缓存。
- 当前系统内存使用率高的话，文件优先存储在硬盘中。

## Disk Cache

Disk Cache 也就是存储在硬盘中的缓存，读取速度比内存要慢，但是容量大，存储时间长(除非人为删除)。

在所有浏览器缓存中，Disk Cache 使用面是最大的，304 缓存的内容基本就是存储在这里。并且在跨站情况下，相同地址的资源一旦被硬盘缓存下来，就不会再去发请求数据。

## Push Cache

Push Cache 是 HTTP 2.0 中的内容，当上面 3 种缓存都没有命中时，它才会被使用。并且缓存时间短，只在会话时存在，一旦会话结束就会被释放。

- [HTTP/2 push is tougher than I thought](https://jakearchibald.com/2017/h2-push-tougher-than-i-thought/)

- 所有的资源都能被推送，但是 Edge 和 Safari 兼容性不好。
- 可以推送 no-cache 和 no-store 的资源。
- 一旦连接被关闭，Push Cache 就会被释放。
- 多个页面可以使用相同的 HTTP 2.0 连接，也就是说能使用同样的缓存。
- Push Cache 中的缓存只能被使用一次。
- 浏览器可以拒绝接收已经存在的资源推送。
- 你可以给其它域名推送资源。

## 网络请求

如果所有缓存都没有命中的话，那么只能发起请求来获取资源了。

那么为了性能上的考虑，大部分的接口都应该选择好缓存策略，接下来我们就来学习缓存策略这部分的内容。

## 缓存策略

## 实际场景应用缓存策略

### 频繁变动的资源

对于频繁变动的资源，首先需要使用`Cache-Control: no-cache`，使浏览器每次都请求服务器，然后配置`ETag`或者`Last-Modified`来验证资源是否有效。这种方式可以减少响应数据大小。