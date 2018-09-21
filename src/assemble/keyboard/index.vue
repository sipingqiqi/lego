<template>
<div v-show='show' class="kbd">
    <button class="ok" @mytap='finish'>完成</button>
    <div class="buttons">
        <ul>
            <li><button class="num" @mytap='input'>1</button></li>
            <li><button class="num" @mytap='input'>2</button></li>
            <li><button class="num" @mytap='input'>3</button></li>
            <li><button class="num" @mytap='input'>4</button></li>
            <li><button class="num" @mytap='input'>5</button></li>
            <li><button class="num" @mytap='input'>6</button></li>
            <li><button class="num" @mytap='input'>7</button></li>
            <li><button class="num" @mytap='input'>8</button></li>
            <li><button class="num" @mytap='input'>9</button></li>
            <li class="blank"></li>
            <li><button class="num">0</button></li>
            <li class="blank"><button @mytap='remove'>删除</button></li>
        </ul>
    </div>
</div>
</template>

<style>
     .kbd {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #e5e5e5;
    }
     .kbd .ok {
        /*background: none;*/
        float: right;
        padding: 10px 15px;
        color: #d7ac62;
    }
     .kbd .buttons {
        width: 100%;
        float: left;
        background: #fff;
    }
     .kbd ul {
        width: 100%;
        float: left;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' y='100%'><rect fill='#e5e5e5' x='0' y='50%' width='100%' height='0.5'/><rect fill='#e5e5e5' x='0' y='75%' width='100%' height='0.5'/><rect fill='#e5e5e5' x='0' y='25%' width='100%' height='0.5'/><rect fill='#e5e5e5' x='33.33%' y='0' height='100%' width='0.5'/><rect fill='#e5e5e5' x='66.66%' y='0' height='100%' width='0.5'/></svg>");
    }
     .kbd li {
        float: left;
        width: 33.33%;
        height: 3em;
    }
     .kbd li.blank {
        background: #e5e5e5;
    }
     .kbd li button {
        width: 100%;
        height: 100%;
        text-align: center;
        /*border: none;*/
        /*background: none;*/
        border-radius: 0;
        color: #d7ac62;
    }
     .kbd li button.tapping {
        background-color: #e5e5e5;
    }
</style>


<script>
    import events from '../../utils/gum.vue.events';

    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            show: {
                type: Boolean,
                default: false
            }
        },

        mounted: function () {
            events.on('keyboard', (function (e) {
                this.show = true;
            }).bind(this));
        },

        data: function () {
            return {};
        },

        methods: {
            input: function (e) {
                var c = e.target.innerHTML,
                    l = this.value.length,
                    v = l < 6 ? this.value + c : this.value;

                this.value = v;
                this.$emit('input', v);
                
                setTimeout(function () {
                    events.emit('password', v);
                }, 1);
            },

            finish: function (e) {
                this.show = false;
            },

            remove: function (e) {
                var l = this.value.length,
                    v = l > 0 ? this.value.substr(0, l - 1) : '';

                this.value = v;
                this.$emit('input', v);

                setTimeout(function () {
                    events.emit('password', v);
                }, 1);
            }
        }
    }
</script>