<template>
    <div class="basic">
        <h4>基本信息</h4>
        <div class="form">
            <ul>
                <li>
                    <span>项目名称：</span>
                    <input type="text" value="南京九华山隧道">
                </li>
                <li>
                    <span>项目类型：</span>
                    <input type="text" value="外接维保项目">
                </li>
                <li>
                    <span>项目状态：</span>
                    <input type="text" value="进行中">
                </li>
                <li>
                    <span>开始日期：</span>
                    <input type="text" value="2016-01-01">
                </li>
                <li>
                    <span>服务级别：</span>
                    <input type="text" value="一级">
                </li>
                <li>
                    <span>联系方式：</span>
                    <input type="text" value="15144654875">
                </li>
                <li>
                    <span>项目地址：</span>
                    <input type="text" style="width:229px;" value="苏南南京市中山东路256号">
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
.basic {
    padding: 10px 20px 0 10px;
    h4 {
        font-size: 14px;
    }
    ul {
        margin: 10px 0 0 20px;
        overflow: hidden;
    }
    ul li {
        float: left;
        width: 33.33%;
        margin-bottom: 10px;
        span {
            font-size: 13px;
        }
        input {
            width: 143px;
            height: 28px;
            outline: none;
            border: 1px solid #ddd;
            box-sizing: border-box;
            border-radius: 4px;
            padding-left: 6px;
        }
    }
}
</style>

