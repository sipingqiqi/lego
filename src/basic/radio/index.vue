<template>
    <span v-on:mytap = "tapped" class="_radio" :class="{_radio_active: isChecked}" :checked="isChecked">
        <b-icon v-show="isChecked" name="check" color="white"></b-icon>
    </span>
</template>

<script>
    export default {
        props: ['checked', 'name', 'size', 'color'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tapped: function() {
                // console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>