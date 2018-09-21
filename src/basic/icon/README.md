# b-icon iconfont字体
> 用于显示icon字体，可设置字体大小和颜色

### DEMO
![DEMO](https://ohc0dpsgs.qnssl.com/image/service/serviceBanner.jpg)

### 属性列表
> 注意：字体大小是按 UI 视觉稿上的标注来定的，比如 22px 等

 属性 | 说明 | 备注 
--- | --- | ---
 size | 文字大小 | 单位为视觉稿中的 px 像素 
 color | 文字颜色 | 不可填写颜色值，目前可选的颜色有：lightgrey、grey、black、highlight 等
 name | icon字体类名 | 有check-solid，angle-up，bean等等，具体可参见iconfont.scss查询相关类名
### 子节点
> 纯文本内容

### 示例
```
<b-icon size="224" color="green" name="check-solid"></b-icon>
```
