<template>
    <div class="my-outbox" ref='outbox'>
        <div class="my-inbox" ref='movebox'>
            <div class="my-listbox" v-for="(item,index) in sendVal" :key='index'>
                <div class="my-content">
                  <div>{{item.phone}}</div>
                  <div>{{item.planEducation}}</div>
                  <div>{{item.planAddress}}</div>
                </div>
            </div>
            <div v-if='isShow'>
              <div class="my-listbox" v-for="(item,index) in sendVal" :key='(index+1)*100'>
                <div class="my-content">
                  <div>{{item.phone}}</div>
                  <div>{{item.planEducation}}</div>
                  <div>{{item.planAddress}}</div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'upDown',
  props:{        
    sendVal:Array
  },
  data() {
    return {
      isShow:true
    }
  }, 
  mounted(){
    var moveTarget = this.$refs.movebox;
    var outbox = this.$refs.outbox;
    if(outbox.offsetHeight > (moveTarget.offsetHeight /2)){
      this.isShow = false;
      return
    }
    var initTop = 0;
    setInterval(function(){
      initTop ++;
      if(initTop >= moveTarget.offsetHeight / 2 ){
          initTop = 0;
      }
      moveTarget.style = 'transform: translateY(-'+ initTop +'px)';
    },40)
  },
}
</script>

<style lang="scss" scoped>
    .my-outbox{
        height:200px;
        margin: 20px;
        overflow: hidden;
        .my-inbox{
            margin: 0 45px;
            .my-listbox{
                padding: 20px 0;
                font-size: 18px;
                .my-title{
                    margin-bottom: 10px;
                    clear: both;
                    overflow:hidden;
                    .my-utel{
                        font-size: 16px;
                        margin-left: 20px;
                    }
                    .my-addr{
                        font-size: 16px;
                        float: right;
                    }
                }
                .my-content{
                    text-align: justify;
                    word-break: break-all;
                    font-size: 14px;
                    display: flex;
                    flex-direction: row;
                    align-content: center;
                    div{
                      flex: auto;
                      width: 300px;
                    }
                }
            }
        }
    }
</style>