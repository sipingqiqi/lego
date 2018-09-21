# panel 文字面板
> 主要用于展示和编辑“键-值”信息

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/wordPanel.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
bgcolor | 背景颜色 | 参见“常量列表” | 
border | 是否有边框 | true / false | 
edit | 是否为编辑状态 | true / false | 当编辑状态时，子节点右边部分都右对齐


### 子节点
>  &lt;a-title/&gt;&nbsp;&lt;text-row/&gt;&nbsp;&lt;select-row/&gt;&nbsp;&lt;text-field-row/&gt;&nbsp;&lt;tel-field-row/&gt;&nbsp;&lt;id-field-row/&gt;&nbsp;&lt;otp-field-row/&gt;&nbsp;&nbsp;任意组合，任意数量

### 示例
```
<panel edit='false' bgcolor='white' border='false'>
    <a-title id='save' label='联系方式'>保存</a-title>
    <text-row label='姓名'>李乐乐</text-row>
    <text-row label='证件类型'>21234567989456462</text-row>
    <text-row label='出生日期'>1995-02-05</text-row>
    <text-row label='性别'>男</text-row>
    <text-field-row label='性别' placeholder='请输入'>男</text-field-row>
</panel>
```

### &nbsp;