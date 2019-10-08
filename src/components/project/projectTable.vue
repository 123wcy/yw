<template>
    <div class="table-container">
        <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增项目</el-button>
        <el-table
        :data="tableData"
        style="width: 100%;font-size:12px;margin-top:10px;"
        >
        <el-table-column
            prop="projectNo"
            label="项目编号"
            width="80px">
        </el-table-column>
        <el-table-column
            prop="name"
            label="项目名称">
        </el-table-column>
        <el-table-column
            prop="type"
            label="项目类型">
        </el-table-column>
        <el-table-column
            prop="preservingState"
            label="在保状态">
        </el-table-column>
        <el-table-column
            prop="firstParty"
            label="甲方名称">
        </el-table-column>
        <el-table-column
            prop="preservingGrade"
            label="维保等级">
        </el-table-column>
        <el-table-column
            prop="preservingBeginTimes"
            label="维保开始时间"
            :formatter="formatTime">
        </el-table-column>
        <el-table-column
            prop="preservingEndTimes"
            label="维保结束时间"
            :formatter="formatTime">
        </el-table-column>
        <el-table-column
            prop="contractPrice"
            label="合同价">
        </el-table-column>
        <el-table-column
            prop="contacts"
            label="联系人">
        </el-table-column>
        <el-table-column
            prop="contactsTel"
            label="联系电话">
        </el-table-column>
        <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleClickDesc(scope.row)">查看</el-button>
                <el-button type="text" size="small" @click="deleteProject(scope.row)">删除</el-button>
            </template>
        </el-table-column>

        </el-table>

        <el-dialog title="新增" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="项目名称：" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="项目类型：" :label-width="formLabelWidth">
                <el-input v-model="form.type" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="在保状态：" :label-width="formLabelWidth">
                <el-input v-model="form.preservingState" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="甲方名称：" :label-width="formLabelWidth">
                <el-input v-model="form.firstParty" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="维保等级：" :label-width="formLabelWidth">
                <el-input v-model="form.preservingGrade" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="维保开始时间：" :label-width="formLabelWidth">
                <el-date-picker
                    v-model="form.beginTime"
                    type="date"
                    placeholder="选择日期"
                    value-format="timestamp">
                </el-date-picker>
                </el-form-item>

                <el-form-item label="维保结束时间：" :label-width="formLabelWidth">
                <el-date-picker
                    v-model="form.endTime"
                    type="date"
                    placeholder="选择日期"
                    value-format="timestamp">
                </el-date-picker>
                </el-form-item>

                <el-form-item label="合同价：" :label-width="formLabelWidth">
                <el-input v-model="form.contractPrice" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="联系人" :label-width="formLabelWidth">
                <el-input v-model="form.contacts" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="联系电话：" :label-width="formLabelWidth">
                <el-input v-model="form.contactsTel" auto-complete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addProject">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            pageSize: 8,
            offset: 1,
            form: {
                id: '',
                contacts: '',
                contactsTel: '',
                firstParty: '',
                name: '',
                beginTime: '',
                endTime: '',
                preservingGrade: '',
                projectNo: '',
                type: '',
                contractPrice: '',
                preservingState: ''
            },
            dialogFormVisible: false,
            formLabelWidth: '150px'
        }
    },
    created() {
        this.findAllProject()
    },
    methods: {
        //查看项目详情
        handleClickDesc(row) {
            this.$router.push({ path: `/project/desc/${row.id}` })
        },
        // 添加项目 
        addProject() {
            this.form.beginTime = this.form.beginTime / 1000
            this.form.endTime = this.form.endTime / 1000
            let params = this.$qs.stringify(this.form)
            this.$http({
                url: 'omm/projectInfo/saveProject',
                data: params
            }).then( res => {
                if( res.data.success == true ) {
                    this.findAllProject()
                }
            } )
            this.dialogFormVisible = false
        },
        //查询所有项目
        findAllProject () {
            let params = {
                pageSize: this.pageSize,
                offset: this.offset
            }
            params = this.$qs.stringify(params)
            this.$http({
                url: 'omm/projectInfo/findAll',
                data: params
            }).then( res => {
                if( res.data.success == true ) {
                    let proArr = res.data.obj
                    proArr.forEach( (item, index) => {
                        item['projectNo'] = index + 1
                    })
                    this.tableData = proArr
                    console.log(proArr)
                }
            } )
        },
        //删除项目
        deleteProject(row) {
            let params = {
                id: row.id
            }
            params = this.$qs.stringify(params)
            this.$http({
                url: 'omm/projectInfo/delete',
                data: params
            }).then( res => {
                if( res.data.success == true ) {
                    this.findAllProject()
                }
            } )
        },
        // 格式化时间
        formatTime (row, column, timestamp) {
            var date = new Date(timestamp * 1000 );
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
                return Y+M+D;
        }
    }
}
</script>

<style lang="less" scoped>
.table-container {
    padding: 25px 20px 20px 15px;
}
.el-form-item  {
    width: 500px;
}

</style>


