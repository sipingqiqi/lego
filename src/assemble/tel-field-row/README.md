# tel-field-row 手机输入行
> 在文字表格中的表单填写项，用于输入一行手机号码。格式校验规则为：13、14、15、17、18 开头的 11 位数字

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull_bottom_phone.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
label | 标签文本 | 字符串 | 左侧文字
placeholder | 提示文本 | 字符串 | 在输入框为空白时，灰色显示的文字
value | 默认值 | 字符串 | 在输入框内的默认文本
required | 是否必填 | true / false | 若为必填项，在光标移出时，会引发必填性检验

### 子节点
> 无

### 示例
```
<a-table bgcolor='white'>

    <tel-field-row label='手机号码' placeholder='请输入手机号码' required='true'>
    </tel-field-row>

</a-table>
```

### &nbsp;