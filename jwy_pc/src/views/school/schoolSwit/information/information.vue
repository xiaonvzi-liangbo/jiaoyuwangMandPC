<template>
  <div class="possess">
    <div class="poss_left">
      <div style="margin-bottom:25px;" v-if="top.length>0">
        <div class="picts">
          <div class="picts_pic">
            <img :src="top[0].snImg" width="100%" height="100%"/>
          </div>
        </div>
        <div class="pict_title">
          <div class="beyond" @click="detail(top[0].snId)">{{top[0].snSubtitle}}</div>
          <div class="sizes" @click="detail(top[0].snId)">{{top[0].snIntro.substring(0,35)}}...</div>
        </div>
      </div>
      <div class="border_top" v-for="(items,index) in dataOne" :key="index">
        <div class="conter">
          <i class="el-icon-caret-right" style="color:#C6C6C6;"></i>
          <span @click="detail(item.snId)">{{items.snSubtitle}}</span>
        </div>
        <span class="conter_float">{{items.snUptime | timeDate}}</span>
      </div>
    </div>
    <div class="poss_right">
      <div class="border_top" v-for="(item,index) in dataTwo" :key="index">
        <div class="conter">
          <i class="el-icon-caret-right" style="color:#C6C6C6;"></i>
          <span @click="detail(item.snId)">{{item.snSubtitle}}</span>
        </div>
        <span class="conter_float">{{item.snUptime | timeDate}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'information',
  props: {
    fromData: {
      type: Array,
      required: true
    },
    top: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dataOne: [],
      dataTwo: []
    }
  },
  watch: {
    fromData (newVal, oldVal) {
      let that = this
      that.dataOne = []
      that.dataTwo = []
      that.fromData.forEach((item, index) => {
        if (index < 10) {
          that.dataTwo.push(item)
        } else if (index > 9 && index < 17) {
          that.dataOne.push(item)
        }
      })
    }
  },
  methods: {
    detail (id) {
      this.$router.push({
        path: '/news',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style scoped>
  .possess{
    padding: 0 30px 30px 30px;
  }
  .poss_left{
    width: 355px;
    display: inline-block;
  }
  .poss_right{
    width: 355px;
    float: right;
  }
  .picts{
    width: 130px;
    padding: 5px;
    border: 1px solid #DDDDDD;
    border-radius: 5px;
    display: inline-block;
  }
  .picts_pic{
    border: 1px solid #C0C0C0;
    height: 90px;
  }
  .pict_title{
    float: right;
    width: 200px;
    font-size: 14px;
    cursor: pointer;
  }
  .beyond{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .border_top{
    border-top: 1px solid #E7E7E7;
    line-height: 43px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
  }
  .conter{
    width: 260px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .conter:hover{
    color: #0B5FA8;
    cursor: pointer;
  }
  .conter_float{
    margin-left: 30px;
    color: #C6C6C6;
  }
  .sizes{
    position: relative;
    top: 7px;
    color: grey;
  }
</style>
