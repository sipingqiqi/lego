<template>
    <s-single-cell height="4.736842" :on-tap='onTapCallback' class="_card" border="true" >
        <s-column width=".789474" align="left">
        </s-column>
        <s-flex-column align="left" self-align="center">
            <b-text color="black" size="30">{{itemData.bankName}}  <br>
                <b-text color="light" size="24">单笔：100万 &nbsp; 单日：500万 &nbsp; 日累计：10笔</b-text><br>
                <b-text color="light" size="24">交易时间：12:00-24:00</b-text>
            </b-text>
        </s-flex-column>
        <s-column width=".789474" align="left">
        </s-column>
    </s-single-cell>
    
</template>

<script>
// 银行卡 点击 进入下一页
export default {
  props: {
    itemData: {
      type: Object,
      default: function() {
        return {};
      }
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
      default: function() {}
    }
  },

  data: function() {
    return {};
  },

  methods: {
    onTapCallback: function(e) {
      this.onTap(this.itemData, e);
    }
  }
};
</script>