<template>
    <div v-show='data.length > 0'>
        <component v-for='(item, index) in data' :key='index' :is='card' :item-data='item' :item-index='index' :checked='name !== "" && item[name] === value' :on-tap='onTapCallback' :color="color" :size="size" :show-right="showRight"></component>
    </div>
</template>

<script>
    export default {
        props: {

            // 卡片类型
            card: {
                type: String,
                default: 'next-card'
            },

            // 列表数据，要求是数组格式
            data: {
                type: Array,
                default: function () { return {}; }
            },

            // 默认选中的字段名称
            name: {
                type: String,
                default: ''
            },

            // 默认选中的值
            value: {
                type: String,
                default: ''
            },

            // 处理点击事件的回调函数，参数为该项数据对象
            onTap: {
                type: Function,
                default: function () {}
            },

            // 左侧特殊字体颜色
            color: {
                type: String,
                default: 'black'
            },

            // 左侧特殊字体大小
            size: {
                type: String,
                default: '30'
            },

            showRight: {
                type: Boolean,
                default: true
            }


        }, 

        data: function () { 
            return {}; 
        },

        methods: {
            onTapCallback: function (itemData, e) {
                this.onTap(itemData, e);
            }
        }
    }
</script>