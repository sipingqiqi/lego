<template>
    <button data-tappable class='_rectangular_button' :class='classObj' :style='styleObj' v-on:mytap='tapped'><slot></slot></button>
</template>

<script>
    export default {
        props: [ 'width', 'height', 'size', 'filled', 'bgcolor', 'color', 'tapcolor' ],

        data: function () {
            
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.size
            && list.push('_text_size_' + this.size + 'px');

            this.filled === 'true' 
            && list.push('_button_filled');

            this.bgcolor && this.filled !== 'true' && list.push('_bgcolor_' + this.bgcolor);
            
            this.color 
            && list.push('_text_color_' + this.color);

            return {
                styleObj: obj,
                classObj: list
            }
        },
        methods: {
            tapped: function(){
                var self = this;
            }
        }
    }
</script>