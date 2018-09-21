# flype 可折叠提示
> 一般位于页面顶部，展示多行文字中的首行，并且可以展开或折叠

### DEMO

<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/canFoldTips_1.png" width="280.859"/></div>

<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/canFoldtips_2.png" width="280.859"/></div>


### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
folded | 是否收起 | true / false | 当初始展示时，是否收起文字，默认值为“true”。


### 子节点
> 文字标签

### 示例
```
<flype folded="true">
    <b-text>
        本案需您补充理赔申请材料原件后支付赔款。本案需您补充理赔申请材料原件后支付赔款。<br>
        本案需您补充理赔申请材料原件后支付赔款。本案需您补充理赔申请材料原件后支付赔款。本案需您补充理赔申请材料原件后支付赔款。<br>
        本案需您补充理赔申请材料原件后支付赔款。本案需您补充理赔申请材料原件后支付赔款。<br>本案需您补充理赔申请材料原件后支付赔款。本案需您补充理赔申请材料原件后支付赔款。<br>
        本案需您补充理赔申请材料原件后支付赔款。
    </b-text>
</flype>
```

### &nbsp;