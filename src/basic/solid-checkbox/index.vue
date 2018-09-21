<template>
    <span  
    class="_solid_checkbox" 
    :id="id"
    :checked="isChecked" 
    :style="styleObj" 
    :class="{_solid_checkbox_active: isChecked}">
    </span>
</template>

<script>
    export default {
        props: ['id','checked', 'name', 'width', 'height'],
        data: function() {
            var obj = {};

            this.width && (obj.width = this.width + 'rem');
            this.height && (obj.height = this.height + 'rem');
            return {
                styleObj: obj,
                isChecked: this.checked
            }
        },
        methods: {
            tap: function() {
                // console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>