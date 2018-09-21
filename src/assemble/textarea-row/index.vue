<template>
    <div class='_textarea _border' :style='styleObj' >
        <textarea :placeholder='placeholder'></textarea>
        <span>{{ max }}字</span>
    </div>
</template>

<script>

    export default {
        props: {
            placeholder: {
                type: String,
                default: '请输入'
            },
            height: {
                type: Number,
                default: '190'
            },
            max: {
                type: String,
                default: '250'
            }
        },

        data: function() {
            var obj = {};
            this.height && (obj.height = (this.height / 38) + 'rem');

            return {
                styleObj: obj
            }
        }
  
    }

</script>