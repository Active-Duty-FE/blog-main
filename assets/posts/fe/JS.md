#### 对象
Object.keys(对象);
```
var obj = {
  key1: 1,
  key2: 2
};
```




#### delete 对象.属性  ==不能删除继承的属性==
```
var obj = { p: 1 };
Object.keys(obj) // ["p"]
delete obj.p // true
obj.p  //undefined
Object.keys(obj) // []
```

```
var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }
```
#### 属性 in 对象
```
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
console.log(obj.hasOwnProperty('toString')); //false
```
#### 函数的提升

```
var f = function () {
  console.log('1');
}
function f() {
  console.log('2');
}
f(); //1
```
#### arguments属性 length属性

```
function f() {
return arguments.length;
}
f(1,2); //2
function f() {
return length;
}
f(1,2); //0
```
#### arguments.callee   严格模式里禁用 不推荐
var f=function(){
    console.log(arguments.callee);

}
#### 闭包

```
function createIncrementor(start) {
  return function () {
    return console.log(start++);
  };
}

var inc = createIncrementor(5);
inc();  //5
inc();  //6
inc();  //7
function increase(int){
	function inner(){
		console.log(int++);
	}
	return inner;
}
var a = increase(6);
a();  //6
a();  //7
a();  //8
```

```
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25
```
#### 键名 in 数组

```
var arr = [];
arr[100] = 'a';

100 in arr // true
1 in arr   // false
```
#### 数组空位和undefined
```
var a = [, , ,];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
})
// 不产生任何输出

for (var i in a) {
  console.log(i);
}
// 不产生任何输出

Object.keys(a)
// []
```

```
var a = [undefined, undefined, undefined];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
});
// 0. undefined
// 1. undefined
// 2. undefined

for (var i in a) {
  console.log(i);
}
// 0
// 1
// 2

Object.keys(a)
// ['0', '1', '2']
```