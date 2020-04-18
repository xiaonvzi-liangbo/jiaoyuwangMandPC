<template>
    <div class="my-outbox">
        <div class="my-inbox" ref='box'>
            <div class="my-list" v-for="(item,index) in sendVal" :key='index'>
                <span>{{item.name}}<span>{{item.education}}</span><span>报名院校：{{item.school}}</span></span>
            </div>
            <div class="my-list" v-for="(item,index) in sendVal" :key='(index+1)*100'>
                <span>{{item.name}}<span></span>{{item.education}}<span>报名院校：{{item.school}}</span></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'my-marquee-left',
        props:{        
            sendVal:Array
        },
        data() {
            return {}
        }, 
        mounted:function(){
            var that = this;
            var target = this.$refs.box; 
            var initLeft = 0;
            setInterval(function(){
                initLeft ++;
                if(initLeft >= target.offsetWidth / 2 ){
                    initLeft = 0;
                }
                target.style = 'transform: translateX(-'+ initLeft +'px)';                
            },40)
        }
    }
</script>

<style lang="scss" scoped>
    .my-outbox{
        color: #D7BC8D;
        overflow: hidden;
        height: 70px;
        width: 450px;
        position: relative;
        .my-inbox{
            white-space: nowrap;
            position: absolute;
            font-size: 0;
            .my-list{
                margin-right: 25px;
                display: inline-block;
                font-size: 20px;
                height: 35px;
                line-height: 70px;
                color: #999;
                span{
                  margin-left: 40px;
                }
            }
        }
    }
</style>