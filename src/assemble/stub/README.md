# stub 空行
> 用于在流式布局中，插入一行空白

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull.jpeg" width="280.859"/></div>

### 属性列表
> 无

### 子节点
> 无

### 示例
```
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

<stub></stub>
```

### &nbsp;