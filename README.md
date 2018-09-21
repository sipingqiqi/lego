# LEGO 
> 版本 1.0.0

<center><img alt="LEGO" width="160" src="https://ohc0dpsgs.qnssl.com/lego/images/lego.png"/></center>

### 欢迎使用 LEGO 视觉组件库！这是一款用于移动端的 H5 组件库，主要包括常用组件，以及条件校验等功能。组件库仅限于表现层的功能，需要结合 GUM 框架一同使用。
> 注：LEGO UI 的组件封装技术基于 Vue.js

### &nbsp;

### 在线文档

https://wangweiqi.com/lego/1.0.0/docs/

### &nbsp;

## 开始使用

### 环境搭建
#### 1. nginx
```
# 安装 Homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 安装 nginx
brew install nginx
```
#### 2. NodeJS
- 访问 NodeJS 官网 https://nodejs.org/en/download/releases
- 找到 "node-v4.8.0.pkg" 安装包, 下载并安装

#### 3. Grunt
```
# 安装 grunt 和 grunt cli 提示框
npm install grunt --save-dev
npm install -g grunt-cli

# 安装依整的包
npm install
npm install vueify --save-dev
npm install --save-dev grunt-vueify

# 安装 Sass
sudo npm install –save node-sass grunt-sass
```

### &nbsp;
### 编译
```
# 编译全部，包括：库文件、演示、使用文档等
grunt lego

# 只编译库文件
grunt release

# 只编译演示
grunt demo

# 只编译说明文档
node Createdocs.js 
```

### &nbsp;

## 项目说明

### 代码结构
 - **dist** - 生成的 LEGO 库文件和样式文件，拷贝到对应项目的 assets 文件夹即可使用；
 - **docs** - 生成的说明文档，使用 nginx 服务地址访问；
 - **src** - 源文件，包括每个组件的实现和说明；
 - **webroot** - 生成的演示网站；

### 如何使用
> 在 GUM 的处理器中，使用 renderVUE 方法来渲染页面即可。具体方法，请参考说明文档 https://0x5.me/N9VL 。

```
var html = tpl(data);

/**
 * 使用 VUE 来渲染页面的方法
 *
 * @param {String} html - 页面内的 HTML 代码；
 * @param {Object} data - 用于渲染页面的数据对象；
 * @param {String} title - 页面标题；
 * @param {Function} callback - 渲染完成之后的回调函数；
 */
this.renderVUE(html, data, title, function (app) {
    // 页面渲染完成后，注册事件
});
```

### &nbsp;