> 配置环境变量

`export PATH=$PATH:/usr/local/mysql/bin`

> 进入 mysql 

`mysql -uroot -pFbgid~8867`

### 数据库四大语言
> DDL (Data Definition Language) 数据库定义语言

>> 数据库

`show databases;` 查看所有数据库
`create database if not exists demo_db;` 创建数据库
`use demo_db;` 进入数据库
`select database();` 查看当先使用的数据库
`drop database demo_db;` 删除数据库

>> 表

`show tables;` 查看所有表格
`desc t_user;` 查看某张表的结构

```js
create table if not exists t_users(
    id int primary key auto_increment,
    name varchar(20) unique not null,
    age int
    level int default 0
); 创建表格
```
`drop table if exists t_table;` 删除某张表

>> 修改表结构

`alter table '原名' remane to '新名';` 修改表名
`alter table '表名' add '列名' 类型;` 添加一个新的列
`alter table '表名' add '列名' 类型 timestamp default current_timestamp on update current_timestamp;` 添加修改时间字段，并修改时改为新的时间
`alter table '表名' drop '列名';` 删除一列数据
`alter table '表名' change '原列名' '新列名' 类型;` 修改列的名称
`alter table '表名' modify '列名' 类型;` 修该列的数据类型

> DML (Data Manipulation Language) 数据库操作语言

`insert into '表名' (列名) values (值);` 增加数据
`delete from '表名';` 清空表
`delete from '表名' where 条件;` 根据条件删除数据
`update '表名' set '列名'='新数据', '列名'='新数据' 条件;` 修表数据-条件

> DQL (Data Query Language) 数据库查询语言 
```
select '列名', '列名','列名' from '表名' where 条件 order by 排序依据 limit 查询个数 offset 查询偏移值 group by '列名' having where 条件
```
`select * from '表名';` 查询所有
`select * from '表明' where '列名' in ('列值1', '列值2');` 枚举出数据

> 模糊查询 (LIKE)

% 表示多个自字符
— 表示一个字符
`select * from '表名' where '列名' like '_a%';`   vapple

> 排序(ORDER BY) ASC DESC

`select * from '' order by asc;` 升序
`select * from '' order by desc;` 降序

> 分页查询

`select * from '表名' limit 个数 offset 偏移量;`

> 聚合函数 

`select avg(列名) as avg** from '表名';` 求平均值

[avg, max, min, count, sum]

> 分组

`select 列名, avg(列名) from '表名' group by '列名';` 

> 分组并加条

`select 列名, avg(列名) **avg from '表名' group by '列名' having **avg的条件;` 

> 外键设置

>>创建时指定

```js
create table if not exits '表名'(
    id int primary key auto_increment,
    name varchar(10),
    brand_id int,
    foreign key (brand_id) reference 外表明(外列名)
);
```
>>修改已有的表

`alter table '表名' add '外键' 类型;`
`alter table '表名' add foreigh key (外键) reference 外表名(外列名);`

>> 更新外键

restrict(默认) 不允许，会报错
no action sql标准中定义的，与 restrict 一致
on update cascade 同步更新
on delete cascade 同步删除
set null 值改为 null

修改已有外键
`show create table 表名;` 查看外键名
`alter table 表名 drop foreign key 外键名;` 删除外键
`alter table 表名 add foreign key (外键) reference 外表名(外列名) 更新外间条件;` 添加有更新条件的外键

> 多表查询

`select * from 表名 left join 外表名 on 连接条件 where 进一步的显示条件 -> '列名' is null 或者 is not null;`

left join 左连接
right join 右连接
inner join 内连接
(left join) union (right join) 全连接
(left join where '列名' is null) union (right join where '列名' is null) 全反连接

> 转数据格式

`select json_object('新列名', 值, '新列名', 值) as 对象名 from ... ;` 转对象
`select json_arrayagg(json_object('新列名', 值, '新列名', 值) as 数组对象名) from ... ;` 转数组

> DCL (Data Control Language) 数据库控制语言

> 连接数据库

> node 连接数据库

```js
const connectionPool = mysql.createPool({
    port: 3306,
    host: 'localhost',
    database: '数据库名',
    username: 'root',
    password: 'Fbgid~8867',
    connectionLimit: 5
})
```

> 检查是否连接成功

```js
    connectionPool.getConnection((err, connection) => {
        if(err){
            console.log('获取连接失败', err)
            return
        }
        connection.connect((err) => {
            if(err){
                console.log('数据交互失败', err)
            } else {
                console.log('数据交互成功！')
            }
        })
    })
```