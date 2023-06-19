# Proxy

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```
const p = new Proxy(target, handler)
```

## 参数

+ target
要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

+ handler
一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

## 方法 Proxy.revocable()

`Proxy.revocable()`方法可以用来创建一个可撤销的代理对象。

```
Proxy.revocable(target, handler);
```

该方法的返回值是一个对象，其结构为： {"proxy": proxy, "revoke": revoke}, 其中：

+ proxy
表示新生成的代理对象本身，和用一般方式 new Proxy(target, handler) 创建的代理对象没什么不同，只是它可以被撤销掉。

+ revoke
撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。


一旦某个代理对象被撤销，它将变得几乎完全不可调用，在它身上执行任何的可代理操作都会抛出 TypeError 异常


## handler对象方法

handler 对象是一个容纳一批特定属性的占位符对象。它包含有 Proxy 的各个捕获器（trap）。

所有的捕捉器是可选的。如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

+ handler.getPrototypeOf()
Object.getPrototypeOf 方法的捕捉器。

+ handler.setPrototypeOf()
Object.setPrototypeOf 方法的捕捉器。

+ handler.isExtensible()
Object.isExtensible 方法的捕捉器。

+ handler.preventExtensions()
Object.preventExtensions 方法的捕捉器。

+ handler.getOwnPropertyDescriptor()
Object.getOwnPropertyDescriptor 方法的捕捉器。

+ handler.defineProperty()
Object.defineProperty 方法的捕捉器。

+ handler.has()
in 操作符的捕捉器。

+ handler.get()
属性读取操作的捕捉器。

+ handler.set()
属性设置操作的捕捉器。

+ handler.deleteProperty()
delete 操作符的捕捉器。

+ handler.ownKeys()
Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。

+ handler.apply()
函数调用操作的捕捉器。

+ handler.construct()
new 操作符的捕捉器。