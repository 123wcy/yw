<template>
    <div class="table-container">
        <p class="operation">
                <el-button type="primary" @click="dialogFormVisible = true">新建</el-button>
                <el-button type="primary" @click="toggleFilter" id="filter-btn">筛选</el-button>
            </p>
        <el-table
            ref="multipleTable"
            :border="true"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%;font-size:12px;"
            @selection-change="handleSelectionChange">

            <el-table-column
            label="工单编号"
            >
            <template slot-scope="scope">{{ scope.row.orderId }}</template>
            </el-table-column>

            <el-table-column
            prop="projectName"
            label="项目名称"
            >
            </el-table-column>

            <el-table-column
            prop="faultSystem"
            label="子系统"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            prop="faultEquipment"
            label="设备"
            show-overflow-tooltip>
            </el-table-column>

            <el-table-column
            label="工单状态"
            show-overflow-tooltip>
                <template slot-scope="scope"><button class="status" @click="handleEnterDesc(scope.row)">{{scope.row.taskState}}</button></template>
            </el-table-column>

            <el-table-column
            label="创建时间"
            show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.createTime | timeFormat }}</template>
            </el-table-column>
        </el-table>

        <!-- 新建工单dialog  -->
        <div class="dialog-container">
            <el-dialog title="新建工单" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="项目名称" :label-width="formLabelWidth">
                        <el-autocomplete
                        v-model="form.projectName"
                        :fetch-suggestions="querySearchAsync"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        ></el-autocomplete>
                    </el-form-item>
                    <el-form-item label="问题描述"  :label-width="formLabelWidth">
                        <el-input v-model="form.projectDesc" 
                                  type="textarea" 
                                  :rows="2" 
                                  placeholder="请输入内容" 
                                  auto-complete="off"
                                  style="width:505.14px;">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="故障系统" :label-width="formLabelWidth">
                        <el-select v-model="form.faultSystem">
                            <el-option label="监控系统" value="监控系统"></el-option>
                            <el-option label="给排水系统" value="给排水系统"></el-option>
                            <el-option label="停车场系统" value="停车场系统"></el-option>
                            <el-option label="电梯系统" value="电梯系统"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="故障设备" :label-width="formLabelWidth">
                        <el-select v-model="form.faultEquipment">
                            <el-option label="摄像头-HK8116" value="摄像头-HK8116"></el-option>
                            <el-option label="硬盘录像机-HKC32" value="硬盘录像机-HKC32"></el-option>
                            <el-option label="视频分配器-HKF1" value="视频分配器-HKF1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="联系人" :label-width="formLabelWidth">
                        <el-input v-model="form.contacts" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话" :label-width="formLabelWidth">
                        <el-input v-model="form.contactNumber" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleAdd">确 定</el-button>
                </div>
            </el-dialog>
        </div>

        <!-- 筛选弹出部分 -->
        <div class="filter-container" id="filter">
            <h4 class="title">工单筛选</h4>
            <div class="form-container">
                <form>
                    <div class="item-container">
                        <label>子系统</label>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="item-container">
                        <label>设备</label>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="item-container">
                        <label>工单类型</label>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="item-container">
                        <label>工单状态</label>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox label="待审批"></el-checkbox>
                            <el-checkbox label="待受理"></el-checkbox>
                            <el-checkbox label="待处理"></el-checkbox>
                            <el-checkbox label="待回访"></el-checkbox>
                            <el-checkbox label="已关闭"></el-checkbox>
                            <el-checkbox label="已取消"></el-checkbox>
                        </el-checkbox-group>
                    </div>

                    <div class="item-container">
                        <label>服务级别</label>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="item-container">
                        <label>服务网点</label>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="item-container">
                        <label>渠道</label>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="item-container">
                        <label>创建时间</label>
                        <el-date-picker
                        v-model="value6"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                        </el-date-picker>
                    </div>

                    <div class="item-container" style="text-align:center;padding:20px 0 0 0;">
                        <el-button type="primary">提交</el-button>
                    </div>
                    
                </form>
                <!-- 关闭按钮 -->
                <span class="el-icon-close close" @click="closeFilter"></span>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
      return {
        multipleSelection: [],
        dialogFormVisible: false,
        form: {
            projectName: '',
            projectDesc: '',
            faultSystem: '',
            faultEquipment: '',
            contacts: '',
            contactNumber: '',
            projectId: '',
            receiveUserId: '2222'
        },
        formLabelWidth: '120px',
        options: [{
                value: '选项1',
                label: '监控系统'
            }, {
                value: '选项2',
                label: 'xx系统'
            }
        ],
        value: '',
        checkList: [],
        value6: '',
        flag: true,
        allOption: [],
        timeout: null
      }
    },
    mounted() {
        this.loadAll()
    },
    methods: {
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        toggleFilter() {
            let filter = document.querySelector('#filter'),
                btn = document.querySelector('#filter-btn')
            if(this.flag) {
                btn.innerHTML = '取消筛选'
                filter.style.visibility = 'visible'            
                filter.style.transform = 'translateX(0)'
                this.flag = false
            }else{
                btn.innerHTML = '筛选'
                filter.style.visibility = 'hidden'            
                filter.style.transform = 'translateX(100%)'
                this.flag = true
            }
        },
        closeFilter() {
            let filter = document.querySelector('#filter'),
                btn = document.querySelector('#filter-btn')
            btn.innerHTML = '筛选'
            this.flag = true         
            filter.style.visibility = 'hidden'            
            filter.style.transform = 'translateX(100%)'
        },
        handleEnterDesc(row) {
            localStorage.setItem('ORDER_DESC',JSON.stringify(row))
            this.$router.push(`/workorder/desc/${row.orderId}`)
        },
        handleAdd() {
            let formData = this.$qs.stringify(this.form)
            this.$http({
                url: 'omm/restActivitiController/saveProject',
                data: formData
            }).then( response => {

            } )
        },

        loadAll() {
            this.$http({
                url: 'omm/projectInfo/findAllProject',
            }).then( res => {
                if ( res.status == 200 ) {
                    this.allOption = res.data.obj
                    this.allOption.forEach( (item, index)=> {
                        item.value = item.name
                    } )
                }
            } )
        },
        querySearchAsync(queryString, cb) {
            var allOption = this.allOption
            var results = queryString ? allOption.filter(this.createStateFilter(queryString)) : allOption
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                cb(results)
            }, 3000 * Math.random())
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) == 0)
            }
        },
        handleSelect(item) {
            this.form.projectId = item.id
        }
    },
    computed: {
        tableData() {
            return this.table
        }
    },
    props: ['table'],
    filters: {
        timeFormat: function (timestamp) {
            var date = new Date(timestamp)
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
            var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
            var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
            var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
            var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds())
            return Y+M+D+h+m+s;
        }
    }
}
</script>

