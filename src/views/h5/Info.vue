<template>
    <div class="wrapper scrollBar">
        <div class="header"><i @click="backFun" class="el-icon-arrow-left"></i>商品流通追溯 <span></span></div>
        <div class="content">
            <img src="../../assets/images/h5/banner.png">
            <div class="title">
                <div class="title-text">商品信息</div>
            </div>
            <div class="block">
                <div class="block-item">
                    <label>追溯码编号</label>
                    <div class="input-view">{{query.traceCode || ''}}</div>
                </div>
                <div class="block-item">
                    <label>商品名称</label>
                    <div class="input-view">{{info.commodityName || ''}}</div>
                </div>
                <div class="block-item">
                    <label>商品批次号</label>
                    <div class="input-view">{{info.batchNumber || ''}}</div>
                </div>
                <div class="block-item">
                    <label>包装规格(cm)</label>
                    <div class="input-view">{{info.packageSpecifications == null ?'': info.packageSpecifications+'(L*W*H)'}}</div>
                </div>
                <div class="block-item">
                    <label>生产批次号</label>
                    <div class="input-view">{{info.productionBatchNumber}}</div>
                </div>
                <div class="block-item">
                    <label>生产日期</label>
                    <div class="input-view">{{getDate(info.manufactureDate)}}</div>
                </div>
                <div class="block-item">
                    <label>保质期(月)</label>
                    <div class="input-view">{{info.shelfLife!= null?info.shelfLife+'个月':''}}</div>
                </div>
            </div>

            <div class="title">
                <div class="title-text">检验检疫信息</div>
            </div>
            <div class="block">
                <div class="block-item">
                    <label>检验检疫证明证书编号</label>
                    <div class="input-view">{{info.certificateNo || ''}}</div>
                </div>
                <div class="block-item">
                    <label>产品名称</label>
                    <div class="input-view">{{info.productName || ''}}</div>
                </div>
                <div class="block-item">
                    <label>产品分类大类</label>
                    <div class="input-view">{{query.productType || ''}}</div>
                </div>
                <div class="block-item">
                    <label>生产批次号</label>
                    <div class="input-view">{{info.checkProductionBatchNumber || ''}}</div>
                </div>
                <div class="block-item">
                    <label>产品HS编码</label>
                    <div class="input-view">{{info.productHsNumber || ''}}</div>
                </div>
                <div class="block-item">
                    <label>包装种类</label>
                    <div class="input-view">{{info.typeQuantity || ''}}</div>
                </div>
                <div class="block-item">
                    <label>入境日期</label>
                    <div class="input-view">{{getDate(info.entryDate)}}</div>
                </div>
                <div class="block-item">
                    <label>输出国家或地区</label>
                    <div class="input-view">{{info.countryArea || ''}}</div>
                </div>
                <div class="block-item">
                    <label>入境口岸</label>
                    <div class="input-view">{{info.entryPort || ''}}</div>
                </div>
            </div>
            <div class="title">
                <div class="title-text">商品流通信息</div>
            </div>
            <div class="block node-info">
                <div class="block-top">
                    <span class="name">节点信息</span>
                    <span class="tip">（点击公司名称，可切换信息）</span>
                </div>
                <div class="block-main">
                    <div v-for="(item, index) in nodeList" :key="index" :class="{'active':currNode.id === item.id}" class="item">
                        <div v-if="index !== (nodeList.length - 1)" class="block-line"></div>
                        <div class="block-icon-wrap">
                            <i v-if="currNode.id === item.id" class="block-icon el-icon-check"></i>
                            <span v-else class="block-icon">{{index+1}}</span>
                        </div>
                        <span class="name" @click="selectFun(item)">{{item.ownerName}}</span>
                    </div>
                </div>
            </div>
            <div class="block node-info margin">
                <div class="block-top">
                    <span class="name">流通信息</span>
                </div>
                <div class="block-item">
                    <label>车牌号码</label>
                    <div class="input-view">{{currNode.distributionCarNumber || ''}}</div>
                </div>
                <div class="block-item">
                    <label>平均温度</label>
                    <div class="input-view">{{(currNode.distributionTemperature == null || currNode.distributionTemperature === '') ?'' :(currNode.distributionTemperature+'℃')}}</div>
                </div>
                <div class="block-item">
                    <label>入库时间</label>
                    <div class="input-view">{{currNode.warehouseTime}}</div>
                </div>
                <div class="block-item">
                    <label>仓库名称</label>
                    <div class="input-view">{{currNode.storageWarehouseName}}</div>
                </div>
                <div class="block-item">
                    <label>库存温度</label>
                    <div class="input-view">{{(currNode.storageTemperature == null || currNode.storageTemperature === '') ?'':currNode.storageTemperature+'℃'}}</div>
                </div>
                <div class="block-item">
                    <label>出库时间</label>
                    <div class="input-view">{{currNode.deliveryTime}}</div>
                </div>
                <div class="block-item">
                    <label>收货方名称</label>
                    <div class="input-view">{{currNode.receiveName || ''}}</div>
                </div>
            </div>
            <div class="block node-info margin">
                <div class="block-top">
                    <span class="name">检测证书</span>
                    <span class="tip">（点击证书名称，可查看详情）</span>
                </div>
                <div class="block-main">
                    <div v-for="(item,index) in currNode.files || []" :key="index" class="file-item" @click="downloadFun(item)">
                        {{item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue,Component} from 'vue-property-decorator';
    import {trace_web} from '@/api';
    import {ajaxDownload} from "@/util/apiUtil";
    import scan from './Scan.vue';
    import m from 'moment';
    @Component({
        name: 'Index',
        components: {
            scan
        }
    })
    export default class Index extends Vue{
        info:any = {};
        nodeList:any[] = [];
        currNode:any = {};
        activeName:any = [];
        query:any = {};

        created() {
            let query = this.$route.query || {};
            this.query.traceCode = query.traceCode;
            this.query.traceCode && this.searchFun();
        }

        getDate(date:any) {
            if(date ==  null || date === '') {
                return '-';
            }
            return m(date).format('YYYY年MM月DD日');
        }

        downloadFun(item:any) {
            ajaxDownload('/trace-web/file/download',{
                path:item.path,
                fileName: item.name
            })
        }

        backFun() {
            this.$emit('backEvent');
        }

        selectFun(item:any) {
            if(this.currNode.id != item.id) {
                this.currNode = item;
            }
        }

        searchFun() {
            trace_web.trace_web_traceCodeQuery_getByTraceCodeNotLogin_post({
                data: {
                    traceCode: this.query.traceCode
                }
            }).then((data:any)=>{
                let info = data.data || {};
                this.info = info;
                if(info.inflowType) {
                    this.info.inflowType = info.inflowType.disName;
                }
                if(info.inspectionExemption) {
                    this.info.inspectionExemption = info.inspectionExemption.disName;
                }
                if(info.origin) {
                    this.info.origin = info.origin.disName;
                }
                if(info.storageType) {
                    this.info.storageType = info.storageType.disName;
                }
                this.nodeList = this.info.codeCirculationVos || [];
                this.currNode = this.nodeList[0] || {};
            })

        }
    }
</script>

<style scoped lang="scss">
    .wrapper{
        height: 100%;
        position: relative;
        overflow-y: hidden;
        .header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 4.4rem;
            padding: 0 1.5rem;
            text-align: center;
            font-size: 1.6rem;
            color: #000000;
            position: fixed;
            top: 0;
            left: 0;
            background: #fff;
            z-index: 9;
        }
        .content{
            height: 100%;
            overflow-y: auto;
            padding-top: 4.4rem;
            background: #EDEDF0;
            .title{
                padding: 2rem 1rem 1rem 1rem;
                font-size: 1.3rem;
                color: #363A44;
            }
            .block{
                background: #FFFFFF;
                border-radius: .5rem;
                margin: 0 1rem;
                padding: 2rem 2rem;
                line-height: 3rem;
                font-size: 1.5rem;
                .block-item{
                    display: flex;
                    justify-content: space-between;
                }
                label{
                    color: #999999;
                    min-width: 10.5rem;
                }
                .input-view{
                    color: #333;
                }
                &.node-info{
                    padding-top: 0;
                    &.margin{
                        margin-top: 1.5rem;
                    }
                    .block-top{
                        height: 3rem;
                        line-height: 3rem;
                        border-radius: .5rem .5rem 0 0;
                        background-color: #0076F6;
                        margin-left: -2rem;
                        margin-right: -2rem;
                        padding-left: 1rem;
                        .name{
                            color: #fff;
                            font-size: 1.5rem;
                        }
                        .tip{
                            font-size: 1.2rem;
                            color: rgba(255,255,255,.5);
                        }
                    }
                    .block-main{
                        margin: 2rem .5rem 0 .5rem;
                        .item{
                            position: relative;
                            padding-bottom: 1.5rem;
                            &:last-child{
                                padding-bottom: 0;
                            }
                            &.active{
                                .block-icon{
                                    border-color: #0076F6;
                                    background-color: #0076F6;
                                }
                                .name{
                                    color: #0076F6;
                                }
                            }
                            .block-line{
                                position: absolute;
                                left: 4px;
                                height: 100%;
                                border-left: 2px solid #e4e7ed;
                            }
                            .block-icon-wrap{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                position: absolute;
                                left: -0.6rem;
                                width: 2.5rem;
                                height: 2.5rem;
                                border-radius: 50%;
                                background-color: #fff;
                            }
                            .block-icon{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 2rem;
                                height: 2rem;
                                border-radius: 50%;
                                color: #C4C7CC;
                                border: .3rem solid #C4C7CC;
                                background-color: #fff;
                            }
                            .name{
                                position: relative;
                                padding-left: 2.8rem;
                                top: -0.4rem;
                            }
                        }
                    }
                }
                .file-item{
                    color: #0076F6;
                    font-size: 1.5rem;
                    line-height: 3rem;
                }
            }
        }
    }
</style>