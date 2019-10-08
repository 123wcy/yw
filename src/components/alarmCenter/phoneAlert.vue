<template>
  <div class="phone-container">
    <table>
      <tr class="blue">
      <td>报警电话</td>
      <td>报警项目</td>
      <td>报警系统</td>
      <td class="grade">服务等级</td>
      <td>报警时间</td>
      <td style="width: 100px;">接警人</td>
      <td>报警状态</td>
    </tr>
      <tr v-for="(phone,index) in phoneData">
        <td>{{phone.alertPhone}}</td>
        <td>{{phone.alertProject}}</td>
        <td>{{phone.alertSystem}}</td>
        <td class="grade">{{phone.serviceLevel}}</td>
        <td>{{phone.alertTime}}</td>
        <td  style="width: 100px">{{phone.receptionist}}</td>
        <td><button>{{phone.alertStatus}}</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phoneData: [
          {
            alertPhone:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertPhone:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertPhone:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertPhone:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertPhone:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          }
        ]
      }
    },

  }
</script>

<style lang="less" scoped>
  .phone-container {
    width: 1012px;
    .blue {
      background-color: #169bd5;
      color: #FFF;
      font-weight: 700;
      width: 1012px;
    }
      td {
        padding: 11px 10px;
        width: 158px;
        cursor: pointer;
        text-align: center;
      }
    table {
      margin-top: 15px;
      tr:hover {
        background-color: rgba(0, 204, 255, 0.2);
      }
    }
    button {
      width: 63px;
      padding: 1px 5px;
      border: none;
      border-radius: 4px;
      background-color: #169bd5;
      color: #fff;
      font-weight: 500;
    }
    .grade {
      width: 80px;
    }
  }
</style>
