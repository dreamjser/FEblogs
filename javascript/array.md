# 数组方法

## Array.prototype.at()

`at()` 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

```
const arr = [1, 2, 3, 4]

// 输出2
console.log(arr.at(2))

// 输出3
console.log(arr.at(-2))
```

## Array.prototype.concat()

`concat()` 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

```
const arr2 = [1, 2, 3]

const arr3 = arr2.concat(['a','b'], [4, 5])

// [1, 2, 3, "a", "b", 4, 5]
console.log(arr3)
```

## Array.prototype.copyWithin()

`copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

copyWithin(target, start?, end?)

- target 序列开始替换的目标位置，以 0 为起始的下标表示，且将被转换为整数

  - 负索引将从数组末尾开始计数——如果 target < 0，则实际是 target + array.length。
  - 如果 target < -array.length，则使用 0。
  - 如果 target >= array.length，则不会拷贝任何内容。
  - 如果 target 位于 start 之后，则复制只会持续到 array.length 结束（换句话说，copyWithin() 永远不会扩展数组）。

- start 可选
  要复制的元素序列的起始位置，以 0 为起始的下标表示，且将被转换为整数

  - 负索引将从数组末尾开始计数——如果 start < 0，则实际是 start + array.length。
  - 如果省略 start 或 start < -array.length，则默认为 0。
  - 如果 start >= array.length，则不会拷贝任何内容。

- end 可选
  要复制的元素序列的结束位置，以 0 为起始的下标表示，且将被转换为整数。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。

  - 负索引将从数组末尾开始计数——如果 end < 0，则实际是 end + array.length。
  - 如果 end < -array.length，则使用0。
  - 如果省略 end 或 end >= array.length，则默认为 array.length，这将导致直到数组末尾的所有元素都被复制。
  - 如果 end 位于 start 之前，则不会拷贝任何内容。

```
const arr4 = [1, 2, 3, 4, 5]
const arr5 = [1, 2, 3, 4, 5]

// [4, 5, 3, 4, 5]
console.log(arr4.copyWithin(0, 3))

// [1, 2, 3, 4, 5]
console.log(arr5.copyWithin(-2, 3))
```

## Array.prototype.entries()

entries() 方法返回一个新的数组迭代器 (en-US)对象，该对象包含数组中每个索引的键/值对。

```
const arr6 = ['a', 'b', 'c']

const iterator6 = arr6.entries()

// [0, 'a']
console.log(iterator6.next().value)
```

## Array.prototype.every()

`every()` 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。

every(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示元素通过测试，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 every() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const arr7 = [1, 2, 3]
// true
console.log(arr7.every((el, index, arr) => (el >= 1)))
```

## Array.prototype.fill()

`fill()` 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。

fill(value, start?, end?)

+ value

  用来填充数组元素的值。注意所有数组中的元素都将是这个确定的值：如果 value 是个对象，那么数组的每一项都会引用这个元素。

+ start 可选
  基于零的索引，从此开始填充，转换为整数。

  + 负数索引从数组的末端开始计算，如果 start < 0，则使用 start + array.length。
  + 如果 start < -array.length 或 start 被省略，则使用 0。
  + 如果 start >= array.length，没有索引被填充。

+ end 可选
  基于零的索引，在此结束填充，转换为整数。fill() 填充到但不包含 end 索引。

  + 负数索引从数组的末端开始计算，如果 end < 0，则使用 end + array.length。
  + 如果 end < -array.length，则使用 0。
  + 如果 end >= array.length 或 end 被省略，则使用 array.length，导致所有索引都被填充。
  + 如果经标准化后，end 的位置在 start 之前或之上，没有索引被填充。


```
const arr8 = [1, 2, 3]
// [1, 'a', 'a']
console.log(arr8.fill('a', 1, 3))
```

## Array.prototype.filter()

`filter()` 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。

