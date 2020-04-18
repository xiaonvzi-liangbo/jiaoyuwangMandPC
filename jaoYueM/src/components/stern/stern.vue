<template>
  <div class="strn">
    <div class="bottom">
      <div class="education">学历提升</div>
      <div class="education">热门院校</div>
      <div class="education">关于我们</div>
      <div class="education">更多</div>
      <div class="elgl">Copyright © xlcxx.com, All Rights Reserved.</div>
      <div class="copyright">新里程（山东）教育信息有限公司 版权所有</div>
      <div class="copyright"><a class="a-label" href="http://beian.miit.gov.cn">鲁ICP备10037155号-23</a></div>
    </div>
    <div class="fixation">
      <div class="consult" id="m_jyw">
        <img src="@/assets/fixation/sy_kefu.png" class="icons"/>在线咨询
      </div>
      <div class="photo">
        <img src="@/assets/fixation/sy_dianhua.png" class="icons"/>电话咨询
      </div>
      <div class="enter">
        <img src="@/assets/fixation/sy_fangan.png" class="icons"/>升学方案
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'stern',
  data(){
    return{

    }
  },
  mounted(){
    
  }
}
</script>
<style scoped>
  .strn{
    padding: 25px 0;
    background-color: #fff;
  }
  .education{
    width: 140px;
    text-align: center;
    display: inline-block;
    color: #666666;
  }
  .bottom{
    text-align: center; 
    margin-bottom: 70px;
    width: 100%;
  }
  .elgl{
    color: #A0A0A0;
    margin-top: 20px;
    text-align: center;
  }
  .copyright{
    color: #A0A0A0;
    margin-top: 9px;
    text-align: center;
  }
  .a-label{
    text-decoration: none;
    color: #A0A0A0;
  }
  .fixation{
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    color: #fff;
    position: fixed;
    bottom: 0;
    z-index: 999;
  }
  .consult{
    line-height: 80px;
    text-align: center;
    flex: auto;
    background-color: #FF7A3F;
    
  }
  .photo{
    line-height: 80px;
    text-align: center;
    flex: auto;
    background-color: #2BAD3A;
  }
  .enter{
    line-height: 80px;
    text-align: center;
    flex: auto;
    background-color: #0393D4;
  }
  .icons{
    width: 26px;
    height: 28px;
    position: relative;
    top: 5px;
    right: 10px;
  }
</style>