<template>
    <div class='_main_wrp_toast'>
        <div class='_main_wrp' :class='classObj'>
            <main class='_main'>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
    import events from '../../utils/gum.vue.events';
        //toasts = [];

    export default {
        props: {
            bgcolor: {
                type: String,
                default: ''
            }
        },

        mounted: function () {
            events.on('fielderrors', function (errors) {
                errors.forEach(function (error) {
                    events.toast(error);
                });
            });
        },

        data: function () {
            var list = [];

            this.bgcolor && list.push(
                '_bgcolor_' + this.bgcolor
            );

            return {
                classObj: list
            }
        },

        methods: {
            // toast: function (message) {

            //     this.toastQueue.push(message);
            //     showToast.call(this);

            //     function showToast () {
            //         if (this.toastQueue.length === 0 || this.toastOpened) return;

            //         // get the first message in queue;
            //         this.toastMsg = this.toastQueue[0];

            //         // show toast;
            //         this.toastOpened = true;
            //         this.toastFadeIn();
            //         console.log('open');

            //         setTimeout((function () {
            //             // hide toast;
            //             this.toastOpened = false;
            //             this.toastFadeOut((function () {
            //                 console.log('close');

            //                 // remove the first message in queue;
            //                 this.toastQueue.splice(0, 1);

            //                 // execute show() again;
            //                 showToast.call(this);

            //             }).bind(this));
            //         }).bind(this), 2000);
            //     }
            // },

            // toastFadeIn: function () {
            //     this.toastClass = '_toast_fade_in';
            // },

            // toastFadeOut: function (callback) {
            //     this.toastClass = '_toast_fade_off';
            //     setTimeout(function () {
            //         callback();
            //     }, 300);
            // }
        }
    }
</script>


<style lang='less' scoped>
@import "../../less/lego.less";
._main {
  background-color: #f00;
}
</style>