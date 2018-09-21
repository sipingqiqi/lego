<template>
    <s-cell height="3.15789" :on-tap='onTapCallback' bgcolor='white' class="_card" border="true" v-show="itemData.orderName">
        <s-flex-column>
        </s-flex-column>
        <s-column width="10" align="left">
            <b-text :color="color" :size="size" >
                {{itemData.orderName}}
            </b-text>
        </s-column>
        <s-column width="8" align="right">
            <b-text size="30" color="light">{{itemData.orderAmount}}元</b-text>
        </s-column>
        <s-flex-column>
        </s-flex-column>
    </s-cell>
    
</template>

<script>
    // 银行卡 点击 进入下一页
    export default {
        props: {
            itemData: {
                type: Object,
                default: function () { return {}; }
            },

            itemIndex: {
                type: Number,
                default: 0
            }, 

            checked: {
                type: Boolean,
                default: false
            },

            onTap: {
                type: Function,
                default: function () {}
            },

            color: {
                type: String,
                default: 'grey'
            },

            // 左侧特殊字体大小
            size: {
                type: String,
                default: '30'
            }

        },

        data: function () {
            return {}
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>