<template>
    <div class="workorder-container">
        <ul>
            <li>
                <div class="type clearfix">
                    <span class="fl">巡检（上门服务）</span>
                    <span class="tag fr">待回单</span>
                </div>
                <p class="example clearfix">
                    <span class="fl">[示例]电视 &nbsp;&nbsp;CN-231</span>
                    <i class="fr">11-17 17:11</i>
                </p>
            </li>
            <li>
                <div class="type clearfix">
                    <span class="fl">维修（上门服务）</span>
                    <span class="tag fr">待服务</span>
                </div>
                <p class="example clearfix">
                    <span class="fl">[示例]电视 &nbsp;&nbsp;CN-231</span>
                    <i class="fr">11-17 09:57</i>
                </p>
            </li>
            <li>
                <div class="type clearfix">
                    <span class="fl">巡检（远程调试）</span>
                    <span class="tag fr">待质检</span>
                </div>
                <p class="example clearfix">
                    <span class="fl">[示例]电视 &nbsp;&nbsp;CN-231</span>
                    <i class="fr">11-17 17:11</i>
                </p>
            </li>
            <li>
                <div class="type clearfix">
                    <span class="fl">巡检（上门服务）</span>
                    <span class="tag fr">待关闭</span>
                </div>
                <p class="example clearfix">
                    <span class="fl">[示例]电视 &nbsp;&nbsp;CN-231</span>
                    <i class="fr">11-17 09:52</i>
                </p>
            </li>
            <li>
                <div class="type clearfix">
                    <span class="fl">维修（上门服务）</span>
                    <span class="tag fr" background-color="#f00">待派工</span>
                </div>
                <p class="example clearfix">
                    <span class="fl">[示例]电视 &nbsp;&nbsp;CN-231</span>
                    <i class="fr">11-16 10:40</i>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    
</script>

<style lang="less" scoped>
.workorder-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    ul li {
        border-bottom: 1px solid #f2f2f2;
        margin-top: 10px;
        .type {
            span {
                font-size: 16px;
                line-height: 32px;
            }
        }
        .example {
            margin-bottom: 10px;
            span,i {
                color: #999;
                font-size: 16px;
            }
        }
    }
    .tag {
        background-color: #89c4f4;
        color: #fff;
        border-radius: 4px;
        width: 55px;
        height: 25px;
        padding: 0;
        line-height: 25px !important;
        margin-top: 3px;
        text-align: center;
        font-size: 14px !important;
    } 

}
</style>

