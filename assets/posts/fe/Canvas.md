##### 绘图步骤

1. 生成 <canvas> 标签
2. 获取 document.getElement. 或者 ref 等方法
3. canvasObj.getContext() 获取对象



##### 对象的属性及方法

1. fillStyle 颜色
2. fillRect 填充四方
3. stokeRect 空心四方 
4. moveTo
5. lineTo



##### 绘制路径顺序

1. beginPath()
2. moveTo 或 lineTo
3. closePath() 闭合
4. stroke() 描边

##### 画弧线

方法：arc(x, y, radius, startAngle, endAngle, anticlockwise) arc(50, 50, 25, 0, Math.PI * 2, false)

anticlockwise = true 逆时针

弧度 =( Math.PI / 180 ) * 角度

##### 路径的样式

1. lineWidth
2. lineCap
3. lineJoin

##### 绘制文本



