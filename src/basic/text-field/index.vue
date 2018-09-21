<template>
    <div class='_field' :class='status'>
        <input :id='id' :name='name' class='_text_field' :class='classObj' :style='styleObj' type='text' :placeholder='placeholder' :maxlength='max' @blur='blur' @input='input' v-model='text'/>
        <i @mytap="clear"></i>
    </div>
</template>

<script>
    import Validate from '../../utils/validate';
    import events from '../../utils/gum.vue.events';

    export default {
        props: [ 'id', 'name', 'size', 'align', 'max', 'placeholder', 'required', 'value', 'clearall' ],

        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                text    : this.value,
                status  : this.init()
            }
        },

        mounted: function() {

        },

        methods: {
            blur: function () {
                var v = new Validate({
                    label    : this.label,
                    rules    : [],
                    required : this.required === 'true'
                });

                !v.validate(this.text) && (function () {
                    events.emit('fielderror', v.errors());
                })();
            },

            clear: function(){
                this.text = '';
                this.status = this.update();
            },

            input: function(){
                this.status = this.update();
            },

            init: function () {
                return (this.align !== 'right' && this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.align !== 'right' && this.text.length > 0 && this.clearall === 'true') ? 'entering' : '';
            }
        }
    }
</script>