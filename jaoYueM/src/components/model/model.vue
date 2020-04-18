<template>
  <div @click="close" v-if="show" class="all">
    <div class="conter">
      <div style="text-align: center;">
        <div class="info">
          <span class="title">{{title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'model',
  data(){
    return{
      show:false,
      title:''
    }
  },
  methods:{
    close(){
      this.show = false
    },
    open(value){
      console.log('999999')
      this.show=true
      this.title = value
      setTimeout(()=>{
        this.show=false
      },2000)
    }
  }
}
</script>
<style scoped>
  .all{
    background-color: aqua;
    text-align: center;
  }
  .conter{
    text-align: center;
    position: fixed;
    top: 30%;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 99999999999999999999;
  }
  .info{
    text-align: center;
  }
  .title{
    background-color: rgba(40, 44, 52, 0.7);
    padding: 15px 30px;
    border-radius: 8px;
    color: #F7F7F7;
  }
</style>