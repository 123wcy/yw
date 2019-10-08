<template>
    <div class="desctable-container">
        <el-tabs type="border-card" id="tabs">
            <el-tab-pane label="系统模块">
                <table>
                    <thead>
                        <tr>
                            <th>系统名称</th>
                            <th>组态软件</th>
                            <th>版本</th>
                            <th>MA到期日</th>
                            <th>描述</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in systemData" :key="item.number">
                            <td>{{item.name}}</td>
                            <td>{{item.soft}}</td>
                            <td>{{item.version}}</td>
                            <td>{{item.expires}}</td>
                            <td>{{item.desc}}</td>
                            <td>
                                <button>编辑</button>
                                <button>删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
            <el-tab-pane label="硬件配置">
                <div class="select">
                    <span>子系统：</span> 
                    <select>
                        <option value="视频监控系统">视频监控系统</option>
                        <option value="视频监控系统">门禁一卡通系统</option>
                        <option value="视频监控系统">会议系统</option>
                    </select>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>设备名称</th>
                            <th>品牌</th>
                            <th>型号</th>
                            <th>数量</th>
                            <th>供应商</th>
                            <th>供应商电话</th>
                            <th>配置项编号</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in hardWareData" :key="item.number">
                            <td>{{item.name}}</td>
                            <td>{{item.brand}}</td>
                            <td>{{item.model}}</td>
                            <td>{{item.amount}}</td>
                            <td>{{item.supplier}}</td>
                            <td>{{item.supplierPhone}}</td>
                            <td>{{item.setNumber}}</td>
                            <td>
                                <button @click="openModal">详情</button>
                                <button>编辑</button>
                                <button>删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
            <el-tab-pane label="合同信息">
                <table>
                    <thead>
                        <tr>
                            <th>合同名称</th>
                            <th>付款方式</th>
                            <th>服务级别</th>
                            <th>服务期限</th>
                            <th>付款状态</th>
                            <th>合同状态</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in constractData" :key="item.number">
                            <td>{{item.name}}</td>
                            <td>{{item.payment}}</td>
                            <td>{{item.grade}}</td>
                            <td>{{item.expires}}</td>
                            <td>{{item.payStatus}}</td>
                            <td>{{item.conStatus}}</td>
                            <td>
                                <button>编辑</button>
                                <button>删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
            <el-tab-pane label="项目附件">
                <table>
                    <thead>
                        <tr>
                            <th>附件名称</th>
                            <th>上传时间</th>
                            <th>上传人</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in enclosure" :key="item.number">
                            <td>{{item.name}}</td>
                            <td>{{item.uploadTime}}</td>
                            <td>{{item.uploadMan}}</td>
                            <td>
                                <button><i class="el-icon-download"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
            <el-tab-pane label="运维工单">
                <div class="date-picker">
                    <span>起始日期：</span>
                    <el-date-picker v-model="startDate" type="date" placeholder="选择日期">
                    </el-date-picker>
                    <span>终止日期：</span>
                    <el-date-picker v-model="endDate" type="date" placeholder="选择日期">
                    </el-date-picker>
                    <el-button type="primary">筛选</el-button>
                    <p class="filter-result">共筛选出工单<i class="emphasize"> 38</i>条，工单成本 <i class="emphasize">12900.00</i> 元</p>
                </div>

                <table>
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
                        <tr v-for="item in operationWork" :key="item.number">
                            <td>{{item.number}}</td>
                            <td>{{item.equipment}}</td>
                            <td>{{item.grade}}</td>
                            <td>{{item.network}}</td>
                            <td>{{item.serviceMan}}</td>
                            <td>{{item.status}}</td>
                            <td>{{item.createTime}}</td>
                            <td>
                                <button>查看</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </el-tab-pane>
        </el-tabs>
        <button id="addSystem"><i class="el-icon-plus"></i> 新增系统</button>
        
        <!-- 硬件配置详情框 -->
        <el-card class="box-card" ref="modal">
        <div slot="header" class="clearfix">
            <span>设备详情</span>
            <el-button style="float: right; padding: 5px" @click="closeModal"><i class="el-icon-close"></i></el-button>
        </div>
        <div>
            <ul class="clearfix">
                <li>设备名称：</li>
                <li>经办人：</li>
                <li>品牌型号：</li>
                <li>经办人电话：</li>
                <li>数量：</li>
                <li>供应商：</li>
                <li>供应商联系人：15911115555</li>
                <li>供应商电话：</li>
                <li>参考联系人：</li>
            </ul>
        </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            systemData: [
                {
                    number: '1',
                    name: '视频监控系统',
                    soft: 'DALAS客户端软件',
                    version: 'S2100',
                    expires: '2017-12-01',
                    desc: '海康录像机、英飞拓视频矩阵...'
                },
                {
                    number: '2',
                    name: '门禁一卡通系统',
                    soft: 'Honeywell门禁软件',
                    version: 'v 2.3',
                    expires: '2017-06-30',
                    desc: '门禁、停车场、食堂消费集中...'
                },
                {
                    number: '3',
                    name: '会议系统',
                    soft: 'SONY会议管理中心',
                    version: 'SRP X700P',
                    expires: '2018-12-30',
                    desc: '深圳索尼'
                },
            ],
            hardWareData: [
                {
                    number: '1',
                    name: '高清红外球机',
                    brand: '海康',
                    amount: '4',
                    model: 'S2100',
                    supplier: '南京玄策',
                    supplierPhone: '13911111111',
                    setNumber: '',
                },
                {
                    number: '2',
                    name: '硬盘录像机',
                    brand: '海康',
                    amount: '1',
                    model: 'DS-8116HS-S',
                    supplier: '南京玄策',
                    supplierPhone: '1391111111',
                    setNumber: 'MON-HARD-34',
                },
                {
                    number: '3',
                    name: '高清红外球机',
                    brand: '海康',
                    amount: '4',
                    supplier: '南京玄策',
                    supplierPhone: '13911111111',
                    setNumber: '',
                },
            ],
            constractData: [
                {
                    number: '1',
                    name: '南京博览中心维保合同（2017-2019）',
                    payment: '2107/01/01前支付50%；2017...',
                    grade: '一级',
                    expires: '2017/01/01-2018/12/31',
                    payStatus: '正常',
                    conStatus: '执行中'
                },
                {
                    number: '2',
                    name: '南京博览中心维保合同（2016-2017）',
                    payment: '2107/01/01前支付50%；2017...',
                    grade: '一级',
                    expires: '2017/01/01-2018/12/31',
                    payStatus: '延期',
                    conStatus: '以结束'
                },
                {
                    number: '3',
                    name: '南京博览中心维保合同（2015-2016）',
                    payment: '2107/01/01前支付50%；2017...',
                    grade: '一级',
                    expires: '2017/01/01-2018/12/31',
                    payStatus: '已结清',
                    conStatus: '以结束'
                },
            ],
            enclosure: [
                {
                    number: '1',
                    name: '南京博览中心招标文件.zip',
                    uploadTime: '2014-12-01',
                    uploadMan: 'admin'
                },
                {
                    number: '2',
                    name: '南京博览中心中标通知书.zip',
                    uploadTime: '2014-12-01',
                    uploadMan: 'admin'
                },
                {
                    number: '3',
                    name: '南京博览中心审计合同.doc',
                    uploadTime: '2014-12-01',
                    uploadMan: 'admin'
                },
            ],
            operationWork: [
                {
                    number: 'G2017113001',
                    equipment: '视频矩阵-180',
                    grade: '一级',
                    network: '本部',
                    serviceMan: '张三',
                    status: '执行中',
                    createTime: '2016/01/01 16:53'
                },
                {
                    number: 'G2017113002',
                    equipment: '摄像头-HK8116',
                    grade: '一级',
                    network: '本部',
                    serviceMan: '张三',
                    status: '执行中',
                    createTime: '2016/01/01 16:53'
                },
                {
                    number: 'G2017113003',
                    equipment: '视频分配器-F1',
                    grade: '一级',
                    network: '本部',
                    serviceMan: '李四',
                    status: '已关闭',
                    createTime: '2016/01/01 16:53'
                },
            ],
            startDate: '',
            endDate: ''
        }
    },
    methods: {
        openModal() {
            let modal = this.$refs.modal.$el
            modal.style.display = 'block'
        },
        closeModal() {
            let modal = this.$refs.modal.$el
            modal.style.display = 'none'
        }
    }
}
</script>

