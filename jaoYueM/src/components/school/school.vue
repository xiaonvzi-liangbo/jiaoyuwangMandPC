<template>
  <div>
    <a class="school" v-for="(item,index) in schoolList" :key="index" :href="item.scLink">
      <div>
        <img :src="item.scBottomLogo" class="sch_img"/>
      </div>
      <div>
        <div>
          <span class="sch_title">{{item.scGname}}</span>
          <span v-if="labels">
            <span v-for="(lab,num) in item.scTypeName" :key="num">
              <span :class="lab==='成人高考'?'labes':'babesjs'">{{lab | reduce}}</span>
            </span>
          </span>
          <span class="details" v-else>查看详情</span>
        </div>
        <div class="sch_posi">
          {{item.scIntroInfo | cutOut}}
          <!-- 中国石油大学（华东）是教育部直属全国重点大学，国家“双一流”世界一流学科...... -->
        </div>
        <div class="sch_bottom">
          <div class="bot_label" v-for="(geology,serial) in item.collageMajors" :key="serial">
            {{geology.smIntro}}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import request from '@/utile/request.js'
export default {
  name:'schools',
  filters:{
    reduce(val){
      if(val==='成人高考'){
        return '成考'
      }else if(val==='网络教育'){
        return '网教'
      }else{
        return ''
      }
    },
    cutOut(val){
      if(val.length>36){
        let str = val.substring(0,30)+'.....'
        return str
      }else{
        return val
      }
    }
  },
  props:{
    labels:{
      type:Boolean,
      default:true
    },
    sctype:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      schoolList:[]
    }
  },
  methods:{
    //获取热门院校
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '6',
          scIspass: '1',
          smRecomed: '1',
          scType:that.sctype
        }
      })
        .then(function (response) {
          that.schoolList = response.rows
          that.schoolList.forEach(item=>{
            item.scTypeName = item.scTypeName.split(',')
          })
        })
    }
  },
  mounted(){
    this.getSchool()
  }
}
</script>
<style scoped>
  .school{
    padding: 20px;
    width: 650px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    background-color: #fff;
    text-decoration: none;
    color: #333;
  }
  .sch_img{
    width: 120px;
    height: 170px;
    border-radius: 6px;
  }
  .sch_title{
    margin-left: 23px;
    font-size: 30px;
    font-weight: bold;
  }
  .labes{
    font-size: 12px;
    color: #fff;
    padding: 5px 15px;
    background: #0393D4;
    border-radius: 4px;
    margin-left: 10px;
  }
  .babesjs{
    font-size: 12px;
    color: #fff;
    padding: 5px 15px;
    background: #FF7A3F;
    border-radius: 4px;
    margin-left: 10px;
  }
  .sch_posi{
    margin-left: 23px;
    margin-top: 24px;
    height: 60px;
  }
  .sch_bottom{
    margin-left: 23px;
    margin-top: 20px;
  }
  .bot_label{
    background-color: #EEEEEE;
    font-size: 18px;
    color: #999999;
    padding: 4px 9px;
    display: inline-block;
    border-radius: 4px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .details{
    color: #0393D4;
    padding: 2px 10px;
    border: 2px solid #0393D4;
    border-radius: 4px;
    margin-left: 10px;
  }
</style>