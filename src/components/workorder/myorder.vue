<template>
    <div class="allorder-container">
        <div class="title">
            <h4>我创建的工单</h4>
        </div>
        <orderTable />
    </div>
</template>

<script>
import orderTable from './orderTable.vue'
export default {
    components: {
        orderTable,
    },
    created() {
        this.findMyorder()
    },
    methods: {
        findMyorder() {
            let params = {
                pageSize: 8,
                offset: 1
            }
            params = this.$qs.stringify(params)
            this.$http({
                url: 'omm/restActivitiController/findMyCreateOrder',
                data: params
            }).then( response => {
                console.log(response.data)
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

