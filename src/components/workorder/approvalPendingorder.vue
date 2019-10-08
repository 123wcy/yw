<template>
    <div class="allorder-container">
        <div class="title">
                <h4>待审批工单</h4>
        </div>
        <orderTable :table="tableData"/>
    </div>
</template>

<script>
import orderTable from './orderTable.vue'
export default {
    data() {
        return {
            tableData: []
        }
    },
    created() {
        this.findPengding()
    },
    components: {
        orderTable,
    },
    methods: {
        findPengding() {
            let params = { pageSize: 8,offset:1,processName: '审核'}
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
    border-bottom: 1px solid #ddd;
    h4 {
        font-weight: normal;
    }
}
</style>

