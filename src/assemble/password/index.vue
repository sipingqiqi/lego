<template>
    <ul id='_pwd_' class='_pwd' v-html='html' @mytap='focus'></ul>
</template>

<script>
    import events from '../../utils/gum.vue.events';
    var html   = function (length) {
            var html = '', i, 
                a = '<li>&#9679;</li>', 
                b = '<li></li>';

            for ( i = 0; i < length; i++ ) {
                html += a;
            }

            for ( i = length; i < 6; i++ ) {
                html += b;
            }

            return html;
        }

    export default {
        props: {
            length: {
                type: Number,
                default: 0
            }
        },

        mounted: function () {
            events.on('password', function (e) {
                this.length = e.length;

                var ctrl = document.getElementById('_pwd_');
                ctrl.innerHTML = html(this.length);
            });
        },

        data: function () {
            return {
                html: html(this.length)
            };
        },

        methods: {
            focus: function () {
                events.emit('keyboard');
            }
        }
    }
</script>