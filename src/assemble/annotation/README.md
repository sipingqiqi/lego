# annotation 提示语组件
> 页面模块间的文字提示语

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/button.jpeg" width="280.859"/></div>

### 属性列表

属性 | 说明 | 默认值 | 备注 
--- | --- | --- | ---
cell-height | String | '1.684211' | 当前提示语所占高度（默认取距离上下组件中较小的高度的2倍+文字高度）
label  | String | “充值金额” | 右边文字内容
label-width | Number | “4.871795” | 右边文字的宽度


### 相关功能
>  1.单行或多行左右不同样式文案的提示
>  2.左边文案可自定义文字大小和颜色,用子组件<b-text>

### 示例
```
<annotation label="购买规则">累计成交<b-text size="24" color="coral">11</b-text>笔中风险</annotation>
```

### &nbsp;