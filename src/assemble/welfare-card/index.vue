<template>
    <s-cell :height="newHeight" :border-padding="borderPadding" :on-tap='onTapCallback' class="_welfare-card"  bgcolor='white' border="true">
        <s-column width=".789474" ></s-column>
        <s-flex-column  align="left">
            <b-text color="light" size="30">{{ leftLabel }}</b-text>
        </s-flex-column>
        <s-multiline :width="rightWidth" align="right" self-align="center">
            <b-text color="high" size="30" class="_text-right">{{rightLabel}}<br>
                <b-text color="light" size="24" v-show="rightNote">{{rightNote}}</b-text>
            </b-text>
        </s-multiline>
        <s-column width="1" align="right" >
            <b-icon name="angle-right-bold" color="light" size="28"></b-icon>
        </s-column>
        <s-column width=".789474" ></s-column>
        
    </s-cell>
    
</template>

<script>
        // <s-flex-column>
        // </s-flex-column>
    // 银行卡 点击 进入下一页
    export default {
        props: {
            leftLabel: {
                type: String,
                default: ''
            },

            rightWidth: {
                type: String,
                default: '7'
            },

            rightLabel: {
                type: String,
                default: ''
            }, 

            rightNote: {
                type: String,
                default: ''
            },

            onTap: {
                type: Function,
                default: function () {}
            },

            height: {
                type: String,
                default: '110'
            },

            borderPadding: {
                type: Boolean,
                default: false
            }

        },
        

        data: function () {
            return {
                tempData: this.itemData
            }
        },

        computed: {
            newHeight: function(){
                return (this.height/38).toFixed(6);
            },
            leftWidth: function(){
                return (17.126666 - this.leftWidth)
            }
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>