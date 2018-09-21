<template>
    <div class='_field' :class='status'>
        <input class='_email_field' :id='id' :class='classObj' :style='styleObj' type='email' :name='name' @blur='blur' @input='input' v-model='email' :placeholder='placeholder' :maxlength='max'/>
        <i @mytap="clear"></i>
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
                email   : this.value,
                status  : this.init()
            }
        },    

        methods: {
            blur: function () {
                var v = new Validate({
                    label    : this.label,
                    rules    : [ 'email' ],
                    required : this.required === 'true'
                });

                !v.validate(this.email) && (function () {
                    events.emit('fielderror', v.errors());
                })();
            },

            input: function () {
                this.status = this.update();
            },

            clear: function () {
                this.email = '';
                this.status = this.update();
            },

            init: function () {
                return (this.align !== 'right' && this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.align !== 'right' && this.email.length > 0 && this.clearall === 'true') ? 'entering' : '';
            }
        }
    }
</script>