every(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以将元素保留在结果数组中，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 filter() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。


```
const arr9 = [1, 2, 3]
// [2, 3]
console.log(arr9.filter((el) => el > 1))
```

## Array.prototype.find()

`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

find(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值来表示已经找到了匹配的元素。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 find() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

// { name: 'cherries', quantity: 5 }
console.log(inventory.find(isCherries));
```

## Array.prototype.findIndex()

`findIndex()` 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

findIndex(callbackFn, thisArg)


- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 findIndex() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

// 2
console.log(inventory.findIndex(isCherries));
```

## Array.prototype.findLast()

`findLast()` 方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回 undefined。

- callbackFn
  数组中测试元素的函数。回调应该返回一个真值，表示已找到匹配的元素，否则返回一个假值。函数在被调用时会传递以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 findLast() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const array9 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

// 130
console.log(found);
```

## Array.prototype.findLastIndex()

`findLastIndex()` 方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回 -1。

findLastIndex(callbackFn, thisArg)


- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 findLastIndex() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;
// 3
console.log(array1.findLastIndex(isLargeNumber));

```

## Array.prototype.flat()

`flat()` 方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中。

flat(depth)

- depth 可选
指定要提取嵌套数组的结构深度，默认值为 1。

```
const arr12 = [1, 2, [3, 4, [5, 6]]];
// [1, 2, 3, 4, [5, 6]]
console.log(arr12.flat())

const arr13 = [1, 2, [3, 4, [5, 6]]];
// [1, 2, 3, 4, 5, 6]
console.log(arr12.flat(2))

```

## Array.prototype.flatMap()

`flatMap()` 方法对数组中的每个元素应用给定的回调函数，然后将结果展开一级，返回一个新数组。它等价于在调用 `map()` 方法后再调用深度为 1 的 `flat()` 方法（arr.map(...args).flat()），但比分别调用这两个方法稍微更高效一些。

flatMap(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 flatMap() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const arr14 = ["it's Sunny in", "", "California"];
// [["it's","Sunny","in"],[""],["California"]]
console.log(arr14.map((x) => x.split(" ")));

// ["it's","Sunny","in", "", "California"]
console.log(arr14.flatMap((x) => x.split(" ")));

```

## Array.prototype.forEach()

`forEach()` 方法对数组的每个元素执行一次给定的函数。

forEach(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 forEach() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const array1 = ['a', 'b', 'c'];
// a b c
array1.forEach((element) => console.log(element));

```

## Array.from()

`Array.from()` 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。

Array.from(arrayLike, mapFn?, thisArg?)

- arrayLike
想要转换成数组的类数组或可迭代对象。

- mapFn 可选
调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 mapFn 的返回值增加到数组中。使用以下参数调用该函数：

  - element
  数组当前正在处理的元素。

  - index
  数组当前正在处理的元素的索引。

- thisArg 可选
执行 mapFn 时用作 this 的值。

Array.from() 可以通过以下方式来创建数组对象：

- 可迭代对象（例如 Map 和 Set 对象）；或者，如果对象是不可迭代的，
- 类数组对象（带有 length 属性和索引元素的对象）。

```
Array.from("foo");
// [ "f", "o", "o" ]

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]
```

## Array.fromAsync()

`Array.fromAsync()` 静态方法可以由一个异步可迭代对象、可迭代对象或类数组对象创建一个新的、浅拷贝的 Array 实例。返回一个新的 Promise，其兑现值是一个新的 Array 实例。

Array.fromAsync(arrayLike, mapFn?, thisArg?)

- arrayLike
想要转换成数组的类数组或可迭代对象。

- mapFn 可选
调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 mapFn 的返回值增加到数组中。使用以下参数调用该函数：

  - element
  数组当前正在处理的元素。

  - index
  数组当前正在处理的元素的索引。

- thisArg 可选
执行 mapFn 时用作 this 的值。

```
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
```

与 Promise.all() 的比较
Array.fromAsync() 会依次等待对象中产生的每个值兑现。Promise.all() 会并行等待所有值兑现。

## Array.prototype.includes()

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

includes(searchElement, fromIndex?)

- searchElement
需要查找的值。

- fromIndex 可选
开始搜索的索引（从零开始），会转换为整数。

  - 负索引从数组末尾开始计数——如果 fromIndex < 0，那么实际使用的是 fromIndex + array.length。然而在这种情况下，数组仍然从前往后进行搜索。
  - 如果 fromIndex < -array.length 或者省略 fromIndex，则使用 0，这将导致整个数组被搜索。
  - 如果 fromIndex >= array.length，则不会搜索数组并返回 false。

```
[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
```

## Array.prototype.indexOf()

`indexOf()` 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。

indexOf(searchElement, fromIndex?)

- searchElement
需要查找的值。

- fromIndex 可选
开始搜索的索引（从零开始），会转换为整数。

  - 负索引从数组末尾开始计数——如果 fromIndex < 0，那么实际使用的是 fromIndex + array.length。然而在这种情况下，数组仍然从前往后进行搜索。
  - 如果 fromIndex < -array.length 或者省略 fromIndex，则使用 0，这将导致整个数组被搜索。
  - 如果 fromIndex >= array.length，则不会搜索数组并返回 false。

```
[1, 2, 3].indexOf(2); // 1
[1, 2, 3].indexOf(4); // -1
```

## Array.isArray()

Array.isArray() 静态方法用于确定传递的值是否是一个 Array。

```
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true
```

## Array.prototype.join()

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"
```

## Array.prototype.keys()

keys() 方法返回一个新的数组迭代器 (en-US)对象，其中包含数组中每个索引的键。


```
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();
// 0 1 2
for (const key of iterator) {
  console.log(key);
}
```

## Array.prototype.lastIndexOf()

`lastIndexOf()` 方法返回数组中给定元素最后一次出现的索引，如果不存在则返回 -1。该方法从 fromIndex 开始向前搜索数组。

lastIndexOf(searchElement, fromIndex?)

- searchElement
被查找的元素。

- fromIndex 可选
以 0 起始的索引，表明反向搜索的起始位置，会被转换为整数。

  - 如果 fromIndex < 0，则从数组末尾开始倒数计数——即使用 fromIndex + array.length 的值。
  - 如果 fromIndex < -array.length，则不搜索数组并返回 -1。从概念上讲，你可以把它想象成从数组开始之前不存在的位置开始反向搜索，这条路径上没有任何数组元素，因此 searchElement 永远不会被找到。
  - 如果 fromIndex >= array.length 或者省略了 fromIndex，则使用 array.length - 1，这会导致搜索整个数组。可以将其理解为从数组尾部之后不存在的位置开始向前搜索。最终会访问到数组最后一个元素，并继续向前开始实际搜索数组元素。

```
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

## Array.prototype.map()

`map()` 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

map(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示已找到匹配元素，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 map() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots 现在是     [1, 2, 3]
// numbers 依旧是   [1, 4, 9]
```

## Array.of()

`Array.of()` 静态方法通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。

```
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]
```

## Array.prototype.pop()

`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

```
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
```

## Array.prototype.push()

`push()` 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

```
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```

## Array.prototype.reduce()

`reduce()` 方法对数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

reduce(callbackFn, initialValue)

- callbackFn
  为数组中每个元素执行的函数。其返回值将作为下一次调用 callbackFn 时的 accumulator 参数。对于最后一次调用，返回值将作为 reduce() 的返回值。该函数被调用时将传入以下参数：

  - accumulator
  上一次调用 callbackFn 的结果。在第一次调用时，如果指定了 initialValue 则为指定的值，否则为 array[0] 的值。

  - currentValue
  当前元素的值。在第一次调用时，如果指定了 initialValue，则为 array[0] 的值，否则为 array[1]。

  - currentIndex
  currentValue 在数组中的索引位置。在第一次调用时，如果指定了 initialValue 则为 0，否则为 1。

  - array
  调用了 reduce() 的数组本身。

- initialValue 可选
第一次调用回调时初始化 accumulator 的值。如果指定了 initialValue，则 callbackFn 从数组中的第一个值作为 currentValue 开始执行。如果没有指定 initialValue，则 accumulator 初始化为数组中的第一个值，并且 callbackFn 从数组中的第二个值作为 currentValue 开始执行。在这种情况下，如果数组为空（没有第一个值可以作为 accumulator 返回），则会抛出错误。

```
const arr17 = [{
    id: '1001',
    name: 'syg'
  },{
    id: '1002',
    name: 'zs'
  },{
    id: '1003',
    name: 'z22'
  }]

  const obj = arr17.reduce((o, item, index) => {
    o[item.id] = item
    return o
  }, {})
  console.log(obj)

```

## Array.prototype.reduceRight()

`reduceRight()` 方法对累加器（accumulator）和数组的每个值（按从右到左的顺序）应用一个函数，并使其成为单个值。

- callbackFn
为数组中的每个元素执行的函数。其返回值将作为下一次调用 callbackFn 时的 accumulator 参数。对于最后一次调用，返回值将成为 reduceRight() 的返回值。该函数被调用时将传入以下参数：

  - accumulator
  上一次调用 callbackFn 的结果。在第一次调用时，如果指定了 initialValue 则为指定的值，否则为数组最后一个元素的值。

  - currentValue
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  array
  调用了 reduceRight() 的数组本身。

- initialValue 可选
首次调用 callbackFn 时累加器的值。如果不提供初始值，则将使用数组中的最后一个元素，并在迭代时跳过它。没有初始值的情况下，在空数组上调用 reduceRight() 会产生 TypeError。

## Array.prototype.reverse()

`reverse()` 方法就地反转数组中的元素，并返回同一数组的引用。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。换句话说，数组中的元素顺序将被翻转，变为与之前相反的方向。

```
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]
```

## Array.prototype.shift()

`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

```
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]
```

## Array.prototype.slice()

`slice()` 方法返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），其中 start 和 end 代表了数组元素的索引。原始数组不会被改变。

slice(start?, end?)

- start 可选
提取起始处的索引（从 0 开始），会转换为整数。

  - 如果索引是负数，则从数组末尾开始计算——如果 start < 0，则使用 start + array.length。
  - 如果 start < -array.length 或者省略了 start，则使用 0。
  - 如果 start >= array.length，则不提取任何元素。
- end 可选
提取终止处的索引（从 0 开始），会转换为整数。slice() 会提取到但不包括 end 的位置。

  - 如果索引是负数，则从数组末尾开始计算——如果 end < 0，则使用 end + array.length。
  - 如果 end < -array.length，则使用 0。
  - 如果 end >= array.length 或者省略了 end，则使用 array.length，提取所有元素直到末尾。
  - 如果 end 在规范化后小于或等于 start，则不提取任何元素。

## Array.prototype.some()

`some()` 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。它不会修改数组。

some(callbackFn, thisArg)

- callbackFn
  为数组中的每个元素执行的函数。它应该返回一个真值以指示元素通过测试，否则返回一个假值。该函数被调用时将传入以下参数：

  - element
  数组中当前正在处理的元素。

  - index
  正在处理的元素在数组中的索引。

  - array
  调用了 some() 的数组本身。

- thisArg 可选
执行 callbackFn 时用作 this 的值。

```
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

## Array.prototype.sort()

`sort()` 方法就地对数组的元素进行排序，并返回对相同数组的引用。默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

sort(compareFn)

- compareFn 可选
定义排序顺序的函数。返回值应该是一个数字，其正负性表示两个元素的相对顺序。该函数使用以下参数调用：

  - a
  第一个用于比较的元素。不会是 undefined。

  - b
  第二个用于比较的元素。不会是 undefined。

如果省略该函数，数组元素会被转换为字符串，然后根据每个字符的 Unicode 码位值进行排序。

```
const arr18 = [2, 3, 11, 5]

arr18.sort((a, b) => {
  return b - a
})
// [11, 5, 3, 2]
console.log(arr18)
```

## Array.prototype.splice()

`splice()` 方法通过移除或者替换已存在的元素和/或添加新元素就地改变一个数组的内容。

splice(start, deleteCount, item1, item2, itemN)

- start
  从 0 开始计算的索引，表示要开始改变数组的位置，它会被转换成整数。

  - 负索引从数组末尾开始计算——如果 start < 0，使用 start + array.length。
  - 如果 start < -array.length，使用 0。
  - 如果 start >= array.length，则不会删除任何元素，但是该方法会表现为添加元素的函数，添加所提供的那些元素。
  - 如果 start 被省略了（即调用 splice() 时不传递参数），则不会删除任何元素。这与传递 undefined 不同，后者会被转换为 0。
- deleteCount 可选
  一个整数，表示数组中要从 start 开始删除的元素数量。

  如果省略了 deleteCount，或者其值大于或等于由 start 指定的位置到数组末尾的元素数量，那么从 start 到数组末尾的所有元素将被删除。但是，如果你想要传递任何 itemN 参数，则应向 deleteCount 传递 Infinity 值，以删除 start 之后的所有元素，因为显式的 undefined 会转换为 0。

  如果 deleteCount 是 0 或者负数，则不会移除任何元素。在这种情况下，你应该至少指定一个新元素（请参见下文）。

- item1, …, itemN 可选
  从 start 开始要加入到数组中的元素。

  如果不指定任何元素，splice() 将只从数组中删除元素。

- 返回值
一个包含了删除的元素的数组。

```
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish 是 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed 是 []，没有元素被删除
```

```
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// 运算后的 myFish 是 ["angel", "clown", "drum", "sturgeon"]
// removed 是 ["mandarin"]
```

## Array.prototype.toReversed()

Array 实例的 toReversed() 方法是 reverse() 方法对应的复制版本。它返回一个元素顺序相反的新数组。

## Array.prototype.toSorted()

Array 实例的 toSorted() 方法是 sort() 方法的复制方法版本。它返回一个新数组，其元素按升序排列。

## Array.prototype.toSpliced()

Array 实例的 toSpliced() 方法是 splice() 方法的复制版本。它返回一个新数组，并在给定的索引处删除和/或替换了一些元素。

## Array.prototype.unshift()

unshift() 方法将指定元素添加到数组的开头，并返回数组的新长度。

```
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```

## Array.prototype.values()

values() 方法返回一个新的数组迭代器 (en-US)对象，该对象迭代数组中每个元素的值。

```
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## Array.prototype.with()

Array 实例的 with() 方法是使用方括号表示法修改指定索引值的复制方法版本。它会返回一个新数组，其指定索引处的值会被新值替换。

array.with(index, value)

```
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```
