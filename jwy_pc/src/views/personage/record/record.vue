<template>
  <div>
    <div class="title">完善您的档案有助于规划师更精确的帮您规划方案哦~</div>
    <div v-show="shows">
      <div class="basic">
        <div>基本信息</div>
        <el-table :data="tableData" border style="width: 100%;margin-top:15px;">
          <el-table-column prop="userName" label="学生姓名" align="center"></el-table-column>
          <el-table-column prop="userSex" label="性别" align="center"></el-table-column>
          <el-table-column prop="userMobile" label="联系方式" align="center"></el-table-column>
          <el-table-column prop="userZone" label="户籍" align="center"></el-table-column>
        </el-table>
      </div>
      <div class="basic">
        <div>学习情况</div>
        <el-table :data="learning" border style="width: 100%;margin-top:15px;">
          <el-table-column prop="nowEducation" label="目前学历" align="center"></el-table-column>
          <el-table-column prop="planEducation" label="需要提升层次" align="center"></el-table-column>
          <el-table-column prop="targetSchools" label="意向学校" align="center"></el-table-column>
        </el-table>
        <div class="compile" @click="bianji">编辑资料</div>
      </div>
    </div>
    <div v-show="!shows">
      <div class="basic">
        <div>基本信息</div>
        <el-table :data="tableData1" border style="width: 100%;margin-top:15px;">
          <el-table-column prop="nickName" label="学生姓名" align="center"></el-table-column>
          <el-table-column prop="userSex" label="性别" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.userSex" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.value"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="userMobile" label="联系方式" align="center"></el-table-column>
          <el-table-column prop="userZone" label="户籍" align="center">
            <template>
              <el-cascader size="large" :options="province" v-model="code" @change="handleChange"></el-cascader>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="basic">
        <div>学习情况</div>
        <el-table :data="learning1" border style="width: 100%;margin-top:15px;">
          <el-table-column prop="nowEducation" label="目前学历" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.nowEducation" placeholder="请选择">
                <el-option
                  v-for="item in education"
                  :key="item.label"
                  :label="item.value"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="planEducation" label="需要提升层次" align="center">
            <template slot-scope="scope">
              <el-select v-model="scope.row.planEducation" placeholder="请选择">
                <el-option
                  v-for="item in level"
                  :key="item.label"
                  :label="item.value"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="targetSchools" label="意向学校" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.targetSchools"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <div class="compiles" @click="submit">保存资料</div>
      </div>
    </div>
  </div>
</template>
<script>
import { provinceAndCityData, CodeToText } from 'element-china-area-data'
import request from '@/utile/request.js'
import { getUser } from '@/utile/auth.js'
export default {
  name: 'record',
  data () {
    return {
      tableData: [],
      learning: [],
      tableData1: [],
      learning1: [],
      options: [{ label: '0', value: '男' }, { label: '1', value: '女' }],
      code: [],
      province: provinceAndCityData,
      shows: true,
      selectedOptions: [],
      education: [
        { label: '1', value: '初中及以下' },
        { label: '2', value: '高中' },
        { label: '3', value: '专科在读' },
        { label: '4', value: '专科' },
        { label: '5', value: '本科' }
      ],
      level: [
        { label: '1', value: '升专科' },
        { label: '2', value: '升本科' },
        { label: '3', value: '研究生' }
      ],
      learn: ''
    }
  },
  methods: {
    handleChange (value) {
      let a = CodeToText[value[0]]
      let b = CodeToText[value[1]]
      this.tableData1[0].userZone = a + b
    },
    submit () {
      let that = this
      that.tableData1.encoded = that.code.join()
      request({
        url: '/eduWeb/register/updataByData',
        method: 'post',
        data: {
          userName: getUser(),
          userSex: that.tableData1[0].userSex,
          userZone: that.tableData1[0].userZone,
          nowEducation: that.learning1[0].nowEducation,
          planEducation: that.learning1[0].planEducation,
          targetSchools: that.learning1[0].targetSchools,
          encoded: that.tableData1.encoded
        }
      }).then(res => {
        if (res.code === 200) {
          that.$message({
            message: '修改成功！',
            type: 'success'
          })
          that.getData()
          that.getLearning()
          that.shows = true
        } else {
          that.$message.error('修改失败，请重试！')
        }
      })
    },
    // 编辑资料点击事件
    bianji () {
      this.shows = false
      this.code = this.tableData[0].encoded.split(',')
      this.tableData1 = this.tableData
      this.learning1 = this.learning
    },
    // 获取基本信息
    getData () {
      let that = this
      request({
        url: '/eduWeb/register/findById',
        method: 'post',
        data: {
          userName: getUser()
        }
      }).then(res => {
        that.tableData = []
        that.tableData.push(res.data)
      })
    },
    // 获取学习情况
    getLearning () {
      let that = this
      request({
        url: '/eduWeb/register/findByIdForm',
        method: 'POST',
        data: {
          userName: getUser()
        }
      }).then(res => {
        that.learning = []
        if (res.data != null) {
          console.log('564')
          that.learning.push(res.data)
        } else {
          that.learning = [
            {
              nowEducation: '  目前学历',
              planEducation: ' 需要提升层次',
              targetSchools: ' 意向学校'
            }
          ]
        }
      })
    }
  },
  mounted () {
    this.getData()
    this.getLearning()
  }
}
</script>
<style scoped>
.title {
  text-align: center;
  font-size: 24px;
}
.basic {
  margin-top: 40px;
}
.compile {
  width: 300px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  margin: auto;
  color: #0b5fa8;
  border: 1px solid #0b5fa8;
  margin-top: 100px;
  cursor: pointer;
  border-radius: 4px;
}
.compiles {
  width: 300px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  margin: auto;
  color: #0b5fa8;
  border: 1px solid #0b5fa8;
  background-color: #0b5fa8;
  color: #fff;
  margin-top: 100px;
  cursor: pointer;
  border-radius: 4px;
}
.compile:hover,
.compiles:hover {
  background-color: #2b97f1;
  color: #fff;
}
.basic >>> .el-input__inner {
  border: 0px;
}
</style>
