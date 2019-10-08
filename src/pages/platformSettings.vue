<template>
  <div class="platformSettings-container">
    <header class="clearfix">
      <span class="fl">平台设置</span>
    </header>
    <section>
      <div>
        <table>
          <tr><td>基础设置</td></tr>
        <tr>
          <td><img src="../assets/images/u1.png"/></td>
          <td><img src="../assets/images/u1.png"/></td>
          <td><img src="../assets/images/u1.png"/></td>
          <td><img src="../assets/images/u1.png"/></td>
          <td><img src="../assets/images/u1.png"/></td>
        </tr>
        <tr>
          <td>子系统</td>
          <td>组态软件</td>
          <td>设备管理</td>
          <td>故障类别</td>
          <td>服务项目</td>
        </tr>
        </table>
        <table>
          <tr><td>工单设置</td></tr>
          <tr>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
          </tr>
          <tr>
            <td>工单类型</td>
            <td>自定义工单字段</td>
            <td>自定义工单模板</td>
            <td>服务模式</td>
            <td>服务流程与规范</td>
            <td>服务自动化</td>
            <td>工作时间</td>
          </tr>
        </table>
        <table>
          <tr><td>报警设置</td></tr>
          <tr>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
          </tr>
          <tr>
            <td>报警分类</td>
            <td>报警通道</td>
            <td>报道监视</td>
          </tr>
        </table>
        <table>
          <tr><td>备件设置</td></tr>
          <tr>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
            <td><img src="../assets/images/u1.png"/></td>
          </tr>
          <tr>
            <td>仓库设置</td>
            <td>入库类别</td>
            <td>出库类别</td>
            <td>备件分类</td>
            <td>备件项目</td>
          </tr>
        </table>
        <table>
          <tr><td>组织人员</td></tr>
          <tr>
            <td><router-link to="/organizers/serviceOutlets"><img src="../assets/images/u1.png"/></router-link></td>
            <td><router-link to="/organizers/customRoleFields"><img src="../assets/images/u1.png"/></router-link></td>
            <td><router-link to="/organizers/roleManagement"><img src="../assets/images/u1.png"/></router-link></td>
            <td><router-link to="/organizers/personnelManagement"><img src="../assets/images/u1.png"/></router-link></td>
          </tr>
          <tr>
            <td>服务网点</td>
            <td>自定义角色字段</td>
            <td>角色管理</td>
            <td>人员管理</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
  .platformSettings-container {
    padding: 53px 0 0 55px;
    width: 1175px;
    height: 2000px;
    background-color: #fff;
    font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    header {
      padding: 20px 15px 20px 20px;
      border-bottom: 1px solid #f2f2f2;
      span {
        font-size: 18px;
      }
    }
    section {
      padding-left: 38px;
      div {
        table {
          margin-bottom: 20px;
        }
        table tr:first-child td {
          font-weight: 700;
          font-style: normal;
          font-size: 14px;
        }
        td {
          width: 100px;
          padding:5px 58px 5px 0px;
          /*border: 1px solid black;*/
        }
      }
    }
  }
  .img {
    background-image: url("../assets/images/u1.png");
  }
</style>
