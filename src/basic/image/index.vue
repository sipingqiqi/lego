<template>
    <img @load='load' class='_image' :style='styleObj' :src='src' :preload='preload' />
</template>

<script>
    export default {
        props: [ 'src', 'preload', 'width', 'height' ],

        data: function () {

            var obj = {};

            this.width  && (obj.width   = this.width  + 'rem');
            this.height && (obj.height  = this.height + 'rem');

            return {
                styleObj: obj
            }
        },
 
        methods: {
            load: function() {
                this.preload === 'true' && (function () {
                    
                    var img = new Image();
                    img.src = this.src;

                    if(img.complete) {
                        console.log('complete ok');
                        return;
                    }

                    img.onload = function(){
                        console.log('ok');
                    }

                })();
            }
        }
    }
</script>