# stage 进度条结点
> 用于描述进度条上的结点

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/progressBar.png" width="280.859"/></div>

### 属性列表
> 无

### 子节点
> 字符串，也可以为空。若为空，表示结点没有文字描述，若所有结点均为空，则按无文字描述的样式去渲染进度条

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