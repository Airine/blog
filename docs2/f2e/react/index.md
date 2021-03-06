---
title: "React 知识点总结"
---

## 响应式框架的基本原理

如何实现响应式，即数据变化，视图随着变化。

1. 依赖收集。收集视图依赖了哪些数据。
1. 数据劫持/代理。被依赖数据发生变化时需要知道。
1. 发布订阅模式。数据变化时，通知视图更新。

### 数据劫持

要知道数据变化的直接方法就是数据劫持。往往通过`Object.definedProperty()`或`Proxy`来实现。

### 监听数据变化

对于数组来说，`a.x.push()`并不能触发`a.x`的 setter。为了解决这个问题，Vue 重写了原生 Array.prototype 上的方法。

### Object.defineProperty 与 Proxy 对比

### 模版编译原理

正则 + 遍历 替换字符串

### 双向绑定实现

上面介绍了数据的变化会更新视图，这是单向的。反过来，视图的改变导致数据的变化。实现方法是给元素绑定事件处理函数。

## 发布订阅模式

## MVVM 


## 虚拟 DOM

操作数据结构是指改变对象（虚拟 DOM），这个过程比修改真实 DOM 快很多。但虚拟 DOM 也最终是要挂载到浏览器上成为真实 DOM 节点，因此使用虚拟 DOM 并不能使得操作 DOM 的数量减少，但能够精确地获取最小的、最必要的操作 DOM 的集合。

## 虚拟 DOM diff 算法

## 应用最小差异