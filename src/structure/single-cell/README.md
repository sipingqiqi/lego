# s-single-cell 单列框
> 用于描述一行之中，只有一列的元素

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull.jpeg" width="280.859"/></div>

### 属性列表
> 所有高度只写数字部份即可，均以 rem 为单位，如: '2.473684'

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
height | 高度 | number | 固定高度，若不固定高度可以不写
border | 是否存在边线 | true / false | 下边线
bgcolor | 背景颜色 | 参见“常量列表” | 


### 子节点
> &lt;s-column&gl;&nbsp;&lt;s-flex-column&gl;&nbsp;&lt;s-multiline&gl;&nbsp;任意数量、任意组合

### 示例
```
<s-single-cell min-height='2.473684' border='true'>
    <b-text size='30' color='black'><slot></slot></b-text>
</s-single-cell>
```

### &nbsp;