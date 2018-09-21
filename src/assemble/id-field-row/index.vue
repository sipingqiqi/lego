<template>
    <s-cell height='2.473684' border='true'>
         <s-column width=".789474" align="left"></s-column>
        <s-column :width='width.label'>
            <b-text size='30' color='grey'>{{ label }}</b-text>
        </s-column>
        <s-flex-column >
            <b-idcard-field size='30' color='black' clearall='true' :label='label' :placeholder='placeholder' :value='value'></b-idcard-field>
        </s-flex-column>
        <s-column width=".789474" align="left"></s-column>
    </s-cell>
</template>

<script>

// <s-flex-column></s-flex-column>
//         <s-column :width='width.label'>
//             <b-text size='30' color='grey'>{{ label }}</b-text>
//         </s-column>
//         <s-column :width='width.value'>
//             <b-idcard-field size='30' color='black' clearall='true' :label='label' :placeholder='placeholder' :value='value'></b-idcard-field>
//         </s-column>
//         <s-flex-column></s-flex-column>
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