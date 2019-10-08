<template>
    <div class="device-info">
        <h4>维修信息</h4>
        <ul>
            <li>
                <span>关联工单：</span>
                <table border="1">
                    <thead>
                        <tr>
                            <th>工单编号</th>
                            <th>设备</th>
                            <th>服务级别</th>
                            <th>服务网点</th>
                            <th>服务人员</th>
                            <th>工单状态</th>
                            <th>创建时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableData" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.device}}</td>
                            <td>{{item.serviceGarde}}</td>
                            <td>{{item.serviceNet}}</td>
                            <td>{{item.serviceMan}}</td>
                            <td>{{item.status}}</td>
                            <td>{{item.createTime}}</td>
                            <td><a href="javascript:;">查看</a></td>
                        </tr>
                    </tbody>
                </table>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: 'G20171113001',
                    device: '视频矩阵-180',
                    serviceGarde: '一级',
                    serviceNet: '本部',
                    serviceMan: '张三',
                    status: '已关闭',
                    createTime: '2017-11-11  16:53',
                },
                {
                    id: 'G20171113002',
                    device: '摄像头-HK8116',
                    serviceGarde: '一级',
                    serviceNet: '本部',
                    serviceMan: '李四',
                    status: '已关闭',
                    createTime: '2017-11-11  16:53',
                },
                {
                    id: 'G20171113003',
                    device: '摄像头-HK8116、视频分配器-F1',
                    serviceGarde: '一级',
                    serviceNet: '本部',
                    serviceMan: '李四',
                    status: '已关闭',
                    createTime: '2017-11-11  16:53',
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.device-info {
    padding: 10px 20px 0 10px;
    h4 {
        font-size: 14px;
    }
    ul {
        margin: 10px 0 0 20px;
        overflow: hidden;
    }
    ul li {
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
        table {
            width: 90%;
            margin-top: 10px;
            font-size: 13px;
            text-align: center;
            border: 1px solid #ddd;
            th {
                font-weight: normal; 
                background-color: #f2f2f2; 
                padding: 4px 0;                              
            }
            td {
                padding: 4px 0;
                a {
                    color: #0cf;
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>

