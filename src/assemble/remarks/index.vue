<template>
    <div class="_hammertips" :style='styleObj' v-if="type === 'hammer'">
        <b-icon name="hammer" size="60"></b-icon>
        <slot></slot>
    </div>
    <div class="_hammertips-fail" :style='styleObj' v-else>
        <div class="_hammertips-fail-title">{{type}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: ''
            },
            width: {
                type: String,
                default: '70'
            }
        },
        data: function () {
            var obj = {};
            this.width  && (obj.width  = this.width  + '%');
            return {
                styleObj: obj
            };
        }
    }
</script>