<style lang="less" scoped>
.desctable-container {
    width: 1170px;
    margin: 20px 0 0 20px;
    position: relative;
    .select {
        padding: 10px 0 10px 40px;
        span {
            font-size: 15px;
            font-weight: 600;
        }
        select {
            width: 200px;
            height: 30px;
            padding-left:10px;
            box-sizing: border-box; 
            outline: none;
            font-size: 14px;
            
            option {
                font-size: 14px;
                height: 30px;
            }
        }
    }
    .date-picker {
        position: relative;
        span {
            margin-left: 15px;
        }
        button {
            margin-left: 15px;
        }
        .filter-result {
            position: absolute;
            top: 15px;
            right: 15px;
            .emphasize {
                color: red;
                font-size: 14px;
                font-weight: 700;
            }
        }
        .el-date-editor.el-input, .el-date-editor.el-input__inner {
            width: 150px;
        }
    }
    table {
        width: 100%;
        
        thead tr {
            border-bottom: 1px solid #ddd;
            margin-bottom: 10px;
        }
        thead th {
            font-size: 15px;
            font-weight: 600;
            padding: 15px 0;
        }
        tbody td {
            text-align: center;
            padding: 10px 0;
            button {
                outline: 0;
                border: 1px solid #ccc;
                width: 40px;
                height: 20px;
                border-radius: 4px;
                background-color: #fff;
                cursor: pointer;
            }
        }
    }
    #addSystem {
        outline: none;
        border: 1px solid #999;
        width: 90px;
        height: 30px;
        border-radius: 4px;
        position: absolute;
        top: 5px;
        right: 20px;
        cursor: pointer;
        background-color: #fff;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        display: none;
        width: 520px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 99;
        span {
            font-size: 15px;
        }
        ul li {
            float: left;
            width: 50%;
            font-size: 14px;
            line-height: 30px;
        }
    }
}
</style>

