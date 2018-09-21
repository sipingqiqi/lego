# a-title 文字面板标题栏
> 在文字面板首行，用于展示标题和操作

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/wordPanel_title.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
id | 节点标识 | 符合 id 规范的字符串 | 用于在 controller 中绑定 tap 事件
label | 标签文本 | 字符串 | 左侧文字

### 子节点
> 字符串，即右侧操作的文字描述

### 示例
```
<panel edit='false' bgcolor='white' border='false'>
    <a-title id='save' label='联系方式'>保存</a-title>
</panel>
```

### &nbsp;