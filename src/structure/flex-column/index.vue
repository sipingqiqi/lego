<template>
    <div class='_flex-column' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [ 'align' ],
        data: function() {
            var justifyContent = {
                left    : 'flex-start',
                right   : 'flex-end',
                center  : 'center'
            }

            return {
                styleObj: {
                    justifyContent  : justifyContent[this.align] || justifyContent['left']
                }
            };
        }
    }
</script>