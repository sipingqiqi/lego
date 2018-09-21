<template>
    <div class='_field' :class='status'>
        <input class='_number_field' :id='id' :name='name' :class='classObj' :style='styleObj' type='tel' :placeholder='placeholder' :maxlength='max' v-model='number' @blur='blur' @input='input'/>
        <i @mytap='clear'></i>
    </div>
</template>

<script>

    import Validate from '../../utils/validate';
    import events from '../../utils/gum.vue.events';

    export default {
        props: [ 
            'align',    'size',     'clearall', 'placeholder', 
            'id',       'name',     'value',    'required',
            'label',    'max'
        ],

        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                number  : this.value,
                status  : this.init()
            }
        },

        mounted: function() {

        },

        methods: {
            blur: function () {
                var v = new Validate({
                    label    : this.label,
                    rules    : [ 'number' ],
                    required : this.required === 'true'
                });

                !v.validate(this.number) && (function () {
                    events.emit('fielderror', v.errors());
                })();
            },

            input: function () {
                this.status = this.update();
            },

            clear: function () {
                this.number = '';
                this.status = this.update();
            },

            init: function () {
                return (this.align !== 'right' && this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.align !== 'right' && this.number.length > 0 && this.clearall === 'true') ? 'entering' : '';
            }
        }
    }
</script>