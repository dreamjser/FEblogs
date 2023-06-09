# web worker

JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。

Web Worker 为 Web 内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面。此外，它们可以使用 XMLHttpRequest（尽管 responseXML 和 channel 属性总是为空）或 fetch（没有这些限制）执行 I/O。一旦创建，一个 worker 可以将消息发送到创建它的 JavaScript 代码，通过将消息发布到该代码指定的事件处理器（反之亦然）。

Web Worker 有以下几个使用注意点。

+ 同源限制
分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

+ DOM 限制
Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。

+ 通信联系
Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

+ 脚本限制
Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

+ 文件限制
Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。


## web worker主线程

```
var myWork = new Worker('work.js')

myWork.postMessage('拼接字符串')
myWork.onmessage = (e) => {
    console.log(e.data)
    document.getElementById('input').value = e.data

    myWork.terminate();
}
```

发送消息 postMessage(message, transfer)
+ message
要传递给 worker 的对象；这将在传递给 DedicatedWorkerGlobalScope.message_event (en-US) 事件的 data 字段中。这可以是任何值或可以通过结构化克隆算法处理的 JavaScript 对象（可以包含循环引用）。
如果未提供 message 参数，则解析器将抛出 SyntaxError。如果要传递给 worker 的数据不重要，可以显式传递 null 或 undefined。
+ transfer 可选
一个可选的、会被转移所有权的可转移对象数组。如果一个对象的所有权被转移，它将在发送它的上下文中变为不可用（中止），而仅在接收方的 worker 中可用。
像 ArrayBuffer、MessagePort 或 ImageBitmap 类的实例才是可转移对象，才能够被转移。不能将 null 作为 transfer 的值。

接收消息 onmessage(event)

当 worker 的父级接收到来自其 worker 的消息时（也就是说，当 worker 通过 DedicatedWorkerGlobalScope.postMessage() (en-US) 发送消息时），会在 Worker 对象上触发 message 事件。

+ event.data 接收的数据存储在event.data内

## worker线程

```
const cacl = (data) => {
    for (var i = 0; i < 100; i++) {
        var count = 0
        for (var i = 0; i < 6000000000; i++) {
            count += i
        }
    }

    return count + data
}

onmessage = function(e) {
    var data = e.data
    var result = cacl(data)

    this.postMessage(result)
}
```

onmessage(event)

接收主线程发送的消息

+ event.data 接收的数据存储在event.data内


postMessage(message)

向主线程发送消息