# lead 头条
> 用于页面顶部，给当前页面一个总结性提示，例如：当前用户的资产总额、交易状态等。

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/lead.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
header | 主体上方的文字 | 字符串 | 一般为介绍主体的含义，如：“持有资产”
footer | 主体下方的文字 | 字符串 | 一般为主体的补充说明，如：“申购成功”
link | 右侧链接的文字 | 字符串 | 一般用于提示链接的作用

### 子节点
> 字符串，主体文字描述

### 示例
```
<!-- 只有主体和下侧文字 -->
<lead footer="申购成功">
    交易成功
</lead>

<!-- 只有主体文字 -->
<lead>支付中</lead>

<!-- 只有主体和上侧文字 -->
<lead header="持有资产">
    1110.00
</lead>

<!-- 主体、上侧、下侧文字 -->
<lead header="GE***项目" footer="计划创建时间：2005-07-01">
    李乐乐
</lead>

<!-- 主体、上侧、下侧、链接文字 -->
<lead header="GE***项目" footer="计划创建时间：2005-07-01" link="计划详情" link-id="detail-btn">
    李乐乐
</lead>

```

### &nbsp;