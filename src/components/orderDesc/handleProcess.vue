<template>
    <div class="process">
        <table id="process-table">
            <thead>
                <tr>
                    <th>活动</th>
                    <th>活动描述</th>
                    <th>处理组织</th>
                    <th>处理人员</th>
                    <th>处理时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orderStatus" >
                    <td>
                        <span class="cover-line bottom"></span>
                        <i class="iconfont icon-dotcircled circle"></i>
                        {{item.processName}}
                    </td>
                    <td>{{item.processDesc}}</td>
                    <td>【本部】</td>
                    <td>{{item.handleUser}}</td>
                    <td>{{item.handleTime | dateformat}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orderStatus: []
        }
    },
    created() {
        this.findOrderStatus()        
    },
    mounted() {
    },
    methods: {
        findOrderStatus() {
            let desc = JSON.parse(localStorage.getItem('ORDER_DESC'))
            let params = {processInstanceId: desc.processInstanceId,businessKey:desc.businessKey,taskId: desc.taskId}
            params = this.$qs.stringify(params)
            this.$http({
                url: 'omm/restActivitiController/findHisActivitiList',
                data: params
            }).then( res => {
                if( res.status == 200 ) {
                    console.log(123)
                    this.orderStatus = res.data.hiList
                }
            } ).then( ()=> {
                let table = document.getElementsByClassName('circle')
                let coverLine = document.getElementsByClassName('cover-line')
                console.log(table)
                table[0].style.color = '#d4237a'
                coverLine[0].className = 'cover-line top'
            } )
        }
    },
    computed: {
        orderDesc() {
            let desc = localStorage.getItem('ORDER_DESC')            
            return JSON.parse(desc)
        }
    },
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
.process {
    table {
        margin: 10px;
        width: 90%;
        thead > tr > th {
            font-size: 13px;
            padding-bottom: 8px;
        }
        tbody > tr {
            border-left: 1px solid #1296db;
        } 
        tbody > tr > td {
            text-align: center;
            padding: 10px 0;
            height: 40px;
            box-sizing: border-box;
            position: relative;
            .cover-line {
                position: absolute;
                width: 1px;
                height: 20px;
                top: auto;
                left: -1px;
                background-color: #fff;
            }
            .cover-line.top {
                top: 0px;
            }
            .cover-line.bottom {
                bottom: 0px;
            }
            .icon-dotcircled {
                position: absolute;
                top: 12px;
                left: -8px;
                background-color: #fff;
                color: #1296db;
            }
        }
    }
}
</style>

