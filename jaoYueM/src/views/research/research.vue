<template>
  <div style="background-color:#fff;">
    <heards title="研修班"></heards>
    <div class="top-banner">
      <img src="@/assets/research/banner.png" class="banner"/>
      <div class="top-button" id="jyw_zxbm">在线咨询</div>
    </div> 
    <div class="pict-posi"><img src="@/assets/research/icons.png" class="icons"/></div>
    <div class="reason">
      <div class="rea-title">选择中国海洋大学总裁班的 六大理由</div>
      <div class="res-small">XUANZEZHONGGUOHAIYANGDAXUEZONGCAIBANDE LIUDALIYOU</div>
      <div class="rea-block" v-for="(item,index) in imageText" :key="index">
        <img :src="item.img" class="res-img"/>
        <div :class="index===0 || index===1?'rea-position-one':'rea-position'">
          <div class="title">{{item.title}}</div>
          <div class="rea-conter">{{item.text}}</div>
        </div>
      </div>
    </div>
    <div class="focussing">
      <div class="foc-title">
        <div>聚焦<span class="foc-span">更实战</span> <span class="foc-span">实用的</span>课程</div>
        <div class="foc-small">JUJIAOGENGSHIZHAN SHIYONGDEKECHENG</div>
        <swiper :options="swiperOption" ref="mySwiper" class="swi-all">
          <swiper-slide v-for="(item,index) in conters" :key="index">
            <div class="swiper-con">
              <div class="swi-num">{{index+1 | subString}}</div>
              <div class="swi-title">{{item.title}}</div>
              <div class="swi-texts">{{item.text}}</div>
              <div class="swi-consult">{{item.button}}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div>
      <div class="teachers">
        研修班<span class="foc-span">课程师资</span>
      </div>
      <div class="tea-small">YANXIUBANKECHENGSHIZI</div>
      <div class="tea-conter">
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">权锡鉴</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">权锡鉴</div>
            <div class="back-text">中国海洋大学管理学院院长、教授、博士生导师；山东省管理...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">张立群</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">张立群</div>
            <div class="back-text">国务院发展研究中心宏观经济研究部研究员；发展研究中心学术...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">刘善武</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">刘善武</div>
            <div class="back-text">领导力管理学专家、战略管理专家、咨询式培训倡导者；清华、...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">周永亮</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">周永亮</div>
            <div class="back-text">国内知名战略与管理专家；北京国富经济研究院执行院长；北...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">刘云</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">刘云</div>
            <div class="back-text">国内知名市场营销管理专家；曾任多家世界500强、知名上市...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">任延明</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">任延明</div>
            <div class="back-text">北大纵横高级合伙人，金融行业中心总经理、总监；交通运输...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">梁中国</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">梁中国</div>
            <div class="back-text">北京大学中国战略研究中心品牌研究所所长；国际品牌联盟(IBF)...</div>
          </div>
        </div>
        <div class="tea-block flip-container">
          <div class="front">
            <img src="@/assets/research/person.png" class="tea-imgs"/>
            <div class="tea-name">程国有</div>
          </div>
          <div class="tea-moreover back">
            <div class="back-name">程国有</div>
            <div class="back-text">中共青岛市委党校经济学教研部主任、教授；兼任国家开发银行...</div>
          </div>
        </div>
      </div>
      <img src="@/assets/research/banner2.png" class="banner2"/>
    </div>
    <div class="serve">
      <div class="ser-title">完善的<span class="foc-span">学习服务体系</span></div>
      <div class="ser-amsll">一次学习，终身受益，优质的服务，让学习效率翻倍</div>
      <div class="ser-conter">
        <div class="ser-block">
          <div class="ser-index"><span class="ser-span">01</span></div>
          <div>
            <div class="ser-titles">第一环：教务团队</div>
            <div class="ser-texts">教务团队老师均为具有实操经验的专业人士。从入学到结业，班主任全程服务管理班级。</div>
          </div>
        </div>
        <div class="ser-block">
          <div class="ser-two"><span class="ser-span2">02</span></div>
          <div>
            <div class="ser-titles">第二环：班委组织</div>
            <div class="ser-texts">班委团队建设、组织活动增强学习范围，营造学习交流平台。</div>
          </div>
        </div>
        <div class="ser-block">
          <div class="ser-index"><span class="ser-span">03</span></div>
          <div>
            <div class="ser-titles">第三环：实战讲师</div>
            <div class="ser-texts">甄选国内顶级实战派名师团授课，倾囊相授，拓宽管理思维，保障课程质量。</div>
          </div>
        </div>
        <div class="ser-block">
          <div class="ser-two"><span class="ser-span2">04</span></div>
          <div>
            <div class="ser-titles">第四环：持续收益</div>
            <div class="ser-texts">为有需求的学员企业提供增值服务，真正做到落地实施！</div>
          </div>
        </div>
      </div>
    </div>
    <div class="suit">
      <div class="su-title">适合人群</div>
      <div class="su-small">公司董事局主席、CEO、总裁、董事长、副总经理、总监等以上职务\致力于从事企业经营管理的投资人与管理者</div>
      <div class="su-conter">
        <div class="su-block">
          <div class="su-smtitle">董事长、CEO</div>
          <div class="su-texts">
            企业老板想要提升自己的领导能力，了解最新的企业发展战略，实现企业转型              
          </div>
        </div>
        <div class="su-block" style="background-color:#34B8AB">
          <div class="su-smtitle">企业高管</div>
          <div class="su-texts">
            企业高管层想要提升自身，获得证书，想获得更大晋升空间
          </div>
        </div>
        <div class="su-block" style="background-color:#FC9749">
          <div class="su-smtitle">职业经理人</div>
          <div class="su-texts">
            职业经理人想要提升自身水平，获得证书                          
          </div>
        </div>
        <div class="su-block" style="background-color:#F07474">
          <div class="su-smtitle">企业投资人</div>
          <div class="su-texts">
            入资企业、控股、想提升管理水平，获得更强能力                          
          </div>
        </div>
        <div class="su-block" style="background-color:#C669BA">
          <div class="su-smtitle">其他有志之士</div>
          <div class="su-texts">
            所有想要拓展商业人脉以及自身水平的人                           
          </div>
        </div>
      </div>
    </div>
    <div class="from">
      <div class="from-texts">新时代企业管理 只有完善自我 才能运筹帷幄给自己一个机会，知识、人脉双收获</div>
      <div class="input">
        <input placeholder="您的姓名" v-model="fromData.name"/>
      </div>
      <div class="input">
        <input placeholder="您的电话" v-model="fromData.phone"/>
      </div>
      <div class="input">
        <input placeholder="您的职务" v-model="fromData.duty"/>
      </div>
      <div class="subit" @click="subit">提交信息</div>
    </div>
    <stern></stern>
  </div>
