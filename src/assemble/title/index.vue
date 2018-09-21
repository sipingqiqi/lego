<template>
    <s-cell height='2.263158' border='true' >
        <s-flex-column></s-flex-column>
        <s-column :width='width.label' align='left'>
            <b-text size='34' color='black'>{{ label }}</b-text>&nbsp;
            <b-text size='20' color='light'>{{ subtitle }}</b-text>
        </s-column>
        <s-column :width='width.value' align='right'>
            <b-text v-if='comment !== ""' size='34' color='black'>{{ comment }}</b-text>
            <b-text v-else size='34' color='high'><slot></slot></b-text>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>
</template>

<script>
import contants from '../../utils/contants';

    export default {
        props: {
            valueWidth: {
                type: Number,
                default: 5.578945
            },

            label: {
                type: String,
                default: ''
            },

            subtitle: {
                type: String,
                default: ''
            },

            comment: {}
        }, 
        data: function() {
            return {
                width: {
                    label: contants.tableWidth - this.valueWidth,
                    value: this.valueWidth
                }
            };
        }
    }
</script>