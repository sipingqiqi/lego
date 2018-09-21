# check-line 包含单选按钮的check卡片节点
> 包含单选按钮的check支付卡片

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/button.jpeg" width="280.859"/></div>

### 属性列表

属性 | 说明 | 默认值 | 备注 
--- | --- | --- | ---
id | String | 无 | 定义该节点的ID名
label  | String | 无 | 左侧主文字说明
comment  | String | 无 | 左侧副文字
value  | String | 无 | 右侧主文字说明
checked  | String | 'false' | 默认是否勾选
link  | String | 'false' | 是否显示箭头


### 相关功能
>  1.展示支付相关信息
>  2.是否默认选中
>  3.是否显示箭头

### 示例
```
<check-line id='pay1' label='银行卡支付' comment='单日限额 3000 元' value='拉拉银行 尾号3500' link='true'></check-line>
```

### &nbsp;