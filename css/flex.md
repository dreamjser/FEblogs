# flex布局

## flex容器

采用Flex布局的元素，称为Flex容器（flex container），它的所有子元素自动成为容器成员，称为Flex项目（flex item）

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## flex容器属性

容器的6个属性：

+ flex-direction
+ flex-wrap
+ flex-flow
+ justify-content
+ align-items
+ align-content

### flex-direction

flex-direction属性决定主轴的方向（即项目的排列方向）

flex-direction属性有4个值

+ row（默认值）：主轴为水平方向，起点在左端（项目从左往右排列）。
+ row-reverse：主轴为水平方向，起点在右端（项目从右往左排列）。
+ column：主轴为垂直方向，起点在上沿（项目从上往下排列）。
+ column-reverse：主轴为垂直方向，起点在下沿（项目从下往上排列）。

### flex-wrap

默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

flex-wrap属性有3个值

+ nowrap（默认）：不换行（列）。
+ wrap：主轴为横向时：从上到下换行。主轴为纵向时：从左到右换列。
+ wrap-reverse：主轴为横向时：从下到上换行。主轴为纵向时：从右到左换列。
换行（列）时，项目还按照主轴方向排列。

### flex-flow

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

### justify-content

justify-content属性定义了项目在主轴上的对齐方式。

justify-content属性有5个值：

+ flex-start（默认）：与主轴的起点对齐。
+ flex-end：与主轴的终点对齐。
+ center：与主轴的中点对齐。
+ space-between：两端对齐主轴的起点与终点，项目之间的间隔都相等。
+ space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

### align-items

align-items属性定义项目在交叉轴上如何对齐。

align-items属性有5个值：

+ flex-start：交叉轴的起点对齐。
+ flex-end：交叉轴的终点对齐。
+ center：交叉轴的中点对齐。
+ baseline: 项目的第一行文字的基线对齐。
+ stretch（默认值）：如果项目高度设为auto，项目将占满整个容器的高度。

### align-content

align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

align-content属性有6个值

+ flex-start：与交叉轴的起点对齐。
+ flex-end：与交叉轴的终点对齐。
+ center：与交叉轴的中点对齐。
+ space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
+ space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
+ stretch（默认值）：主轴线占满整个交叉轴。

## flex项目属性

设置在项目上的6个属性。

+ order
+ flex-grow
+ flex-shrink
+ flex-basis
+ flex
+ align-self

### order

rder属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

### flex-grow

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

### flex-shrink

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。负值对该属性无效。如果flex-shrink值为0，表示该项目不收缩。

### flex-basics

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

### flex

flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

### align-self

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。