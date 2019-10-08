<template>
    <div class="order-desc-container">
        <header class="clearfix">
            <h3 class="fl">工单详情</h3>
            <div class="operation fr">
                <el-button plain size="small" @click="hanleReturn">返回</el-button>
                <el-button plain size="small" @click="outerVisible = true">审批工单</el-button>
                <el-dropdown  @command="handleCommand">
                    <el-button plain size="small ">
                        更多操作<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="offer">服务报价</el-dropdown-item>
                        <el-dropdown-item command="update">修改工单</el-dropdown-item>
                        <el-dropdown-item command="cancel">取消工单</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </header>
        <div class="main clearfix">
            <div class="content fl">
                <div class="title">
                    <i class="icon el-icon-document"></i>
                    <span>{{number}}</span>
                    <i class="status">待审批</i>
                </div>
                <div class="desc">
                    <ul>
                        <li><span>项目名称：</span>{{orderDesc.projectName}}</li>
                        <li><span>系统名称：</span>{{orderDesc.faultSystem}}</li>
                        <li><span>设备名称：</span>{{orderDesc.faultEquipment}}</li>
                        <li><span>问题描述：</span>{{orderDesc.projectDesc}}</li>
                        <li><span>联系人：</span>{{orderDesc.contacts}}</li>
                        <li><span>联系电话：</span>{{orderDesc.contactNumber}}</li>
                    </ul>
                    <ul>
                        <li><span>创建时间：</span>2017-11-14  09:23:47</li>
                    </ul>
                </div>
            </div>
            <div class="tabs fl">
                <orderDescTabs />
            </div>
        </div>

        <!-- 审批工单 dialog -->
        <el-dialog title="审批工单" :visible.sync="outerVisible">
            <el-dialog
            width="30%"
            title="添加服务人员"
            :visible.sync="innerVisible"
            append-to-body>
                <div class="add-serviceman">
                    <ul>
                        <li>
                            <span>网点：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>工程师：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>角色：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>等级：</span>
                            <input type="text">
                        </li>
                    </ul>
                </div>
                <div class="operation">
                    <el-button @click="innerVisible = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="innerVisible = false" size="small">确定</el-button>
                </div>
            </el-dialog>

            <el-dialog
            width="30%"
            title="添加建议工具"
            :visible.sync="innerVisible2"
            append-to-body>
                <div class="add-serviceman">
                    <ul>
                        <li>
                            <span>工具名称：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>工具类型：</span>
                            <input type="text">
                        </li>
                    </ul>
                </div>
                <div class="operation">
                    <el-button @click="innerVisible2 = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="innerVisible2 = false" size="small">确定</el-button>
                </div>
            </el-dialog>

            <el-dialog
            width="30%"
            title="添加使用备件"
            :visible.sync="innerVisible3"
            append-to-body>
                <div class="add-serviceman">
                    <ul>
                        <li>
                            <span>备件编号：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>备件名称：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>备件型号：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>数量：</span>
                            <input type="text">
                        </li>
                    </ul>
                </div>
                <div class="operation">
                    <el-button @click="innerVisible3 = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="innerVisible3 = false" size="small">确定</el-button>
                </div>
            </el-dialog>
            <div class="approval">
                <ul>
                    <li>
                        <span>故障设备</span>
                        <select>
                            <option value="摄像头-HK 8116">摄像头-HK 8116</option>
                            <option value="硬盘录像机-HK C32">硬盘录像机-HK C32</option>
                            <option value="视频分配器-HK F1">视频分配器-HK F1</option>
                            <option value="视频矩阵-达拉斯108">视频矩阵-达拉斯108</option>
                        </select>
                    </li>
                    <li>
                        <span>故障类型</span>
                        <select>
                            <option value="线路老化">线路老化</option>
                            <option value="接口松动">接口松动</option>
                        </select>
                    </li>
                    <li>
                        <span>服务模式</span>
                        <select>
                            <option value="上门服务（一级）">上门服务（一级）</option>
                            <option value="上门服务（二级）">上门服务（二级）</option>
                            <option value="远程调试">远程调试</option>
                            <option value="服务模式4">服务模式4</option>
                        </select>
                    </li>
                    <li>
                        <span>服务人员</span>
                        <el-button type="primary" icon="el-icon-plus" size="small" @click="innerVisible = true">添加</el-button>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>网点</th>
                                    <th>工程师</th>
                                    <th>角色</th>
                                    <th>等级</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>本部</td>
                                    <td>张三</td>
                                    <td>硬件工程师</td>
                                    <td>一级</td>
                                    <td><el-button plain icon="el-icon-delete" size="small">删除</el-button></td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <span>建议工具</span>
                        <el-button type="primary" icon="el-icon-plus" size="small" @click="innerVisible2 = true">添加</el-button>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>工具名称</th>
                                    <th>工具类型</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>网线钳</td>
                                    <td>类型1</td>
                                    <td><el-button plain icon="el-icon-delete" size="small">删除</el-button></td>                                    
                                </tr>
                                <tr>
                                    <td>光纤对接器</td>
                                    <td>类型2</td>
                                    <td><el-button plain icon="el-icon-delete" size="small">删除</el-button></td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <span>使用备件</span>
                        <el-button type="primary" icon="el-icon-plus" size="small" @click="innerVisible3 = true">添加</el-button>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>备件编号</th>
                                    <th>备件名称</th>
                                    <th>备件型号</th>
                                    <th>数量</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>S20034</td>
                                    <td>备件1</td>
                                    <td>型号1</td>
                                    <td>1</td>
                                    <td><el-button plain icon="el-icon-delete" size="small">删除</el-button></td>                                    
                                </tr>
                                <tr>
                                    <td>S10156</td>
                                    <td>备件2</td>
                                    <td>型号1</td>
                                    <td>2</td>
                                    <td><el-button plain icon="el-icon-delete" size="small">删除</el-button></td>                                    
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <span>推荐知识库</span>
                        <select>
                            <option value="知识1">知识1</option>
                            <option value="知识2">知识2</option>
                            <option value="知识3">知识3</option>
                            <option value="知识4">知识4</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
                <el-button type="primary" @click="outerVisible = false">确定</el-button>
            </div>
        </el-dialog>

        <!-- 服务报价 dialog -->
        <el-dialog title="服务报价" :visible.sync="offerVisible">
            <el-dialog
            width="30%"
            title="添加服务项目"
            :visible.sync="innerVisible4"
            append-to-body>
                <div class="add-serviceman">
                    <ul>
                        <li>
                            <span>项目名称：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>项目类型：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>在保状态：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>项目价格：</span>
                            <input type="text">&nbsp;&nbsp;元
                        </li>
                        <li>
                            <span>应收金额：</span>
                            <input type="text">&nbsp;&nbsp;元
                        </li>
                    </ul>
                </div>
                <div class="operation">
                    <el-button @click="innerVisible4 = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="innerVisible4 = false" size="small">确定</el-button>
                </div>
            </el-dialog>

            <el-dialog
            width="30%"
            title="添加使用备件"
            :visible.sync="innerVisible5"
            append-to-body>
                <div class="add-serviceman">
                    <ul>
                        <li>
                            <span>备件编号：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>备件名称：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>备件型号：</span>
                            <input type="text">
                        </li>
                        <li>
                            <span>数量：</span>
                            <input type="text">&nbsp;&nbsp;元
                        </li>
                        <li>
                            <span>应收金额：</span>
                            <input type="text">&nbsp;&nbsp;元
                        </li>
                    </ul>
                </div>
                <div class="operation">
                    <el-button @click="innerVisible5 = false" size="small">取 消</el-button>
                    <el-button type="primary" @click="innerVisible5 = false" size="small">确定</el-button>
                </div>
            </el-dialog>
            <div class="offer">
                <p>本次服务的结算信息如下：</p>
                <div class="table-container">
                    <div class="title">
                        <span>服务项目（合计：<i>0.00</i>元）</span>
                        <el-button plain icon="el-icon-plus" size="mini" class="fr" @click="innerVisible4 = true">添加</el-button>                                   
                    </div>
                    <table border="1">
                        <tr>
                            <th>项目名称</th>
                            <th>项目类型</th>
                            <th>在保状态</th>
                            <th>项目价格（元）</th>
                            <th>应收金额（元）</th>
                        </tr>
                        <tr>
                            <td>服务项目1</td>
                            <td>类型1</td>
                            <td>保内</td>
                            <td>200.00</td>
                            <td>0.00</td>
                        </tr>
                    </table>
                </div>

                <div class="table-container">
                    <div class="title">
                        <span>使用备件（合计：<i>200.00</i>元）</span>
                        <el-button plain icon="el-icon-plus" size="mini" class="fr" @click="innerVisible5 = true">添加</el-button>                                   
                    </div>
                    <table border="1">
                        <tr>
                            <th>备件编号</th>
                            <th>备件名称</th>
                            <th>备件型号</th>
                            <th>数量</th>
                            <th>应收金额（元）</th>
                        </tr>
                        <tr>
                            <td>W2R4123213</td>
                            <td>备件1</td>
                            <td>型号1000</td>
                            <td>1</td>
                            <td>150.00</td>
                        </tr>
                        <tr>
                            <td>W2R4123213</td>
                            <td>备件1</td>                            
                            <td>型号1000</td>
                            <td>1</td>
                            <td>50.00</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="offerVisible = false">取 消</el-button>
                <el-button type="primary" @click="offerVisible = false">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import orderDescTabs from '../components/orderDesc/orderDescTabs.vue'
