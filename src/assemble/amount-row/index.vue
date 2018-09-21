<template>
    <div class="_amountCapital">
        <p>{{ desc }}</p>
        <div class="_amountdesc">
            <!-- <span class="_unit">￥</span> -->
            <span class="_unit">¥</span>
            <input class="_amount" @input="inputTap" id="payamount" type="number"  :placeholder="placeholder" :value="defaultValue"> 
            <div>
                <b-icon name="round-cross" color="stonegrey" size="40" @tapped="iconTap" id="clearamounts" data-tappable="" ontouchstart="" ></b-icon>
                <b-highlight @tapped="amountAllIpt" v-show="label">{{descAll}}</b-highlight>
            </div>
            
        </div> 
        <h2 id="mapText">
            <strong id="capitalamount">{{swithcCapital}}</strong>
            <span id="tiperror" class="_tiperror">已超限额</span> 
        </h2> 
    </div>
</template>

<script>
import amountCapital from '../../utils/amount.capital';
var $ = function(selector) {
  return document.querySelectorAll(selector);
};

export default {
  props: {
    defaultValue: {
      type: String
    },
    label: {
      type: String
    },
    desc: {
      type: String,
      default: "充值金额"
    },
    placeholder: {
      type: String,
      default: "请输入充值金额"
    },
    callfn: {
      type: Function,
      default: function() {}
    },
    descAll: {
      type: String
    }
  },
  data: function() {
    return {
      show: false
    };
  },
  computed: {
    swithcCapital: function() {
      var s = this.defaultValue
        ? amountCapital.sumCapital(this.defaultValue)
        : "";
      return s;
    }
  },
  methods: {
    /* 输入验证 */
    inputTap: function() {
      var tempValue = $("#payamount")[0].value;
      var inputValue =
        tempValue.length > 12 ? tempValue.slice(0, 12) : tempValue;

      $("#capitalamount")[0].innerHTML = amountCapital.sumCapital(inputValue);

      if (inputValue == "") {
        $("#clearamounts")[0].style.opacity = "0";
      } else {
        $("#clearamounts")[0].style.opacity = "1";
      }

      var flag = true;
      if (inputValue > parseFloat(this.label)) {
        $("#tiperror")[0].style.opacity = "1";
        flag = true;
      } else {
        $("#tiperror")[0].style.opacity = "0";
        flag = false;
      }
      this.callfn(flag);
    },
    /* 全部删除 */
    iconTap: function() {
      $("#clearamounts")[0].style.opacity = "0";
      $("#payamount")[0].value = "";
      $("#capitalamount")[0].innerHTML = "";
      $("#tiperror")[0].style.opacity = "0";
    },
    /* 全部转出 */
    amountAllIpt: function() {
      $("#payamount")[0].value = this.label;
      $("#tiperror")[0].style.opacity = "0";
      $("#clearamounts")[0].style.opacity = "1";
      $("#capitalamount")[0].innerHTML = amountCapital.sumCapital(
        $("#payamount")[0].value
      );
      $("#mapText")[0].style.display = "block";
    }
  }
};
</script>
