<template>
    <button :id='id' 
        class='_radius_button' 
        :class='classObj' 
        :style='styleObj' 
        @mytap='tapped'
    >
        <slot></slot>
    </button>
</template>

<script>

    module.exports = {
        props: [ 'id', 'width', 'height', 'size', 'active'],

        data: function () {
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.size 
            && list.push('_text_size_' + this.size + 'px');  

            // this.active && list.push('_radius_active');

            return {
                styleObj: obj,
                classObj: list
            }
        },
        methods:{
            tapped: function(e){
                this.$emit('tapped',e);
            }
        }
    }
</script>
