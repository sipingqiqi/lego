<template>
    <div class="_comment _borderbottom1px" v-if="oneline">
        <b-icon :name="iconName" size="44" color="stonegrey"></b-icon>
        <slot></slot>
    </div>
    <div class="_comment _comment-more _borderbottom1px" v-else>
        <div>
            <b-icon :name="iconName" size="44" color="stonegrey"></b-icon>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default  {
        props: {
            oneline: {
                type: Boolean,
                default: true
            },
            warn: {
                type: Boolean,
                default: false
            }
        },
        data: function() {

            return {
                
            };
        },
        computed: {
            iconName: function(){
                return this.warn ? 'i-hollow' : 'quote';
            }
        }
    }
</script>