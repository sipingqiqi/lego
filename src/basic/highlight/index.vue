<template>
    <span class='_highlight' :class='classObj' @mytap='tapped' ><slot></slot></span>
</template>

<script>
    export default {
        props: [ 'size' ],

        data: function() {

            var list = [];

            this.color
            && list.push('_text_color_' + this.color);

            this.size
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list
            };
        },
        methods: {
            tapped: function(){
                this.$emit('tapped');
            }
        }
    }  
</script>
