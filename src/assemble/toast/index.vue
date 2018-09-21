<template>
    <transition name='slide-fade'>
        <div class="_toast"  id="toast" v-if="isShow">
            <div class="_toast_message">
                <slot>{{errMsg}}</slot>
            </div>
        </div>
    </transition>
</template>

<script>
// <div id="toast" class="_toast" v-if="isShow" >
//         <div class="_toast_container"  id="toast" v-if="isShow">
//             <div class="_toast_message">
//                 <slot>{{errMsg}}</slot>
//             </div>
//         </div>
//     </div>
    // <div class='_top-toast' v-else>
    //     <slot>{{errMsg}}</slot>
    // </div>
    import events from '../../utils/gum.vue.events';

    export default {
        props: {
            toptoast: {
                type: Boolean,
                default: false
            },

            // 每条 toast 提示的停留时间
            stay: {
                type: Number,
                default: 3000
            }
        },
        data: function() {
            return {
                isShow: false,
                queue: [],
                isOpen: false,
                errMsg: ''
            };
        },

        mounted: function () {
            events.on('toast', (function (msg) {
                this.received(msg);
            }).bind(this));

            events.on('toast-clear', (function () {
                this.clear();
            }).bind(this));
        },

        methods: {
            // 接收消息，并加入消息队列
            received: function (msg) {
                var last = this.queue.pop();
                last && this.queue.push(last);

                if (last === msg) {
                    return;
                }
                
                this.queue.push(msg);
                !this.isOpen && this.show();
            },

            // 清除消息队列
            clear: function () {
                this.queue = [];
            },

            // 动画展现 toast 框
            show: function () {
                this.queue.length > 0 ? (function () {
                    var msg = this.queue[0];
                    this.isOpen = true;
                    this.errMsg = msg;
                    // 启动 toast 弹出的动画
                    // TODO:
                    this.isShow = true;
                    //document.getElementById('toast').style.opacity = '1';
                    // console.log('TOAST: ' + msg);

                    setTimeout((function () {
                        this.queue = this.queue.slice(1);

                        // 启动 隐藏当前 toast 的动画
                        // TODO:
                        this.isShow = false;
                        //document.getElementById('toast').style.opacity = '0';
                        // console.log('TOAST CLOSING');

                        // 当 toast 消失的动画结束，启动下一个 toast 提示框弹出动画
                        setTimeout((function () {
                            // console.log('TOAST CLOSED');
                            this.show();
                        }).bind(this), 300);

                    }).bind(this), this.stay);

                }).call(this) : (this.isOpen = false);
            }

            // toastShow: function() {
            //     var that = this;
            //     that.isShow = true;
            //     setTimeout(function(){
            //         that.isShow = false;
            //     },3000);
            // }
        }
    }
</script>