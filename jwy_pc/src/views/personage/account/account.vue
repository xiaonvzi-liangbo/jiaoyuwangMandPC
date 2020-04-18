<template>
  <div>
    <div class="title">账号信息</div>
    <hr />
    <p class="lit">账号信息</p>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="demo-ruleForm">
      <el-form-item label="姓名：" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别：" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="籍贯：" prop="selectedOptions">
        <el-cascader
          size="large"
          :options="options"
          v-model="form.selectedOptions"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="学历：">
        <el-select v-model="form.region" placeholder="请选择学历">
          <el-option label="初中及以下" value="1"></el-option>
          <el-option label="高中" value="2"></el-option>
          <el-option label="专科在读" value="3"></el-option>
          <el-option label="专科" value="4"></el-option>
          <el-option label="本科" value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="专业：">
        <el-input v-model="form.professional"></el-input>
      </el-form-item>
    </el-form>

    <p class="lit">职业信息</p>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="所在地：">
        <el-cascader
          size="large"
          :options="options"
          v-model="form.selectedOptions2"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="职位：">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
    </el-form>
    <p class="lit">邮箱信息</p>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="80px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="email"
        label="邮箱："
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
    </el-form>
    <el-button class="save-btn" type="primary" @click="postuser">保存设置</el-button>
  </div>
</template>
<style scoped>
.title {
  height: 34px;
  font-size: 22px;
  color: rgba(51, 51, 51, 1);
  line-height: 34px;
}
.lit {
  line-height: 16px;
  padding-left: 6px;
  margin-top: 30px;
  font-size: 16px;
  color: rgba(51, 51, 51, 1);
  border-left: 3px solid #0b5fa8;
}
.el-form {
  width: 50%;
}
.save-btn {
  background-color: #0b5fa8;
  border: none;
  margin: 40px 0 0 80px;
}
.el-input input,.el-select select{
  width: 400px !important;
}
</style>

<script>
import { provinceAndCityData } from 'element-china-area-data'
import { getUser } from '@/utile/auth.js'
import request from '@/utile/request.js'
export default {
  data () {
    return {
      form: {
        name: '', // 姓名
        sex: '', // 性别
        region: '', // 学历
        professional: '', // 专业
        selectedOptions: [], // 籍贯
        selectedOptions2: [], // 所在地
        position: '' // 职位
      },

      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
      },
      options: provinceAndCityData,

      dynamicValidateForm: {
        email: ''
      },
      userdata: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleChange () {
      console.log(this.form.selectedOptions)
    },
    getuser () {
      request({
        url: '/eduWeb/register/findById',
        method: 'post',
        data: {
          userName: getUser()
        }
      }).then(res => {
        console.log(res.data.encoded)
        this.userdata = res.data
        this.form.name = res.data.nickName // 姓名
        this.form.sex = res.data.userSex // 性别
        this.form.professional = res.data.major // 专业
        this.form.position = res.data.jobPost // 职位
        this.form.selectedOptions = res.data.encoded.split(',') // 籍贯
        this.form.selectedOptions2 = res.data.jobEncoded.split(',') // 地址
        this.dynamicValidateForm.email = res.data.mail // 邮箱
      })
    },
    getregion () {
      request({
        url: '/eduWeb/register/findByIdForm',
        method: 'post',
        data: {
          userName: getUser()
        }
      }).then(res => {
        console.log(res.data.encoded)

        this.form.region = res.data.nowEducation // 学历
      })
    },
    postuser () {
      request({
        url: '/eduWeb/register/updataByData',
        method: 'post',
        data: {
          userName: getUser(),
          userSex: this.form.sex,
          userZone:
            this.form.selectedOptions[0] + ',' + this.form.selectedOptions[1],
          nowEducation: this.form.region,
          major: this.form.professional,
          jobEncoded:
            this.form.selectedOptions2[0] + ',' + this.form.selectedOptions2[1],
          jobPost: this.form.position,
          mail: this.dynamicValidateForm.email
        }
      })
    }
  },
  mounted () {
    this.getuser()
    this.getregion()
    // 动态追加一个script
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://wp.qiye.qq.com/qidian/2852173998/d68c10a9392a31fd1eccf18dacc8ba70'
    )
    recaptchaScript.setAttribute(
      'id',
      'qd2852173998d68c10a9392a31fd1eccf18daasdfasdfas'
    )
    document.head.appendChild(recaptchaScript)
  }
}
</script>
