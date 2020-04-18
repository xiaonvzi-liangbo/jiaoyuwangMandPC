<template>
  <div>
    <div class="backimg">
      <!-- <img src="@/assets/study/banner.png" width="100%" height="100%"/> -->
    </div>
    <div class="intro">
      <div class="title">新里程教育简介</div>
      <div class="subhead">XINLICHENGJIAOYUJIANJIE</div>
      <div class="picts">
        <div style="display:inline"><img src="@/assets/study/pict1.png"/></div>
        <div class="conter"><img src="@/assets/study/pict2.png" style="margin-left:40px;"/>
          <div class="top">我们期待您的到来</div>
          <div class="text">新里程网校以课程质量为根本，聚集了各类考试辅导领域专业师资团队、课程研发团队，进行教学数据挖掘，研发实际教学效果出众的课程内容和课程设置方式。更有海量在线题库，供学员针对自身学习情况进行反复练习。线上测评，帮助学员深入了解自身薄弱环节;逐题抓取学员弱点，快速提高学生答题能力。高效的讲授内容，科学的课时设置，为学员提供个性化、互动化、系统化的高质量课程。</div>
        </div>
      </div>
    </div>
    <div class="scenery">
      <div class="title">
        新里程<span>校园风景</span>
      </div>
      <div class="subhead">XINLICHENGXIAOYUANFENGJING</div>
      <div class="picture">
        <div v-for="(item,index) in scenerys" :key="index" class="inline">
          <img :src="item.url"/>
          <div class="pic-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="environment">
      <div class="title">
        新里程<span>学习环境</span>
      </div>
      <div class="subhead">XINLICHENGXUEXIHUANGJING</div>
      <div class="picture">
        <div v-for="(item,index) in environments" :key="index" class="inline">
          <img :src="item.url"/>
          <div class="pic-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="attend">
      <div class="title">
        新里程<span>网校上课环境</span>
      </div>
      <div class="subhead">XINLICHENGWANGXIAOSHANGKEHUANGJING</div>
      <div class="picture">
        <div v-for="(item,index) in attends" :key="index" class="inline">
          <img :src="item.url"/>
          <div class="pic-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="live">
      <div class="title">
        新里程<span>生活环境</span>
      </div>
      <div class="subhead">XINLICHENGSHENGHUOHUANJING</div>
      <div class="picture">
        <div v-for="(item,index) in lives" :key="index" class="inline">
          <img :src="item.url"/>
          <div class="pic-title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="putup">
      <div class="title">
        新里程<span>住宿环境</span>
      </div>
      <div class="subhead">XINLICHENGZHUSUHUANJING</div>
      <div class="picture">
        <div v-for="(item,index) in putups" :key="index" class="inline">
          <img :src="item.url"/>
          <div class="pic-title">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'study',
  data () {
    return {
      scenerys: [
        {url: require('@/assets/study/fj1.png'), title: '校园内有优美的草地，供学生休憩驻足'},
        {url: require('@/assets/study/fj2.png'), title: '正规标准教学楼，教学设备配套齐全'},
        {url: require('@/assets/study/fj3.png'), title: '正规标准教学楼，教学设备配套齐全'},
        {url: require('@/assets/study/fj4.png'), title: '明亮宽阔的教室走廊，标准教学楼'},
        {url: require('@/assets/study/fj5.png'), title: '标准的电教室，设备齐全'},
        {url: require('@/assets/study/fj6.png'), title: '走廊文化墙展示，活力温馨'},
        {url: require('@/assets/study/fj7.png'), title: '高标准的体育场，设备维护保养及时'},
        {url: require('@/assets/study/fj8.png'), title: '趣味垃圾桶，小细节展现大趣味'},
        {url: require('@/assets/study/fj9.png'), title: '校园公共展示栏'},
        {url: require('@/assets/study/fj10.png'), title: '学校主干道道路宽敞，交通顺畅'},
        {url: require('@/assets/study/fj11.png'), title: '标准教室，宽敞明亮，桌椅整齐'},
        {url: require('@/assets/study/fj12.png'), title: '学校主干道道路宽敞，交通顺畅'},
        {url: require('@/assets/study/fj13.png'), title: '正规标准教学楼，教学设备配套齐全'},
        {url: require('@/assets/study/fj14.png'), title: '校史文化展示墙'},
        {url: require('@/assets/study/fj15.png'), title: '开放的校园环境-涂鸦墙'}
      ],
      environments: [
        {url: require('@/assets/study/hj1.png'), title: '正规标准教学楼,名师课堂集体授课'},
        {url: require('@/assets/study/hj2.png'), title: '执行无手机课堂措施'},
        {url: require('@/assets/study/hj3.png'), title: '内部全真模拟试卷，提高应试能力'},
        {url: require('@/assets/study/hj4.png'), title: '集中授课，政策讲解，备考经验'},
        {url: require('@/assets/study/hj5.png'), title: '标准教室，宽敞明亮，桌椅整齐'},
        {url: require('@/assets/study/hj6.png'), title: '图书借阅室，丰富课余生活'},
        {url: require('@/assets/study/hj7.png'), title: '宽敞明亮的自习室'},
        {url: require('@/assets/study/hj8.png'), title: '优秀教师展板'},
        {url: require('@/assets/study/hj9.png'), title: '亲授学习方法课'}
      ],
      attends: [
        {url: require('@/assets/study/class6.png'), title: '专业设备齐全的录播教室'},
        {url: require('@/assets/study/class1.png'), title: '专业设备齐全的录播教室'},
        {url: require('@/assets/study/class2.png'), title: '专业网课剪辑设备'},
        {url: require('@/assets/study/class3.png'), title: '专业设备齐全的录播教室'},
        {url: require('@/assets/study/class4.png'), title: '专业设备齐全的录播教室'},
        {url: require('@/assets/study/class5.png'), title: '专业设备齐全的录播教室'}
      ],
      lives: [
        {url: require('@/assets/study/live1.png'), title: '餐厅内部干净整洁，桌椅整齐'},
        {url: require('@/assets/study/live2.png'), title: '菜品丰富，物美价廉'},
        {url: require('@/assets/study/live3.png'), title: '就餐井然有序'},
        {url: require('@/assets/study/live4.png'), title: '厨房整洁卫生'},
        {url: require('@/assets/study/live5.png'), title: '食堂外景'},
        {url: require('@/assets/study/live6.png'), title: '标准化清洗餐具'}
      ],
      putups: [
        {url: require('@/assets/study/put1.png'), title: '宿舍全新装修，宽敞明亮'},
        {url: require('@/assets/study/put2.png'), title: '宿舍全新装修，宽敞明亮'},
        {url: require('@/assets/study/put3.png'), title: '宿舍全新装修，宽敞明亮'},
        {url: require('@/assets/study/put4.png'), title: '宿舍全新装修，宽敞明亮'},
        {url: require('@/assets/study/put5.png'), title: '食堂洗衣房配有洗衣机，省时又省力外景'},
        {url: require('@/assets/study/put6.png'), title: '宿舍廊道干净卫生，宽敞明亮'}
      ]
    }
  }
}
</script>
<style scoped lang="scss">
  .backimg{
    background: url('~@/assets/study/banner.png');
    height: 490px;
    background-size: 100% 100%;
  }
  .intro{
    width: 100%;
    text-align: center;
    margin: auto;
    padding-bottom: 70px;
    .title{
      padding: 40px 0 15px 0;
      font-size: 30px;
      color: #0B5FA8;
    }
    .subhead{
      text-align: center;
      font-size: 14px;
      color: #0B5FA8;
    }
    .picts{
      padding-top: 30px;
      .conter{
        display: inline-block;
        position: relative;
        .top{
          position: absolute;
          top: 2px;
          left: 105px;
          font-size: 24px;
          color: #58B1FF;
        }
        .text{
          text-align: left;
          width: 636px;
          position: absolute;
          top:60px;
          left: 70px;
          line-height: 30px;
        }
      }
    }
  }
  .scenery{
    background: url('~@/assets/study/banner2.png');
    background-size: 100% 100%;
    height: 1737px;
    .title{
      padding-top: 50px;
      text-align: center;
      color: #FFFFFF;
      font-size: 30px;
      span{
        font-weight: bold;
      }
    }
    .subhead{
      padding-top: 15px;
      text-align: center;
      color: #FFFFFF;
    }
    .picture{
      padding-top: 49px;
      width: 1280px;
      margin: auto;
      .inline{
        display: inline-block;
        margin-left: 42px;
        margin-bottom: 35px;
        img{
        width: 372px;
      }
      .pic-title{
        width: 372px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #0171FF;
        color: #fff;
        position: relative;
        top: -5px;
        }
      }
    }
  }
  .environment{
    .title{
      padding-top: 50px;
      text-align: center;
      color: #5492FF;
      font-size: 30px;
      span{
        font-weight: bold;
      }
    }
    .subhead{
      padding-top: 15px;
      text-align: center;
      color: #5492FF;
    }
    .picture{
      padding-top: 49px;
      width: 1280px;
      margin: auto;
      .inline{
        display: inline-block;
        margin-left: 42px;
        margin-bottom: 35px;
        img{
        width: 372px;
      }
      .pic-title{
        width: 372px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #15D16F;
        color: #fff;
        position: relative;
        top: -5px;
        }
      }
    }
  }
  .attend{
    background: url('~@/assets/study/banner3.png');
    background-size: 100% 100%;
    height: 810px;
    .title{
      padding-top: 50px;
      text-align: center;
      color: #FFFFFF;
      font-size: 30px;
      span{
        font-weight: bold;
      }
    }
    .subhead{
      padding-top: 15px;
      text-align: center;
      color: #FFFFFF;
    }
    .picture{
      padding-top: 49px;
      width: 1280px;
      margin: auto;
      .inline{
        display: inline-block;
        margin-left: 42px;
        margin-bottom: 35px;
        img{
        width: 372px;
      }
      .pic-title{
        width: 372px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #fff;
        position: relative;
        top: -5px;
        }
      }
    }
  }
  .live{
    padding-bottom:19px;
    .title{
      padding-top: 50px;
      text-align: center;
      color: #5492FF;
      font-size: 30px;
      span{
        font-weight: bold;
      }
    }
    .subhead{
      padding-top: 15px;
      text-align: center;
      color: #A5E4FF;
    }
    .picture{
      padding-top: 49px;
      width: 1280px;
      margin: auto;
      .inline{
        display: inline-block;
        margin-left: 42px;
        margin-bottom: 35px;
        img{
        width: 372px;
      }
      .pic-title{
        width: 372px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #FFB206;
        color: #fff;
        position: relative;
        top: -5px;
        }
      }
    }
  }
  .putup{
    background: url('~@/assets/study/banner4.png');
    background-size: 100% 100%;
    height: 770px;
    .title{
      padding-top: 50px;
      text-align: center;
      color: #FFFFFF;
      font-size: 30px;
      span{
        font-weight: bold;
      }
    }
    .subhead{
      padding-top: 15px;
      text-align: center;
      color: #A5E4FF;
    }
    .picture{
      padding-top: 49px;
      width: 1280px;
      margin: auto;
      .inline{
        display: inline-block;
        margin-left: 42px;
        margin-bottom: 35px;
        img{
        width: 372px;
      }
      .pic-title{
        width: 372px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #fff;
        position: relative;
        top: -5px;
        }
      }
    }
  }
</style>
