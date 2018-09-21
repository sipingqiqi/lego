<template> 
    <div>
        <article class="svg-line" id="svg-line" v-html="svgHtml"></article>
    </div>
    
</template>

<script>

    import lineChart from '../../utils/line.chart';    
    import events from '../../utils/gum.vue.events';
    // lineChart(period, is7Rate, data)
    export default {
        props: {
            period: {
                type: String,
                default: '0'
            },
            rate: {
                type: String,
                default: '1'
            },
            list: {
                type: Array,
                default: function () { return {}; }
            }
        },

        data: function () {
            if (this.list.length == 0){
                this.list = [
                    {
                        "profitOf10K":"0",
                        "navDate":"0",
                        "nav":"0"
                    }
                ]
            }
            
            var period = this.period,
                rate = parseInt(this.rate),
                list = this.list;
            
            return {
                newPeriod: period,
                svgHtml: lineChart(this.newPeriod, rate, list),
                rateDate : parseInt(this.rate),
                listDate : this.list
            }
        },
        mounted: function(){
            var that = this;
            event.on('tabedswitch',function(date){
                that.newPeriod = date;
                that.svgHtml = lineChart(that.newPeriod, that.rateDate, that.listDate);
            });
            event.on('tabswitch',function(rate){
                that.rateDate = parseInt(rate);
                that.svgHtml = lineChart(that.newPeriod, that.rateDate, that.listDate);
            });
        }
    }
</script>

<style scoped>
    .svg-line{
        height: 12em;
        background: #fff;
        text-align: center;
    }
</style>