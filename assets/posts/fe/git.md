## 终端机常用命令

| Windows | macOS / Linux | 说明               |
| ------- | ------------- | ------------------ |
| cd      | cd            | 切换目录           |
| cd      | pwd           | 获取当前所在的位置 |
| dir     | ls            | 列出当前文件列表   |
| mkdir   | mkdir         | 创建新的目录       |
| 无      | touch         | 创建文件           |
| copy    | cp            | 复制文件           |
| move    | mv            | 移动文件           |
| del     | rm            | 删除文件           |
| cls     | clear         | 清楚画面上的内容   |

`cd /tmp` 绝对路径
`cd my_project` 相对路径
`cd ..` 往上一目录移动
`ls -al` 查看所有历史记录
## VIM
* Normal模式 => Insert模式
  i = insert / a = append / o = new line
* Insert模式 => Normal模式
  ESC or Ctrl + [

## 用户设置
### 设置
``` 
$ git config --global user.name "Hyang"
$ git config --global user.email "asdf@fgh.com"
```
### 查看
`$ git config --listgit`

## 设置缩写
```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.st status
$ git config --global alias.l "log --oneline --graph"
$ git config --global alias.ls 'log --graph --pretty=format:"%h <%an> %ar %s"'
```
## 创建文件
* `$ echo "hello" > index.html` 带内容
* `touch index.html` 不带内容

## 提交到暂存区
#### 添加特定
`$ git add inde.html` 
`$ git add *.html`
#### 全部添加
`$ git add .` 添加当前目录所有的内容
`$ git add --all` 添加所有

## 暂存区提交到储存库
`$ git commit -m "第一个commnit"` 写内容
`$ git commit --allow-empty -m ""` 不写内容

## 查看记录(最好用 SourceTree 查看)
#### 普通
`$ git log` 
#### 简版查看
`$ git log --oneline --graph` 
#### 查询某人的commit
`$ git log --oneline --author="hyang"` 
#### 查询commit信息中包含关键字
`$ git log --oneline --grep="first commit"` 
#### 查询文件中包含关键字
`$ git log -S "hello"` 
#### 查询时间段的
```
$ git log --oneline --since="9am" --until="12am" //当天
$ git log --oneline --since="9am" --until="12am" --after="2022-03" //2022年3月之后的每天上午9点到12点的记录
```
## 删除文件
`$ git rm index.html`  等同于rm + git add
## 改名
`$ git mv hh.html aa.html` 等同于mv + git add
## 修改最后一次 commit 信息
`$ git commit --amend -m 'modify'`
## 空目录被追踪
添加.keep 或 .gitkeep
## 忽略开发阶段文件
* 生成 .gitignore 文件
* 添加 例如：*.tmp db\/.sqlite3
## 忽略 .gitingore 强制 add
`$ git add -f`
## 清楚忽略文件
`$ git clean -fX`
## 查看特定文件的 commit 记录
#### 一般查看
`$ git log aa.html`
#### 查看改动
`$ git log -p aa.html`
## 这行代码是谁写
#### 一般查询
`$ git blame aa.html`
#### 选行查询
`$ git blame -L 5,10 aa.html`
## reset 用法

| 模式     | soft | mixed  | hard   |
| -------- | ---- | ------ | ------ |
| 指针     | 移动 | 移动   | 移动   |
| 工作目录 | 不变 | 被重置 | 被重置 |
| 暂存区   | 不变 | 不变   | 被重置 |

```
$ git reset --hard a92f434
$ git reset --hard HEAD~2
```
## 查看 reset 之前记录
`$ git reflog`
## 使用分支
#### 查看分支
`$ git branch -v`
#### 创建分支
`$ git branch cat`
#### 重命名
`$ git branch -m cat tiger
#### 删除分支
###### 删除已合并
`$ git branch -d tiger`
###### 强制删除未合并
`$ git branch -D tiger`
#### 切换分支
###### 普通切换
`$ git checkout cat`
###### 创建并切换
`$ git checkout -b dog`
#### 合并分支
###### 普通合并
* 先切换到主线master
`$ git merge cat` 
###### REBASE合并 （换自己的根）
* 在分支上操作
###### 普通 REBASE 合并
`git rebase master`
###### 特殊 REBASE 合并（合并分支 commit 后再合并到 master）
`git rebase -i master`
进入vim 
* i进入编辑模式
* 把需要合并的log前字母 => 改成s(squash)
* ESC退出编辑模式
* :wq 保存后退出

## 远程合作
#### 查看远程别名列表
`$ git remote -v`
#### 给指定远程起别名
`$ git remote add origin *****/****.git`
#### 本地 master 推到远程 origin
`$ git push -u origin master`
#### 拉取远程git
`$ git fetch`
#### 切换到远程库
`$ git checkout origin/master`
#### 查看内容
$ ll
#### 查看里面文件
` cat 文件名`
#### 进行合并
`$ git merge origin/master`
`$ git pull origin master` === git fetch + git merge
`$ git pull -rebase` 
#### 克隆 Repository 到本地
`$ git clone ****/***.git`
#### 复制 Repository 到自己的Repository
Fork

#### git diff 文件名 or git diff
以行为单位比较暂存区和工作区的数据
#### git diff HEAD or 索引号 文件名
比较暂存区和本地库

## VSCode 终端设置 git bash
```
"terminal.integrated.profiles.windows": {
        "PowerShell": {
            "source": "PowerShell",
            "icon": "terminal-powershell"
        },
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": [],
            "icon": "terminal-cmd"
        },
        "gitBash": {
            "path": "D:\\ProgramFiles\\Git\\bin\\bash.exe"
        }
    }
```