<template>
    <div class="home-container">
        <h3 class="title">首页</h3>
        <div class="main clearfix">
            <div class="left fl">
                <div class="dashboard">
                    <p>仪表盘</p>
                    <dashboard />
                </div>
                <div class="quick">
                    <p>快捷操作</p>
                    <quickOperation />
                </div>
            </div>
            <div class="right fl">
                <p>工单动态</p>
                <workOrder />
            </div>
        </div>
    </div>
</template>

<script>
import dashboard from '../components/home/dashboard.vue'
import quickOperation from '../components/home/quickOperation.vue'
import workOrder from '../components/home/workOrder.vue'
export default {
    components: {
        dashboard,
        quickOperation,
        workOrder,
    }
}
</script>

<style lang="less" scoped>
.home-container {
    padding: 53px 0 0 55px;
    .title {
        box-sizing: border-box;
        width: 1178px;
        height: 47px;
        font-size: 18px;
        font-weight: normal;
        background-color: #fff;
        line-height: 47px;
        padding-left: 26px;
        margin: 16px 0 16px 16px;
    }
    .main {
        margin-left: 16px;
        .left {
            width: 750px;
            .dashboard {
                background-color: #fff;
                height: 180px;
                p {
                    font-size: 15px;
                    padding: 10px;
                }
            }
            .quick {
                background-color: #fff;
                height: 400px;
                margin-top: 16px;
                p {
                    font-size: 15px;
                    padding: 10px;
                }
            }
        }
        .right {
            background-color: #fff;
            height: 590px;
            width: 411px;
            margin-left: 16px;
            p {
                font-size: 15px;
                padding: 10px;
            }
        }
    }
}
</style>
