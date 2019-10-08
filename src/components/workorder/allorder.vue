<template>
    <div class="allorder-container">
        <div class="title">
            <h4>所有工单</h4>
        </div>
        <orderTable :table="allOrder"/>
    </div>
</template>

<script>
import orderTable from './orderTable.vue'
export default {
    data() {
        return {
            allOrder: []
        }
    },
    components: {
        orderTable,
    },
    created() {
        this.findAllOrder()
    },
    methods: {
        findAllOrder() {
            let params = {
                pageSize: 8,
                offset: 1
            }
            params = this.$qs.stringify(params)
            this.$http({
                url: 'omm/restActivitiController/findMyCreateOrder',
                data: params
            }).then( response => {
                if ( response.status == 200 ) {
                    this.allOrder = response.data.result
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

