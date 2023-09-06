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
