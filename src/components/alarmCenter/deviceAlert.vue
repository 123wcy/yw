<template>
  <div class="data-container">
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
      <tr v-for="(data,index) in dataData">
        <td>{{data.alertdata}}</td>
        <td>{{data.alertProject}}</td>
        <td>{{data.alertSystem}}</td>
        <td class="grade">{{data.serviceLevel}}</td>
        <td>{{data.alertTime}}</td>
        <td  style="width: 100px">{{data.receptionist}}</td>
        <td><button>{{data.alertStatus}}</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataData: [
          {
            alertdata:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertdata:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertdata:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertdata:'02583654480',
            alertProject:'南京出入境检疫局',
            alertSystem:'电梯系统',
            serviceLevel:'一级',
            alertTime:'2017-12-04  09:19:30',
            receptionist:'小红',
            alertStatus:'电话处理',
          },
          {
            alertdata:'02583654480',
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
  .data-container {
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
