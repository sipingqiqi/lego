# id-field-row 身份证输入行
> 在文字表格中的表单填写项，用于输入一行身份证号码。格式校验规则支持 15 位和 18 位身份证号码，若有字母“X”，自动转为大写

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull_bottom_IDcard.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
label | 标签文本 | 字符串 | 左侧文字
placeholder | 提示文本 | 字符串 | 在输入框为空白时，灰色显示的文字
value | 默认值 | 字符串 | 在输入框内的默认文本
required | 是否必填 | true / false | 若为必填项，在光标移出时，会引发必填性检验
label-width | 左边文字文字宽度 | 默认为“4.871795” | 左侧文字宽度设定

### 子节点
> 无

### 示例
```
<a-table bgcolor='white'>

    <id-field-row label='身份证号' :label-width='5' placeholder='请输入身份证号' required='true'>
    </id-field-row>

</a-table>
```

### &nbsp;