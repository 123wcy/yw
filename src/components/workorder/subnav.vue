<template>
    <div class="subnav">
        <div class="title">
            <span>工单视图</span>
        </div>
        <ul>
            <router-link to="/workorder/allorder"><li>所有工单</li></router-link>
            <router-link to="/workorder/myorder"><li>我创建的工单</li></router-link>
            <router-link to="/workorder/pendingOrder"><li>待审批工单</li></router-link>
            <router-link to="/workorder/admissOrder"><li>待受理工单</li></router-link>
            <router-link to="/workorder/treatedOrder"><li>待处理工单</li></router-link>
            <!-- <router-link to="/workorder/assistedOrder"><li>待协助工单</li></router-link> -->
            <router-link to="/workorder/returnOrder"><li>待回访工单</li></router-link>
            <router-link to="/workorder/closedOrder"><li>已关闭工单</li></router-link>
            <router-link to="/workorder/canceledOrder"><li>已取消工单</li></router-link>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.subnav {
    width: 240px;
    height: 1000px;
    background-color:rgba(233, 234, 238, 1);
    box-sizing: border-box;
    .title {
        font-size: 14px;
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }
    ul a {
        display: block;
        &:hover {
            background-color: #fff;
        }
    }
    ul li {
        padding: 10px;
        padding-left: 20px;
    }
    
}
</style>


