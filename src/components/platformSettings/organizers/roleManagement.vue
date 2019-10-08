<template>
  <div class="roleManagement-container">
    <div class="title">
      <h4>角色管理</h4>
    </div>
    <button>新增角色</button>
    <div class="filter ">
      <p class="desc">角色是用户权限的集合。您可以添加更多的角色，赋予您的员工。</p>
    </div>
    <roleTable :table="tableData"/>
  </div>
</template>

<script>
  import roleTable from './roleTable'
  export default {
    data() {
      return {
        tableData:[]
      }
    },
    components: {
      roleTable,
    },
    created() {
      this.findAdmiss()
    },
    methods: {
      findAdmiss() {
        let params = { pageSize: 8, offset:1, processName:'接单' }
        params = this.$qs.stringify(params)
        this.$http({
          url: 'omm/restActivitiController/findTodoTasks',
          data: params
        }).then( res => {
          if( res.status == 200 ) {
          this.tableData = res.data.result
        }
      } )
      }
    }
  }
</script>

<style lang="less" scoped>
  .title {
    font-size: 22px;
    padding-bottom: 10px;
    width: 80%;
    float: left;
    h4 {
      font-weight: normal;
    }
  }
  button {
    outline: none;
    width: 80px;
    height: 26px;
    border: none;
    border-radius: 5px;
    background-color: #f2f2f2;
    color: #666666;
    font-weight: bold;
  }
  .filter {
    width: 1140px;
    padding: 15px 0 0 20px;
    .desc {
      font-size: 14px;
      color: #999;
      width: 100%;
      float: left;
    }

  }
</style>

