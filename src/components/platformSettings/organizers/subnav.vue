<template>
    <div class="subnav">
        <div class="title">
            <span>组织人员</span>
        </div>
        <ul>
            <router-link to="/organizers/serviceOutlets"><li>服务网点</li></router-link>
            <router-link to="/organizers/customRoleFields"><li>自定义角色字段</li></router-link>
            <router-link to="/organizers/roleManagement"><li>角色管理</li></router-link>
            <router-link to="/organizers/personnelManagement"><li>人员管理</li></router-link>
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


