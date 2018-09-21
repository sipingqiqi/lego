# stages 进度条
> 用于展示 2~4 步的进度

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/progressBar.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
value | 当前步骤 | number | 1~4 代表当前步骤


### 子节点
> &lt;stage&gt; 至少 2 个，至多 4 个

### 示例
```
<!-- 没有文字描述 -->
<stages value="1">
    <stage></stage>
    <stage></stage>
    <stage></stage>
</stages>

<!-- 有文字描述 -->
<stages value="3">
    <stage>领取信息1</stage>
    <stage>领取信息2</stage>
    <stage>领取信息3</stage>
    <stage>领取信息4</stage>
</stages>
```

### &nbsp;