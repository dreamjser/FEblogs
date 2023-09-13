# 字符串String

## String.prototype.at()

`at()` 方法接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

```
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of -4 the character returned is d"
```

## String.prototype.charAt()

String 的 `charAt()` 方法返回一个由给定索引处的单个 UTF-16 码元构成的新字符串。

```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"
```

## String.prototype.charCodeAt()

String 的 `charCodeAt()` 方法返回一个整数，表示给定索引处的 UTF-16 码元，其值介于 0 和 65535 之间。

```
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"
```

## String.prototype.codePointAt()

String 的 `codePointAt()` 方法返回一个非负整数，该整数是从给定索引开始的字符的 Unicode 码位值。请注意，索引仍然基于 UTF-16 码元，而不是 Unicode 码位。


## String.prototype.concat()

`concat()` 方法将字符串参数连接到调用的字符串，并返回一个新的字符串。

```
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"
```

## String.prototype.endsWith()

`endsWith()` 方法用于判断一个字符串是否以指定字符串结尾，如果是则返回 true，否则返回 false。

endsWith(searchString, endPosition)

- searchString
要搜索的作为结尾的字符串，不能是正则表达式。所有非正则表达式的值都会被强制转换为字符串，因此如果该参数被省略或传入 undefined，endsWith() 方法会在字符串中搜索 "undefined"，这通常不是你想要的。

- endPosition 可选
预期找到 searchString 的末尾位置（即 searchString 最后一个字符的索引加 1）。默认为 str.length。

- 返回值
如果被检索字符串的末尾出现了指定的字符串（包括 searchString 为空字符串的情况），则返回 true；否则返回 false。

## String.prototype.includes()

`includes()` 方法执行区分大小写的搜索，以确定是否可以在一个字符串中找到另一个字符串，并根据情况返回 true 或 false。

includes(searchString, position)

- searchString
要在 str 中搜索的字符串。不能是正则表达式。

- position 可选
在字符串中开始搜索 searchString 的位置。（默认为 0。）

```
"Blue Whale".includes("blue"); // 返回 false
```

## String.prototype.indexOf()

String 的 `indexOf()` 方法在字符串中搜索指定子字符串，并返回其第一次出现的位置索引。它可以接受一个可选的参数指定搜索的起始位置，如果找到了指定的子字符串，则返回的位置索引大于或等于指定的数字。

indexOf(searchString, position)

- searchValue
要搜索的子字符串。所有传入值都会被强制转换为字符串，因此如果该参数被省略或传入 undefined，indexOf() 方法会在字符串中搜索 "undefined"，这通常不是你想要的。

- position 可选
该方法返回指定子字符串在大于或等于 position 位置的第一次出现的索引，默认为 0。如果 position 大于调用字符串的长度，则该方法根本不搜索调用字符串。如果 position 小于零，该方法的行为就像 position 为 0 时一样。

  - hello world hello'.indexOf('o', -5) 返回 4——因为它使该方法的行为类似于第二个参数为 0，并且 o 在大于或等于 0 位置的第一次出现是在 4 位置。
  - 'hello world hello'.indexOf('world', 12) 返回 -1——因为，虽然子字符串 world 确实出现在索引 6 处，但该位置不大于或等于 12。
  - 'hello world hello'.indexOf('o', 99) 返回 -1——因为 99 大于 hello world hello 的长度，这会导致方法根本不搜索字符串。
- 返回值
查找的字符串 searchValue 的第一次出现的索引，如果没有找到，则返回 -1。

```
"Blue Whale".indexOf("Blue"); // 返回  0
"Blue Whale".indexOf("Blute"); // 返回 -1
"Blue Whale".indexOf("Whale", 0); // 返回  5
"Blue Whale".indexOf("Whale", 5); // 返回  5
"Blue Whale".indexOf("Whale", 7); // 返回 -1
```

## String.prototype.match()

`match()` 方法检索字符串与正则表达式进行匹配的结果。

match(regexp)

- regexp
  一个正则表达式对象或者任何具有 Symbol.match 方法的对象。

  如果 regexp 不是 RegExp 对象并且对象上无 Symbol.match 方法，则会使用 new RegExp(regexp) 将其隐式地转换为 RegExp。

  如果你没有给出任何参数并直接使用 match() 方法，你将会得到一个包含空字符串的数组：[""]，因为这等价于 match(/(?:)/)。

- 返回值
  一个 Array，其内容取决于是否存在全局（g）标志，如果没有匹配，则返回 null。

  如果使用 g 标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
  如果没有使用 g 标志，则只返回第一个完整匹配及其相关捕获组。在这种情况下，match() 方法将返回与 RegExp.prototype.exec() 相同的结果（一个带有一些额外属性的数组）。

```
const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]
```

## String.prototype.matchAll()

`matchAll()` 方法返回一个迭代器，该迭代器包含了检索字符串与正则表达式进行匹配的所有结果（包括捕获组）。

matchAll(regexp)

