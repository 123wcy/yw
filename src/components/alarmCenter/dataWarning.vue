<template>
  <div class="data-container">
    <table>
      <tr class="blue">
      <td>报警名称</td>
      <td>报警项目</td>
      <td>报警设备</td>
      <td class="grade">等级</td>
      <td>报警时间</td>
      <td>处理时间</td>
      <td style="width: 100px;">处理人</td>
      <td>报警处理</td>
    </tr>
      <tr v-for="(data,index) in dataData" style="margin-bottom: 40px">
        <td>{{data.alertName}}</td>
        <td>{{data.alertProject}}</td>
        <td>{{data.alertEquipment}}</td>
        <td class="grade">{{data.grade}}</td>
        <td>{{data.alertTime}}</td>
        <td>{{data.processTime}}</td>
        <td  style="width: 100px">{{data.processor}}</td>
        <td><button>{{data.alertProcess}}</button></td>
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
            alertName:'水泵轮换报警',
            alertProject:'新城大厦二期项目',
            alertEquipment:'3#生活水泵房',
            grade:'二级',
            alertTime:'2017-12-04  09:19:30',
            processTime:'2017-12-04  09:19:30',
            processor:'小海',
            alertProcess:'待处理',
          },
          {
            alertName:'水泵轮换报警',
            alertProject:'新城大厦二期项目',
            alertEquipment:'3#生活水泵房',
            grade:'二级',
            alertTime:'2017-12-04  09:19:30',
            processTime:'2017-12-04  09:19:30',
            processor:'小海',
            alertProcess:'待处理',
          },
          {
            alertName:'水泵轮换报警',
            alertProject:'新城大厦二期项目',
            alertEquipment:'3#生活水泵房',
            grade:'二级',
            alertTime:'2017-12-04  09:19:30',
            processTime:'2017-12-04  09:19:30',
            processor:'小海',
            alertProcess:'待处理',
          },
          {
            alertName:'水泵轮换报警',
            alertProject:'新城大厦二期项目',
            alertEquipment:'3#生活水泵房',
            grade:'二级',
            alertTime:'2017-12-04  09:19:30',
            processTime:'2017-12-04  09:19:30',
            processor:'小海',
            alertProcess:'待处理',
          },
          {
            alertName:'水泵轮换报警',
            alertProject:'新城大厦二期项目',
            alertEquipment:'3#生活水泵房',
            grade:'二级',
            alertTime:'2017-12-04  09:19:30',
            processTime:'2017-12-04  09:19:30',
            processor:'小海',
            alertProcess:'待处理',
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
      width: 135px;
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
      width: 50px;
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
