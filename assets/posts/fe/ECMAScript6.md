**字符串：**

contains();

startsWith();

endsWith();

repeat();

```
${}
```

**数值：**

isFinite(25);   // true

isFinite('25');   // true

Number.isFinite(25);   // true

Number.isFinite('25');  // false

Math.trunc(4.1);   // 4

Math.trunc(4.9);    // 4

Math.trunc(-4.1);    // -4

Math.trunc(-4.9);    // -4

**数组：**

Array.from(array); 返回iterable对象

Array.of(3,11,8)    // [3,11,8]

Array.of(3).length   // 1

Array()    // []

Arrray(3)    // [undefined,undefined,undefined]

Array(3,11,8)    // [3,11,8]

[1,5,9,10].find(function(value,index,arr){

return value > 9;

});    //10

[1,5,NaN,10].findIndex(function(a,b,c){

return Object.is(NaN,a);

});    //2

**对象：**

+0 === -0      // true

NaN === NaN     // false

Object.is(+0,-0)      // false

Object.is(NaN,NaN)     // true

var target = {a:1}

var source1 = {a:2}

var source2 = {b:3}

Object.assign(target,source1,source2)    target     // {a:2,B:2}