# 事件循环 event loop

## 执行栈 Stack

JS 在解析一段代码时，会将同步代码按顺序排在某个地方，即执行栈，然后依次执行里面的函数。

JS 按顺序执行执行栈中的方法，每次执行一个方法时，会为这个方法生成独有的执行环境（上下文 context)，待这个方法执行完成后，销毁当前的执行环境，并从栈中弹出此方法（即消费完成），然后继续下一个方法。

## 任务 Tasks

一个任务就是由执行诸如从头执行一段程序、执行一个事件回调或一个 interval/timeout 被触发之类的标准机制而被调度的任意 JavaScript 代码。这些都在任务队列（task queue）上被调度。

在以下时机，任务会被添加到任务队列：

一段新程序或子程序被直接执行时（比如从一个控制台，或在一个 \<script\> 元素中运行代码）。
+ 触发了一个事件，将其回调函数添加到任务队列时。
+ 执行到一个由 setTimeout() 或 setInterval() 创建的 timeout 或 interval，以致相应的回调函数被添加到任务队列时。

事件循环驱动你的代码按照这些任务排队的顺序，一个接一个地处理它们。在当前迭代轮次中，只有那些当事件循环过程开始时 已经处于任务队列中 的任务会被执行。其余的任务不得不等待到下一次迭代。

## 微任务 Microtasks

起初微任务和任务之间的差异看起来不大。它们很相似；都由位于某个队列的 JavaScript 代码组成并在合适的时候运行。但是，只有在迭代开始时队列中存在的任务才会被事件循环一个接一个地运行，这和处理微任务队列是殊为不同的。

有两点关键的区别。

首先，每当一个任务存在，事件循环都会检查该任务是否正把控制权交给其他 JavaScript 代码。如若不然，事件循环就会运行微任务队列中的所有微任务。接下来微任务循环会在事件循环的每次迭代中被处理多次，包括处理完事件和其他回调之后。

其次，如果一个微任务通过调用 queueMicrotask(), 向队列中加入了更多的微任务，则那些新加入的微任务 会早于下一个任务运行。这是因为事件循环会持续调用微任务直至队列中没有留存的，即使是在有更多微任务持续被加入的情况下。


常见微任务：

+ promise.then()、promise.catch()
+ new MutaionObserver()
+ queueMicrotask()

使用微任务的最主要原因简单归纳为：确保任务顺序的一致性，即便当结果或数据是同步可用的，也要同时减少操作中用户可感知到的延迟而带来的风险。

## 任务 vs 微任务

任务队列和微任务队列的区别很简单，但却很重要：

+ 当执行来自任务队列中的任务时，在每一次新的事件循环开始迭代的时候运行时都会执行队列中的每个任务。在每次迭代开始之后加入到队列中的任务需要在下一次迭代开始之后才会被执行.
+ 每次当一个任务退出且执行上下文为空的时候，微任务队列中的每一个微任务会依次被执行。不同的是它会等到微任务队列为空才会停止执行—即使中途有微任务加入。换句话说，微任务可以添加新的微任务到队列中，并在下一个任务开始执行之前且当前事件循环结束之前执行完所有的微任务。

## 事件循环 event loop

主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。

<img src="https://www.ruanyifeng.com/blogimg/asset/2014/bg2014100802.png">

```
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');

console.log('script end');
```

执行结果

```
script start
script end
promise1
promise2
setTimeout
```

执行步骤分解：

+ step1 执行同步语句`console.log('script start')`
任务队列：`Run Script`
微任务队列：
执行栈：`Script`
log: `script start`

+ step2 setTimeout回调函数加入任务队列
任务队列：`Run Script` `setTimeout callback`
微任务队列：
执行栈：`Script`
log: `script start`

+ setp3 promise.then回调加入微任务队列
任务队列：`Run Script` `setTimeout callback`
微任务队列：`Promise.then1`
执行栈：`Script`
log: `script start`

+ setp4 执行同步语句`console.log('script end')`
任务队列：`Run Script` `setTimeout callback`
微任务队列：`Promise.then1`
执行栈：`Script`
log: `script start` `script end`

+ setp5 同步任务队列执行完成，执行微任务队列回调`console.log('promise1')`
任务队列：`Run Script` `setTimeout callback`
微任务队列：`Promise.then1`
执行栈：`Promise1 callback`
log: `script start` `script end` `promise1`

+ setp6 微任务回调函数中的微任务回调函数加入微任务队列
任务队列：`Run Script` `setTimeout callback`
微任务队列：`Promise.then1` `Promise.then2`
执行栈：`Promise1 callback`
log: `script start` `script end` `promise1`

+ setp7 微任务队列1执行完毕，出微任务队列，继续执行微任务队2列回调`console.log('promise2')`
任务队列：`Run Script` `setTimeout callback`
微任务队列：`Promise.then2`
执行栈：`Promise2 callback`
log: `script start` `script end` `promise1` `promise2`

+ setp8 微任务队列执行完毕，出队列，`Run Script`出任务队列
任务队列：`setTimeout callback`
微任务队列：
执行栈：
log: `script start` `script end` `promise1` `promise2`

+ setp9 执行`setTimeout callback`队列，执行`console.log('setTimeout')`
任务队列：`setTimeout callback`
微任务队列：
执行栈：`setTimeout callback`
log: `script start` `script end` `promise1` `promise2` `setTimeout`