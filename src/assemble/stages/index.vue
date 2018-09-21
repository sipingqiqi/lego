<template>
    <div class='_progress' :class='classObj' :style='styleObj'>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            step: {
                type: String,
                default: '1'
            }
        },
        data: function() {
            var slots = this.$slots.default, number = 0, noText = true,
                elems = [], list = [], obj = {}, options;

            slots.forEach(function (s) {
                options = s.componentOptions;
  
                if (options && options.tag === 'stage') {
                    if (options.children) {
                        noText = false;
                        options.children.length === 1 && elems.push(options.children[0].text);
                    } else {
                        elems.push('');
                    }

                    options.propsData.number = (++number).toString();
                }
            });

            elems.length == '4' && list.push('_p_step' + this.step);
            elems.length == '3' && list.push('_p3_step' + this.step);
            elems.length == '2' && list.push('_p2_step' + this.step);


            obj.width = ((187 * elems.length) / 38).toFixed(6) + 'rem';
            noText && (obj.height = '1.3rem');

            return {
                classObj: list,
                styleObj: obj
            };
        }
    }
</script>