- regexp
  一个正则表达式对象，或者是任何具有 Symbol.matchAll 方法的对象。

  如果 regexp 不是一个 RegExp 对象，并且没有 Symbol.matchAll 方法，它将通过 new RegExp(regexp, 'g') 被隐式转换为一个 RegExp 对象。

  如果 regexp 是一个正则表达式，那么它必须设置了全局（g）标志，否则会抛出 TypeError 异常。

- 返回值
一个匹配结果的可迭代迭代器对象 (en-US)（它不可重新开始）。每个匹配结果都是一个数组，其形状与 RegExp.prototype.exec() 的返回值相同。

```
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `找到 ${match[0]} 起始位置=${match.index} 结束位置=${
      match.index + match[0].length
    }.`,
  );
}
// 找到 football 起始位置=6 结束位置=14.
// 找到 foosball 起始位置=16 结束位置=24.

// 匹配迭代器在 for...of 迭代后用尽
// 再次调用 matchAll 以创建新的迭代器
Array.from(str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]
```

## String.prototype.padEnd()

`padEnd()` 方法会将当前字符串从末尾开始填充给定的字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的末尾开始的。


padEnd(targetLength, padString)

- targetLength
当前 str 填充后的长度。如果该值小于或等于 str.length，则会直接返回当前 str。

- padString 可选
用于填充当前 str 的字符串。如果 padString 太长，无法适应 targetLength，则会被截断：对于从左到右的语言，左侧的部分将会被保留；对于从右到左的语言，右侧的部分将会被保留。默认值为“ ” (U+0020)。

- 返回值
在当前 str 末尾填充 padString 直到达到给定的 targetLength 所形成的 String。

```
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## String.prototype.padStart()

`padStart()` 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。

padStart(targetLength, padString)

- targetLength
当前 str 填充后的长度。如果该值小于或等于 str.length，则会直接返回当前 str。

- padString 可选
用于填充当前 str 的字符串。如果 padString 太长，无法适应 targetLength，则会从末尾被截断。默认值为 Unicode“空格”字符（U+0020）。

```
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

## String.raw()

`String.raw()` 静态方法是模板字符串的标签函数。它的作用类似于 Python 中的 r 前缀或 C# 中用于字符串字面量的 @ 前缀。它用于获取模板字符串的原始字符串形式——即，替换表达式（例如 ${foo}）会被替换处理，但转义序列（例如 \n）不会被处理。

```
console.log(String.raw`Hi\n${2 + 3}!`, `Hi\n${2 + 3}!`)
// Hi\n5
// Hi
// n5
```

## String.prototype.repeat()

`repeat()` 方法构造并返回一个新字符串，其中包含指定数量的所调用的字符串副本，这些副本连接在一起。

```
const mood = 'Happy! ';

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
```

## String.prototype.replace()

`replace()` 方法返回一个新字符串，其中一个、多个或所有匹配的 pattern 被替换为 replacement。pattern 可以是字符串或 RegExp，replacement 可以是字符串或一个在每次匹配时调用的函数。如果 pattern 是字符串，则只会替换第一个匹配项。原始的字符串不会改变。

replace(pattern, replacement)

- pattern
可以是字符串或者一个带有 Symbol.replace 方法的对象，典型的例子就是正则表达式。任何没有 Symbol.replace 方法的值都会被强制转换为字符串。

- replacement
  可以是字符串或函数。

  - 如果是字符串，它将替换由 pattern 匹配的子字符串。支持一些特殊的替换模式，请参阅下面的指定字符串作为替换项部分。
  - 如果是函数，将为每个匹配调用该函数，并将其返回值用作替换文本。下面的指定函数作为替换项部分描述了提供给此函数的参数。
- 返回值
一个新的字符串，其中一个、多个或所有的匹配项都被指定的替换项替换。

