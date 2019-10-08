<template>
    <div class="tabs-container">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="处理过程" name="first">
                <HandleProcess />
            </el-tab-pane>
            <el-tab-pane label="审批信息" name="second">审批信息</el-tab-pane>
            <el-tab-pane label="回单信息" name="third">回单信息</el-tab-pane>
            <el-tab-pane label="收费清单" name="fourth">收费清单</el-tab-pane>
            <el-tab-pane label="客户评价" name="fifth">客户评价</el-tab-pane>
            <el-tab-pane label="项目信息" name="sixth">
				<HandleProjectDesc />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import HandleProcess from './handleProcess.vue'
import HandleProjectDesc from './handleProjectDesc.vue'
  export default {
    data() {
      return {
        activeName2: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
        HandleProcess,
		HandleProjectDesc,
    }
  }
</script>
<style lang="less" scoped>
.tabs-container {
    margin: 20px 0 0 20px;
}
</style>

