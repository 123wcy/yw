<template>
    <div class="allorder-container">
        <div class="title">
            <h4>待协助工单</h4>
        </div>
        <orderTable />
    </div>
</template>

<script>
import orderTable from './orderTable.vue'
export default {
    components: {
        orderTable,
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

