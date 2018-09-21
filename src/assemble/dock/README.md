# dock 按钮
> 将多个按钮组合成常用的组件形式，主要包括：单行单按钮、单行双按钮、单行三按钮等

### 组件截图
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/button.jpeg" width="280.859"/></div>

### 属性列表
> 注意：文字大小是按 UI 视觉稿上的标注来定的，比如 22px 等

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
filled | 是否充满 | true / false | 若充满表现为直角；若非充满表现为圆角，并有留白
bgcolor | 背影颜色 | 参见“常量列表” | 


### 子节点
>  &lt;a-button/&gt; &nbsp;&nbsp;至少一个，至多两个

### 示例
```
<dock filled='true' bgcolor='white'>
    <a-button id='confirm'>确定</a-button>
</dock>

<dock filled='false' bgcolor='white'>
    <a-button id='ok'>确定</a-button>
</dock>

<dock bgcolor='white'>
    <a-button id='cancel'>取消</a-button>
    <a-button id='ok'>确定</a-button>
</dock>
```

### &nbsp;