</template>
<script>
import heards from '@/components/heads/heads'
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import stern from '@/components/stern/stern'
import request from '@/utile/request.js'
export default {
  name:'research',
  components:{
    heards,
    swiper,
    swiperSlide,
    stern
  },
  data(){
    return{
      fromData:{
        name:'',
        phone:'',
        duty:''
      },
      imageText:[
        {img:require('@/assets/research/bac1.png'),title:'让平台凸显优势',text:'来自全省十六地市学员，移动 课堂及经济商务考察，学员跨 区域跨行业交流，共融发展， 搭建优质平台！'},
        {img:require('@/assets/research/bac2.png'),title:'让名企成为对标',text:'通过国内知名企业参访、了解 企业经营发展的创新模式。对 标名企名牌，开拓思路，追求 卓越！'},
        {img:require('@/assets/research/bac3.png'),title:'让同学变成挚友',text:'通过开学典礼素质扩展，加强 沟通合作意识，建立身后的友 谊，成为终生的朋友！'},
        {img:require('@/assets/research/bac4.png'),title:'让管理变得简单',text:'十大课程模块全方位、系统性 构建管理思维，提升综合管理 能力，让公司管理得心应手！'}, 
        {img:require('@/assets/research/bac5.png'),title:'让经营更加出彩',text:'组织实战演练、项目路演、校 友会互动讨论等活动，让学员 彼此分享，共同成长！'},
        {img:require('@/assets/research/bac6.png'),title:'让学习化为习惯',text:'组织大型论坛、年会、定期组 织沙龙会，为学员搭建终身学 习交流平台。'}
      ],
      conters:[
        {
          title:'《领导力与领导艺术》',
          text:'课程结合中国国情领导现状与特征，从组织系统建设和人性心灵管理两个层面提供综合管理问题解决方案的实战性课程。',
          button:'在线咨询'
        },
        {
          title:'《团队建设与执行力打造》',
          text:'学习科学、先进、高效的组织效率提升方法和工具，掌握有效激励机制，通过最佳的激励方法提升团队执行力！',
          button:'在线咨询'
        },
        {
          title:'《商业模式与创新经营》',
          text:'通过大量成功企业的商业模式案例剖析,直观的呈现出成功商业模式的制造规律，转换思维，实现企业瓶颈突破...',
          button:'在线咨询'
        },
        {
          title:'《总经理的财务管理》',
          text:'学会财务与业务相结合的分析方法，了解财务数据背后所代表的管理问题，增强成本控制意识，运用预算...',
          button:'在线咨询'
        },
        {
          title:'《税务筹划与风险控制》',
          text:'诉清企业常见的税务难点，学习企业财税人最应了解的法律依据多角度结合实务讲解纳税常见问题，提升风险...',
          button:'在线咨询'
        },
        {
          title:'《总经理的人才管理》',
          text:'就管理者如何学习、科学决策、组织团队、知人善任、培育团队等方面给出了一系列科学而实用的方法与工具。',
          button:'在线咨询'
        },
        {
          title:'《企业文化与品牌建设》',
          text:'本课程系统讲授文化形态对企业的重要作用，对内影响员工价值及行为取向，对外产生品牌影响力，打造企业...',
          button:'在线咨询'
        },
        {
          title:'《互联网+在企业中的应用》',
          text:'剖析互联网经典案例中商业逻辑运用及成功点，理解用户思维的对接和最终落地，掌握企业互联网转型的顶层...',
          button:'在线咨询'
        },
        {
          title:'《商务谈判与营销技巧》',
          text:'课程重点讲解如何修改谈判双方的心理认知，掌握谈判及营销过程的沟通原则和技巧以实现谈判目的，达成营销目标。',
          button:'在线咨询'
        }
      ],
      swiperOption:{
        loop:true,
        autoplay:{
          delay: 3000,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      },
    }
  },
  filters:{
    subString(val){
      if(String(val).length<2){
        return '0'+val
      }else{
        return val
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    //提交点击事件
    subit(){
      let that = this
      let warn = ''
      let reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/
      if(!that.fromData.name){
        warn = '请输入姓名'
      }else if(!that.fromData.phone){
        warn = '请输入手机号码'
      }else if(!reg.test(that.fromData.phone)){
        warn = '手机号码格式错误'
      }else if(!that.fromData.duty){
        warn = '请输入职务'
      }else{
        request({
          url:'/eduWeb/register/addUserFrom',
          method:'POST',
          data:{
            enlistType:'研修班',
            nickName:that.fromData.name,
            userMobile:that.fromData.phone,
            job:that.fromData.duty
          }
        })
          .then(res=>{
            if(res.code==200){
              that.$toast('提交成功') 
              that.fromData.name = that.fromData.phone = that.fromData.duty =''
            }else{
              that.$toast('提交失败') 
            }
          })
      }
      if(warn){
        that.$toast(warn) 
      }
    }
  },
  mounted(){
    let bm = document.createElement('script')
    bm.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/c613f2ef2e469cf4bfceaab7fdc6d96e')
    bm.setAttribute('id', 'qd2852173998c613f2ef2e469cf4bfceaab7fdc6d96e')
    document.head.appendChild(bm)
  }
}
</script>
<style scoped>
  .banner{
    width: 100%;
    height: 100%;
  }
  .top-banner{
    position: relative;
  }
  .top-button{
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    color: #fff;
    background-color: #0B5EA8;
    border-radius: 4px;
    position: absolute;
    bottom: 40px;
    left: 100px;
  }
  .pict-posi{
    padding: 30px 0;
    text-align: center;
  }
  .icons{
    width: 547px;
    height: 262px;
  }
  .reason{
    text-align: center;
    margin-top: 40px;
  }
  .rea-title{
    font-size: 32px;
    font-weight: bold;
  }
  .res-small{
    font-size: 12px;
    margin-top: 18px;
    margin-bottom: 34px;
  }
  .rea-block{
    display: inline-block;
    position: relative;
    margin-right: 30px;
    margin-bottom: 20px;
  }
  .rea-block:nth-child(2n){
    margin-right: 0px;
  }
  .res-img{
    width: 314px;
    height: 281px;
  }
  .rea-position{
    position: absolute;
    top: 110px;
    width: 274px;
    padding: 20px;
    text-align: center;
    color: #FFFFFF;
  }
  .rea-position-one{
    position: absolute;
    top: 85px;
    width: 274px;
    padding: 20px;
    text-align: center;
    color: #FFFFFF;
  }
  .title{
    font-size: 28px;
    font-weight: bold;
  }
  .rea-conter{
    font-size: 20px;
    margin-top: 10px;
  }
  .focussing{
    overflow-x: hidden;
    background: url('~@/assets/research/banner1.png');
    background-size: 100% 100%;
    background-position: center center;
    height: 585px;
    position: relative;
    left: -8px;
    overflow: hidden;
  }
  .foc-title{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    padding: 50px;
  }
  .foc-span{
    color: #1C3B94;
  }
  .swi-all{
    width: 515px;
    text-align: center;
    margin-top: 34px;
    height: 388px;
    background-color: #fff;
  }
  .foc-small{
    font-size: 12px;
    color: #979797;
    margin-top: 19px;
    font-weight: 500;
  }
  .swiper-con{
    position: relative;
    font-weight: 500;
  }
  .swi-num{
    font-size: 30px;
    color: #A49D9E;
    position: absolute;
    left: 28px;
    top: 20px;
  }
  .swi-title{
    font-size: 32px;
    padding-top: 35px;
  }
  .swi-texts{
    font-size: 26px;
    padding: 26px 57px;
    height: 154px;
    color: #6A6A6A;
  }
  .swi-consult{
    width: 168px;
    height: 42px;
    line-height: 42px;
    font-size: 24px;
    text-align: center;
    background-color: #0C5D87;
    margin: auto;
    color: #fff;
    border-radius: 3px;
    font-weight: 500;
  }
  .teachers{
    margin-top: 48px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
  }
  .tea-small{
    font-size: 12px;
    margin-top: 19px;
    text-align: center;
    color: #939393;
    margin-bottom: 30px;
  }
  .tea-conter{
    padding: 0px 40px;
  }
  .tea-block{
    width: 205px;
    height: 147px;
    border: 2px dashed #C72424;
    border-radius: 2px;
    margin-bottom: 15px;
    margin-right: 10px;
    display: inline-block;
    text-align: center;
    position: relative;
  }
  .tea-block:nth-child(3n){
    margin-right: 0;
  }
  .tea-imgs{
    width: 49px;
    height: 46px;
    position: relative;
    top: 28px;
  }
  .tea-name{
    position: relative;
    top: 40px;
    font-size: 18px;
  }
  .tea-moreover{
    position: absolute;
    z-index: -2;
  }
  .flip-container {
    -webkit-perspective: 500;
    -moz-perspective: 500;
    -ms-perspective: 500;
    perspective: 500;
    -ms-transform: perspective(500px);
    -moz-transform: perspective(500px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
}
 
.flip-container:hover .front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
}
.flip-container:hover .back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
    z-index: 3; /* 降级处理不支持CSS3的浏览器，只是简单的将back上升盖住front */
}
 
.front, .back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -o-transition: 0.6s;
    -ms-transition: 0.6s;
    transition: 0.6s;
}
.front {
  z-index: 2;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.back-name{
  position: relative;
  bottom: 75px;
}
.back-text{
  position: relative;
  bottom: 70px;
  font-size: 18px;
  padding: 0 10px;
}
.banner2{
  width: 100%;
  margin-top: 30px;
}
.serve{
  background:url('~@/assets/research/banner3.png');
  background-size: 100% 100%;
  height: 700px;
  position: relative;
  top: -8px;
}
.ser-title{
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  padding-top: 50px;
}
.ser-conter{
  margin-top: 40px;
  padding: 0 45px;
}
.ser-amsll{
  color: #454545;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
}
.ser-block{
  width: 314px;
  height: 230px;
  background-color: #fff;
  margin-right: 10px;
  display: inline-block;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
}
.ser-index{
  width: 75px;
  height: 75px;
  background-color: #DBDBDB;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  right: -26px;
  top: -26px;
}
.ser-span{
  font-size: 27px;
  color: #FFFFFF;
  position: relative;
  top: 29px;
  right: 7px;
}
.ser-two{
  width: 75px;
  height: 75px;
  background-color: #DBDBDB;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  left: -26px;
  top: -26px;
}
.ser-span2{
  font-size: 27px;
  color: #FFFFFF;
  position: relative;
  top: 29px;
  left: 7px;
}
.ser-titles{
  font-size: 30px;
  color: #000;
  text-align: center;
  margin-top: 30px;
}
.ser-texts{
  padding: 20px;
  line-height: 36px;
  font-size: 20px;
}
.suit{
  padding: 50px 20px;
}
.su-title{
  text-align: center;
  font-size: 32px;
  color: #1C3B94;
  font-weight: bold;
}
.su-small{
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  padding: 0 40px;
}
.su-conter{
  padding-top: 40px !important;
  width: 100%;
  text-align: center !important;
}
.su-block{
  width: 279px;
  height: 279px;
  border-radius: 50%;
  background-color: #289FCA;
  display: inline-block;
  margin-right: 70px;
  text-align: center;
}
.su-block:nth-child(2){
  margin-right: 0px;
  position: relative;
  bottom: 30px;
}
.su-block:nth-child(3){
  position: relative;
  bottom: 40px;
}
.su-block:nth-child(4){
  margin-right: 0px;
}
.su-block:nth-child(5){
  position: relative;
  bottom: 40px;
  left: 30px;
}
.su-smtitle{
  font-size: 30px;
  color: #fff;
  padding-top: 50px;
}
.su-texts{
  width: 230px;
  margin: auto;
  height: 145px !important;
  text-align: center;
  padding-top: 10px;
  line-height: 36px;
  color: #fff;
}
.from{
  background: url('~@/assets/research/banner4.png');
  height: 512px;
  background-size: 100%;
}
.from-texts{
  padding: 45px 63px 30px 63px;
  text-align: center;
  font-size: 32px;
  color: #fff;
  line-height: 48px;
}
.input{
  text-align: center;
  padding: 10px 0;
}
input{
  width: 400px;
  height: 60px;
  border-radius: 4px;
  border: 0;
  padding: 0 10px;
}
.subit{
  margin: auto;
  width: 260px;
  height: 60px;
  line-height: 60px;
  color: #fff;
  background-color: #0C5D87;
  text-align: center;
  border-radius: 4px;
  margin-top: 15px;
}
</style>