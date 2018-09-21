# b-rectangular 直角按钮
> 用于显示直角按钮，可设置button宽高，文字大小，是否有背景色

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
<b-rectangular-button size="34"  color="white" width="6.315789" height="3.157895" filled="true">直角button</b-rectangular-button>
```
