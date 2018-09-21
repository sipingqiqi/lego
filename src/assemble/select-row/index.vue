<template>
    <s-cell min-height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column :width='width.value' align='right'>
            <b-select :size='size' :color='color' :native='native' :data-select='dataSelect' :placeholder='placeholder'><slot></slot></b-select>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
import contants from '../../utils/contants';

    export default {
        props: {
            label: {
                type: String
            },
            size: {
                type: String,
                default: '30'
            },
            color: {
                type: String,
                default: 'black'
            },
            labelWidth: {
                type: Number,
                default: contants.labelWidth
            },
            dataSelect: {
                type: Array,
                default: function(){return ['11','22','333333333333']}
            },
            native: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: '请选择'
            }
        },
        data: function () {
            return {
                width: {
                    label: this.labelWidth,
                    value: contants.tableWidth - this.labelWidth
                }
            };
        }
    }
</script>