# transform详解

+ transform的变换是有顺序的，顺序改变会影响变换的结果
+ transform变换角度，坐标轴也会跟着变换，此时会影响后面的平移参考坐标


## transform-origin

变换的起始点，默认在中心点, `transform-origin: 50% 50% 0`;

+ 一个值：
必须是\<length\>，\<percentage\>，或 left, center, right, top, bottom关键字中的一个。
+ 两个值：
其中一个必须是\<length\>，\<percentage\>，或left, center, right关键字中的一个。
另一个必须是\<length\>，\<percentage\>，或top, center, bottom关键字中的一个。
+ 三个值：
前两个值和只有两个值时的用法相同。
第三个值必须是\<length\>。它始终代表 Z 轴偏移量。

<img src="../images/3d_axes.png">

## perspective

`perspective` 指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定。

`perspective: 500px;`

\<length\>指定观察者距离 z=0 平面的距离，为元素及其内容应用透视变换。当值为 0 或负值时，无透视变换，值越小观察者看到的物体越大。

## perspective-origin

`perspective-origin` 指定了观察者的位置，用作 `perspective` 属性的消失点。默认值观察者的中心点center/50% 50%

+ x-position
指定消失点的横坐标，其值有以下形式：
\<length-percentage\> 长度值或相对于元素宽度的百分比值，可为负值。
left, 关键字，0 值的简记。
center, 关键字，50% 的简记。
right, 关键字，100% 的简记。
+ y-position
指定消失点的纵坐标，其值有以下形式：
\<length-percentage\> 长度值或相对于元素高度的百分比值，可为负值。
top, 关键字，0 值的简记。
center, 关键字，50% 的简记。
bottom, 关键字，100% 的简记。

## backface-visibility

`backface-visibility` 指定当元素背面朝向观察者时是否可见。

`backface-visibility: visible | hidden`