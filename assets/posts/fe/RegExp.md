### 点字符 .

/c.t/   ===>cat,c2t,c-t  /c..t/  ===>   caat\
不匹配：**\r** -- (回车), **\n** -- (换行), **\u2028** -- (分行符)

### 位置符号 ^  \$

```javascript
/^aaa/.test('aaa123')  // true  aaa开始
/aaa$/.test('123aaa')  // true  aaa结尾
```

### 选择符 |

```javascript
/11|22/.test('911')  //true

```

### 转义符 \\
```javascript
    /1\+1/.test('1+1')   //true
```
^、.、\[、\$、(、)、|、\*、+、?、{、\\

### 字符类 \[]

\[xyz] 表示x、y、z之中任选一个匹配
```javascript
    /[abc]/.test('hello world')   // false
    /[abc]/.test('apple')   // true
```
### 脱字符 ^

\[^xyz]  除了x、y、z之外都可以匹配

    /[^abc]/.test('bbc news') // true
    /[^abc]/.test('bbc') // false

可以解决 .(点) 不包括换行符的问题
```javascript
    var s = 'Please yes\nmake my day!';
    s.match(/yes.*day/) // null
    s.match(/yes[^]*day/) // [ 'yes\nmake my day']
```
注意，脱字符只有在字符类的第一个位置才有特殊含义，否则就是字面含义。

### 连字符 -

\[abc]  === \[a-c]

### 预定义模式

\d     匹配0-9之间的任一数字，相当于\[0-9]。\
\D     匹配所有0-9以外的字符，相当于\[^0-9]。\
\w     匹配任意的字母、数字和下划线，相当于\[A-Za-z0-9\_]。\
\W    除所有字母、数字和下划线以外的字符，相当于\[^A-Za-z0-9\_]。\
\s     匹配空格（包括换行符、制表符、空格符等），相等于\[ \t\r\n\v\f]。\
\S     匹配非空格的字符，相当于\[^ \t\r\n\v\f]。\
\b     匹配词的边界。\
\B     匹配非词边界，即在词的内部。\
/\[^\d.]+/  匹配非数字和小数点
\[\uac00-\ud7ff]  检测韩文\
\[\u4e00-\u9fa5]  检测中文(包括繁体)\
\[ぁ-んァ-ヶ] 检测日文 -- 无中文\
\[\u4e00-\u9fa5]  检测日文 -- 有中文(繁体)

    ^\s*(<(?!!)).*[\uac00-\ud7ff]  非注释韩语
```javascript
<!---->

    // \b 的例子
    /\bworld/.test('hello world') // true
    /\bworld/.test('hello-world') // true
    /\bworld/.test('helloworld') // false

    // \B 的例子
    /\Bworld/.test('hello-world') // false
    /\Bworld/.test('helloworld') // true

<!---->
```
    [\S\s] //指代一切字符

### 重复类 {}

{n} -- 重复n次\
{n,} -- 至少重复n次\
{n,m} -- n <= 重复 <= m

### 量词符 ？ \* +

? === {0,1}\
\*  === {0,}\
\+  === {1,}

### 贪婪模式(匹配到不满足条件为止)
```javascript
    var s = 'aaa';  
    s.match(/a+/) // ["aaa"]
```

### 非贪婪模式

\+?：表示某个模式出现1次或多次，匹配时采用非贪婪模式。
\*?：表示某个模式出现0次或多次，匹配时采用非贪婪模式。
??：表格某个模式出现0次或1次，匹配时采用非贪婪模式。

### 修饰符 g i m

m 多行模式\
因为b是第二行的首字母，所以结果为true
```javascript
    /^b/m.test('a\nb') // true
```

### 组匹配
```javascript
    /fred+/.test('fredd') // true
    /(fred)+/.test('fredfred') // true
     /(fred)(f)/.exec('fredfred') //"fredf", "fred", "f"
```
### 非捕获组
```javascript
    var m = 'abc'.match(/(?:.)b(.)/);  
    m // ["abc", "c"]
```
### 先行断言

x(?=y)\
x只有在y前面才匹配，y不会被计入返回结果。
```javascript
    var a = "fjewioew10021%1231";
    a.match(/\d+(?=%)/);  //10021
```
### 先行否定断言

x(?!y)\
x只有不在y前面才匹配，y不会被计入返回结果。
```javascript
    /\d+(?!\.)/.exec('3.14')
    // ["14"]
```