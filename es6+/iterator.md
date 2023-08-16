# 迭代器 Iterator

在 JavaScript 中，迭代器是一个对象，它定义一个序列，并在终止时可能返回一个返回值。更具体地说，迭代器是通过使用 next() 方法实现迭代协议的任何一个对象，该方法返回具有两个属性的对象： value，这是序列中的 next 值；和 done ，如果已经迭代到序列中的最后一个值，则它为 true 。如果 value 和 done 一起存在，则它是迭代器的返回值。


## 迭代协议

迭代协议并不是新的内置实现或语法，而是协议。这些协议可以被任何遵循某些约定的对象来实现。

迭代协议具体分为两个协议：可迭代协议和迭代器协议。

### 可迭代协议

可迭代协议允许 JavaScript 对象定义或定制它们的迭代行为，例如，在一个 for..of 结构中，哪些值可以被遍历到。一些内置类型同时是内置的可迭代对象，并且有默认的迭代行为，比如 Array 或者 Map，而其他内置类型则不是（比如 Object）。

要成为可迭代对象，该对象必须实现 @@iterator 方法，这意味着对象（或者它原型链上的某个对象）必须有一个键为 @@iterator 的属性，可通过常量 Symbol.iterator 访问该属性：

[Symbol.iterator]
一个无参数的函数，其返回值为一个符合迭代器协议的对象。

### 迭代器协议

迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

只有实现了一个拥有以下语义（semantic）的 next() 方法，一个对象才能成为迭代器：

+ next()
无参数或者接受一个参数的函数，并返回符合 IteratorResult 接口的对象（见下文）。如果在使用迭代器内置的语言特征（例如 for...of）时，得到一个非对象返回值（例如 false 或 undefined），将会抛出 TypeError（"iterator.next() returned a non-object value"）。

  所有迭代器协议的方法（next()、return() 和 throw()）都应返回实现 IteratorResult 接口的对象。它必须有以下属性：

+ done 可选
   如果迭代器能够生成序列中的下一个值，则返回 false 布尔值。（这等价于没有指定 done 这个属性。）

如果迭代器已将序列迭代完毕，则为 true。这种情况下，value 是可选的，如果它依然存在，即为迭代结束之后的默认返回值。

+ value 可选
迭代器返回的任何 JavaScript 值。done 为 true 时可省略。

```
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    },
    [Symbol.iterator]() {
        return this;
    },
  };
}
```

原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
