<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-multiline :width='width.label' align='left'>
            <b-text size='30' :color='color'>{{ label }}</b-text>
        </s-multiline>
        <s-multiline :width='width.value' :align='align'>
            <b-text size='30' :color='colorRight'><slot></slot></b-text>
        </s-multiline>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
import contants from '../../utils/contants';

export default {
    props   : {
        label: {
            type: String
        },
        labelWidth: {
            type: Number,
            default: contants.labelWidth
        },
        align: {
            type: String,
            default: 'left'
        },
        color: {
            type: String,
            default: 'light'
        },
        colorRight: {
            type: String,
            default: 'black'
        }
    }, 
    data: function () {
        var w = typeof this.label === 'undefined' ? 0 : this.labelWidth;
        return {
            width: {
                label: w,
                value: contants.tableWidth - w
            }
        };
    }
}
</script>