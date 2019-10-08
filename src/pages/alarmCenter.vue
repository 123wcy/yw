<template>
  <div class="alarmCenter-container">
    <header class="clearfix">
      <span class="fl">报警中心</span>
    </header>
    <div class="filter ">
      <p class="desc">报警中心处理人工电话报警以及运行监测自动报警。</p>
      <i class="icon-filter left"></i>
      <input type="text" placeholder="筛选">
    </div>
    <div id="bottom">
     <el-tabs v-model="activeName" @tab-click="handleClick" style="width: 1012px">
        <el-tab-pane label="数据报警" name="first"><dataWarning/></el-tab-pane>
        <el-tab-pane label="电话报警" name="second"><phoneAlert/></el-tab-pane>
        <el-tab-pane label="设备报警" name="third"><deviceAlert/></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import dataWarning from '../components/alarmCenter/dataWarning'
import phoneAlert from '../components/alarmCenter/phoneAlert'
import deviceAlert from '../components/alarmCenter/deviceAlert'
    export default {
        components:{
          dataWarning,
          phoneAlert,
          deviceAlert,
        },
      data() {
        return {
          activeName:'first'
        };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>
export default {
<style lang="less" scoped>
.alarmCenter-container {
  padding: 53px 0 0 55px;
  width: 1175px;
  height: 2000px;
  background-color: #fff;
  header {
    padding: 20px 15px 20px 20px;
    border-bottom: 1px solid #f2f2f2;
    span {
      font-size: 18px;
    }
  }
  .filter {
    width: 1140px;
    padding: 15px 0 0 20px;
  .desc {
    font-size: 14px;
    color: #999;
    width: 80%;
    float: left;
  }
    input {
      outline: none;
      width: 73px;
      height: 26px;
      border: 1px solid #169bd5;
      border-radius: 5px;
      padding-left:25px;
      &::-webkit-input-placeholder{
        color:#ccc;
      }
      &::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#ccc;
      }
      &:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#ccc;
      }
      &:-ms-input-placeholder{  /* Internet Explorer 10-11 */
        color:#ccc;
      }
    }
    .left {
      color: #169bd5;
      outline: none;
      width: 17px;
      height: 17px;
      right: -20px;
      position: relative;
    }
  }
  #bottom {
    width: 1140px;
    padding: 15px 0 0 20px;
  }
  }
</style>
