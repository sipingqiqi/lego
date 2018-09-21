<template>
    <span class="_toggle"  @click="tap" :class="{_toggle_active: !isChecked}" :checked="isChecked"></span>
</template>

<script>
    export default {
        props: ['checked'],
        data: function() {
            return {
                isChecked: this.checked
            }
        },
        methods: {
            tap: function() {
                console.log(this.isChecked);
                this.isChecked = !this.isChecked;
            }
        }
    }
</script>