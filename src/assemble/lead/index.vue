<template>
    <div v-if='type === 0' class="_assetheader" :class="classObj" :style="styleObj" >
        <h3><slot></slot></h3>
        <h6>{{ footer }}</h6>
    </div>
    <div v-else-if='type === 1' class="_assetheader" :class="classObj" :style="styleObj" >
        <h6>{{ header }}</h6>
        <h2><slot></slot></h2>
        <b-button class="linkbtn" :id="btnId" size="28" height="1.5" width="3.973684"  v-show=" btn !== '' ">{{ btn }}</b-button>
    </div>
    <div v-else-if='type === 2' class="_assetheader">
        <b-text size='21' color='high'>{{ header }}</b-text>
        <div>
            <b-text size='36' color='white'><slot></slot></b-text>
        </div>
        <b-text size='22' color='high'>{{ footer }}</b-text>
    </div>
    <div v-else-if='type === 3' class="_assetheader">
        <b-text size='21' color='high'>{{ header }}</b-text>
        <div>
            <b-text size='36' color='white'><slot></slot></b-text>
            <b-select :id='linkId' size='24' color='high'>{{ link }}</b-select>
        </div>
        <b-text size='22' color='high'>{{ footer }}</b-text>
    </div>
    <div v-else-if='type === 4' class="_assetheader _login" :class="classObj" :style="styleObj">
        <header class="header">
            <h6>{{topData.header || desc}}</h6>
            
            <b-button id='login-btn' size='28' v-show='login' color='white' width='6' height='1.578947' >点击登录</b-button>
            <h2 v-show='!login'>{{topData.invest || invest}}</h2>
            <div class="_asset-btn" v-show='asset' >
                <b-icon name="gear" size="40" color="white"></b-icon>
            </div>
        </header>
        <ul class="_three">
            <li>
                <div>{{ topData.title1 || elements[0].text }}</div>
                <div>{{ topData.value1 || elements[1].text }}</div>
            </li>
            <li>
                <div>{{ topData.title2 || elements[2].text }}</div>
                <div>{{ topData.value2 || elements[3].text }}</div>
            </li>
            <li>
                <div>{{ topData.title3 || elements[4].text }}</div>
                <div class='chinese-font-size'>{{ topData.value3 || elements[5].text }}</div>
            </li>
        </ul>
    </div>
    <div v-else-if='type === 5' class="_assetheader _login" :class="classObj" :style="styleObj">
        <header>
            <h6 class="_eyecenter">{{topData.header || desc}} <b-icon size="50" name="eye" @tapped="hiddenData" v-show="open == true"></b-icon><b-icon size="50" name="eye-closed" @tapped="hiddenData" v-show="open != true" ></b-icon></h6>
            <b-button id='login-btn' size='28' v-show='login' color='white' width='6' height='1.578947' >点击登录</b-button>

            <h2 v-show='!login' v-if="open == true">{{topData.invest || invest}}</h2>
            <h2 v-show='!login' v-else>****</h2>

            <div class="_asset-btn" v-show='asset' >
                <b-icon name="gear" size="40" color="white"></b-icon>
            </div>
        </header>
        <ul class="_three _second">
            <li>
                <div >{{ topData.title1 || elements[0].text }}</div>
                <div v-if="open == true">{{ topData.value1 || elements[1].text }}</div><div v-else>****</div>
            </li>
            <li>
                <div >{{ topData.title2 || elements[2].text }}</div>
                <div v-if="open == true">{{ topData.value2 || elements[3].text }}</div><div v-else>****</div>
            </li>
        </ul>
    </div>

</template>

<script>

    export default {
        props: {
            header: {
                type: String,
                default: ''
            },

            footer: {
                type: String,
                default: ''
            },

            link: {
                type: String,
                default: ''
            },

            linkId: {
                type: String,
                default: ''
            },

            label: {
                type: String,
                default: ''
            },

            topData: {
                type: Object,
                default: function () { return {}; }
            },

            desc: {
                type: String
            },

            invest: {
                type: String
            },

            login: {
                type: Boolean,
                default: false
            },

            asset: {
                type: Boolean,
                default: false
            },

            btn: {
                type: String,
                default: ''
            },

            btnId: {
                type: String,
                default: ''
            },

        },
        data: function() {
            var obj = {}, list = [], t = 0;
            var temp = {};
            var v = [];
            var slots = this.$slots.default,
                elems = [], options, children;

            if(this.$slots.hasOwnProperty('default') ){
                slots.forEach(function (s) {
                    options = s.componentOptions;
                    if (options) {
                        children = options.children;
                        if (children.length > 0 && typeof children[0].text !== 'undefined') {
                            elems.push({
                                id: options.propsData.id,
                                text: children[0].text
                            });
                        }
                    }
                });
                v = elems;
            } 
            if ( elems.length == 6 || this.label === '1' ) {
                t = 4;
                
            } 
            else if (elems.length == 4 || this.label === '2') {
                t = 5;
            } 
            else if (this.header === '' && this.footer === '') {
                obj.height = '3.684211rem';
                list.push('_setflex');
                t = 0;
            }

            else if (this.header !== '' && this.footer === '') {
                obj.paddingTop = '1.052632rem';
                t = 1;
            }

            else if (this.header === '' && this.footer !== '') {
                t = 0;
            }

            else if (this.header !== '' && this.footer !== '' && this.link === '') {
                t = 2;
            }

            else if (this.header !== '' && this.footer !== '' && this.link !== '') {
                t = 3;
            }
            
            return {
                elements: elems,
                open: true,
                classObj: list,
                styleObj: obj,
                type: t
            };
        },
        methods: {
            hiddenData: function() {
                this.open = !this.open;
            }
        }
    }
</script>