<template>
    <s-single-cell :height='dheight' :border='bordeValue' :bgcolor='bgcolor' class='_justify-center'>
        <b-text size='30' :color='colorValue'><slot></slot></b-text>
    </s-single-cell>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: '0.368421'
            },
            color: {
                type: String,
                default: 'light'
            },
            border: {
                type: String,
                default: 'true'
            },
            bgcolor: {
                type: String,
                default: 'transparent'
            }
        },
        data: function (){
            return {
                dheight: this.height,
                colorValue: this.color,
                bordeValue: this.border
            }
        }
    }
</script>
