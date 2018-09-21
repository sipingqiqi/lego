# otp-field-row 短信验证码
> 在文字表格中的表单填写项，用于输入短信验证码。该组件包含“发送”按钮。暂不支持倒计时、重新发送等操作

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull_bottom_message.png" width="280.859"/></div>

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

    <otp-field-row label='验证码' placeholder='短信验证码' required='true'>
    </otp-field-row>

</a-table>
```

### &nbsp;