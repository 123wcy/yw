<template>
    <div class="desc-containers">
        <header class="clearfix">
            <h3 class="fl">{{projectDesc.name}}</h3>
            <div class="edit fr">
                <el-button icon="el-icon-edit"  @click="dialogFormVisible = true">编辑</el-button>
            </div>
        </header>
        <div class="desc clearfix">
            <div class="preview fl">
                <img src="../assets/images/preview.png" alt="">
            </div>
            <ul class="fr">
                <li>项目编号： {{projectDesc.id}}</li>
                <li>在保状态： {{projectDesc.preservingState}}</li>
                <li>甲方名称： {{projectDesc.firstParty}}</li>
                <li>项目类型： {{projectDesc.type}}</li>
                <li>维保等级： {{projectDesc.preservingGrade}}</li>
                <li>维保开始时间： {{projectDesc.preservingBeginTimes | dateformat }}</li>     
                <li>维保结束时间：{{projectDesc.preservingEndTimes | dateformat}}</li>           
                <li>合同价： {{projectDesc.contractPrice}}</li>
                <li>联系人： {{projectDesc.contacts}}</li>
                <li>联系电话： {{projectDesc.contactsTel}}</li>
            </ul>
        </div>
        <descTable />

        <!-- 编辑项目内容模态框 -->
        <el-dialog title="编辑项目" :visible.sync="dialogFormVisible">
            <el-form :model="projectDesc">
                <el-form-item label="项目名称：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.name" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="项目类型：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.type" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="在保状态：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.preservingState" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="甲方名称：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.firstParty" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="维保等级：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.preservingGrade" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="维保开始时间：" :label-width="formLabelWidth">
                <el-date-picker
                    v-model="projectDesc.preservingBeginTime"
                    type="date"
                    placeholder="选择日期"
                    value-format="timestamp">
                </el-date-picker>
                </el-form-item>

                <el-form-item label="维保结束时间：" :label-width="formLabelWidth">
                <el-date-picker
                    v-model="projectDesc.preservingEndTime"
                    type="date"
                    placeholder="选择日期"
                    value-format="timestamp">
                </el-date-picker>
                </el-form-item>

                <el-form-item label="合同价：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.contractPrice" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="联系人" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.contacts" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="联系电话：" :label-width="formLabelWidth">
                <el-input v-model="projectDesc.contactsTel" auto-complete="off"></el-input>
                </el-form-item>
                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateProject">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import descTable from '../components/projectDesc/descTable.vue'
export default {
    data() {
        return {
            projectDesc: {},
            dialogFormVisible: false,
            formLabelWidth: '120px',
        }
    },
    created() {
        this.findProDesc()
    },
    methods: {
        // 查询项目详情
        findProDesc() {
            let id = this.$qs.stringify(this.$route.params)
            this.$http({
                url: 'omm/projectInfo/findById',
                data: id
            }).then( res => {
                if( res.status == 200 ) {
                    this.projectDesc = res.data.obj
                }
            } )
        },
        //更新项目
        updateProject() {
            this.projectDesc.beginTime = this.projectDesc.preservingBeginTime / 1000
            this.projectDesc.endTime = this.projectDesc.preservingEndTime / 1000
            let params = this.$qs.stringify(this.projectDesc)
            this.$http({
                url: 'omm/projectInfo/saveProject',
                data: params
            }).then( res => {
                if( res.data.success == true ) {
                   
                    this.findProDesc()
                }
            } )
            this.dialogFormVisible = false
        }
    },
    components: {
        descTable,
    }
}
</script>

<style lang="less" scoped>
.desc-containers {
    padding: 53px 0 0 55px;
    height: 1000px;
    background-color: #fff;
    header {
        margin: 15px 0 0 20px;
        width: 1170px;
        box-sizing: border-box;
        border-bottom: 1px solid #f2f2f2;
        h3 {
            font-size: 18px;
            font-weight: normal;
            padding-bottom: 15px;
        }
        .edit>button {
            width: 60px;
            height: 30px;
            font-size: 12px;
            padding: 0;
        }
    }
    .desc {
        width: 1170px;
        margin: 15px 0 0 20px;
        ul {
            width: 1000px;
            padding-top: 5px;
            li {
                float: left;
                width: 33.33%;
                font-size: 14px;
                margin-bottom: 15px;
                color: #333;
            }
            
        }
    }
    .el-form-item  {
        width: 450px;
    }
    .el-form {
        padding-left: 40px;
    }
}
</style>

