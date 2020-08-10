<!--
 * @Author: yqj
 * @Date: 2020-08-04 16:04:46
 * @LastEditTime: 2020-08-06 19:56:28
 * @Description: 
-->

cli 主要作用的就是拉取模版，和webpack联系

`npm link`

把我当前目录先暂时放到全局目录下


## 安装

```
npm install commander ora inquirer ncp
```
## 1.commander
  #### 1.1 `process.argv`
  解析输入的命令参数比如 :`vue-cli -help`，help就是参数。`process.argv`是数组第一项：是执行环境， 第二项：命令的所在路径， 第三四...项：-后的参数

  #### 1.2 `program.parse`
  解析用户传递的命令行参数，
  
  


## 2. package.json
  #### bin:
  ```
  可以定义命令名和关联的执行文件
  ```