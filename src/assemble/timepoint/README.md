# timepoint 时间结点
> 在时间线中，描述每一个时间结点

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/timeline.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
label | 第一行文字 | 字符串 | 一般为该结点的状态名称
desc | 第二行文字 | 字符串 | 一般为日期时间


### 子节点
> 无

### 示例
```
<timeline>
    <timepoint label="提交申购" desc="2016-04-19"></timepoint>
    <timepoint label="审核成功" desc="2016-04-20"></timepoint>
    <timepoint label="等待结果" desc="2016-04-21"></timepoint>
    <timepoint label="等待结果" desc="2016-04-21"></timepoint>
</timeline>

```

### &nbsp;