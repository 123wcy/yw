<template>
    <div class="project-container">
        <header class="clearfix">
            <span class="fl">项目档案</span>
            <div class="search fr">
                <input type="text" placeholder="请输入项目名/客户名">
                <button><i class="el-icon-search"></i></button>
            </div>
        </header>
        <p class="desc">项目档案全面管理工程项目信息以及子系统、设备配置，并同步相关运维记录。</p>
        <projectTable />
    </div>
</template>

<script>
import projectTable from '../components/project/projectTable.vue'
export default {
    components: {
        projectTable,
    }
}
</script>

<style lang="less" scoped>
.project-container {
    padding: 53px 0 0 55px;
    width: 1175px;
    height: 2000px;
    background-color: #fff;
    header {
        padding: 20px 15px 20px 20px;
        border-bottom: 1px solid #f2f2f2;
        span {
            font-size: 18px;
        }
        .search {
            width: 218px;
            height: 30px;
            input {
                outline: none;
                width: 82%;
                height: 26px;
                border: 1px solid #ccc;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                padding-left:6px;
                &::-webkit-input-placeholder{
                    color:#ccc;
                }
                &::-moz-placeholder{   /* Mozilla Firefox 19+ */
                    color:#ccc;
                }
                &:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
                    color:#ccc;
                }
                &:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
                    color:#ccc;
                }
            }
            button {
                color: #fff;
                border: none;
                outline: none;
                width: 14%;
                height: 28px;
                margin-left: -3px;
                background-color: #169bd5;
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
    }
    .desc {
        padding: 15px 0 0 20px;
        font-size: 14px;
        color: #999;
    }
}
</style>

