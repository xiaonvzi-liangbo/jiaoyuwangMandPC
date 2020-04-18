<template>
  <div class="pageFooter">
    <div class="group">
      <div class="links">
        <div class="linksList">
          <div class="item">
            <div class="top">学历提升</div>
            <div class="list">
              <a>我要规划</a>
              <a>我的报告</a>
              <a>我的方案</a>
              <a>个人中心</a>
            </div>
          </div>
          <div class="item">
            <div class="top">关于我们</div>
            <div class="list">
              <a href="http://www.xlcxx.com/StudyEnv" target="_blank">学习环境</a>
              <a>联系我们</a>
              <a>意见反馈</a>
            </div>
          </div>
        </div>
      </div>
      <div class="code">
        <p class="tel">
          客服热线：
          <span>15376403705</span>
        </p>
        <div class="list">
          <div class="item">
            <div class="img">
              <img src="../../assets/index/code2.jpg" alt="新里程教育" style="border-radius: 4px;"/>
            </div>
            <p style="text-align:center;">微信公众号</p>
          </div>
          <div class="item">
            <div class="img">
              <img src="../../assets/index/code3.jpg" alt="新里程教育" style="border-radius: 4px;"/>
            </div>
            <p style="text-align:center;">新里程教育小程序</p>
          </div>
        </div>
      </div>
    </div>
    <div class="beian">
      Copyright © xlcxx.com, All Rights Reserved. 新里程（山东）教育信息有限公司 版权所有 <a href="http://beian.miit.gov.cn/" class="alabel" target="_blank">鲁ICP备10037155号-23</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bottoms',
  data () {
    return {}
  }
}
</script>
<style scoped>
.beian{
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 50px;
}
.alabel{
   color: #999 !important;
   display: inline;
}
  .pageFooter{
    background-color: #1c1f21;
    color: #fff;
    height: 365px;
  }
  .group{
    width: 1181px;
    margin: auto;
    overflow: hidden;
  }
  .links{
    width: 610px;
    float: left;
    overflow: hidden;
    margin-left: 22px;
    padding-top: 6px;
    margin-top: 30px;
    height: 200px;
    border-right: 1px solid #fff;
  }
  .linksList{
    overflow: hidden;
  }
  .item{
    float: left;
    margin: 0 23px;
  }
  .top{
    width: 100px;
    height: 30;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .list{
    padding-left: 25px;
  }
  a{
    font-size: 12px;
    line-height: 30px;
    text-align: left;
    display: block;
    color: #fff;
    text-decoration: none;
  }
  .copyright{
    font-size: 14px;
    color: #666666;
    padding: 15px 0 0;
    padding-left: 23px;
    text-align: left;
  }
  .code{
      float: left;
      color: #fff;
      margin-top: 10px;
      padding-top: 8px;
  }
  .tel{
      font-size: 10px;
      padding-left: 90px;
      margin-bottom: 26px !important;
      text-align: left;
  }
  span{
      font-size: 24px;
      font-weight: bold;
  }

  .list{
      overflow: hidden;
  }
  /* .item{
      width: 116px;
      float:left;
      text-align: center;
      margin-left: 52px;
  } */
  .img{
      background-color: #fff;
      width: 116px;
      height: 116px;
  }
  img{
      width: 116px;
      height: 116px;
  }
  p{
      font-size: 12px;
      color: #fff;
      line-height: 32px;
      margin-top: 10px;
  }

</style>
