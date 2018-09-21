# a-table 表格
> 文字表格，主要用于展示“键-值”对信息，也用于信息录入等

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull.jpeg" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
bgcolor | 背景颜色 | 参见“常量列表” | 


### 子节点
>  &lt;text-row/&gt;&nbsp;&lt;select-row/&gt;&nbsp;&lt;text-field-row/&gt;&nbsp;&lt;tel-field-row/&gt;&nbsp;&lt;id-field-row/&gt;&nbsp;&lt;otp-field-row/&gt;&nbsp;&nbsp;任意组合，任意数量

### 示例
```
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
```

### &nbsp;