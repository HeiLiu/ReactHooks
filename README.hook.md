---
title: React Hook学习
tag: React
categories: 前端
date: 
---

  Hooks 在React 16.8以上的版本中才可以使用
## Hook 定义

   Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的`函数`。Hook 不能在 class 组件中使用 —— 它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性

### Hook 使用了 JavaScript 的闭包机制 

### React 并不会放弃 class 

#### Class 的缺陷： 

  - this 的指向问题，在函数组件的编写中经常会碰到this的指向问题 
  - 编译过后的代码大小 
  - Javascript实现的类本身比较鸡肋，没有类似Java/C++多继承的概念，类的逻辑复用是个问题 
  - Class Component在React内部是当做Javascript Function类来处理的

## Hook 使用规则 

  Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

  - 只能在函数最外层调用 Hook。**不要在循环、条件判断或者子函数中调用**。
  - `只能`在 React 的函数组件或者自定义的Hook中调用 Hook。

<!-- 这一行放哪里好呢 -->
- 使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。

    在实际编写底层组件库中常常会配合 useState Hook 进行测试, 因为我们的最底层的组件通常应该是被设计成 `stateless` 的，需要外部传入props 进行控制测试


##  相关 Hook 的使用

### useState Hook

  在函数组件中、通过 useState Hook 可以使用在class中的 state 特性；返回一个状态以及这个状态的 setter 方法。

### useEffect Hook 

  在每次渲染后都会调用 useEffect 中的函数,它让我们在函数组件中存储内部 state 

  在文档中 被翻译成副作用（感觉即将废弃的那几个生命周期才更应该是称得上“副作用”），即我们原来在 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount  中做得获取数据、销毁操作都被认为是 

  与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快(effect 是异步的操作)。大多数情况下，effect 不需要同步地执行。在个别情况下（例如测量布局），有单独的 useLayoutEffect Hook 供你使用，其 API 与 useEffect 相同。

  与useState传入的是具体state不同，useEffect传入的是一个callback函数，与useState最大的不同是执行时机，useEffect callback是在**组件被渲染为真实DOM后执行**（所以可以用于DOM操作）

- Demo01 
  + Test -> useState Hook
  + useEffect Hook

  ```js
    import React, { useState, useEffect } from 'react';

    const Example = () => {
      const [count, setCount] = useState(0);

      // 相当于 componentDidMount 和 componentDidUpdate:
      // 在执行 DOM 更新之后调用
      useEffect(() => {
        // 在render后输出点击的次数
        console.log(`You clicked ${count} times`);
      });

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            CLICK CRAZY!
          </button>
        </div>
      );
    }
  ```
副作用函数还可以通过返回一个函数来指定如何“清除”副作用。 

当在 useEffect 中 返回一个函数的话，这个函数相当于原先 class组件中的 componentWillUnmount 的时候调用

  ```js
    import React, { useState, useEffect } from 'react';

    function Example() {
      const [count, setCount] = useState(0);

      // 可以添加第二个参数、只要第二个参数发生变化、return中的方法也会执行
      useEffect(() => {
        console.log(`You clicked ${count} times`);
        // 相当于 unmount
        return () => {
          console.log('Bye...');
        }
        // 如果传入 第二个参数 监听某个state变化而执行、实现性能优化，在监听的元素发生变化后才调用 effect
      }, [count]);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
  ```
### useContext Hook 

useContext 的参数必须是 context 对象本身

### useCallback Hook

### useRef



- [React Hooks 文档](https://zh-hans.reactjs.org/docs/hooks-overview.html) 

- [React Hooks 完全上手指南](https://zhuanlan.zhihu.com/p/92211533?utm_source=wechat_session&utm_medium=social&utm_oi=29558355001344)
