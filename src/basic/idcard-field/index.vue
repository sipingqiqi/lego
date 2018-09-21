<template>
    <div class='_field' :class='status'>
        <input class='_input' :id='id' :class='classObj' type='text' :name='name' :placeholder='placeholder' @blur='blur' @input='input' v-model='idcard' maxlength='18' />
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
            'label'
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
                idcard  : this.value,
                status  : this.init()
            }
        },

        methods: {
            blur: function () {
                // 转换小写字母为大写
                this.idcard = this.idcard && this.idcard.toLocaleUpperCase();

                var v = new Validate({
                    label    : this.label,
                    rules    : [ 'idcard' ],
                    required : this.required === 'true'
                });

                !v.validate(this.idcard) && (function () {
                    events.emit('fielderror', v.errors());
                })();
            },

            input: function () {
                this.status = this.update();
            },

            clear: function () {
                this.idcard = '';
                this.status = this.update();
            },

            init: function () {
                return (this.align !== 'right' && this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.align !== 'right' && this.idcard.length > 0 && this.clearall === 'true') ? 'entering' : '';
            }
        }
    }
</script>
