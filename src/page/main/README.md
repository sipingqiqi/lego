# p-main 主体容器
> 用于显示页面主体，全屏显示，当页面长度大于页面长度，可以自动变成可滚动状态

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull.jpeg" width="280.859"/></div>

### 属性列表

 属性 | 说明 | 备注 
--- | --- | ---
 bgcolor | 背景颜色 | 参照“常量列表”

### 子节点
> 所有“组合元素”任意数量、任意顺序排列组合

### 示例
```
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
```
