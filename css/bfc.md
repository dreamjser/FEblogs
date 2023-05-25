# BFC 块级格式化上下文

块级格式化上下文（Block Formatting Context，BFC），把BFC理解成一块独立的渲染区域，BFC看成是元素的一种属性， 当元素拥有了BFC属性后，这个元素就可以看做成隔离了的独立容器。容器内的元素不会影响容器外的元素

可以将BFC看成是一种属性，当拥有该属性的元素就相当于一块独立的区域。

下列方式会创建块格式化上下文：

+ 根元素（\<html\>）
+ 浮动元素（float 值不为 none）
+ 绝对定位元素（position 值为 absolute 或 fixed）
+ 行内块元素（display 值为 inline-block）
+ 表格单元格（display 值为 table-cell，HTML 表格单元格默认值）
+ 表格标题（display 值为 table-caption，HTML 表格标题默认值）
+ 匿名表格单元格元素（display 值为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 inline-table）
+ overflow 值不为 visible、clip 的块元素
+ display 值为 flow-root 的元素
+ contain 值为 layout、content 或 paint 的元素
+ 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
+ 网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
+ 多列容器（column-count 或 column-width (en-US) 值不为 auto，包括column-count 为 1）
+ column-span 值为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 (规范变更, Chrome bug)+ 

格式化上下文影响布局，通常，我们会为定位和清除浮动创建新的 BFC，而不是更改布局，因为它将：

+ 清除浮动，撑起外部元素
+ 排除外部浮动，阻止元素被浮动元素覆盖
+ 阻止外边距重叠

详见bfc.html示例

