<template>
    <button :id='id' 
        class='_button' 
        :class='classObj' 
        :style='styleObj' 
        :phone-err='phoneErrMsg' 
        email-err='emailErrMsg' 
        :idcard-err='idcardErrMsg' 
        :number-err='numberErrMsg' 
        @mytap = 'timekeeper' 
        :istapped='tapped'
        data-tappable
    >
        <slot>{{counts}}</slot>
    </button>
</template>

<script>

    export default {
        props: [ 'id','width', 'height', 'size', 'filled', 'radius','tapcolor','validate','second','phonevali','count','emailvali','idcardvali','numbervali','callback'],

        data: function () {
            var obj = {}, list = [];

            this.width  && (obj.width  = this.width  + 'rem');
            this.height && (obj.height = this.height + 'rem');

            this.size 
            && list.push('_text_size_' + this.size + 'px');

            this.filled === 'true' 
            && list.push('_button_filled');   

            this.radius === 'true' && list.push('_radius_button');
            return {
                styleObj: obj,
                classObj: list,
                phoneErrMsg:'',
                emailErrMsg:'',
                idcardErrMsg:'',
                numberErrMsg:'',
                counts:this.count,
                seconds: this.second,
                tapped:true
            }
        },
        
        beforeMount:function(){
        },
        methods:{
            timekeeper:function(){
                var self = this;

                if(self.count && self.tapped){
                    self.callback();
                    self.tapped = false;
                    var countdown = setInterval(function(){
                        if(self.seconds == 0){
                            clearInterval(countdown);
                            self.tapped = true;
                            self.counts = '获取验证码';
                        }else{
                            self.seconds--;
                            self.counts = '还剩' + self.seconds + 's';
                        }
                    },1000)
                }
            }
        }
    }
</script>
