<template>
    <s-cell height="1.736842" v-on:tapped = 'showChecked' >
        <s-column width=".789474" height=".789474" align="left">
        </s-column>
        <s-column width="5.263158" align="left">
            <b-text size="28" color="grey">{{desc}} {{numerator}}/{{denominator}}</b-text>
        </s-column>
        <s-column width=".789474" align="left" :key="key" v-for="(item, key) in denominator">
            <b-solid-checkbox width=".526316" height=".526316" :checked="item < numerator + 1" ></b-solid-checkbox>
        </s-column>
    </s-cell>
</template>

<script>
    export default {
        props: [ 'label', 'rate', 'total'],
        data: function() {
            
            return {
                desc: this.label,
                numerator: parseInt(this.rate),
                denominator: parseInt(this.total)
               
            };
        },
        methods: {
            showChecked: function(){
                var list = document.querySelectorAll('._solid_checkbox');
                
                for(i=0;i<(this.numerator-1);i++){
                    list[i].setAttribute('checked', true);
                }
            }
        }
    }
</script>