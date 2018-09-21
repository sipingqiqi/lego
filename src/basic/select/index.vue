<template>
    <span :id='identity' class='_select'>
        <b-text :style="styleObj" v-if="!native" class="_select_text" :class="classObj" ><slot></slot></b-text>
        <select class='_native-select' v-else>
            <option :value='placeholder'>{{placeholder}}</option>
            <option v-for='(item, key) in dataSelect' :key="key" :value ="item" >{{item}}</option>
        </select>
        <b-icon name="angle-right-bold" color="light" size="28"></b-icon>
    </span>
</template>

<script>
    export default {
        props: {
            id: {
                type: String
            },
            size: {
                type: String,
                default: '30'
            },
            color: {
                type: String,
                default: 'black'
            },
            native: {
                type: Boolean,
                default: false
            },
            dataSelect: {
                type: Array,
                default: function(){return ['11','22','333333333333']}
            },
            placeholder: {
                type: String,
                default: '请选择'
            }
        },
        data: function() {
            var list = [], obj = {};

            this.size
            && list.push('_text_size_' + this.size + 'px');

            this.color
            && list.push('_text_color_' + this.color);


            return {
                classObj: list,
                styleObj: obj,
                identity: this.id ? this.id : undefined
            };
        }
    }
</script>