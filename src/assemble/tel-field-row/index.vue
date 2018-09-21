<template>
    <s-cell height='2.473684' border='true'>
        <s-flex-column></s-flex-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-column :width='width.value'>
            <b-tel-field size='30' color='black' clearall='true' :label='label' :placeholder='placeholder' :value='value' :align='align' @input='input'></b-tel-field>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
import contants from '../../utils/contants';

    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            labelWidth: {
                type: Number,
                default: contants.labelWidth
            },
            align: {
                type: String,
                default: 'left'
            }

        },

        data: function () {
            return {
                width: {
                    label: this.labelWidth,
                    value: contants.tableWidth - this.labelWidth
                }
            };
        },

        methods: {
            input: function (e) {
                this.$emit('input', e);
            }
        }
    }
</script>