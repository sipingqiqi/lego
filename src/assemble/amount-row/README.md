# amount-row 金额验证功能组件
> 理财投资、赎回、充值等输入金额验证的功能组件

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/button.jpeg" width="280.859"/></div>

### 属性列表

属性 | 说明 | 默认值 | 备注 
--- | --- | --- | ---
label | String | 无 | 用于当需要有 全部转出 功能时，全部转出的金额
desc  | String | 默认为“充值金额” | 对此功能模块的标题定义，如充值或申购或赎回等标题描述
placeholder | String | 默认为“请输入充值金额” | 金额输入框默认的提示语


### 相关功能
>  1.输入金额转成中文数字
>  2.全部转出功能
>  3.超出限额提示

### 示例
```
<amount-row label='1000' desc='赎回金额' placeholder="本次最多赎回1000.00元"></amount-row>
```

### &nbsp;