<template>
    <div class='_single-cell' :class='classObj' :style='styleObj' @mytap='onTapCallback' data-tappable><slot></slot></div>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: '1'
            },

            border: {
                type: String,
                default: 'false'
            },

            bgcolor: {
                type: String,
                default: 'white'
            },

            onTap: {
                type: Function,
                default: function () {}
            }
        },

        data: function() {
            var list = [];

            this.border === 'true' && list.push('_border');
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);
            return {
                styleObj: {
                    height: this.height + 'rem'
                },
                classObj: list
            };
        },
        
        methods: {
            onTapCallback: function (e) {
                this.onTap(e);
            }
        }
    }
</script>