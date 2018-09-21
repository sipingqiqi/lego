<template>
    <span class="_text" :class="classObj"><slot></slot></span>
</template>

<script>
    export default {
        props: [ 'size', 'color' ],

        data: function() {
            var list = [];

            this.color 
            && list.push('_text_color_' + this.color);

            this.size  
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list
            }
        }
    }    
</script>    