export default {
    data() {
        return {
            number: '',
            outerVisible: false,
            innerVisible: false,
            innerVisible2: false,
            innerVisible3: false,
            innerVisible4: false,
            innerVisible5: false,
            offerVisible: false
        }
    },
    computed: {
        orderDesc() {
            let desc = localStorage.getItem('ORDER_DESC')
            return JSON.parse(desc)
        }
    },
    created () {
        this.number = this.$route.params.id
    },
    methods: {
        
        //下拉菜单回调
        handleCommand(command) {
            if(command == 'offer') {
                this.offerVisible = true
            }
        },
        // 返回按钮
        hanleReturn() {
            this.$router.go(-1)
        }
    },
    components: {
        orderDescTabs,
    }
}
</script>

<style lang="less" scoped>
.add-serviceman {
    padding-left: 30px;
    ul li {
        margin-bottom: 20px;
        span {
            display: inline-block;
            width: 80px;
        }
        input {
            width: 60%;
            outline: none;
            padding-left: 6px;
            border-radius: 4px;
            border: 1px solid #ddd;
            line-height: 25px;
        }
    }
}
.operation {
    text-align: right;
}
.order-desc-container {
    padding: 53px 0 0 55px;
    background-color: #fff;
    height: 1000px;
    box-sizing: border-box;
    header {
        margin: 20px 20px 0 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        h3 {
            font-size: 20px;
            font-weight: normal;
        }
        .el-button+.el-button {
            margin-left: 0;
        }
    }
    .main {
        height: 100%;
        padding: 0 20px 20px 20px;
        .content {
            width: 19%;
            height: 100%;
            border-right: 1px solid #eee;
            box-sizing: border-box;
            .title {
                margin: 15px 15px 0 0px;
                position: relative;
                .icon, span {
                    font-size: 18px;
                    font-weight: 700;
                }
                .status {
                    text-align: center;
                    font-size: 13px;
                    font-weight: 300;
                    line-height: 21px;
                    position: absolute;
                    width: 50px;
                    height: 21px;
                    background-color: #ff9900;
                    color: #fff;
                    border-radius: 4px;
                    top: 0;
                    right: 0;
                }
            }
            .desc {
                margin: 20px 15px 20px 0;
                border-top: 1px dashed #ccc;
                border-bottom: 1px dashed #ccc;
                ul li {
                    font-size: 14px;
                    margin: 10px 0;
                    span {
                        font-weight: 700;
                        line-height: 2em;
                    }
                }
            }
        }
        .tabs {
            width: 81%;
            height: 100%;
        }
    }
    
    .approval, {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        padding: 20px 100px;
        ul li {
            margin-bottom: 20px;
            span {
                margin-right: 20px;
            }
            select {
                width: 70%;
                height: 26px;
                padding-left: 10px;
            }
            button {
                background-color: rgba(204, 204, 204, 1);
                border: 0;
                outline: none;
            }
            table {
                width: 80%;
                text-align: center;
                margin-left: 80px;
                margin-top: 10px;
                border: 1px solid #ddd;
                th {
                    font-weight: normal; 
                    padding: 4px 0;                              
                }
                td {
                    padding: 4px 0;
                    button {
                        background-color: #fff;
                        border: 1px solid #ddd;
                        padding: 4px;
                    }
                }
            }
        }
    }
    .offer {
        padding:20px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        .title {
            margin-top: 10px;
            background-color: #f2f2f2;
            height: 35px;
            line-height: 35px;
            padding: 0 10px;
            font-weight: 700;
            border: 1px solid #ddd;
            border-bottom: none;
            i {
                color: #f00;
            }
            button {
                padding: 5px;
                margin: 4px 8px 0 0;
            }
        }
        table {
            width: 100%;
            text-align: center;
            border: 1px solid #ddd;
            margin-bottom: 20px;
            font-size: 14px;
        }
    }
}
</style>

