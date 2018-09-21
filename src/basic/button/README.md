# b-button 按钮button
> 用于显示普通button，可设置button宽高，文字大小，背景颜色，点击状态，

### DEMO
![DEMO](https://ohc0dpsgs.qnssl.com/image/service/serviceBanner.jpg)

### 属性列表
> 注意：

 属性 | 说明 | 备注 
--- | --- | ---
 size | 文字大小 | 单位为视觉稿中的 px 像素 
 width | 宽度 | 单位为视觉稿中的 px/38 rem
 height | 高度 | 单位为视觉稿中的 px/38 rem
 tapcolor | 点击状态 | 只可填写 tapping 或者不写该属性
 filled | 是否有背景色 | true 为高亮的背景色， false 则为透明背景色

### 子节点
> 纯文本内容

### 示例
```
<b-button id='btn' size="34" color="white" tapcolor="tapping" height="2.105263" filled='true' >提交</b-button>
```
