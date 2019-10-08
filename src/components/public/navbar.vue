<template>
    <div class="navbar">
        <ul>
            <li>
                <el-tooltip class="item" effect="dark" content="首页" placement="right">
                    <router-link to="/home">
                        <el-button><i class="iconfont icon-home"></i></el-button>
                    </router-link>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="运行监控" placement="right">
                    <el-button><i class="iconfont icon-eyes"></i></el-button>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="报警中心" placement="right">
                    <router-link to="/alarmCenter">
                        <el-button><i class="iconfont icon-warning"></i></el-button>
                    </router-link>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="工单系统" placement="right">
                    <router-link to="/workorder">
                        <el-button><i class="iconfont icon-paper"></i></el-button>
                    </router-link>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="知识库" placement="right">
                    <el-button><i class="iconfont icon-book"></i></el-button>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="应急预案" placement="right">
                    <el-button><i class="iconfont icon-yingjiyuan"></i></el-button>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="项目档案" placement="right">
                    <router-link to="/project">
                        <el-button><i class="iconfont icon-cube"></i></el-button>
                    </router-link>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="备件管理" placement="right">
                    <el-button><i class="iconfont icon-pintu"></i></el-button>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="厂商管理" placement="right">
                    <el-button><i class="iconfont icon-userinfo1"></i></el-button>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="数据统计" placement="right">
                    <el-button><i class="iconfont icon-3502shuju"></i></el-button>
                </el-tooltip>
            </li>
            <li>
                <el-tooltip class="item" effect="dark" content="系统设置" placement="right">
                  <router-link to="/platformSettings">
                    <el-button><i class="iconfont icon-set"></i></el-button>
                  </router-link>
                </el-tooltip>

            </li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
    .navbar {
        width: 55px;
        height: 100%;
        position: fixed;
        background-color:rgba(48, 56, 75, 1);
        top: 53px;
        left: 0;
        ul {
            li {
                height: 48px;
                width: 100%;
                text-align: center;
                line-height: 48px;
                button {
                    width: 100%;
                    height: 48px;
                    background: transparent;
                    border: none;
                    padding: 0;
                }
                i {
                    font-size: 22px;
                    color: #ddd;
                }
            }
        }
    }
</style>

