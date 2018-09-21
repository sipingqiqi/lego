<template>
    <s-cell v-if="itemData.support == '1'" height="3.421056" :on-tap='onTapCallback' class="_next-card _cell_next"  bgcolor='white' border="true">
        <s-column width=".789474" align="left"></s-column>
        <s-multiline width="12" align="left" self-align="center">
            <b-text color="black" size="30">
                {{itemData.bankName}} &nbsp; 尾号{{cutOff}} <br>
                <b-text color="light" size="24">单笔限额{{itemData.limit}}万</b-text>
            </b-text>
        </s-multiline>
        <s-flex-column align="right">
            <b-select size="30" color="high"></b-select>
        </s-flex-column>
        <s-column width=".789474" align="left"></s-column>
    </s-cell>
    <s-cell v-else-if="itemData.support == '2'" height="3.421056" :on-tap='onTapCallback' class="_next-card _cell_next" border="true"> 
        <s-column width=".789474" align="left"></s-column>
        <s-multiline width="12" align="left" self-align="center">
            <b-text color="light" size="30">
                {{itemData.bankName}} &nbsp; 尾号{{cutOff}}<br>
                <b-text color="black" size="24">不支持在线充值</b-text>
            </b-text>
        </s-multiline>
        <s-flex-column align="right">
            <b-select size="30" color="high">请更换银行卡</b-select>
        </s-flex-column>
        <s-column width=".789474" align="left"></s-column>
    </s-cell>
    <s-cell v-else-if="itemData.support == '3'" height="3.421056" :on-tap='onTapCallback' class="_next-card" border="true">
        <s-flex-column>
        </s-flex-column>
        <s-multiline width="12" align="left" self-align="center">
            <b-text color="light" size="30">
                {{itemData.bankName}} &nbsp; 尾号{{cutOff}}<br>
                <b-text color="stonegrey" size="24">不支持在线充值</b-text>
            </b-text>
        </s-multiline>
        <s-column width="6" align="right"></s-column>
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
                var l = this.tempData.bankNum.slice(-4);
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