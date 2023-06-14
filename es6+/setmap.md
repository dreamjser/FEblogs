# Set

ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Array.from()方法可以将 Set 结构转为数组。

```
const set = new Set([1, 2, 3, 4, 4]);
[...set]
Array.from(set)
// [1, 2, 3, 4]
```

## Set的属性和方法

### 属性size

返回Set实例的成员总数。

```
const set = new Set([1, 2, 3, 4, 4]);
set.size
// 4
```

### add(value)

添加某个值，返回 Set 结构本身。

### delete(value)

删除某个值，返回一个布尔值，表示删除是否成功。

### has(value)

返回一个布尔值，表示该值是否为Set的成员。

### clear()

清除所有成员，没有返回值。

## Set的遍历方法

### keys(）

返回键名的遍历器

```
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}

// red
// green
// blue
```
### values(）

返回键值的遍历器

```
let set = new Set(['red', 'green', 'blue']);

for (let item of set.values()) {
  console.log(item);
}

// red
// green
// blue
```

### entries

返回键值对的遍历器

```
let set = new Set(['red', 'green', 'blue']);

for (let item of set.entries()) {
  console.log(item);
}

// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
```

### forEach()

```
let set = new Set(['red', 'green', 'blue']);

set.forEach((value, key) => console.log(key + ' : ' + value))

// red : red
// green : green
// blue : blue
```

# WeakSet

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

首先，WeakSet 的成员只能是对象，而不能是其他类型的值。

```
const ws = new WeakSet();
ws.add(1)
// TypeError: Invalid value used in weak set
ws.add(Symbol())
// TypeError: invalid value used in weak set
```

WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。



## add(value)

向 WeakSet 实例添加一个新成员，返回 WeakSet 结构本身。

## delete(value)

清除 WeakSet 实例的指定成员，清除成功返回true，如果在 WeakSet 中找不到该成员或该成员不是对象，返回false。

## has(value)

返回一个布尔值，表示某个值是否在 WeakSet 实例之中。


# Map

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

```
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

上面代码使用 Map 结构的set方法，将对象o当作m的一个键，然后又使用get方法读取这个键，接着使用delete方法删除了这个键。

上面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。

```
const map = new Map([
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
```

## Map的属性和方法

### size 属性

size属性返回 Map 结构的成员总数。

### set(key, value)

set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

### get(key)

get方法读取key对应的键值，如果找不到key，返回undefined。

### has(key)

has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中

### delete(key)

delete方法删除某个键，返回true。如果删除失败，返回false。

### clear()

## Map的遍历方法

### keys(）

返回键名的遍历器

```
let map = new Map([
  ['name', 'zhangsan'],
  ['age': '18']
]);

for (let item of map.keys()) {
  console.log(item);
}

// name
// age
```
### values(）

返回键值的遍历器

```
let map = new Map([
  ['name', 'zhangsan'],
  ['age': '18']
]);

for (let item of map.values()) {
  console.log(item);
}

// zhangsan
// 18
```

### entries

返回键值对的遍历器


```
let map = new Map([
  ['name', 'zhangsan'],
  ['age': '18']
]);

for (let item of map.entries()) {
  console.log(item);
}

// ['name', 'zhangsan']
// ['age': '18']
```

### forEach()

```
let map = new Map([
  ['name', 'zhangsan'],
  ['age': '18']
]);

map.forEach((value, key) => console.log(key + ' : ' + value))

// name : zhangsan
// age : 18
```

# WeakMap

WeakMap结构与Map结构类似，也是用于生成键值对的集合。

WeakMap与Map的区别有两点。

首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

```
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
```

其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。

WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。请看下面的例子。

总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。

# WeakRef

WeakSet 和 WeakMap 是基于弱引用的数据结构，ES2021 更进一步，提供了 WeakRef 对象，用于直接创建对象的弱引用。

```
let target = {};
let wr = new WeakRef(target);
```

上面示例中，target是原始对象，构造函数WeakRef()创建了一个基于target的新对象wr。这里，wr就是一个 WeakRef 的实例，属于对target的弱引用，垃圾回收机制不会计入这个引用，也就是说，wr的引用不会妨碍原始对象target被垃圾回收机制清除。

WeakRef 实例对象有一个deref()方法，如果原始对象存在，该方法返回原始对象；如果原始对象已经被垃圾回收机制清除，该方法返回undefined。

```
let target = {};
let wr = new WeakRef(target);

let obj = wr.deref();
if (obj) { // target 未被垃圾回收机制清除
  // ...
}
```

上面示例中，deref()方法可以判断原始对象是否已被清除。

弱引用对象的一大用处，就是作为缓存，未被清除时可以从缓存取值，一旦清除缓存就自动失效。

# FinalizationRegistry