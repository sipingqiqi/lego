<template>
    <s-cell bgcolor="white" v-if="radius" id="radiusTab">
        <s-column width=".789474" align="left">
        </s-column>
        <s-flex-column align="center">
            <b-radius-button :id="elements[0].id" period='0' class="_radius_active" @tapped="tabedswitch">{{elements[0].text}}</b-radius-button>
        </s-flex-column>
        <s-flex-column align="center">
            <b-radius-button :id="elements[1].id" period='1' @tapped="tabedswitch">{{elements[1].text}}</b-radius-button>
        </s-flex-column>
        <s-flex-column align="center">
            <b-radius-button :id="elements[2].id" period='2' @tapped="tabedswitch">{{elements[2].text}}</b-radius-button>
        </s-flex-column>
        <s-column width=".789474" align="left">
        </s-column>
    </s-cell>

    <div v-else-if="elements.length === 2" class="_ruletab _ruletab1" :id="idName">
        <span :id="elements[0].id" rate='1' @mytap="tabswitch" class="_borderbtm" ><h3 :style="styleObj">{{elements[0].text}}</h3><h3 class="num-size">{{label7Rate}}</h3></span>
        <span :id="elements[1].id" rate='0' @mytap="tabswitch" ><h3 :style="styleObj">{{elements[1].text}}</h3><h3 class="num-size">{{labelWRate}}</h3></span>
    </div> 
    
    <div v-else class="_ruletab _ruletab2" :id="idName">
        <span :id="item.id" :class="{_borderbtm: index == 0}" :key="index" @mytap="tabswitch" v-for="(item,index) in elements">{{item.text}}</span>
    </div>
</template>

<script>
    import event from '../../utils/gum.vue.events';
    export default {
        props: {
            id: {
                type: String,
                default: ""
            },
            isDate: {
                type: Boolean,
                default: false
            },
            radius: {
                type: Boolean,
                default: false
            },
            active: {
                type: Boolean,
                default: false
            },
            period: {
                type: String,
                default: '0'
            },
            label: {
                type: String,
                default: ""
            },
            leftLabel: {
                type: String,
                default: ""
            },
            rightLabel: {
                type: String,
                default: ""
            },
            titleSize: {
                type: String,
                default: "32"
            }
        },
        data: function (){
            var slots = this.$slots.default,
            elems = [], options, children;
            var obj = {};
            this.titleSize && (obj.fontSize = this.titleSize/38 + 'rem');

            slots.forEach(function (s) {
                options = s.componentOptions;
                if (options && options.propsData && options.propsData.id) {
                    children = options.children;
                    if (children.length > 0 && typeof children[0].text !== 'undefined') {
                        elems.push({
                            id: options.propsData.id,
                            text: children[0].text
                        });
                    }
                }
            });
            return {
                styleObj: obj,
                rateChange: this.isDate,
                idName: this.id,
                elements: elems,
                periodType: this.period,
                label7Rate: this.leftLabel || (this.label && this.label.split('|')[0]),
                labelWRate: this.rightLabel || (this.label && this.label.split('|')[1])
            }
        },
        methods: {
            tabswitch: function (e) {
                var sbilings = this.$el.children;
                var t = e.target;
                while (t && t.tagName !== 'SPAN') {
                    t = t.parentNode;
                }
                for(var i=0;i<sbilings.length;i++) {
                    sbilings[i].classList.remove('_borderbtm');
                }
              
                t.classList.add('_borderbtm');
                this.rateType = t.getAttribute('rate');
                this.rateChange && event.emit('tabswitch',this.rateType);
            },
            tabedswitch: function (e) {
                var sbilings = document.getElementById('radiusTab').getElementsByTagName('button');
                var t = e.target;
                while (t && t.tagName !== 'BUTTON') {
                    t = t.parentNode;
                }
                for(var i=0;i<sbilings.length;i++) {
                    sbilings[i].classList.remove('_radius_active');
                }
              
                t.classList.add('_radius_active');
                this.periodType = t.getAttribute('period');
                event.emit('tabedswitch',this.periodType);
            }
            
        }
    }
</script>