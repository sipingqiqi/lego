<template>
    <s-cell height="3.157895" bgcolor="alpha">
        <s-column width="1.578947"></s-column>
        <s-column width="1.278947" v-show='showCheck' >
            <b-radio></b-radio>
        </s-column>
        
        <s-column width="2.257895" align="right" v-show='showCheck'>
            <b-text size="34" color="black">全选</b-text>
        </s-column>
        <s-flex-column align="right">
            <b-highlight size="24" >{{ desc }}：</b-highlight>
            <b-highlight size="34" ><slot></slot></b-highlight>
        </s-flex-column>
        <s-column :width="calPx" align="right">
            <b-rectangular-button size="34"  color="white" :width="minCalPx" height="3.157895" filled="true">{{ label }}</b-rectangular-button>
        </s-column>
    </s-cell>
</template>

<script>
// <s-column width=".526316" v-show='showCheck'></s-column>

    export default {
        props: {
            width: {
                type: String,
                default: '300'
            },
           label: {
                type: String,
                default: '立即申购'
            },
            desc: {
                type: String,
                default: '需支付'
            },
            showCheck: {
                type: Boolean,
                default: false
            }
        },
        data: function() {

            return {
                labelWidth: this.width
            };
        },
        computed: {
            calPx: function(){
                var s = (this.labelWidth / 38).toFixed(6);
                return s;
            },
            minCalPx: function(){
                var s = ((this.labelWidth - 30) / 38).toFixed(6);
                return s;
            }
        }
    }
</script>