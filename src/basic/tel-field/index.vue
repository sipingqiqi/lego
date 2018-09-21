<template>
    <div class='_field' :class='status'>
        <input :id='id' :name='name' class='_input' :class='classObj' :style='styleObj' type='tel' maxlength='11' :placeholder='placeholder' @focus='focus' @blur='blur' @input='input' :value='val' />
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

            // 根据参数，计算该控件的文字对齐方向
            this.align && (obj.textAlign = this.align);

            // 根据参数，计算该控件的文字大小
            this.size && list.push(
                '_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                val     : this.value,
                status  : ''
            }
        },

        mounted: function () {
            var validate = this.validate.bind(this);
            events.on('validate', function (errors) {
                var ret = validate();
                !ret.passed && Array.prototype.push.apply(errors, ret.errors);
            });
        },

        methods: {
            blur: function(e) {
                this.status = '';

                var result = this.validate();
                (!result.passed) && events.emit('fielderrors', result.errors);
            },

            focus: function () {
                this.status = this.update();
            },

            clear: function () {
                this.val = '';
                this.status = this.update();
            },

            input: function (e) {
                this.val = e.target.value;
                this.status = this.update();
                this.$emit('input', this.val);
            },

            init: function () {
                return (this.align !== 'right' && this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.align !== 'right' && this.val.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            validate: function () {
                var v = new Validate({
                    label    : this.label,
                    rules    : [ 'tel' ],
                    required : this.required === 'true'
                });

                return {
                    passed: v.validate(this.val),
                    errors: v.errors()
                };
            }
        }
    }

</script>