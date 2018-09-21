<template>
    <s-cell :height="cellHeight" bgcolor="offwhite">
        <s-column width=".789474" ></s-column>
        <s-multiline :width="width.value" self-align="center">
            <b-text size="24" :color="leftColor"><slot></slot></b-text>
        </s-multiline>
        <s-multiline :width="width.label" align='right' self-align="center">
            <b-text size='24' color='high'>{{ label }}</b-text>
        </s-multiline>
        <s-column width=".789474" ></s-column>
    </s-cell>
</template>

<script>
import contants from '../../utils/contants';
export default {
  props: {
    cellHeight: {
      type: String,
      default: "1.684211"
    },
    label: {
      type: String
    },
    labelWidth: {
      type: Number,
      default: contants.labelWidth
    },
    leftColor: {
      type: String,
      default: "light"
    }
  },
  data: function() {
    var w = typeof this.label === "undefined" ? 0 : this.labelWidth;
    return {
      width: {
        label: w,
        value: contants.tableWidth - w
      }
    };
  }
};
</script>