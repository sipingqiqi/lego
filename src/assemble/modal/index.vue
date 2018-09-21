<template>
    <div class="_modal" :class="{_show: isShow}" >
        <div class="_modal-wrap" >
            <h2 v-show="mData.title !==''">{{mData.title}}</h2>
            <div v-if="line !=='3'" class="_message" :class="{line0ne: line==='1',linetwo: line==='2'}">
                {{mData.message}}
            </div>
            <div v-else class="_message" >
                <input type="text" placeholder="请输入业务员代码" >
            </div>
            <div class="_btns">
                <div>
                    <b-text-button size="32" @tapped="hiddenFn">{{mData.ltext}}</b-text-button>
                </div>
                <div>
                    <b-text-button  size="32" @tapped="certainFn">{{mData.rtext}}</b-text-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import events from '../../utils/gum.vue.events';
    export default {
        props: {
            // line: 0  多行 局左边
            // line: 1  单行 局中
            // line: 2  两行 局中
            // line: 3  input输入框
            line: {
                type: String,
                default: '0'
            },
            modalData: {
                type: Object,
                default: function () { return {}; }
            },
            arr: {
                type: Array,
                default: function () { return ['ww','ee','ss']; }
            }
        },

        data: function () {
            var open = true;

            return {
               mData: this.modalData,
               isShow: open
            };
        },
        mounted: function(){
            events.on('modal', (function (show) {
                alert('aa');
            }));
        },
        methods: {
            show: function(){
                var that = this;
                that.isShow = true;
            },
            hiddenFn: function(){
                var that = this;
                that.isShow = false;
                this.mData.leftFn && this.mData.leftFn() ;
            },
            certainFn: function() {
                var that = this;
                that.isShow = false;
                this.mData.rightFn && this.mData.rightFn();
            }
        }
    }

</script>