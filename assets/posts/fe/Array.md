###  Array类型
##### 属性：
>length  

```
new colors = ['white','black','blue'];
colors.lennth;

```
##### 方法：
> ==isArray==();

```
Array.isArray(colors);
```
##### 删除添加方法
> ==shift==(); 移除第一项，返回该项  
> ==pop==(); 移除最后一项，返回该项  
> ==unshift==(); 前端添加，返回新长度  
> ==push==(); 后端添加，返回新长度  
##### 排序方法
> ==reverse==(); 反转数组顺序  
> ==sort();==  排序

```
var values = [1,2,3,4,5]
function compare(value1,value2){
    if(value1 < value2){  
        return -1;  
    {  
    else if( value1 > value2){  
        return 1;  
    }else {  
        retruen 0; 
    }
values.sort(compare);
alert(values);  //升序  反之相反
反之相反
function compare1(value1,value2){
    return value1 - value2;
}
values.sort(compare1);
alert(values);  //升序  反之相反

```
##### 复制、剪切方法
> ==concat==('yellow(选)','green(选)'); 复制并添加，返回新数组  
> ==slice==(起始位置,末尾位置(选)); 返回新数组(不包含末尾)  
> 个数 = 末尾- 起始  
> ==splice==(起始位置,删除个数,'添加项(选)') 返回删除项  
> ##### 查找索引方法  
> ==indexOf==(起始位置(选),'寻找项'); 返回索引值  必须全等  
> ==lastIndextOf==(起始位置(选),'寻找项'); 返回索引值  
##### 迭代方法
> ==every==(function(item,index,array){}); 每一个true，返回true  
> ==some==(function(item,index,array){}); 如有一个true，返回true   
> ==filter==(function(item,index,array){}); 返回true的新数组  
> ==forEach==(function(item,index,array){}); 给每项执行方法，无返回值  
> ==map==(function(item,index,array){}); 给没想执行方法，返回新数组  
> ==reduce==(function(prev,cur,index,array){});  迭代依次进行方法  
> ==reduce==(function(prev,cur,index,array){});  迭代依次进行方法，从最后一项到第一项

```
var values = [ 1,2,3,4,5];
var sum = values.reduce(function(prev,cur,index,array){
    return prev + cur;
});
alert(sum); //15
```
### Date类型