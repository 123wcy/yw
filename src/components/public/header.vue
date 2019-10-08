<template>
    <div class="header">
        <h1 class="title">
            <span>智慧运维云平台</span>
        </h1>
        <h2 class="subtitle">
            <span>东大智能化系统有限公司</span>
        </h2>
        
        <div class="user">
            <ul>
                <li>
                    消息通知
                </li>
                <li>
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li>
                    <el-dropdown>
                    <span class="el-dropdown-link">
                        ITSS<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>事件管理</el-dropdown-item>
                        <el-dropdown-item>问题管理</el-dropdown-item>
                        <el-dropdown-item>变更管理</el-dropdown-item>
                        <el-dropdown-item>发布管理</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.header {
    z-index: 9999;
    width: 100%;
    height: 53px;
    background-color: #3e4659;
    position: fixed;
    .title {
        display: inline-block;
        font-size: 22px;
        font-weight: 700;
        color: #fff;
        line-height: 53px;
        padding-left: 52px;
        background: url('../../assets/images/logo.png') no-repeat 14px 8px;
        background-size: 30px 30px;
    }
    .subtitle {
        display: inline-block;
        line-height: 53px;
        font-size: 16px;
        font-weight: normal;
        color: #fff;
        padding-left: 80px;
        background: url('../../assets/images/icon.png') no-repeat 50px;
    }
    .user {
        float: right;
        color: #fff;
        font-size: 15px;
        padding-right: 40px;
        ul {
           li {
               float: left;
               line-height: 53px;
               margin: 0 20px;
               cursor: pointer;
               .el-dropdown-link {
                   color: #fff;
               }
           } 
        }
    }
}
</style>


