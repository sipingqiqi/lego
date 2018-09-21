<template>
    <div class='_field' :class='status'>
        <input class='_address_field' :id='id' :name='name' :class='classObj' :style='styleObj' type='email' :placeholder='placeholder' :maxlength='max' v-model='address' @input='input' @blur='blur'/>
        <i @mytap="clear"></i>
    </div>
</template>

<script>
    import events from '../../utils/gum.vue.events';
    import Validate from '../../utils/validate';

    export default {
        props: {
            id: {
                type: String
            },
            align: {
                type: String,
                default: 'left'
            },
            size: {
                type: String
            },
            clearall: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String
            },
            name: {
                type: String
            },
            value: {
                type: String
            },
            required: {
                type: Boolean,
                default: true
            },
            max: {
                type: Number
            },
            label: {
                type: String
            }
        },

        data: function() {
            var obj = {}, list = [];

            this.align 
            && (obj.textAlign = this.align);

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            return {
                classObj: list,
                styleObj: obj,
                address : this.value,
                status  : this.init()
            }
        },

        methods: {
            blur: function () {
                var v = new Validate({
                    label    : this.label,
                    rules    : [ ],
                    required : this.required === 'true'
                });

                !v.validate(this.address) && (function () {
                    events.emit('fielderror', v.errors());
                })();
            },

            input: function () {
                this.status = this.update();
            },

            clear: function () {
                this.address = '';
                this.status = this.update();
            },

            init: function () {
                return (this.align !== 'right' && this.value && this.value.length > 0 && this.clearall === 'true') ? 'entering' : '';
            },

            update: function () {
                return (this.align !== 'right' && this.address.length > 0 && this.clearall === 'true') ? 'entering' : '';
            }
        }
    }
</script>