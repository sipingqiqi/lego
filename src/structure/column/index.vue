<template>
    <div class='_column' :class="classObj" :style="styleObj"><slot></slot></div>
</template>

<script>
    export default {
        props: [ 'width', 'align' ],

        data: function() {
            var justifyContent = {
                left    : '_justify-start',
                right   : '_justify-end',
                center  : '_justify-center'
            };

            return {
                classObj: justifyContent[this.align] || justifyContent['left'],
                styleObj: {
                    width           : this.width + 'rem'
                }
            };
        }
    }
</script>