<style lang="less" scoped>
.table-container {
    overflow: hidden;
    .operation {
        margin-top: 15px;
        margin-bottom: 15px;
        button {
            width: 70px;
            height: 30px;
            padding: 0;
        }
    }
    margin-top: 20px;
    width: 100%;
    table {
        font-size: 12px;
    }
    .status {
        outline: none;
        border: none;
        width: 54px;
        height: 24px;
        background-color: #ccc;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
    .el-input { 
        width: 80%;
    }
    .filter-container {
        position: absolute;
        width: 300px;
        height: 100%;
        background-color: #f7f7f7;
        top: 0;
        right: 0;
        transform: translateX(100%);
        visibility: hidden;
        z-index: 999;
        border-left: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        transition: all 0.5s ease;
        .title {
            font-size: 16px;
            font-weight: normal;
            text-align: center;
            line-height: 40px;
            border-bottom: 1px solid #f2f2f2;
        }
        .form-container {
            padding: 20px;
            .close {
                position: absolute;
                top: 12px;
                right: 20px;
                font-size: 14px;
                cursor: pointer;
            }
            .item-container {
                margin-bottom: 8px;
                label {
                    font-size: 14px;
                    display: block;
                    margin-bottom: 8px;
                }
                .el-select {
                    width: 100%;
                }
                .el-checkbox {
                    float: left;
                    margin: 0;
                    width: 33.33%;
                    margin-bottom: 8px;
                }
                .el-date-editor {
                    width: 100%;
                }
            }
        }
    }
    .el-autocomplete {
        width: 505.19px;
    }
}
</style>

