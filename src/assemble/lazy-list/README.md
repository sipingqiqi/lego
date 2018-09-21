<!-- total-count-key / total-page-key 二选一 -->
<!--<lazy-list card="xxx-card" :url="url" :request="requestObj" :page-key="currentPage" page-size="100"
           :list-key="list" :total-count-key="count" :total-page-key="totalPage"
           :on-tapped="onTapped">
    <card :item-data="item" :item-index="index" :checked="true/false"></card>
</lazy-list>-->

# lazy-list 列表
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
<lazy-list card="order-card" :url="url" :request="requestObj" :page-key="currentPage" page-size="100"
           :list-key="list" :total-count-key="count" :total-page-key="totalPage"
           :on-tapped="onTapped">
</lazy-list>
```

### &nbsp;