<template>
    <div class='_cell' :class='classObj' :style='styleObj' @mytap='onTapCallback' data-tappable >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: '2.473684'
            },
            minHeight: {
                type: String,
                default: ''
            },
            border: {
                type: String,
                default: ''
            },
            borderTop: {
                type: String,
                default: ''
            },
            bgcolor: {
                type: String
            },
            onTap: {
                type: Function,
                default: function () {}
            },
            borderPadding: {
                type: Boolean,
                default: false
            }
        },
        data: function() {
            var list = [];
            this.border === 'true' && list.push('_border');
            this.borderTop === 'true' && list.push('_border-top');
            this.bgcolor && list.push('_bgcolor_' + this.bgcolor);
            this.borderPadding === true && list.push('_borderPadding');

            return {
                styleObj: this.minHeight ? {
                    minHeight: this.minHeight + 'rem'
                } : {
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