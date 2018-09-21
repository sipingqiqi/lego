# timeline 时间线
> 用于展示一系列时间截点，以及当前完成情况。按视觉要求，时间线目前都只停留在第一个时间结点，不存在其它结点被点亮的情况。若实际需求中，出现其它情况，请及时反馈。

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/timeline.png" width="280.859"/></div>

### 属性列表
> 无

### 子节点
> &lt;timepoint&gt;&nbsp;&nbsp; 时间结点，至少 3 个，至多 4 个

### 示例
```
<timeline>
    <timepoint label="提交申购" desc="2016-04-19"></timepoint>
    <timepoint label="审核成功" desc="2016-04-20"></timepoint>
    <timepoint label="等待结果" desc="2016-04-21"></timepoint>
</timeline>

```

### &nbsp;