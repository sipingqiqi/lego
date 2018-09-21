<template>
    <s-cell height="2.473684" :on-tap='onTapCallback' bgcolor='white' class="_card" border="true" data-tappable >
        <s-flex-column>
        </s-flex-column>
        <s-column width="15" align="left">
            <b-text size='30' :color='color'>{{ itemData.name }}</b-text>
        </s-column>
        <s-column width="3" align="right" >
            <b-icon name="angle-right-bold" v-show="showRight" color="light" size="28"></b-icon>
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
            },

            showRight: {
                type: Boolean,
                default: true
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