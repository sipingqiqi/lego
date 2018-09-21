# protocol 协议
> 一般用于在页面底部，提示用户必须同意若干协议

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/agreement.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
checked | 是否默认选中 | true / false | 


### 子节点
> 文本类型的标签

### 示例
```
<protocol checked='true'>
    <b-text size="24" color="light">我已阅读并同意</b-text>
    <b-highlight id="link" size="24">《拉拉直通银行账户服务协议》</b-highlight>
    <b-highlight id="link" size="24">《拉拉直通银行账户服务协议》</b-highlight>
    <b-text size="24" color="light">我已阅读并同意</b-text>
</protocol>
```

### &nbsp;