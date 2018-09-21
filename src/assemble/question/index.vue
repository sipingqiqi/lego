<template>
    <div class='_qa'>
        <div class='_question'>
            <span>Q:</span>
            <b-text color='black' size='30'>{{ itemData.question}}</b-text>
        </div>
        <div class='_answer'>
            <span>A:</span>
            <b-text color='light' size='30'>{{ itemData.answer}}</b-text>
        </div>
    </div>
</template>

<script>


    export default {
        props: {
            itemData: {
                type: Object,
                default: function () { return {}; }
            },

            itemIndex: {
                type: Number,
                default: 0
            }, 

            onTap: {
                type: Function,
                default: function () {}
            }
        },

        data: function () {
            return {}
        },

        methods: {
            onTapCallback: function (e) {
                this.onTap(this.itemData, e);
            }
        }
    }
</script>