模式|插入值
---|---
$$ | 插入一个 "$"。
$& | 插入匹配的子字符串。
$` | 插入匹配子字符串之前的字符串片段。
$' | 插入匹配子字符串之后的字符串片段。
$n | 插入第 n（索引从 1 开始）个捕获组，其中 n 是小于 100 的正整数。
$ | 插入名称为 Name 的命名捕获组。

```
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```
该函数的参数如下所示：

- match
匹配的子字符串。（对应于上面的 $&。）

- p1, p2, …, pN
如果 replace() 的第一个参数是 RegExp 对象，则为捕获组（包括命名捕获组）找到的第 n 个字符串。（对应于上面的 $1、$2 等。）例如，如果 pattern 是 /(\d+)(\w+)/，则 p1 是 \a+ 的匹配项，p2 是 \b+ 的匹配项。如果该组是分支的一部分（例如 "abc".replace(/(a)|(b)/, Replacer)），则不匹配的替代项将为 undefined。

- offset
原始字符串中匹配子字符串的偏移量。例如，如果整个字符串是 'abcd'，而匹配的子字符串是 'bc'，那么这个参数将是 1。

- string
正在检查的原始字符串。

- groups
一个捕获组命名组成的对象，值是匹配的部分（如果没有匹配，则为 undefined）。仅在 pattern 包含至少一个命名捕获组时才存在。

参数的确切数量取决于第一个参数是否为 RegExp 对象，以及它有多少个捕获组。

```
'123ad'.replace(/(\d+)([a-z]+)/, '$1-$2')
// '123-ad'
```

## string.prototype.replaceAll()

`replaceAll()` 方法返回一个新字符串，其中所有匹配 pattern 的部分都被替换为 replacement。pattern 可以是一个字符串或一个 RegExp，replacement 可以是一个字符串或一个在每次匹配时调用的函数。原始字符串保持不变。

- pattern
  可以是一个字符串或一个具有 Symbol.replace 方法的对象，典型的例子是正则表达式。任何没有 Symbol.replace 方法的值都将被强制转换为字符串。

  如果 pattern 是一个正则表达式，则必须设置全局（g）标志，否则会抛出 TypeError。

- replacement
 可以是一个字符串或一个函数。替换字符串的语义与 String.prototype.replace() 相同。

- 返回值
  返回一个新字符串，其中所有匹配 pattern 的部分都被替换为 replacement。

```
"aabbcc".replaceAll(/b/g, ".");
// "aa..cc"
```

## String.prototype.search()

`search()` 方法用于在 String 对象中执行正则表达式的搜索，寻找匹配项。

search(regexp)

- regexp
  一个正则表达式对象，或者具有 Symbol.search 方法的任意对象。

  如果 regexp 不是 RegExp 对象，并且不具有 Symbol.search 方法，则会使用 new RegExp(regexp) 将其隐式转换为 RegExp。

- 返回值
  如果匹配成功，则返回正则表达式在字符串中首次匹配的索引；否则，返回 -1。

```
'123ad'.search(/[a-z]/)
// 3
```

## String.prototype.slice()

`slice()` 方法提取字符串的一部分，并将其作为新字符串返回，而不修改原始字符串。

slice(indexStart, indexEnd?)

- indexStart
要返回的子字符串中包含的第一个字符的索引。

- indexEnd 可选
要返回的子字符串中排除的第一个字符的索引。

```
const str1 = "The morning is upon us."; // str1 的长度是 23。
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);
console.log(str2); // he morn
console.log(str3); // morning is upon u
console.log(str4); // is upon us.
console.log(str5); // ""
```

## String.prototype.split()

`split()` 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。

split(separator, limit?)

- separator
描述每个分割应该发生在哪里的模式。可以是 undefined，一个字符串，或者一个具有 Symbol.split 方法的对象——典型的例子是正则表达式。省略 separator 或传递 undefined 会导致 split() 返回一个只包含所调用字符串数组。所有不是 undefined 的值或不具有 @@split 方法的对象都被强制转换为字符串。

- limit 可选
一个非负整数，指定数组中包含的子字符串的数量限制。当提供此参数时，split 方法会在指定 separator 每次出现时分割该字符串，但在已经有 limit 个元素时停止分割。任何剩余的文本都不会包含在数组中。

如果在达到极限之前就达到了字符串的末端，那么数组包含的条目可能少于 limit。
如果 limit 为 0，则返回 []。
- 返回值
在给定字符串中出现 separator 的每一个点上进行分割而成的字符串数组。

```
'a|b|c|d|e'.split(/\|/, 3)
// ['a', 'b', 'c']
```

## String.prototype.startsWith()

String 的 `startsWith()` 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。

startsWith(searchString, position?)

- searchString
要在该字符串开头搜索的子串。不能是正则表达式。所有不是正则表达式的值都会被强制转换为字符串，因此省略它或传递 undefined 将导致 startsWith() 搜索字符串 "undefined"，这应该不是你想要的结果。

- position 可选
searchString 期望被找到的起始位置（即 searchString 的第一个字符的索引）。默认为 0。

- 返回值
如果给定的字符在字符串的开头被找到（包括当 searchString 是空字符串时），则返回 true；否则返回 false。


```
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false
```

## String.prototype.substring()

String 的 `substring()` 方法返回该字符串从起始索引到结束索引（不包括）的部分，如果未提供结束索引，则返回到字符串末尾的部分。

substring(indexStart, indexEnd?)

- indexStart
返回子字符串中第一个要包含的字符的索引。

- indexEnd 可选
返回子字符串中第一个要排除的字符的索引。


```
const anyString = "Mozilla";

console.log(anyString.substring(0, 1)); // 'M'
console.log(anyString.substring(1, 0)); // 'M'
```

## String.prototype.toLowerCase()

String 的 `toLowerCase()` 方法将该字符串转换为小写形式。


## String.prototype.toUpperCase()

String 的 `toUpperCase()` 方法将该字符串转换为大写形式。

## String.prototype.trim()

String 的 `trim()` 方法会从字符串的两端移除空白字符，并返回一个新的字符串，而不会修改原始字符串。

## String.prototype.trimEnd()

String 的 `trimEnd()` 方法会从字符串的结尾移除空白字符，并返回一个新的字符串，而不会修改原始字符串。`trimRight()` 是该方法的别名。

## String.prototype.trimStart()

String 的 `trimStart()` 方法会从字符串的开头移除空白字符，并返回一个新的字符串，而不会修改原始字符串。`trimLeft()` 是该方法的别名
