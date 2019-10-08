<template>
    <div class="device-info">
        <h4>设备信息</h4>
        <ul>
            <li>
                <span>系统名称：</span>
                <input type="text" value="隧道监控系统" style="width:229px;">
            </li>
            <li>
                <span>设备信息：</span>
                <table border="1">
                    <thead>
                        <tr>
                            <th>设备名称</th>
                            <th>品牌</th>
                            <th>型号</th>
                            <th>购买日期</th>
                            <th>数量</th>
                            <th>供应商</th>
                            <th>供应商联系方式</th>
                            <th>MA到期时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tableData" :key="item.id">
                            <td>{{item.name}}</td>
                            <td>{{item.brand}}</td>
                            <td>{{item.model}}</td>
                            <td>{{item.purchaseTime}}</td>
                            <td>{{item.amount}}</td>
                            <td>{{item.supplier}}</td>
                            <td>{{item.supplierPhone}}</td>
                            <td>{{item.MAexpires}}</td>
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
                    name: '摄像头',
                    brand: '海康',
                    model: 'HK8116',
                    purchaseTime: '2014-12-01',
                    amount: '82',
                    supplier: '南京四海',
                    supplierPhone: '13487824687',
                    MAexpires: '2016-12-01'
                },
                {
                    id: '2',
                    name: '硬盘录像机',
                    brand: '海康',
                    model: 'HKC23',
                    purchaseTime: '2014-12-01',
                    amount: '6',
                    supplier: '南京四海',
                    supplierPhone: '13487824687',
                    MAexpires: '2016-12-01'
                },
                {
                    id: '3',
                    name: '视频分配器',
                    brand: '海康',
                    model: 'F1',
                    purchaseTime: '2014-12-01',
                    amount: '82',
                    supplier: '南京四海',
                    supplierPhone: '13487824687',
                    MAexpires: '2016-12-01'
                },
                {
                    id: '4',
                    name: '视频矩阵',
                    brand: '达拉斯',
                    model: 'HK8116',
                    purchaseTime: '2014-12-01',
                    amount: '82',
                    supplier: '达拉斯',
                    supplierPhone: '0531-23765755',
                    MAexpires: '2017-02-20'
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
            }
        }
    }
}
</style>

