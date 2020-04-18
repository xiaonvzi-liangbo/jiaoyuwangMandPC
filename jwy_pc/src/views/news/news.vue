<template>
  <div>
    <div class="bg">
      <div class="adv">
        <img src="../../assets/news/news_adv1.jpg" alt />
      </div>
      <div class="group">
        <div style="float: left;overflow: hidden;width: 885px;">
          <div class="block">
            <div class="page">
              您的位置：
              <router-link to="/" class="color">首页</router-link>
              >
              <router-link to="/journalism" class="color">新闻中心</router-link>
              >
              <router-link to="/journalism" class="color">{{snTwoType.typeName}}></router-link>
              <span>{{News.snTitle}}</span>
            </div>
            <div class="pannel news-details">
              <p class="pannel_title">{{News.snTitle}}</p>
              <div class="neirong" v-html="News.snContext"></div>
            </div>
          </div>
          <div class="next">
            <div @click="partOne(upper.id)" style="font-size:12px;">
              上一篇：<span class="article">{{upper.snSubtitle}}</span>
              <span v-if="upper.snSubtitle == null">无</span>
            </div>
            <div @click="partOne(lower.id)" style="font-size:12px;">
              下一篇：<span class="article">{{lower.snSubtitle}}</span>
              <span v-if="lower.snSubtitle == null">无</span>
            </div>
          </div>
        </div>
        <div class="advList">
            <img src="../../assets/index/xxtj_img1.jpg" alt />
            <img src="../../assets/index/xxtj_img2.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utile/request.js'
export default {
  data () {
    return {
      seoTitle: '新里程教育',
      seoWords: 'keyWords',
      seoRiption: 'Description',
      seo: {},
      News: [],
      snTwoType: {},
      TwoType: '',
      next: {},
      upper: {},
      lower: {},
      id: ''
    }
  },
  methods: {
    // 上一篇下一篇点击事件
    partOne (id) {
      this.id = id
      this.information()
      this.getCatalogue()
      document.getElementById('scrTop').scrollTop = 0
    },
    // 资讯详情
    information () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getDetailData',
        methods: 'get',
        params: {
          snId: that.id
        }
      })
        .then(res => {
          that.News = res.data
          that.TwoType = that.News.snTwoType
          that.seoTitle = that.News.snMetaTitle
          that.seoWords = that.News.snMetaKey
          that.seoRiption = that.News.snMetaScr
          request({
            url: '/eduWeb/jyEducationFunctionDictionariesForeign/findById',
            methods: 'get',
            params: {
              id: that.TwoType
            }
          })
            .then(res => {
              that.snTwoType = res.data
            })
        })
    },
    // 获取上一篇和下一篇的内容
    getCatalogue () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getByUpperAndLower',
        methods: 'get',
        params: {
          id: that.id
        }
      })
        .then(res => {
          that.next = res.data
          that.upper = this.next.upper
          that.lower = this.next.lower
        })
    }
  },
  mounted () {
    // 获取页面传递过来的值
    this.id = this.$route.query.id
    this.information()
    this.getCatalogue()
  }
}
</script>
<style lang="scss" scoped>
.color:hover{
  color: #29A5FF !important;
}
.bg{
    background-color: #f4f6f9;
    overflow: hidden;
    .adv{
        width: 1180px;
        margin: 22px auto
    }
    .group{
        width: 1180px;
        overflow: hidden;
        margin: auto;
        margin-bottom: 120px;
        .block{
            width: 885px;
            float: left;
            background-color: #fff;
            padding: 0 30px;
            overflow: hidden;
            .page{
                font-size: 14px;
                color: #666666;
                line-height: 54px;
                border-bottom:1px solid #eeeeee;
                a{
                  text-decoration: none;
                  color: #666666;
                }
            }
            .pannel{
                overflow: hidden;
                .pannel_title{
                    font-size: 25px;
                    text-align: center;
                    color: #222222;
                    margin: 50px 0 !important;
                }
                .neirong{
                  padding: 0 50px;
                  padding-bottom: 50px;
                }
            }
        }
        .next{
            float: left;
            width: 885px;
            background-color: #fff;
            padding: 15px 60px;
            margin-top: 20px;
            .article{
              font-size: 12px;
              color: #666666;
              line-height: 25px;
              cursor:pointer
            }
            .article:hover{
              color: #29A5FF;
            }
        }
        .advList{
            width: 280px;
            float: right;
            background: #f7f7f7;
            overflow: hidden;
            img{
                margin-bottom: 22px;
                display: block;
                text-decoration: none;
                width: 100%;
            }
        }
    }
}
.news-details {
  .neirong {
    p {
      line-height: 34px;
      img {
        text-align: center;
        display: block;
        margin: 10px auto 25px;
      }
    }
  }
}
</style>
