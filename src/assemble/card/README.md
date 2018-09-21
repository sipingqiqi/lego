# card 支持的银行卡信息的卡片组件
> 支持的银行卡信息

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/button.jpeg" width="280.859"/></div>

### 属性列表

属性 | 说明 | 默认值 | 备注 
--- | --- | --- | ---
item-data | Object | 无 | 当前提示语所占高度（默认取距离上下组件中较小的高度的2倍+文字高度）
onTap  | Function | 无 | 回调函数，点击后执行的函数


### 相关功能
>  1.支持银行卡的card，可用于list中，数据展示

### 示例
```
<list card='card' name='bankName' value='拉拉银行' :data='list' :on-tap='onTap'  ></list>
```

### &nbsp;