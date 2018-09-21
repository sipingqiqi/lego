# text-field-row 文本输入行
> 在文字表格中的表单填写项，用于输入一行无格式限制的文字

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull_top_onlyWord.png" width="280.859"/></div>

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

    <text-field-row label='姓名' placeholder='请输入姓名' value='默认值' required='true'>
    </text-field-row>

</a-table>
```

### &nbsp;