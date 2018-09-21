<template>
    <div class='_protocol'>
        <div>
            <b-checkbox :checked='isChecked' :callfn='callfn'></b-checkbox>
        </div>
        <div>
            <span><slot></slot></span>
        </div>
    </div>
</template>

<script>


    export default {
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            callfn: {
                type: Function,
                default: function () {}
            }
        },
        data: function() {

            return {
                isChecked: this.checked,
                show: true
            };
        }
    }
</script>