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
