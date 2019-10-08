<template>
  <div class="table-container">
    <table>
      <tr id="title">
        <td>角色名称</td>
        <td>描述</td>
        <td>操作</td>
      </tr>
      <tr v-for="(role,index) in roleData">
        <td>{{role.name}}</td>
        <td class="white">{{role.description}}</td>
        <td><el-button type="primary" plain @click="updateItem(role)">修改</el-button>
          <el-button type="warning" plain @click="removeTodo(index)">删除</el-button>
        </td>
      </tr>
    </table>

    <el-dialog title="修改" :visible.sync="addFormVisible">
      <form class="form">
        <div class="input-container">
          <label for="name">信用报告类型:</label>
          <input type="text" name="name" v-model="form.name">
        </div>

        <div class="input-container">
          <label for="description">等级:</label>
          <input type="text" name="description" v-model="form.description">
        </div>

      </form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary"  v-if="isInsert">确 定</el-button>
        <el-button type="primary" @click="handleUpdate" v-if="isUpdate">修 改</el-button>
      </div>
    </el-dialog>

    <el-dialog title="增加" :visible.sync="addFormVisibleo">
      <form class="form">
        <div class="input-container">
          <label for="name">信用报告类型:</label>
          <input type="text" name="name" v-model="form.name">
        </div>

        <div class="input-container">
          <label for="description">等级:</label>
          <input type="text" name="description" v-model="form.description">
        </div>

      </form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisibleo = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd" v-if="isInsert">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        roleData:[
          {
            id:1,
            name:'系统管理员',
            description:'系统默认角色，拥有所有权限，该角色不能被更改或删除',
            operating:''
          },
          {
            id:2,
            name:'工程师',
            description:'技术工程师，派工对象'
          },
          {
            id:3,
            name:'主管',
            description:'运维部门主管，管理工程师日常工作，主要负责审批'
          },
          {
            id:4,
            name:'客服',
            description:'接警以及回访客服'
          },
          {
            id:5,
            name:'备件库管理员',
            description:'管理备件出库入库以及盘点'
          }
        ],
        dialogFormVisible: false,
        form: {
          name: '',
          description: '',
        },
        addFormVisible: false,
        addFormVisibleo: false,
        hasNoData: false,
        isUpdate: false,
        isInsert: true,
        formLabelWidth: '120px',
      }
    },
    mounted() {
      this.loadAll()

    },
    methods: {
      removeTodo: function (index) {
        this.roleData.splice(index, 1)
      },
      updateItem(role) {
        this.addFormVisible = true
        this.form = role
        this.isUpdate = true
        this.isInsert = false
      },
      //修改
      handleUpdate() {
        let formData = JSON.stringify(this.form)
        this.$http({
          url: 'history/update.action',
          method: 'post',
          data: formData
        }).then( res => {
          if( res.data.responseCode == 1 ) {
          // 弹出消息框
          this.$message( {
            message: '修改成功',
            type: 'success'
          } )
          this.getHistory()  // 重新获取数据
        }
      } ).catch( err => {
          this.hasNoData = true
        this.$message( {
          message: '修改失败',
          type: 'error'
        } )
      } )
        this.addFormVisible = false //关闭 dialog对话框
      },
      ///增加
      addItem() {
        //弹出dialog对话框
        this.addFormVisibleo = true
        this.isInsert = true
      },
      handleAdd() {
        this.form.userId = localStorage.getItem('id')
        delete this.form.id
        let formdata = JSON.stringify(this.form)
        // 提交新增
        this.$http({
          url: 'balance/insert.action',
          method: 'post',
          data: formdata
        }).then( res => {
          if( res.data.responseCode == 1 ) {
          // 弹出消息框
          this.$message( {
            message: '增加成功',
            type: 'success'
          } )
          this.getBalanceInfo()  // 重新获取数据
        }
      } ).catch( err => {
          this.hasNoData = true
        this.$message( {
          message: '添加失败',
          type: 'error'
        } )
      } )
        this.addFormVisibleo = false //关闭 dialog对话框
        for (const key in object) {
          if (object.hasOwnProperty(key)) {
            const element = object[key];

          }
        }
      },
    },
    computed: {
      tableData() {
        return this.table
      }
    },
    props: ['table'],
  }
</script>

<style lang="less" scoped>
  .table-container {
    width: 100%;
    overflow: hidden;
      #title td {
        font-size: 14px;
        font-weight: bolder;
        border-bottom: 1px solid #dadada;
      }
    tr td:first-child {
      width: 270px;
    }
    tr td:nth-child(2) {
      width: 520px;
    }
    tr td:nth-child(3) {
      width: 120px;
    }
    tr td {
      float: left;
      padding-top: 12px;
      padding-bottom: 8px;
      padding-left: 22px;
    }
    .el-button--primary.is-plain,.el-button--warning.is-plain {
      width: 35px;
      height: 20px;
      font-size: 12px;
      text-align: center;
      padding: 0;
      background-color: transparent;
    }
    .el-button--primary.is-plain {
      border:1px solid #ffcc33;
      color:#ffcc33;
      &:hover {
        background-color: #ffcc33;
        color: #fff;
      }
    }
    .el-button--warning.is-plain {
      border:1px solid #ff3300;
      color: #ff3300;
      &:hover {
        background-color: #ff3300;
        color: #fff;
      }
    }
  }
  .white {
    color: #999999;
  }
  @import "../../../assets/css/dialog.less";
</style>

