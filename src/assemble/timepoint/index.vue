<template>
    <!-- 虚节点 -->
</template>

<script>
    export default {
        props: {
            label: {
                type: String
            },
            desc: {
                type: String
            },
            labelmore: {
                type: String,
                default: ''
            },
            labelFont: {
                type: String,
                default: '0.789474'
            },
            descFont: {
                type: String,
                default: '0.621579'
            }
        },
        data: function() {
            return { };
        }
    }
</script>