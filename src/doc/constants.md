# 常量列表
> 用于显示普通文本，可设置文本字体大小和颜色

## 字体大小
> 用于指定文本的大小，单位是视觉稿中的 px 像素，相当于 CSS 中的两倍

### 示例

```
<b-text size="30">文字</b-text>
```

### 字体大小对照表

 视觉稿 | CSS | REM 
--- | --- | ---
 22px | 11px | 0.578947 
 24px | 12px | 0.631579
 30px | 15px | 0.789474
 32px | 16px | 0.842105
 34px | 17px | 0.894737 
 36px | 18px | 0.947368
 40px | 20px | 1.052632
 60px | 30px | 1.578947
 120px | 60px | 3.157895
 224px | 112px | 5.894739
 300px | 150px | 7.894737

## 文本颜色
> 用于给文本添加渲染颜色，相当于 color 属性

### 示例

```
<b-text color="grey">灰色文字</b-text>
```

### 颜色列表

 颜色名 | 颜色值 | 示例 
--- | --- | ---
 white			| #FFFFFF | <div style="background: #FFFFFF;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 black			| #333333 | <div style="background: #333333;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 grey 			| #666666 | <div style="background: #666666;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 light			| #999999 | <div style="background: #999999;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 lightgrey	| #c1c1c1 | <div style="background: #c1c1c1;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div> 
 stonegrey 	| #dcdcdc | <div style="background: #dcdcdc;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 smokegrey 	| #e5e5e5 | <div style="background: #e5e5e5;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 offwhite 	| #efefef | <div style="background: #efefef;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 cream 		| #f6f6f7 | <div style="background: #f6f6f7;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 high 			| #D7AC62 | <div style="background: #D7AC62;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 tapping 		| #b38f47 | <div style="background: #b38f47;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 yellowish	| #e0c89d | <div style="background: #e0c89d;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 lightyellow	| #fffce8 | <div style="background: #fffce8;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 grass 		| #58AF51 | <div style="background: #58AF51;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 skyblue		| #4475AC | <div style="background: #4475AC;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 powderblue 	| #50b1ab | <div style="background: #50b1ab;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>   
 blackblue 	| #2e2516 | <div style="background: #2e2516;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 coral 		| #e6654c | <div style="background: #e6654c;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>
 transparent	| transparent |<div style="background: transparent;border: 2px solid #000;width: 150px;height:30px;">&nbsp;</div>

## 背景颜色
> 用于给结构组件设置背景色

 颜色名 | 颜色值 | 示例 
--- | --- | ---
deepbrown | 棕色渐变 |<div style="background: -webkit-linear-gradient(-135deg, #5c4e27, #423620 );width: 150px;height:30px;">&nbsp;</div> 
paper | 0.9白色透明 | <div style="background: #e6654c;width: 150px;height:30px;"><div style="rgba(255,255,255,.9);width: 150px;height:20px;"></div></div> 

   

### 示例

```
<s-cell bgcolor="lightgrey">
    <s-column width="300">
        <b-text>手机号码</b-text>
    </s-column>
    <s-flex-column>
        <b-tel-field></b-tel-field>
    </s-flex-column>
</s-cell>
```

## 字体图标
> 使用 iconfont 定义的字体图标

### 示例
```
<b-icon name="flag"></b-icon>
```

### 图标名称

<img src="https://ohc0dpsgs.qnssl.com/lego/images/iconfont_11.jpg"/>
<img src="https://ohc0dpsgs.qnssl.com/lego/images/iconfont_22.jpg"/>


























