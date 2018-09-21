<!--<list :data="list" :on-tapped="onTapped" :key="cardNo" :value="6222100100010001">
    <card :item-data="item" :item-index="index" :checked="true/false"></card>
</list>-->

# list 列表
> 数据list展示

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull_bottom_IDcard.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
data | 数据 | 字符串 | 左侧文字
url | 请求数据地址 | xxx | xxxx
on-tapped | 回调函数 | 默认为空函数 | 点击list列表中的某项后回调

### 子节点
> 无

### 示例
```
<list card='order-card' :data='list5' :on-tap='onTap'  ></list>
```

### &nbsp;