<template>
    <div class='_flype' :class='classObj' id='fold' >
        <b-icon color='coral' size='30' 
        :class='iconName' 
        v-on:tapped='fold'></b-icon>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: [ 'folded' ],
        data: function() {
            var list = [],
                namelist = [];
                
            this.folded === 'false' && list.push('_flype_slid_down');
            this.folded === 'false' ? namelist.push('i-'+'angle-up') : namelist.push('i-'+'angle-down');

            return {
                iconName: namelist,
                classObj: list
            };
        },
        methods: {
            fold: function(){
                if(this.classObj[0] === '_flype_slid_down') {
                    this.classObj.pop(1);
                    this.iconName.splice(-1,1,'i-'+'angle-down');
                } else {
                    this.classObj.push('_flype_slid_down');
                    this.iconName.splice(-1,1,'i-'+'angle-up');
                }
            }
        }
    }
</script>