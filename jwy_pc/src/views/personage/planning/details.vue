<template>
  <div class="box">
    <div class="title">
      <p style="margin:20px 0 0;  font-size: 30px;">学历提升整体规划方案</p>
      <p style="  font-size: 20px;">Education promotion overall planning scheme</p>
    </div>
    <table style="margin-top:50px;" class="tab" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td class="td-bg">方案编号</td>
        <td class="td-long">XLC0010020003</td>
        <td class="td-bg">学生姓名</td>
        <td class="td-long">路人甲</td>
      </tr>
      <tr>
        <td class="td-bg">学生户籍</td>
        <td class="td-long">山东省</td>
        <td class="td-bg">目前学历</td>
        <td class="td-long">专科</td>
      </tr>
    </table>
    <div>
      <p class="text-tile">一、学生360度解码分析</p>
      <table class="tab" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td class="td-bg">测评内容</td>
          <td class="td-long">学历提升规划</td>
          <td class="td-bg">总得分</td>
          <td class="td-long">76分</td>
        </tr>
        <tr>
          <td class="td-bg">测评时间</td>
          <td class="td-long">2019-12-31</td>
          <td class="td-bg">提升层次</td>
          <td class="td-long">本科</td>
        </tr>
        <tr>
          <td colspan="4" style="color:#0B5FA8">专业规划师人工解读详细报告请致电：400-6632-666</td>
        </tr>
      </table>
    </div>
    <div class="listtwo">
      <p class="text-tile">二、根据您的情况，帮您选出以下院校</p>
      <div class="list">
        <el-table class="tab-listwo" :data="tableData" border>
          <el-table-column prop="school" label="学校" width="180"></el-table-column>
          <el-table-column prop="professional" label="专业" width="180"></el-table-column>
          <el-table-column prop="candidate" label="主考院校" width="180"></el-table-column>
          <el-table-column prop="address" label="地址" width="180"></el-table-column>
        </el-table>
        <p class="listtwo-p">注：想获取更多推荐学校或者学校详细的考试/开放日信息，申请流程等，请致电：400-6632-666</p>
        <div style="color:#333333">
          <p style="font-size:18px">新里程建议：</p>
          <p class="text">
            学历提升对一个人影响重大，专科学历虽然可以考研，但条件过高，自考本科后再考研成功率会更高，医生、教师等职业职称评级对学历也有一定的要求。
            近年来，自考难度不断加大，独自备考的考生由于缺少专业教师的指导以及知识重点整理，风险较大，成功率不高，越来越多的人选择报班学习。辅导机构虽然有一定的师资力量和知识整理，对考生有一定的帮助，但也良莠不齐，各辅导机构之间存在一定的差异，应谨慎选择多年专注教育事业，有多年辅导经验教研团队，强大知识资源管理，有专人进行学习督促，跟踪学习的辅导机构。
          </p>
        </div>
      </div>
    </div>
    <div class="listthree">
      <p class="text-tile">三、报名流程及注意事项</p>
      <p
        class="list text"
      >自考本科以前有个八年时间限制的规定，意思是考八年还没有全部课程通过的话会取消毕业证资格，但是这个规定现已经被各省取消了。因此自考本科没有规定几年内必须考完全部课程。但是一般按各专业考试计划的安排，本科为3年—5年不等。根据参加过自考的考生的经验之谈，这个毕业时间是不固定的，一般是2年—2.5年就能拿毕业证，快的一年多就可以了，主要取决于考生考试的情况而定。</p>
    </div>
    <div class="listfree">
      <p class="text-tile">四、备考课程</p>
      <div class="list" style=" width: 350px;">
        <div class="flex-row">
          <div class="details">
            <img
              class="courses-img"
              src="https://staticfile.xlcwx.com/userfiles/201902/20190222152431.png"
              alt
            />
            <div class="courses-text">
              <p class="courses-con">
                自考-汉语言文学-本科-协
                议保障班
              </p>
              <div class="details" style="justify-content: space-between;">
                <el-button
                  size="mini"
                  style="padding:4px 7px;color:#FF7439; border:#FF7439 1px solid"
                >直播</el-button>
                <el-button
                  size="mini"
                  style="padding:4px 7px;color:#1B89FA; border:#1B89FA 1px solid"
                >点播</el-button>
                <span style="color:#F15817">¥ 7980</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-button class="list-but" round>去购买</el-button>
      <p class="list free-p">
        亲爱的18519860527同学，以上是新里程教育为你量身定制的学历提升规划方案，涉及了测试解析择校方面的众多内容，请仔细查阅。 我们衷心地希望我们的方案能为你的学历提升规划提供科学的参考，帮助你全面而客观地认识自己，让你清楚的知道你适合哪所学校，熟知申请学校和备考学校的要求，更好的完成自己的学业规划。我们相信，你是最棒的！相信你一定会成长为最优秀的自己，成为爸爸妈妈最大的骄傲！
        注：本方案中的内容最终解释权归远新里程教育所有，如有疑问，请咨询与你对接的学业规划师。
      </p>
    </div>
    <div class="but">
      <el-button class="butstart" type="primary" plain>保存PDF</el-button>
      <el-button class="butlast" type="primary">预约线下专业测评生成详细方案</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          school: '山东师范大学',
          professional: '汉语言文学',
          candidate: '山东师范大学',
          address: '山东省济南市'
        },
        {
          school: '山东师范大学',
          professional: '汉语言文学',
          candidate: '山东师范大学',
          address: '山东省济南市'
        },
        {
          school: '山东师范大学',
          professional: '汉语言文学',
          candidate: '山东师范大学',
          address: '山东省济南市'
        },
        {
          school: '山东师范大学',
          professional: '汉语言文学',
          candidate: '山东师范大学',
          address: '山东省济南市'
        }
      ]
    }
  }
}
</script>
<style scoped>
.box {
  border: 1px solid #cccccc;
  min-height: 690px;
}
.title {
  margin: auto;
  text-align: center;
  color: rgba(51, 51, 51, 1);
}
.tab {
  margin: 0 0 0 80px;
}
.tab td {
  border: 1px solid #cccccc;
  margin: 0;
  height: 56px;
  line-height: 56px;
  text-align: center;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
}
.td-bg {
  width: 100px;
  background-color: #f0f0f0;
}
.td-long {
  width: 200px;
}
.text-tile {
  font-size: 20px;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  margin: 50px 0 30px 40px;
}
.list {
  margin: 0 80px;
}
.tab-listwo {
  width: 722px;
  border: 1px solid #cccccc;
}
.tab-listwo > td {
  border: 1px solid #cccccc;
}
.listtwo-p {
  color: #0b5fa8;
  font-size: 14px;
}
.text {
  color: #333333;
  font-size: 14px;
  line-height: 24px;
}
.content-title {
  margin-top: 50px;
  font-size: 18px;
  color: rgba(51, 51, 51, 1);
  line-height: 34px;
}
.details {
  display: flex;
  flex-direction: row;
}
.courses-text {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.courses-img {
  height: 80px;
}
.courses-con {
  margin: 0;
  width: 181px;
  height: 40px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}
.flex-row {
  display: flex;
  flex-direction: row;
}

.list-but {
  width: 140px;
  height: 40px;
  color: #0b5fa8;
  border: #0b5fa8 1px solid;
  float: right;
  position: absolute;
  right: 135px;
  margin-top: -80px;
}
.free-p {
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
  margin-top: 52px;
}
.but {
  margin: 47px 0 57px;
  display: flex;
  justify-content: center;
}
.butstart {
  border-color: #0b5fa8;
  color: #0b5fa8;
}
.butlast {
  background-color: #0b5fa8;
}
</style>
