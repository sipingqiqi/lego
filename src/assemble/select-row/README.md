# select-row 文本链接行
> 在文字表格中，展示纯文本的“键-值”成对信息，并显示一个“箭头”，引导用户跳转到下一个页面

### DEMO
<div><img alt="DEMO" src="https://ohc0dpsgs.qnssl.com/lego/images/formNull_top_wordLink.png" width="280.859"/></div>

### 属性列表

属性 | 说明 | 可选值 | 备注 
--- | --- | --- | ---
label | 标签文本 | 字符串 | 左侧文字


### 子节点
> 字符串，即右侧文字，右对齐。

### 示例
```
<a-table bgcolor='white'>

    <select-row label='开户省份'>
        请选择
    </select-row>
    
</a-table>
```

### &nbsp;