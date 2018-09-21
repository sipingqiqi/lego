<template>
    <label :class="wrapClasses">
        <span :class="radioClasses">
            <span :class="innerClasses">
                <b-icon name="radio-checked" color="high" size="32"></b-icon>
            </span>
            <input 
                type="radio"
                :class="inputClasses"
                :disabled="disabled"
                :checked="currentValue"
                @change="change">
        </span><slot>{{ label }}</slot>
    </label>
</template>

<script>
    // var {findComponentUpward} = require('../../utils/assist');
    import events from '../../utils/gum.vue.events';
    module.exports = {
        props: {
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            return {
                currentValue: this.value,
                group: false,
                parent: false
            }
        },
        computed: {
            wrapClasses: function(){
                return [
                    'l-radio-wrapper',
                    {
                        'l-radio-group-item': this.group || false,
                        'l-radio-wrapper-checked': this.currentValue,
                        'l-radio-wrapper-disabled': this.disabled
                    }
                ]
            },
            radioClasses: function(){
                return [
                    'l-radio',
                    {
                        'l-radio-checked': this.currentValue,
                        'l-radio-disabled': this.disabled
                    }
                ]
            },
            innerClasses: function(){
                return 'l-radio-inner';
            },
            inputClasses: function(){
                return 'l-radio-input';
            }
        },
        mounted: function(){
            if(this.parent) this.group = true;
            if(!this.group) {
                this.updateValue();
            }
        },

        methods: {
            change: function(event) {
                if (this.disabled) {
                    return false;
                }
                console.log('1');
                var checked = event.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);

                if(!this.group) {
                    this.$emit('on-change', checked);
                }
            },
            updateValue: function(){
                this.currentValue = this.value;
            }
        },
        watch: {
            value: function(){
                this.updateValue();
            }
        }
    }
</script>
