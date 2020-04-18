<template>
  <el-container>
    <el-header style="height:140px;" class="heards">
      <hearders></hearders>
    </el-header>
    <el-main class="elmain" id="scrTop">
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <bottoms></bottoms>
    </el-main>
  </el-container>
</template>
<script>
import hearders from './hearders/hearders'
import bottoms from '../../components/bottoms/bottoms'
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components: {
    hearders,
    bottoms
  },
  methods: {
    updated () {

    }
  },
  watch: {
    '$route': function (to, from) {
      document.getElementById('scrTop').scrollTop = 0
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style scoped>
  .el-header{
    padding: 0;
  }
  .el-main{
    padding: 0;
  }
  .heards{
    border-bottom:1px solid #E9E8E8;
  }
  .elmain::-webkit-scrollbar {
    width: 4px;
  }
  .elmain::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(87,116,231,0.2);
    background: rgba(87,116,231,0.2);
    }
  .elmain::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(87,116,231,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
</style>
