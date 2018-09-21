<template>
    <s-cell :height='itemData.limit?3.421056:2.473684' :on-tap='onTapCallback' class="_next-card"  bgcolor='white' border="true">
        <s-flex-column>
        </s-flex-column>
        <s-multiline width="12" align="left" self-align="center">
            <b-text color="black" size="30">
                {{itemData.bankName}} &nbsp; 尾号{{cutOff}} <br>
                <b-text color="light" size="24" v-show="itemData.limit">
                    {{parseFloat(itemData.limit)?'单笔限额'+itemData.limit+'万':itemData.limit}}</b-text>
            </b-text>
        </s-multiline>
        <s-column width="6" align="right">
            <b-icon v-if="checked" size="40" color="high" name="check"></b-icon>
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
            }

        },
        

        data: function () {
            return {
                tempData: this.itemData
            }
        },

        computed: {
            cutOff: function(){
                var num;
                this.tempData.bankNum ? (num = this.tempData.bankNum) : (num = '');
                var l = num.slice(-4);
                return l;
            }
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>