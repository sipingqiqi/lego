# stepwise 完成进度
> 例如：已完成 1/5 

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/stepWise.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
label | 左侧文字提示 | 字符串 | 一般为“已完成”
rate | 当前步骤 | number | 小于等于 total 的非负整数
total | 总步骤 | number | 正整数，一般范围在 1~5 之间


### 子节点
> 无

### 示例
```
<stepwise label='已完成 ' rate='2' total='5'></stepwise>

```

### &nbsp;