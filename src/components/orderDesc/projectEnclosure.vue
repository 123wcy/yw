<template>
    <div class="device-info">
        <h4>项目附件</h4>
        <ul>
            <li>
                <span>项目附件：</span>
                <table border="1">
                    <thead>
                        <tr>
                            <th>文件名</th>
                            <th>上传人</th>
                            <th>上传时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableData" :key="item.id">
                            <td>{{item.fileName}}</td>
                            <td>{{item.uploadMan}}</td>
                            <td>{{item.uploadTime}}</td>
                            <td><a href="javascript:;">下载</a></td>
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
                    id: '1',
                    fileName: '项目图纸',
                    uploadMan: '张三',
                    uploadTime: '2017-11-11  16:53',
                },
                {
                    id: '2',
                    fileName: '竣工报告',
                    uploadMan: '李四',
                    uploadTime: '2017-11-10  10:43',
                },
                {
                    id: '3',
                    fileName: '点位表',
                    uploadMan: '张三',
                    uploadTime: '2017-11-11  09:22',
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

