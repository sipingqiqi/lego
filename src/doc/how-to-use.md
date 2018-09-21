# 如何使用
> 以下介绍如何在 GUM 中使用 LEGO 来组织页面

### 引用 LEGO 库文件和 FController 基类
```
var VueManager  = require('lego');
var FController = require('fcontroller');
```

### 继承 FController 基类，实现当前模块
```
function SecurityController() {
    // 模块名称
    this.moduleName = 'ge';
    this.name = 'security';

    // CSS 文件名称
    this.cssFile = 'ge.security.css';

    // CSS 类型声明 - 该项设置会出现在 html 标签的 class 上
    this.classList = ['security'];

    // 路由表设定
    this.routers = {
        'index': 'index'
    }

    // 指定 LEGO 对象
    this.VueManager = VueManager;
}

// 继承 FController 基类
SecurityController.prototype = new FController({
    index: function () {
        // 实现页面渲染和逻辑
    }
});
```

### 使用 renderVUE 方法渲染页面
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

### 使用“页面标签”和“组合标签”实现页面
```
<!-- 主页面的内容放置在 p-main 标签里 -->
<p-main bgcolor='offwhite'>
    <stub></stub>
    <a-table bgcolor='white'>
        <text-row label='姓名'>李乐乐</text-row>
        <text-row label='姓名'>李乐乐</text-row>
        <text-row label='公司名称'>拉拉养老保险股份有限公司拉拉养老保险股份有限公司拉拉养老保险股份有限公司</text-row>
        <select-row label='开户省份'>请选择</select-row>
    </a-table>
    <stub></stub>
    <a-table bgcolor='white'>
        <text-field-row label='姓名' placeholder='请输入姓名' required='true'></text-field-row>
        <text-field-row label='姓名' placeholder='请输入姓名' value='默认值' required='true'></text-field-row>
        <tel-field-row label='手机号码' placeholder='请输入手机号码' required='true'></tel-field-row>
        <id-field-row label='身份证号' placeholder='请输入身份证号' required='true'></id-field-row>
        <otp-field-row label='验证码' placeholder='短信验证码' required='true'></otp-field-row>
    </a-table>
</p-main>

<!-- 驻底的内容放置在 p-footer 的标签里 -->
<p-footer>
    <dock bgcolor='white'>
        <a-button id='f-cancel'>取消</a-button>
        <a-button id='f-ok'>确定</a-button>
    </dock>
</p-footer>
```

## 页面元素层次
> 以下为顶层页面元素的层次关系，由前向后依次为：弹出层、蒙板层、驻底层、主体页面层

<img src="https://ohc0dpsgs.qnssl.com/lego/images/layers.png"/>

## &nbsp;