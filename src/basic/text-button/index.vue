<template>
    <button data-tappable class='_text_button' :class='classObj' :style='styleObj' v-on:mytap='tapped'>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: [ 'width', 'height', 'size', 'color', 'align', 'tapcolor' ],

        data: function () {
            
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');
            this.align && (obj.textAlign = this.align);

            this.size && list.push('_text_size_' + this.size + 'px');
            this.color && list.push('_text_color_' + this.color);

            return {
                styleObj: obj,
                classObj: list
            }
        },

        methods: {
            tapped: function(){
            }
        }
    }
</script>