# comment 引号提示语组件
> 带有引号的单行或者多行提示语

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/button.jpeg" width="280.859"/></div>

### 属性列表

属性 | 说明 | 默认值 | 备注 
--- | --- | --- | ---
oneline | Boolean | true | 默认是单行的，false时就是多行，且可自行编辑文字大小和文字的


### 子节点
>  可以是文本节点 &lt;b-text &gt;

### 示例
```
<comment :oneline='false'>
    <b-text size='24' color='light'>中风险，累计成交11笔中风险，累计成交11笔中风险，累计成交11笔中风险，累计成交11笔中风险，累计成交11笔中风险，累计成交11笔</b-text>
</comment>
```

### &nbsp;